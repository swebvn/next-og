export default function mockup_demo_01({ params }) {
    const image_1 = params.get('image_1')
    const bg_image = params.get('bg_image')
    return (
        <div tw="relative flex w-full h-full items-center justify-center">
            <div tw="absolute w-full h-full object-cover flex flex-col items-center justify-center">
                <img src={bg_image} tw="w-full h-full" />
            </div>
            <div tw="absolute flex flex-col items-center justify-center" 
            style={{
                top: '182px',
                left: '345px',
                width: '335px', 
                height: '550px',
            }}> 
            <img src={image_1} alt="" 
             style={{
                width: '100%',
                objectFit: 'contain',
                top: '0px',
                left: '0px',
                position: 'absolute',
            }}
            />
            </div>
        </div>
    )
}
