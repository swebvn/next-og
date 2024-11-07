export default function duc_template6({ params }) {
    const image_goc6 = params.get('image_goc6')
    const bg_goc6 = params.get('bg_goc6')
    return (
        <div tw="relative flex w-full h-full items-center justify-center">
            <img src={bg_goc6} alt="" style={{
                position: 'absolute',
                top: '230px',
                left: '250px',
                width: '535px', 
                height: '630px', 
                transform: 'skewX(-4deg) skewY(0deg) rotate(3deg)', 
            }} />
            <div tw="absolute w-full h-full object-cover flex flex-col items-center justify-center">
                <img src={image_goc6} tw="w-full h-full" />
            </div>

        </div>
    )
}
