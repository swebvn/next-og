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
import ComboImage2 from './templates/genesis-portal/ComboImage2';
import ComboImage3 from './templates/genesis-portal/ComboImage3';
import ComboImage4 from './templates/genesis-portal/ComboImage4';
import ProductLogo from './templates/product-logo';
import LunarFeaturedProduct from './templates/lunar-featured-product';
import LunarCollectionV3 from './templates/LunarCollectionV3';
import LunarCollectionV4 from './templates/LunarCollectionV4';

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

// Template configuration mapping
const TEMPLATE_CONFIG = {
  'lunar-logo': {
    component: LunarLogo,
    width: 500,
    height: 200,
    fontType: 'outfit',
  },
  'lunar-collection': {
    component: LunarCollection,
    width: 500,
    height: 500,
  },
  'demo': {
    component: Demo,
    width: 800,
    height: 600,
  },
  'tung': {
    component: Tung,
    width: 1500,
    height: 1500,
    fontType: 'beVietnam',
  },
  'charm': {
    component: Charm,
    width: 1500,
    height: 1500,
    fontType: 'beVietnam',
  },
  'duc-template1': {
    component: Duc_template1,
    width: 1000,
    height: 1000,
    fontType: 'beVietnam',
  },
  'duc-template2': {
    component: Duc_template2,
    width: 1000,
    height: 1000,
    fontType: 'beVietnam',
  },
  'duc-template3': {
    component: Duc_template3,
    width: 1000,
    height: 1000,
    fontType: 'beVietnam',
  },
  'duc-template4': {
    component: Duc_template4,
    width: 1000,
    height: 1000,
    fontType: 'beVietnam',
  },
  'duc-template5': {
    component: Duc_template5,
    width: 1000,
    height: 1000,
    fontType: 'beVietnam',
  },
  'duc-template6': {
    component: Duc_template6,
    width: 1000,
    height: 1000,
    fontType: 'beVietnam',
  },
  'duc-template7': {
    component: Duc_template7,
    width: 1000,
    height: 1000,
    fontType: 'beVietnam',
  },
  'il-mkt': {
    component: InsurlinkMarketing,
    width: 500,
    height: 500,
  },
  'mk-auto-mail': {
    component: MailcookAutomationMail,
    width: 1748,
    height: 1240,
  },
  'mockup-lunar1': {
    component: Mockup_lunar1,
    width: 1000,
    height: 1000,
    fontType: 'beVietnam',
  },
  'mockup-hoodie': {
    component: Mockup_hoodie,
    width: 1000,
    height: 1000,
    fontType: 'beVietnam',
  },
  'mockup-tanktop-male': {
    component: Mockup_tanktop_male,
    width: 1000,
    height: 1000,
    fontType: 'beVietnam',
  },
  'mockup-mousepad-s1': {
    component: Mockup_mousepad_s1,
    width: 1000,
    height: 1000,
    fontType: 'beVietnam',
  },
  'mockup-sweatshirt': {
    component: Mockup_sweatshirt,
    width: 1000,
    height: 1000,
    fontType: 'beVietnam',
  },
  'mockup-poster': {
    component: Mockup_poster,
    width: 1000,
    height: 1000,
    fontType: 'beVietnam',
  },
  'mockup-bag': {
    component: Mockup_bag,
    width: 1000,
    height: 1000,
    fontType: 'beVietnam',
  },
  'mockup-cap': {
    component: Mockup_cap,
    width: 1000,
    height: 1000,
    fontType: 'beVietnam',
  },
  'mockup-dress': {
    component: Mockup_dress,
    width: 1000,
    height: 1000,
    fontType: 'beVietnam',
  },
  'mockup-mug': {
    component: Mockup_mug,
    width: 1000,
    height: 1000,
    fontType: 'beVietnam',
  },
  'mockup-pillow-white': {
    component: Mockup_pillow_white,
    width: 1000,
    height: 1000,
    fontType: 'beVietnam',
  },
  'mockup-hat': {
    component: Mockup_hat,
    width: 1000,
    height: 1000,
    fontType: 'beVietnam',
  },
  'mockup-facemask': {
    component: Mockup_facemask,
    width: 1000,
    height: 1000,
    fontType: 'beVietnam',
  },
  'mockup-mousepad-s2': {
    component: Mockup_mousepad_s2,
    width: 1000,
    height: 1000,
    fontType: 'beVietnam',
  },
  'mockup-notebook-black': {
    component: Mockup_notebook_black,
    width: 1000,
    height: 1000,
    fontType: 'beVietnam',
  },
  'mockup-notebook-white': {
    component: Mockup_notebook_white,
    width: 1000,
    height: 1000,
    fontType: 'beVietnam',
  },
  'mockup-phone-case': {
    component: Mockup_phone_case,
    width: 1000,
    height: 1000,
    fontType: 'beVietnam',
  },
  'mockup-pillow-cover-black': {
    component: Mockup_pillow_cover_black,
    width: 1000,
    height: 1000,
    fontType: 'beVietnam',
  },
  'mockup-pin': {
    component: Mockup_pin,
    width: 1000,
    height: 1000,
    fontType: 'beVietnam',
  },
  'mockup-shirt-black': {
    component: Mockup_shirt_black,
    width: 1000,
    height: 1000,
    fontType: 'beVietnam',
  },
  'mockup-shirt-white': {
    component: Mockup_shirt_white,
    width: 1000,
    height: 1000,
    fontType: 'beVietnam',
  },
  'mockup-tanktop-female': {
    component: Mockup_tanktop_female,
    width: 1000,
    height: 1000,
    fontType: 'beVietnam',
  },
  'mockup-tapestries': {
    component: Mockup_tapestries,
    width: 1000,
    height: 1000,
    fontType: 'beVietnam',
  },
  'mockup-zipper-pouch-black': {
    component: Mockup_zipper_pouch_black,
    width: 1000,
    height: 1000,
    fontType: 'beVietnam',
  },
  'mockup-zipper-pouch-white': {
    component: Mockup_zipper_pouch_white,
    width: 1000,
    height: 1000,
    fontType: 'beVietnam',
  },
  'mockup-banner-lunar': {
    component: Mockup_banner_lunar,
    width: 1920,
    height: 730,
    fontType: 'beVietnam',
  },
  'mockup-mug-type-2': {
    component: Mockup_mug_type_2,
    width: 1000,
    height: 1000,
    fontType: 'beVietnam',
  },
  'mockup-hoodie-black': {
    component: Mockup_hoodie_black,
    width: 1000,
    height: 1000,
    fontType: 'beVietnam',
  },
  'mockup-sweatshirt-black': {
    component: Mockup_sweatshirt_black,
    width: 1000,
    height: 1000,
    fontType: 'beVietnam',
  },
  'mockup-shirt-type-2-black': {
    component: Mockup_shirt_type_2_black,
    width: 1000,
    height: 1000,
    fontType: 'beVietnam',
  },
  'mockup-shirt-type-2-white': {
    component: Mockup_shirt_type_2_white,
    width: 1000,
    height: 1000,
    fontType: 'beVietnam',
  },
  'mockup-demo1': {
    component: Mockup_demo_01,
    width: 1000,
    height: 1000,
    fontType: 'beVietnam',
  },
  'mockup-demo2': {
    component: Mockup_demo_02,
    width: 1000,
    height: 1000,
    fontType: 'beVietnam',
  },
  'mockup-demo3': {
    component: Mockup_demo_03,
    width: 1000,
    height: 1000,
    fontType: 'beVietnam',
  },
  'theme-lunar-2-collection': {
    component: Theme_2_collection,
    width: 500,
    height: 500,
    fontType: 'beVietnam',
  },
  'theme-lunar-2-pillow': {
    component: Theme_2_pillow,
    width: 1000,
    height: 1000,
    fontType: 'beVietnam',
  },
  'theme-lunar-2-bag': {
    component: Theme_2_bag,
    width: 1000,
    height: 1000,
    fontType: 'beVietnam',
  },
  'theme-lunar-2-mug': {
    component: Theme_2_mug,
    width: 1000,
    height: 1000,
    fontType: 'beVietnam',
  },
  'theme-lunar-2-hoodie': {
    component: Theme_2_hoodie,
    width: 1000,
    height: 1000,
    fontType: 'beVietnam',
  },
  'theme-lunar-2-sweatshirt': {
    component: Theme_2_sweatshirt,
    width: 1000,
    height: 1000,
    fontType: 'beVietnam',
  },
  'portal-combo-image': {
    component: ComboImage,
    width: 1024,
    height: 1024,
    fontType: 'beVietnam',
    fontWeight: 800,
    fontStyle: 'bold',
  },
  'portal-combo-image-2': {
    component: ComboImage2,
    width: 1024,
    height: 1024,
    fontType: 'lobster',
  },
  'portal-combo-image-3': {
    component: ComboImage3,
    width: 1024,
    height: 1024,
    fontType: 'pacifico',
  },
  'portal-combo-image-4': {
    component: ComboImage4,
    width: 1024,
    height: 1024,
    fontType: 'robotoSlab',
  },
  'product-logo': {
    component: ProductLogo,
  },
  'lunar-featured-product' : {
    component: LunarFeaturedProduct,
    width: 1024,
    height: 1024,
    fontType: 'beVietnam',
  },
  'lunar-collection-v3': {
    component: LunarCollectionV3,
    width: 1080,
    height: 1080,
    fontType: 'beVietnam',
  },
  'lunar-collection-v4': {
    component: LunarCollectionV4,
    width: 1080,
    height: 1080,
    fontType: 'beVietnam',
  },
};

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const template = searchParams.get('template');

  // Load fonts
  const fontBeVietnam = await fetch(
    new URL('../../assets/fonts/BeVietnamPro-Medium.woff', import.meta.url)
  ).then(res => res.arrayBuffer());

  const [, fontPacifico, fontRobotoSlab, fontLobster] = await Promise.all([
    fetch(new URL('../../assets/fonts/GreatVibes-Regular.woff', import.meta.url)).then(res => res.arrayBuffer()),
    fetch(new URL('../../assets/fonts/Pacifico-Regular.woff', import.meta.url)).then(res => res.arrayBuffer()),
    fetch(new URL('../../assets/fonts/RobotoSlab-Regular.woff', import.meta.url)).then(res => res.arrayBuffer()),
    fetch(new URL('../../assets/fonts/Lobster-Regular.woff', import.meta.url)).then(res => res.arrayBuffer())
  ]);

  // Font mapping
  const fontMap = {
    'outfit': await loadGoogleFont('Outfit', 'FANS MERCH'),
    'beVietnam': fontBeVietnam,
    'pacifico': fontPacifico,
    'robotoSlab': fontRobotoSlab,
    'lobster': fontLobster,
  };

  // Helper function to build font array
  const buildFonts = (fontType, fontWeight = 400, fontStyle = 'normal') => {
    if (!fontType) return undefined;

    if (fontType === 'outfit') {
      return [{
        name: 'Outfit',
        data: fontMap.outfit,
        weight: fontWeight,
        style: fontStyle,
      }];
    }

    return [{
      name: fontType === 'beVietnam' ? 'BeVietnamPro' : 'font',
      data: fontMap[fontType],
      weight: fontWeight,
      style: fontStyle,
    }];
  };

  // Helper function to render template
  const renderTemplate = (Component, config, fonts) => {
    return new ImageResponse(<Component params={searchParams} />, {
      width: config.width || 1000,
      height: config.height || 1000,
      ...(fonts && { fonts }),
    });
  };

  // Switch case for template routing
  if (template in TEMPLATE_CONFIG) {
    const config = TEMPLATE_CONFIG[template];
    const fonts = buildFonts(config.fontType, config.fontWeight, config.fontStyle);
    return renderTemplate(config.component, config, fonts);
  }

  return new Response('Template not found', { status: 404 });
}
