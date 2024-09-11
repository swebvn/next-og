import { ImageResponse } from 'next/server';
import Demo from './templates/Demo';
import Tung from './templates/Tung';

export const runtime = 'edge';

export async function GET(request) {
  const { searchParams, host } = new URL(request.url);
  const template = searchParams.get('template');

  const fontBeVietnam = await fetch(
    new URL('../../assets/fonts/BeVietnamPro-Medium.woff', import.meta.url)
  ).then(res => res.arrayBuffer());

  let Component = null;

  if (template === 'demo') {
    return new ImageResponse(<Demo params={searchParams} />, { width: 800, height: 600 });
  }

  if (template === 'tung') {
    return new ImageResponse(<Tung params={searchParams} />, {
      width: 800,
      height: 600,
      fonts: [{
        name: "BeVietnamPro",
        data: fontBeVietnam,
        style: "normal",
      } ]
    });
  }

  return new Response('Template not found', { status: 404 });
}
