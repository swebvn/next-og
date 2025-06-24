import { BANNER_VARIANTS, VARIANTS_CONFIG } from './lunar-banner-variants/index.js';

export default function mockup_banner_lunar({ params }) {
    const image_1 = params.get('image_1') || 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop'
    const image_2 = params.get('image_2') || 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500&h=500&fit=crop'
    const image_3 = params.get('image_3') || 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=500&h=500&fit=crop'
    const image_4 = params.get('image_4') || 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&h=500&fit=crop'
    const text_1 = params.get('text_1') || 'The Lunar'
    const text_2 = params.get('text_2') || 'Shop the latest merchandise products';

    const variants = Object.keys(BANNER_VARIANTS)
        .filter(v => ['v2', 'v3'].includes(v))
        ;
    const variant = params.get('variant') || variants[Math.floor(Math.random() * variants.length)];

    const VariantComponent = BANNER_VARIANTS[variant];
    const bg_image = VARIANTS_CONFIG[variant]?.bg_image;

    if (!VariantComponent) {
        return <div tw="flex items-center justify-center w-full h-full">Invalid variant</div>;
    }

    return (
        <VariantComponent
            image_1={image_1}
            image_2={image_2}
            image_3={image_3}
            image_4={image_4}
            text_1={text_1}
            text_2={text_2}
            bg_image={bg_image}
        />
    );
}
