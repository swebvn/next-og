export default function BannerV2({ image_1, image_2, image_3, image_4, text_1, text_2, bg_image }) {
    return (
        <div tw="relative flex w-full h-full">
            <img src={image_1} alt=""
                style={{
                    width: '400px',
                    height: '400px',
                    top: '20px',
                    left: '15px',
                    position: 'absolute',
                    transform: 'rotate(-5deg)',
                }}
            />

            <img src={image_2} alt=""
                style={{
                    width: '305px',
                    height: '305px',
                    top: '402px',
                    left: '100px',
                    position: 'absolute',
                    transform: 'rotate(3deg)',
                }}
            />

            <img src={image_3} alt=""
                style={{
                    width: '400px',
                    height: '400px',
                    top: '390px',
                    left: '445px',
                    position: 'absolute',
                    transform: 'rotate(-5deg)',
                }}
            />

            <img src={image_4} alt=""
                style={{
                    width: '430px',
                    height: '435px',
                    top: '-15px',
                    left: '430px',
                    position: 'absolute',
                    transform: 'rotate(3deg)',
                }}
            />
            <div tw="absolute w-full h-full object-cover flex flex-col items-center  justify-center">
                <img src={bg_image} tw="w-full h-full" />
            </div>
            <h1 tw="text-center absolute"
                style={{
                    fontFamily: 'BeVietnamPro',
                    color: '#fdefd2',
                    top: '220px',
                    left: '75%',
                    fontSize: '60px',
                    fontWeight: '700',
                    transform: 'translateX(-50%) translateY(-50%)',
                    maxWidth: '820px',
                }}
            >{text_1}</h1>
            <h3 tw="text-center absolute justify-center font-normal"
                style={{
                    fontFamily: 'BeVietnamPro',
                    color: '#fdefd2',
                    top: '100px',
                    left: '75%',
                    fontSize: '30px',
                    transform: 'translateX(-50%) translateY(-50%)',
                    backgroundColor: '#4c3408',
                    padding: '10px 20px',
                    borderRadius: '10px',
                }}>{text_2}</h3>
        </div>
    );
}
