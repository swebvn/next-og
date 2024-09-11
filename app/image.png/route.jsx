import { ImageResponse } from 'next/server';
import Demo from './templates/Demo';

export const runtime = 'edge';

export async function GET(request) {
  const { searchParams, host } = new URL(request.url);
  const template = searchParams.get('template');

  let Component = null;

  if (template === 'demo') {
    return new ImageResponse(<Demo params={searchParams} host={host} />, { width: 800, height: 600 });
  }

  return new Response('Template not found', { status: 404 });
}
