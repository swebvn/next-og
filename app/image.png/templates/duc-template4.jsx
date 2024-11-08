export default function duc_template4({ params }) {
    const image_goc4 = params.get('image_goc4')
    const bg_goc4 = params.get('bg_goc4')
    return (
        <div tw="relative flex w-full h-full items-center justify-center">
            <img src={bg_goc4} alt="" style={{
                position: 'absolute',
                top: '215px',
                left: '175px',
                width: '670px', 
                height: '670px',
            }} />
            <div tw="absolute w-full h-full object-cover flex flex-col items-center justify-center">
                <img src={image_goc4} tw="w-full h-full" />
            </div>

        </div>
    )
}
