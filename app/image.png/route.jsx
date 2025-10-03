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
import LunarLogo from './templates/LunarLogo';
import MailcookAutomationMail from './templates/MailcookAutomationMail';
import Mockup_lunar1 from './templates/mockup-lunar1';
import Mockup_hoodie from './templates/mockup-hoodie';
import Mockup_tanktop_male from './templates/mockup-tanktop-male';
import Mockup_mousepad_s1 from './templates/mockup-mousepad-s1';
import Mockup_mousepad_s2 from './templates/mockup-mousepad-s2';
import Mockup_sweatshirt from './templates/mockup-sweatshirt';
import Mockup_poster from './templates/mockup-poster';
import Mockup_bag from './templates/mockup-bag';
import Mockup_cap from './templates/mockup-cap';
import Mockup_dress from './templates/mockup-dress';
import Mockup_mug from './templates/mockup-mug';
import Mockup_pillow_white from './templates/mockup-pillow-white';
import Mockup_hat from './templates/mockup-hat';
import Mockup_facemask from './templates/mockup-facemask';
import Mockup_notebook_black from './templates/mockup-notebook-black';
import Mockup_notebook_white from './templates/mockup-notebook-white';
import Mockup_phone_case from './templates/mockup-phone-case';
import Mockup_pillow_cover_black from './templates/mockup-pillow-cover-black';
import Mockup_pin from './templates/mockup-pin';
import Mockup_shirt_black from './templates/mockup-shirt-black';
import Mockup_shirt_white from './templates/mockup-shirt-white';
import Mockup_tanktop_female from './templates/mockup-tanktop-female';
import Mockup_tapestries from './templates/mockup-tapestries';
import Mockup_zipper_pouch_black from './templates/mockup-zipper-pouch-black';
import Mockup_zipper_pouch_white from './templates/mockup-zipper-pouch-white';
import Mockup_banner_lunar from './templates/mockup-banner-lunar';
import Mockup_mug_type_2 from './templates/mockup-mug-type-2';
import Mockup_hoodie_black from './templates/mockup-hoodie-black';
import Mockup_sweatshirt_black from './templates/mockup-sweatshirt-black';
import Mockup_shirt_type_2_black from './templates/mockup-shirt-type-2-black';
import Mockup_shirt_type_2_white from './templates/mockup-shirt-type-2-white';
import Mockup_demo_01 from './templates/mockup-demo1';
import Mockup_demo_02 from './templates/mockup-demo2';
import Mockup_demo_03 from './templates/mockup-demo3';
import Theme_2_collection from './templates/theme-lunar-2-collection';
import Theme_2_pillow from './templates/theme-lunar-2-pillow';
import Theme_2_bag from './templates/theme-lunar-2-bag';
import Theme_2_mug from './templates/theme-lunar-2-mug';
import Theme_2_hoodie from './templates/theme-lunar-2-hoodie';
import Theme_2_sweatshirt from './templates/theme-lunar-2-sweatshirt';
import ComboImage from './templates/genesis-portal/ComboImage';
export const runtime = 'edge';

async function loadGoogleFont (font, text) {
  const url = `https://fonts.googleapis.com/css2?family=${font}&text=${encodeURIComponent(text)}`
  const css = await (await fetch(url)).text()
  const resource = css.match(/src: url\((.+)\) format\('(opentype|truetype)'\)/)

  if (resource) {
    const response = await fetch(resource[1])
    if (response.status == 200) {
      return await response.arrayBuffer()
    }
  }

  throw new Error('failed to load font data')
}

