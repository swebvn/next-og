export default function mockup_zipper_pouch_black({ params }) {
    const bg_image = params.get('bg_image')
    const image_1 = params.get('image_1')
    return (
        <div tw="relative flex w-full h-full items-center justify-center">
            <div tw="absolute w-full h-full object-cover flex flex-col items-center justify-center">
                <img src={bg_image} tw="w-full h-full" />
            </div>
            <div tw="absolute flex flex-col items-center justify-center" 
            style={{
                top: '50%',
                left: '50%',
                width: '450px',
                height: '350px',
                transform: 'translateX(-50%) translateY(-53%)',
             
            }}>
            <img src={image_1} alt="" 
             style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
            }}
            />
            </div>
    </div>
    )
}
