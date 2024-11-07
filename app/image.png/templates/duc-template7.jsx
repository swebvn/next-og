export default function duc_template7({ params }) {
    const image_goc7 = params.get('image_goc7')
    const bg_goc7 = params.get('bg_goc7')
    return (
        <div tw="relative flex w-full h-full items-center justify-center">
            <img src={bg_goc7} alt="" style={{
                position: 'absolute',
                top: '185px',
                left: '448px',
                width: '190px',
                height: '685px', 
                transform: 'skewY(0deg) skewX(-8deg) rotate(-4deg)', 
            }} /> 
            <div tw="absolute w-full h-full object-cover flex flex-col items-center justify-center">
                <img src={image_goc7} tw="w-full h-full" />
            </div>

        </div>
    )
}
