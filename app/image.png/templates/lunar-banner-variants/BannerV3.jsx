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
            {/* Background Image with stronger blur */}
            <img
                style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    filter: 'blur(4px)',
                    objectFit: 'cover',
                    zIndex: -1,
                }}
                src={randomBgImage} alt="Background Image"
            />

            {/* Stronger overlay for better contrast */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                display: 'flex'
            }} />

            {/* Sparkling Effects */}
            <div style={{
                position: 'absolute',
                top: '80px',
                left: '150px',
                fontSize: '24px',
                color: '#FFD700',
                textShadow: '0 0 10px #FFD700',
                zIndex: 5,
                display: 'flex',
            }}>✨</div>

            <div style={{
                position: 'absolute',
                top: '200px',
                left: '600px',
                fontSize: '18px',
                color: '#FFF',
                textShadow: '0 0 8px #FFF',
                zIndex: 5,
                display: 'flex',
            }}>⭐</div>

            <div style={{
                position: 'absolute',
                top: '350px',
                left: '200px',
                fontSize: '20px',
                color: '#FFD700',
                textShadow: '0 0 12px #FFD700',
                zIndex: 5,
                display: 'flex',
            }}>✨</div>

            <div style={{
                position: 'absolute',
                top: '150px',
                right: '200px',
                fontSize: '22px',
                color: '#FFF',
                textShadow: '0 0 10px #FFF',
                zIndex: 5,
                display: 'flex',
            }}>⭐</div>

            <div style={{
                position: 'absolute',
                top: '400px',
                right: '300px',
                fontSize: '16px',
                color: '#FFD700',
                textShadow: '0 0 8px #FFD700',
                zIndex: 5,
                display: 'flex',
            }}>✨</div>

            <div style={{
                position: 'absolute',
                top: '500px',
                left: '400px',
                fontSize: '20px',
                color: '#FFF',
                textShadow: '0 0 10px #FFF',
                zIndex: 5,
                display: 'flex',
            }}>⭐</div>

            <div style={{
                position: 'absolute',
                top: '100px',
                right: '400px',
                fontSize: '18px',
                color: '#FFD700',
                textShadow: '0 0 12px #FFD700',
                zIndex: 5,
                display: 'flex',
            }}>✨</div>

            <div style={{
                position: 'absolute',
                top: '600px',
                right: '150px',
                fontSize: '24px',
                color: '#FFF',
                textShadow: '0 0 15px #FFF',
                zIndex: 5,
                display: 'flex',
            }}>⭐</div>

            {/* Hero Text Section - Left Side */}
            <div style={{
                position: 'absolute',
                top: '120px',
                left: '80px',
                width: '500px',
                zIndex: 10,
                display: 'flex',
                flexDirection: 'column',
            }}>
                {/* Main Title */}
                <h1 style={{
                    fontFamily: 'BeVietnamPro',
                    color: '#ffffff',
                    fontSize: '72px',
                    fontWeight: '900',
                    textShadow: '4px 4px 12px rgba(0,0,0,0.8), 0 0 20px rgba(255,215,0,0.5)',
                    lineHeight: '0.9',
                    marginBottom: '20px',
                    textTransform: 'uppercase',
                    letterSpacing: '-2px',
                }}>
                    ✨ {text_1} MERCHANDISE STORE ✨
                </h1>

                {/* Subtitle with value proposition */}
                <div style={{
                    backgroundColor: 'rgba(255, 107, 53, 0.95)',
                    color: '#ffffff',
                    padding: '12px 24px',
                    borderRadius: '25px',
                    fontSize: '20px',
                    fontWeight: '600',
                    fontFamily: 'BeVietnamPro',
                    marginBottom: '30px',
                    display: 'flex',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                }}>
                    {text_2}
                </div>

                {/* CTA Buttons */}
                <div style={{
                    display: 'flex',
                    gap: '20px',
                }}>
                    <div style={{
                        backgroundColor: '#FF6B35',
                        color: '#ffffff',
                        padding: '18px 40px',
                        borderRadius: '50px',
                        fontSize: '22px',
                        fontWeight: '700',
                        fontFamily: 'BeVietnamPro',
                        textTransform: 'uppercase',
                        letterSpacing: '1px',
                        boxShadow: '0 8px 24px rgba(255,107,53,0.6)',
                        border: '3px solid #ffffff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                        Shop Now
                    </div>
                </div>
            </div>

            {/* Product Grid - Right Side */}
            <div style={{
                position: 'absolute',
                top: '30px',
                right: '30px',
                width: '750px',
                height: '670px',
                display: 'flex',
            }}>
                {/* Sparkles around products */}
                <div style={{
                    position: 'absolute',
                    top: '10px',
                    left: '20px',
                    fontSize: '16px',
                    color: '#FFD700',
                    textShadow: '0 0 8px #FFD700',
                    zIndex: 15,
                    display: 'flex',
                }}>✨</div>

                <div style={{
                    position: 'absolute',
                    top: '180px',
                    right: '10px',
                    fontSize: '14px',
                    color: '#FFF',
                    textShadow: '0 0 6px #FFF',
                    zIndex: 15,
                    display: 'flex',
                }}>⭐</div>

                <div style={{
                    position: 'absolute',
                    bottom: '200px',
                    left: '10px',
                    fontSize: '18px',
                    color: '#FFD700',
                    textShadow: '0 0 10px #FFD700',
                    zIndex: 15,
                    display: 'flex',
                }}>✨</div>

                <div style={{
                    position: 'absolute',
                    bottom: '100px',
                    right: '5px',
                    fontSize: '16px',
                    color: '#FFF',
                    textShadow: '0 0 8px #FFF',
                    zIndex: 15,
                    display: 'flex',
                }}>⭐</div>
                {/* Product 1 with "NEW" badge */}
                <div style={{
                    position: 'absolute',
                    top: '10px',
                    left: '30px',
                    width: '320px',
                    height: '320px',
                    transform: 'rotate(-8deg)',
                    border: '6px solid #fff',
                    borderRadius: '15px',
                    boxShadow: '0 12px 30px rgba(0,0,0,0.4)',
                    backgroundColor: '#fff',
                    display: 'flex',
                }}>
                    <img src={image_1} alt="" style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        borderRadius: '8px'
                    }} />
                    {/* NEW Badge */}
                    <div style={{
                        position: 'absolute',
                        top: '-15px',
                        right: '-15px',
                        backgroundColor: '#FF6B35',
                        color: '#fff',
                        borderRadius: '50%',
                        width: '50px',
                        height: '50px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '12px',
                        fontWeight: '800',
                        fontFamily: 'BeVietnamPro',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
                    }}>
                        NEW
                    </div>
                </div>

                {/* Product 2 with "SALE" badge */}
                <div style={{
                    position: 'absolute',
                    top: '20px',
                    right: '10px',
                    width: '340px',
                    height: '300px',
                    transform: 'rotate(5deg)',
                    border: '6px solid #fff',
                    borderRadius: '15px',
                    boxShadow: '0 12px 30px rgba(0,0,0,0.4)',
                    backgroundColor: '#fff',
                    display: 'flex',
                }}>
                    <img src={image_2} alt="" style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        borderRadius: '8px'
                    }} />
                    {/* SALE Badge */}
                    <div style={{
                        position: 'absolute',
                        top: '-15px',
                        left: '-15px',
                        backgroundColor: '#e74c3c',
                        color: '#fff',
                        borderRadius: '50%',
                        width: '55px',
                        height: '55px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '12px',
                        fontWeight: '800',
                        fontFamily: 'BeVietnamPro',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
                    }}>
                        SALE
                    </div>
                </div>

                {/* Product 3 */}
                <div style={{
                    position: 'absolute',
                    bottom: '150px',
                    left: '10px',
                    width: '300px',
                    height: '280px',
                    transform: 'rotate(3deg)',
                    border: '6px solid #fff',
                    borderRadius: '15px',
                    boxShadow: '0 12px 30px rgba(0,0,0,0.4)',
                    backgroundColor: '#fff',
                    display: 'flex',
                }}>
                    <img src={image_3} alt="" style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        borderRadius: '8px'
                    }} />
                </div>

                {/* Product 4 with "HOT" badge */}
                <div style={{
                    position: 'absolute',
                    bottom: '20px',
                    right: '20px',
                    width: '320px',
                    height: '300px',
                    transform: 'rotate(-3deg)',
                    border: '6px solid #fff',
                    borderRadius: '15px',
                    boxShadow: '0 12px 30px rgba(0,0,0,0.4)',
                    backgroundColor: '#fff',
                    display: 'flex',
                }}>
                    <img src={image_4} alt="" style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        borderRadius: '8px'
                    }} />
                    {/* HOT Badge */}
                    <div style={{
                        position: 'absolute',
                        top: '-15px',
                        right: '-15px',
                        backgroundColor: '#f39c12',
                        color: '#fff',
                        borderRadius: '50%',
                        width: '50px',
                        height: '50px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '12px',
                        fontWeight: '800',
                        fontFamily: 'BeVietnamPro',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
                    }}>
                        HOT
                    </div>
                </div>
            </div>
        </div>
    );
}
