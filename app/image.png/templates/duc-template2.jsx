export default function duc_template1({ params }) {
    const image_goc2 = params.get('image_goc2')
    const bg_goc2 = params.get('bg_goc2')
    return (
        <div tw="relative flex w-full h-full items-center justify-center">
            <img src={bg_goc2} alt="" style={{
                position: 'absolute',
                top: '275px',
                left: '142px',
                width: '730px',
                height: '465px', 
                transform: 'skewX(0deg) skewY(5deg) rotate(-11deg)', 
            }} />
            <div tw="absolute w-full h-full object-cover flex flex-col items-center justify-center">
                <img src={image_goc2} tw="w-full h-full" />
            </div> 
        </div>
    )
}
