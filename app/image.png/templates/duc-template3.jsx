export default function duc_template3({ params }) {
    const image_goc3 = params.get('image_goc3')
    const bg_goc3 = params.get('bg_goc3')
    return (
        <div tw="relative flex w-full h-full items-center justify-center">
            <img src={bg_goc3} alt="" style={{
                position: 'absolute',
                top: '200',
                left: '150px',
                width: '730px',
                height: '560px', 
                transform: 'skewX(0deg) skewY(10deg) rotate(-16deg)',
            }} />
            <div tw="absolute w-full h-full object-cover flex flex-col items-center justify-center">
                <img src={image_goc3} tw="w-full h-full" />
            </div>

        </div>
    )
}
