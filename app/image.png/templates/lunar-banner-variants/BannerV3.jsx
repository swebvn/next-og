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
                    filter: 'blur(8px)',
                    objectFit: 'cover',
                }}
                src={randomBgImage} alt="Background Image"
            />

            {/* Enhanced overlay with gradient */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(255,107,53,0.3) 50%, rgba(0,0,0,0.8) 100%)',
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
                display: 'flex',
            }}>✨</div>

            <div style={{
                position: 'absolute',
                top: '200px',
                left: '600px',
                fontSize: '18px',
                color: '#FFF',
                textShadow: '0 0 8px #FFF',
                display: 'flex',
            }}>⭐</div>

            <div style={{
                position: 'absolute',
                top: '350px',
                left: '200px',
                fontSize: '20px',
                color: '#FFD700',
                textShadow: '0 0 12px #FFD700',
                display: 'flex',
            }}>✨</div>

            <div style={{
                position: 'absolute',
                top: '150px',
                right: '200px',
                fontSize: '22px',
                color: '#FFF',
                textShadow: '0 0 10px #FFF',
                display: 'flex',
            }}>⭐</div>

            <div style={{
                position: 'absolute',
                top: '400px',
                right: '300px',
                fontSize: '16px',
                color: '#FFD700',
                textShadow: '0 0 8px #FFD700',
                display: 'flex',
            }}>✨</div>

            <div style={{
                position: 'absolute',
                top: '500px',
                left: '400px',
                fontSize: '20px',
                color: '#FFF',
                textShadow: '0 0 10px #FFF',
                display: 'flex',
            }}>⭐</div>

            <div style={{
                position: 'absolute',
                top: '100px',
                right: '400px',
                fontSize: '18px',
                color: '#FFD700',
                textShadow: '0 0 12px #FFD700',
                display: 'flex',
            }}>✨</div>

            <div style={{
                position: 'absolute',
                top: '600px',
                right: '150px',
                fontSize: '24px',
                color: '#FFF',
                textShadow: '0 0 15px #FFF',
                display: 'flex',
            }}>⭐</div>

            {/* Hero Text Section - Left Side */}
            <div style={{
                position: 'absolute',
                top: '100px',
                left: '80px',
                width: '600px',
                display: 'flex',
                flexDirection: 'column',
            }}>
                {/* Brand Badge */}
                <div style={{
                    backgroundColor: '#2c3e50',
                    color: '#ffffff',
                    padding: '12px 12px',
                    borderRadius: '20px',
                    fontSize: '14px',
                    fontWeight: '700',
                    fontFamily: 'BeVietnamPro',
                    marginBottom: '15px',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    display: 'flex',
                    alignItems: 'center',
                    whiteSpace: 'nowrap',
                }}>
                    🎯 PREMIUM COLLECTION
                </div>
                {/* Main Title */}
                <h1 style={{
                    fontFamily: 'BeVietnamPro',
                    color: '#ffffff',
                    fontSize: '48px',
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
                    padding: '15px 28px',
                    borderRadius: '25px',
                    fontSize: '18px',
                    fontWeight: '600',
                    fontFamily: 'BeVietnamPro',
                    marginBottom: '20px',
                    display: 'flex',
                    width: 'auto',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    boxShadow: '0 6px 20px rgba(255,107,53,0.4)',
                }}>
                    {text_2}
                </div>

                {/* Social Proof */}
                <div style={{
                    color: '#ffffff',
                    fontSize: '16px',
                    fontWeight: '500',
                    fontFamily: 'BeVietnamPro',
                    marginBottom: '25px',
                    display: 'flex',
                    alignItems: 'center',
                }}>
                    ⭐⭐⭐⭐⭐ 100+ Happy Customers
                </div>

                {/* CTA Buttons */}
                <div style={{
                    display: 'flex',
                    gap: '15px',
                    alignItems: 'center',
                }}>
                    <div style={{
                        backgroundColor: '#FF6B35',
                        color: '#ffffff',
                        padding: '18px 35px',
                        borderRadius: '50px',
                        fontSize: '20px',
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
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
</svg> SHOP NOW
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
                    display: 'flex',
                }}>✨</div>

                <div style={{
                    position: 'absolute',
                    top: '180px',
                    right: '10px',
                    fontSize: '14px',
                    color: '#FFF',
                    textShadow: '0 0 6px #FFF',
                    display: 'flex',
                }}>⭐</div>

                <div style={{
                    position: 'absolute',
                    bottom: '200px',
                    left: '10px',
                    fontSize: '18px',
                    color: '#FFD700',
                    textShadow: '0 0 10px #FFD700',
                    display: 'flex',
                }}>✨</div>

                <div style={{
                    position: 'absolute',
                    bottom: '100px',
                    right: '5px',
                    fontSize: '16px',
                    color: '#FFF',
                    textShadow: '0 0 8px #FFF',
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
                        fontSize: '10px',
                        fontWeight: '800',
                        fontFamily: 'BeVietnamPro',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
                    }}>
                        50% OFF
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
