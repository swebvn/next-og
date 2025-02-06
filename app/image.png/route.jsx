import { ImageResponse } from 'next/server';
import Demo from './templates/Demo';
import Tung from './templates/Tung';
import Charm from './templates/charm';
import Duc_template1 from './templates/duc-template1';
import Duc_template2 from './templates/duc-template2';
import Duc_template3 from './templates/duc-template3';
import Duc_template4 from './templates/duc-template4';
import Duc_template5 from './templates/duc-template5';
import Duc_template6 from './templates/duc-template6';
import Duc_template7 from './templates/duc-template7';
import InsurlinkMarketing from './templates/InsurlinkMarketing';
import LunarCollection from './templates/LunarCollection';

export const runtime = 'edge';

export async function GET(request) {
  const { searchParams, host } = new URL(request.url);
  const template = searchParams.get('template');

  const fontBeVietnam = await fetch(
    new URL('../../assets/fonts/BeVietnamPro-Medium.woff', import.meta.url)
  ).then(res => res.arrayBuffer());

  if (template === 'lunar-collection') {
    return new ImageResponse(<LunarCollection params={searchParams} />, {
        width: 300,
        height: 300,
    });
  }

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
    return new ImageResponse(<Duc_template1 params={searchParams} />, {
      width: 1000,
      height: 1000,
      fonts: [{
        name: "BeVietnamPro",
        data: fontBeVietnam,
        style: "normal",
      } ]
    });
  }

  if (template === 'duc-template2') {
    return new ImageResponse(<Duc_template2 params={searchParams} />, {
      width: 1000,
      height: 1000,
      fonts: [{
        name: "BeVietnamPro",
        data: fontBeVietnam,
        style: "normal",
      } ]
    });
  }

  if (template === 'duc-template3') {
    return new ImageResponse(<Duc_template3 params={searchParams} />, {
      width: 1000,
      height: 1000,
      fonts: [{
        name: "BeVietnamPro",
        data: fontBeVietnam,
        style: "normal",
      } ]
    });
  }
  if (template === 'duc-template4') {
    return new ImageResponse(<Duc_template4 params={searchParams} />, {
      width: 1000,
      height: 1000,
      fonts: [{
        name: "BeVietnamPro",
        data: fontBeVietnam,
        style: "normal",
      } ]
    });
  }
  if (template === 'duc-template5') {
    return new ImageResponse(<Duc_template5 params={searchParams} />, {
      width: 1000,
      height: 1000,
      fonts: [{
        name: "BeVietnamPro",
        data: fontBeVietnam,
        style: "normal",
      } ]
    });
  }
  if (template === 'duc-template6') {
    return new ImageResponse(<Duc_template6 params={searchParams} />, {
      width: 1000,
      height: 1000,
      fonts: [{
        name: "BeVietnamPro",
        data: fontBeVietnam,
        style: "normal",
      } ]
    });
  }
  if (template === 'duc-template7') {
    return new ImageResponse(<Duc_template7 params={searchParams} />, {
      width: 1000,
      height: 1000,
      fonts: [{
        name: "BeVietnamPro",
        data: fontBeVietnam,
        style: "normal",
      } ]
    });
  }

  if (template === 'il-mkt') {
    return new ImageResponse(<InsurlinkMarketing params={searchParams} />, {
      width: 500,
      height: 500,
    });
  }

  return new Response('Template not found', { status: 404 });
}
