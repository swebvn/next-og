export default function BannerV1({ image_1, image_2, image_3, image_4, text_1, text_2, bg_image }) {
    return (
        <div tw="relative flex w-full h-full">
            <img src={image_1} alt=""
                style={{
                    width: '444px',
                    height: '444px',
                    borderRadius: '50%',
                    top: '127px',
                    left: '-44px',
                    position: 'absolute',
                }}
            />

            <img src={image_2} alt=""
                style={{
                    width: '473px',
                    height: '473px',
                    borderRadius: '50%',
                    top: '108px',
                    right: '-75px',
                    position: 'absolute',
                }}
            />

            <img src={image_3} alt=""
                style={{
                    width: '407px',
                    height: '407px',
                    borderRadius: '50%',
                    top: '383px',
                    left: '290px',
                    position: 'absolute',
                }}
            />

            <img src={image_4} alt=""
                style={{
                    width: '420px',
                    height: '420px',
                    borderRadius: '50%',
                    top: '395px',
                    right: '282px',
                    position: 'absolute',
                }}
            />
            <div tw="absolute w-full h-full object-cover flex flex-col items-center  justify-center">
                <img src={bg_image} tw="w-full h-full" />
            </div>
            <h1 tw="text-center absolute"
                style={{
                    fontFamily: 'BeVietnamPro',
                    color: '#fff',
                    top: '80px',
                    left: '50%',
                    fontSize: '60px',
                    fontWeight: '700',
                    transform: 'translateX(-50%) translateY(-50%)',
                }}
            >{text_1}</h1>
            <h3 tw="text-center absolute justify-center font-normal"
                style={{
                    fontFamily: 'BeVietnamPro',
                    color: '#fff',
                    top: '50%',
                    left: '50%',
                    fontSize: '30px',
                    transform: 'translateX(-50%) translateY(-50%)',
                }}>{text_2}</h3>
        </div>
    );
}
