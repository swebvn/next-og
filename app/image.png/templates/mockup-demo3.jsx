export default function mockup_demo_03({ params }) {
    const image_1 = params.get('image_1')
    const image_2 = params.get('image_2')
    const image_3 = params.get('image_3')
    const image_4 = params.get('image_4')
    const bg_image = params.get('bg_image')
    return (
        <div tw="relative flex w-full h-full items-center justify-center">
            <div tw="absolute w-full h-full object-cover flex flex-col items-center justify-center">
                <img src={bg_image} tw="w-full h-full" />
            </div>
            <div tw="absolute flex flex-col items-center justify-center" 
            style={{
                top: '108px',
                left: '39px',
                width: '368px', 
                height: '368px',
            }}> 
            <img src={image_1} alt="" 
             style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                position: 'absolute',
            }}
            />
            </div>
            <div tw="absolute flex flex-col items-center justify-center" 
            style={{
                top: '185px',
                left: '442px',
                width: '290px', 
                height: '290px',
            }}> 
            <img src={image_2} alt="" 
             style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',

                position: 'absolute',
            }}
            />
            </div>
            <div tw="absolute flex flex-col items-center justify-center" 
            style={{
                top: '287px',
                left: '767px',
                width: '190px', 
                height: '190px',
            }}> 
            <img src={image_3} alt="" 
             style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                position: 'absolute',
            }}
            /> 
            </div>
            <div tw="absolute flex flex-col items-center justify-center" 
            style={{
                top: '668px',
                left: '480px',
                width: '300px', 
                height: '320px',
                transform: 'skewY(5deg) skewY(-2deg) scaleY(0.3) rotate(-45deg)', 
                transformOrigin: 'top center',
            }}> 
            <img src={image_4} alt=""  
             style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                position: 'absolute',
                border: '20px solid #000',
            }} 
            />
            </div> 

            <div tw="absolute flex flex-col items-center justify-center" 
            style={{
                top: '660px',
                left: '480px',
                width: '300px', 
                height: '320px',
                transform: 'skewY(5deg) skewY(-2deg) scaleY(0.3) rotate(-45deg)', 
                transformOrigin: 'top center',
            }}> 
            <img src={image_4} alt=""  
             style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                position: 'absolute',
            }}
            />
            </div>

        </div>
    )
}
