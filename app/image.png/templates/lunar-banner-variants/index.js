import BannerV1 from './BannerV1.jsx';
import BannerV2 from './BannerV2.jsx';
import BannerV3 from './BannerV3.jsx';

export {
    BannerV1,
    BannerV2,
    BannerV3
};

export const BANNER_VARIANTS = {
    v1: BannerV1,
    v2: BannerV2,
    v3: BannerV3
};

export const VARIANTS_CONFIG = {
    v1: {
        bg_image: 'https://tda-dev-asset.b-cdn.net/lunar/banner-v1.png',
    },
    v2: {
        bg_image: 'https://tda-dev-asset.b-cdn.net/lunar/banner-v2.png',
    },
    v3: {
        // Custom CSS background - no external image needed
    },
};
