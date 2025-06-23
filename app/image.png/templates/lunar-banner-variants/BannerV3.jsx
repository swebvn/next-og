export default function BannerV3({ image_1, image_2, image_3, image_4, text_1, text_2 }) {
    // Select a random image from the 4 images for background
    const images = [image_1, image_2, image_3, image_4];
    const randomBgImage = images[Math.floor(Math.random() * images.length)];

    return (
        <div style={{
            position: 'relative',
            display: 'flex',
            width: '100%',
            height: '100%',
            overflow: 'hidden',
        }}>
            <img
                style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    filter: 'blur(8px)',
                    objectFit: 'cover',
                    zIndex: -1,
                }}
                src={randomBgImage} alt="Background Image"
            />
            {/* Solid overlay for better content readability */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.4)',
                display: 'flex'
            }} />

            {/* Image slots with retro styling */}
            <div style={{
                position: 'absolute',
                display: 'flex',
                top: '60px',
                left: '40px',
                width: '420px',
                height: '300px',
                transform: 'rotate(-8deg)',
                border: '8px solid #fff',
                borderRadius: '12px',
                boxShadow: '0 8px 16px rgba(0,0,0,0.3)',
            }}>
                <img src={image_1} alt="" style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: '4px'
                }} />
            </div>

            <div style={{
                position: 'absolute',
                display: 'flex',
                top: '280px',
                left: '0px',
                width: '360px',
                height: '270px',
                transform: 'rotate(5deg)',
                border: '8px solid #fff',
                borderRadius: '12px',
                boxShadow: '0 8px 16px rgba(0,0,0,0.3)',
            }}>
                <img src={image_2} alt="" style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: '4px'
                }} />
            </div>

            <div style={{
                position: 'absolute',
                display: 'flex',
                top: '80px',
                right: '20px',
                width: '390px',
                height: '290px',
                transform: 'rotate(3deg)',
                border: '8px solid #fff',
                borderRadius: '12px',
                boxShadow: '0 8px 16px rgba(0,0,0,0.3)',
            }}>
                <img src={image_3} alt="" style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: '4px'
                }} />
            </div>

            <div style={{
                position: 'absolute',
                display: 'flex',
                top: '310px',
                right: '60px',
                width: '440px',
                height: '300px',
                transform: 'rotate(-4deg)',
                border: '8px solid #fff',
                borderRadius: '12px',
                boxShadow: '0 8px 16px rgba(0,0,0,0.3)',
            }}>
                <img src={image_4} alt="" style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: '4px'
                }} />
            </div>

            {/* CTA Button */}
            <div style={{
                position: 'absolute',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                top: '400px',
                left: '50%',
                transform: 'translateX(-50%)',
                backgroundColor: '#FF6B35',
                color: '#fff',
                padding: '16px 48px',
                borderRadius: '50px',
                fontSize: '24px',
                fontWeight: '700',
                fontFamily: 'BeVietnamPro',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                boxShadow: '0 6px 20px rgba(255,107,53,0.4)',
            }}>
                {text_2}
            </div>

            {/* Main Title */}
            <h1 style={{
                position: 'absolute',
                textAlign: 'center',
                fontFamily: 'BeVietnamPro',
                color: '#ffffff',
                top: '180px',
                left: '50%',
                fontSize: '84px',
                fontWeight: '800',
                transform: 'translateX(-50%)',
                textShadow: '3px 3px 8px rgba(0,0,0,0.8), 1px 1px 4px rgba(0,0,0,0.6)',
                maxWidth: '700px',
                lineHeight: '1.0',
                backgroundColor: 'rgba(0,0,0,0.3)',
                padding: '20px 40px',
                borderRadius: '15px',
            }}
            >{text_1}</h1>
        </div>
    );
}
