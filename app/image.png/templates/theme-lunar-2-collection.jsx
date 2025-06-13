export default function theme_2_collection({ params }) {
    const image = params.get('image');
    const bg_image = params.get('bg_image');

    return (
        <div tw="relative flex w-full h-full items-center justify-center">
             <div tw="absolute flex flex-col items-center justify-center" 
            style={{
                top: '12px',
                left: '12px',
                width: '475px',
                height: '475px',
                borderRadius: '70px',
                overflow: 'hidden',
            }}>
            <img src={image} alt="" 
             style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
            }}
            />
            </div>
            <div tw="absolute w-full h-full object-cover flex flex-col items-center justify-center">
                <img src={bg_image} tw="w-full h-full" />
            </div>
    </div>

    )
}