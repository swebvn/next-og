export default function duc_template1({ params }) {
    const image_goc1 = params.get('image_goc1')
    const bg_goc1 = params.get('bg_goc1')
    return (
        <div tw="relative flex w-full h-full items-center justify-center">
            <img src={bg_goc1} alt="" style={{
                position: 'absolute',
                top: '275px',
                left: '115px',
                width: '780px', 
                height: '400px', 
                transform: 'skewX(-38deg) skewY(12deg) rotate(0deg)', 
            }} />
            <div tw="absolute w-full h-full object-cover flex flex-col items-center justify-center">
                <img src={image_goc1} tw="w-full h-full" />
            </div>
        </div>
    )
}
