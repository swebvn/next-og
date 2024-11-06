import { ImageResponse } from 'next/server';
import Demo from './templates/Demo';
import Tung from './templates/Tung';
import Charm from './templates/charm';
import duc_template1 from './templates/duc-template1';
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
      width: 1500,
      height: 1500,
      fonts: [{
        name: "BeVietnamPro",
        data: fontBeVietnam,
        style: "normal",
      } ]
    });
  }

  if (template === 'charm') {
    return new ImageResponse(<Charm params={searchParams} />, {
      width: 1500,
      height: 1500,
      fonts: [{
        name: "BeVietnamPro",
        data: fontBeVietnam,
        style: "normal",
      } ]
    });
  }

  if (template === 'duc-template1') {
    return new ImageResponse(<duc_template1 params={searchParams} />, {
      width: 1000, 
      height: 1000,
      fonts: [{
        name: "BeVietnamPro",
        data: fontBeVietnam,
        style: "normal",
      } ]
    });
  }

  return new Response('Template not found', { status: 404 });
}
