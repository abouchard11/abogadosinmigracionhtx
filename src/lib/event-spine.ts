/**
 * EVENT SPINE CLIENT — Drop-in Module for Satellite Sites
 * 
 * Usage in any site's API route:
 *   import { emitEvent } from '@/lib/event-spine'
 *   await emitEvent({ type: 'lead.new', domain: 'htximmigrationlaw.com', data: { name, phone, email } })
 * 
 * Non-blocking by default — fires and forgets so lead capture isn't slowed down.
 * Set { blocking: true } to await the response.
 */

interface EventPayload {
  type: 'lead.new' | 'lead.updated' | 'seo.published' | 'task.completed' | 'alert.triggered'
  domain: string
  node_id?: string
  data: Record<string, unknown>
  idempotency_key?: string
}

interface EmitOptions {
  blocking?: boolean
  retries?: number
}

const MAESTRO_API_URL = process.env.MAESTRO_EVENT_URL || 'https://diggs-money-os.vercel.app/api/event'
const MAESTRO_API_KEY = process.env.MAESTRO_API_KEY || ''

export async function emitEvent(
  payload: EventPayload,
  options: EmitOptions = {}
): Promise<{ success: boolean; event_id?: string; error?: string }> {
  const { blocking = false, retries = 1 } = options

  const doEmit = async (attempt: number): Promise<{ success: boolean; event_id?: string; error?: string }> => {
    try {
      const res = await fetch(MAESTRO_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-maestro-key': MAESTRO_API_KEY,
        },
        body: JSON.stringify({
          ...payload,
          timestamp: new Date().toISOString(),
        }),
      })

      if (!res.ok && attempt < retries) {
        console.warn(`[Event Spine] Retry ${attempt + 1}/${retries} for ${payload.type}`)
        return doEmit(attempt + 1)
      }

      const data = await res.json()
      return data
    } catch (err) {
      if (attempt < retries) {
        console.warn(`[Event Spine] Retry ${attempt + 1}/${retries} after error`)
        return doEmit(attempt + 1)
      }
      console.error('[Event Spine] Failed to emit event:', err)
      return { success: false, error: err instanceof Error ? err.message : 'Unknown error' }
    }
  }

  if (blocking) {
    return doEmit(0)
  }

  doEmit(0).catch(err => {
    console.error('[Event Spine] Background emit failed:', err)
  })

  return { success: true }
}
