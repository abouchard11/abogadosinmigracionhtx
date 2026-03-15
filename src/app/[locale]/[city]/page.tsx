import { houstonSubMarkets } from '@/data/markets';
import HTXImmigrationMobileFirst from '@/app/page';

export async function generateStaticParams() {
  const params: { locale: string; city: string }[] = [];
  houstonSubMarkets.forEach(market => {
    params.push({ locale: 'en', city: market.id });
    params.push({ locale: 'es', city: market.id });
  });
  return params;
}

export default function GeoPage({ params }: { params: { locale: string; city: string } }) {
  // This renders the core high-conversion page but passes GEO context
  return <HTXImmigrationMobileFirst locale={params.locale} city={params.city} />;
}