export async function GET(request) {
  const { searchParams, host } = new URL(request.url);
  const template = searchParams.get('template');

  if (template === 'lunar-logo') {
    return new ImageResponse(<LunarLogo params={searchParams} />, {
      width: 500,
      height: 200,
      fonts: [
        {
          name: 'Outfit',
          data: await loadGoogleFont('Outfit', 'FANS MERCH'),
          weight: 500,
          style: 'normal',
        }
      ]
    });
  }

  if (template === 'lunar-collection') {
    return new ImageResponse(<LunarCollection params={searchParams} />, {
        width: 500,
        height: 500,
    });
  }

  if (template === 'demo') {
    return new ImageResponse(<Demo params={searchParams} />, { width: 800, height: 600 });
  }

  const fontBeVietnam = await fetch(
    new URL('../../assets/fonts/BeVietnamPro-Medium.woff', import.meta.url)
  ).then(res => res.arrayBuffer());

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

  if (template === 'mk-auto-mail') {
    return new ImageResponse(<MailcookAutomationMail params={searchParams} />, {
      width: 1748,
      height: 1240,
    });
  }

  if (template === 'mockup-lunar1') {
    return new ImageResponse(<Mockup_lunar1 params={searchParams} />, {
      width: 1000,
      height: 1000,
      fonts: [{
        name: "BeVietnamPro",
        data: fontBeVietnam,
        style: "normal",
      } ]
    });
  }

  if (template === 'mockup-hoodie') {
    return new ImageResponse(<Mockup_hoodie params={searchParams} />, {
      width: 1000,
      height: 1000,
      fonts: [{
        name: "BeVietnamPro",
        data: fontBeVietnam,
        style: "normal",
      } ]
    });
  }

  if (template === 'mockup-tanktop-male') {
    return new ImageResponse(<Mockup_tanktop_male params={searchParams} />, {
      width: 1000,
      height: 1000,
      fonts: [{
        name: "BeVietnamPro",
        data: fontBeVietnam,
        style: "normal",
      } ]
    });
  }

  if (template === 'mockup-mousepad-s1') {
    return new ImageResponse(<Mockup_mousepad_s1 params={searchParams} />, {
      width: 1000,
      height: 1000,
      fonts: [{
        name: "BeVietnamPro",
        data: fontBeVietnam,
        style: "normal",
      } ]
    });
  }

  if (template === 'mockup-sweatshirt') {
    return new ImageResponse(<Mockup_sweatshirt params={searchParams} />, {
      width: 1000,
      height: 1000,
      fonts: [{
        name: "BeVietnamPro",
        data: fontBeVietnam,
        style: "normal",
      } ]
    });
  }

  if (template === 'mockup-poster') {
    return new ImageResponse(<Mockup_poster params={searchParams} />, {
      width: 1000,
      height: 1000,
      fonts: [{
        name: "BeVietnamPro",
        data: fontBeVietnam,
        style: "normal",
      } ]
    });
  }

  if (template === 'mockup-bag') {
    return new ImageResponse(<Mockup_bag params={searchParams} />, {
      width: 1000,
      height: 1000,
      fonts: [{
        name: "BeVietnamPro",
        data: fontBeVietnam,
        style: "normal",
      } ]
    });
  }

  if (template === 'mockup-cap') {
    return new ImageResponse(<Mockup_cap params={searchParams} />, {
      width: 1000,
      height: 1000,
      fonts: [{
        name: "BeVietnamPro",
        data: fontBeVietnam,
        style: "normal",
      } ]
    });
  }

  if (template === 'mockup-dress') {
    return new ImageResponse(<Mockup_dress params={searchParams} />, {
      width: 1000,
      height: 1000,
      fonts: [{
        name: "BeVietnamPro",
        data: fontBeVietnam,
        style: "normal",
      } ]
    });
  }

  if (template === 'mockup-mug') {
    return new ImageResponse(<Mockup_mug params={searchParams} />, {
      width: 1000,
      height: 1000,
      fonts: [{
        name: "BeVietnamPro",
        data: fontBeVietnam,
        style: "normal",
      } ]
    });
  }

  if (template === 'mockup-pillow-white') {
    return new ImageResponse(<Mockup_pillow_white params={searchParams} />, {
      width: 1000,
      height: 1000,
      fonts: [{
        name: "BeVietnamPro",
        data: fontBeVietnam,
        style: "normal",
      } ]
    });
  }

  if (template === 'mockup-hat') {
    return new ImageResponse(<Mockup_hat params={searchParams} />, {
      width: 1000,
      height: 1000,
      fonts: [{
        name: "BeVietnamPro",
        data: fontBeVietnam,
        style: "normal",
      } ]
    });
  }

  if (template === 'mockup-facemask') {
    return new ImageResponse(<Mockup_facemask params={searchParams} />, {
      width: 1000,
      height: 1000,
      fonts: [{
        name: "BeVietnamPro",
        data: fontBeVietnam,
        style: "normal",
      } ]
    });
  }

  if (template === 'mockup-mousepad-s2') {
    return new ImageResponse(<Mockup_mousepad_s2 params={searchParams} />, {
      width: 1000,
      height: 1000,
      fonts: [{
        name: "BeVietnamPro",
        data: fontBeVietnam,
        style: "normal",
      } ]
    });
  }

  if (template === 'mockup-notebook-black') {
    return new ImageResponse(<Mockup_notebook_black params={searchParams} />, {
      width: 1000,
      height: 1000,
      fonts: [{
        name: "BeVietnamPro",
        data: fontBeVietnam,
        style: "normal",
      } ]
    });
  }

  if (template === 'mockup-notebook-white') {
    return new ImageResponse(<Mockup_notebook_white params={searchParams} />, {
      width: 1000,
      height: 1000,
      fonts: [{
        name: "BeVietnamPro",
        data: fontBeVietnam,
        style: "normal",
      } ]
    });
  }

  if (template === 'mockup-phone-case') {
    return new ImageResponse(<Mockup_phone_case params={searchParams} />, {
      width: 1000,
      height: 1000,
      fonts: [{
        name: "BeVietnamPro",
        data: fontBeVietnam,
        style: "normal",
      } ]
    });
  }

  if (template === 'mockup-pillow-cover-black') {
    return new ImageResponse(<Mockup_pillow_cover_black params={searchParams} />, {
      width: 1000,
      height: 1000,
      fonts: [{
        name: "BeVietnamPro",
        data: fontBeVietnam,
        style: "normal",
      } ]
    });
  }

  if (template === 'mockup-pin') {
    return new ImageResponse(<Mockup_pin params={searchParams} />, {
      width: 1000,
      height: 1000,
      fonts: [{
        name: "BeVietnamPro",
        data: fontBeVietnam,
        style: "normal",
      } ]
    });
  }

  if (template === 'mockup-shirt-black') {
    return new ImageResponse(<Mockup_shirt_black params={searchParams} />, {
      width: 1000,
      height: 1000,
      fonts: [{
        name: "BeVietnamPro",
        data: fontBeVietnam,
        style: "normal",
      } ]
    });
  }

  if (template === 'mockup-shirt-white') {
    return new ImageResponse(<Mockup_shirt_white params={searchParams} />, {
      width: 1000,
      height: 1000,
      fonts: [{
        name: "BeVietnamPro",
        data: fontBeVietnam,
        style: "normal",
      } ]
    });
  }

  if (template === 'mockup-tanktop-female') {
    return new ImageResponse(<Mockup_tanktop_female params={searchParams} />, {
      width: 1000,
      height: 1000,
      fonts: [{
        name: "BeVietnamPro",
        data: fontBeVietnam,
        style: "normal",
      } ]
    });
  }

  if (template === 'mockup-tapestries') {
    return new ImageResponse(<Mockup_tapestries params={searchParams} />, {
      width: 1000,
      height: 1000,
      fonts: [{
        name: "BeVietnamPro",
        data: fontBeVietnam,
        style: "normal",
      } ]
    });
  }

  if (template === 'mockup-zipper-pouch-black') {
    return new ImageResponse(<Mockup_zipper_pouch_black params={searchParams} />, {
      width: 1000,
      height: 1000,
      fonts: [{
        name: "BeVietnamPro",
        data: fontBeVietnam,
        style: "normal",
      } ]
    });
  }

  if (template === 'mockup-zipper-pouch-white') {
    return new ImageResponse(<Mockup_zipper_pouch_white params={searchParams} />, {
      width: 1000,
      height: 1000,
      fonts: [{
        name: "BeVietnamPro",
        data: fontBeVietnam,
        style: "normal",
      } ]
    });
  }

  if (template === 'mockup-banner-lunar') {
    return new ImageResponse(<Mockup_banner_lunar params={searchParams} />, {
      width: 1920,
      height: 730,
      fonts: [{
        name: "BeVietnamPro",
        data: fontBeVietnam,
        style: "normal",
      } ]
    });
  }

  if (template === 'mockup-mug-type-2') {
    return new ImageResponse(<Mockup_mug_type_2 params={searchParams} />, {
      width: 1000,
      height: 1000,
      fonts: [{
        name: "BeVietnamPro",
        data: fontBeVietnam,
        style: "normal",
      } ]
    });
  }

  if (template === 'mockup-hoodie-black') {
    return new ImageResponse(<Mockup_hoodie_black params={searchParams} />, {
      width: 1000,
      height: 1000,
      fonts: [{
        name: "BeVietnamPro",
        data: fontBeVietnam,
        style: "normal",
      } ]
    });
  }

  if (template === 'mockup-sweatshirt-black') {
    return new ImageResponse(<Mockup_sweatshirt_black params={searchParams} />, {
      width: 1000,
      height: 1000,
      fonts: [{
        name: "BeVietnamPro",
        data: fontBeVietnam,
        style: "normal",
      } ]
    });
  }

  if (template === 'mockup-shirt-type-2-black') {
    return new ImageResponse(<Mockup_shirt_type_2_black params={searchParams} />, {
      width: 1000,
      height: 1000,
      fonts: [{
        name: "BeVietnamPro",
        data: fontBeVietnam,
        style: "normal",
      } ]
    });
  }

  if (template === 'mockup-shirt-type-2-white') {
    return new ImageResponse(<Mockup_shirt_type_2_white params={searchParams} />, {
      width: 1000,
      height: 1000,
      fonts: [{
        name: "BeVietnamPro",
        data: fontBeVietnam,
        style: "normal",
      } ]
    });
  }

  if (template === 'mockup-demo1') {
    return new ImageResponse(<Mockup_demo_01 params={searchParams} />, {
      width: 1000,
      height: 1000,
      fonts: [{
        name: "BeVietnamPro",
        data: fontBeVietnam,
        style: "normal",
      } ]
    });
  }

  if (template === 'mockup-demo2') {
    return new ImageResponse(<Mockup_demo_02 params={searchParams} />, {
      width: 1000,
      height: 1000,
      fonts: [{
        name: "BeVietnamPro",
        data: fontBeVietnam,
        style: "normal",
      } ]
    });
  }

  if (template === 'mockup-demo3') {
    return new ImageResponse(<Mockup_demo_03 params={searchParams} />, {
      width: 1000,
      height: 1000,
      fonts: [{
        name: "BeVietnamPro",
        data: fontBeVietnam,
        style: "normal",
      } ]
    });
  }

  if (template === 'theme-lunar-2-collection') {
    return new ImageResponse(<Theme_2_collection params={searchParams} />, {
      width: 500,
      height: 500,
      fonts: [{
        name: "BeVietnamPro",
        data: fontBeVietnam,
        style: "normal",
      } ]
    });
  }

    if (template === 'theme-lunar-2-pillow') {
    return new ImageResponse(<Theme_2_pillow params={searchParams} />, {
      width: 1000,
      height: 1000,
      fonts: [{
        name: "BeVietnamPro",
        data: fontBeVietnam,
        style: "normal",
      } ]
    });
  }

    if (template === 'theme-lunar-2-bag') {
    return new ImageResponse(<Theme_2_bag params={searchParams} />, {
      width: 1000,
      height: 1000,
      fonts: [{
        name: "BeVietnamPro",
        data: fontBeVietnam,
        style: "normal",
      } ]
    });
  }
    if (template === 'theme-lunar-2-mug') {
    return new ImageResponse(<Theme_2_mug params={searchParams} />, {
      width: 1000,
      height: 1000,
      fonts: [{
        name: "BeVietnamPro",
        data: fontBeVietnam,
        style: "normal",
      } ]
    });
  }
  if (template === 'theme-lunar-2-hoodie') {
    return new ImageResponse(<Theme_2_hoodie params={searchParams} />, {
      width: 1000,
      height: 1000,
      fonts: [{
        name: "BeVietnamPro",
        data: fontBeVietnam,
        style: "normal",
      } ]
    });
  }
  if (template === 'theme-lunar-2-sweatshirt') {
    return new ImageResponse(<Theme_2_sweatshirt params={searchParams} />, {
      width: 1000,
      height: 1000,
      fonts: [{
        name: "BeVietnamPro",
        data: fontBeVietnam,
        style: "normal",
      } ]
    });
  }
  if (template === 'portal-combo-image') {
    return new ImageResponse(<ComboImage params={searchParams} />, {
      width: 1024,
      height: 1024,
      fonts: [{
        name: "BeVietnamPro",
        data: fontBeVietnam,
        style: "normal",
        weight: 800, // Set a higher weight here
      }]
    });
  }
  return new Response('Template not found', { status: 404 });
}
