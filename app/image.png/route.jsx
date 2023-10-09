import { ImageResponse } from 'next/server';
import Mocpart from './brickscompare/Mocpart';

export const runtime = 'edge';

export async function GET(request) {
  const { searchParams, host } = new URL(request.url);
  const template = searchParams.get('template');

  let Component = null;

  if (template === 'brickscompare:moc-part') {
    Component = Mocpart
  } else {
    // 404
    return new Response('Template not found', { status: 404 });
  }

  return new ImageResponse(
    <Component params={searchParams} host={host} />,
    {
      width: 800,
      height: 800,
    },
  );
}