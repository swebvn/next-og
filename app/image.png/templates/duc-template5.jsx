export default function duc_template5({ params }) {
    const image_goc5 = params.get('image_goc5')
    const bg_goc5 = params.get('bg_goc5')
    return (
        <div tw="relative flex w-full h-full items-center justify-center">
            <img src={bg_goc5} alt="" style={{
                position: 'absolute',
                top: '200px',
                left: '200px',
                width: '590px',
                height: '645px', 
                transform: 'skewX(10deg) skewY(-3deg) rotate(5deg)', 
            }} /> 
            <div tw="absolute w-full h-full object-cover flex flex-col items-center justify-center">
                <img src={image_goc5} tw="w-full h-full" />
            </div>

        </div>
    )
}
