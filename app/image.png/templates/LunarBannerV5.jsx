export default function LunarBannerV5({ params }) {

  // LẤY CÁC LINK ẢNH
  const bg_image = params.get("bg_image") || "https://tda-sale-stuff.b-cdn.net/lunar/banner/banner-01.jpg";
/*   const image_1 = params.get("image_1") || "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=400";
  const image_2 = params.get("image_2") || "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400";
  const image_3 = params.get("image_3") || "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400";
  const image_4 = params.get("image_4") || "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=400"; */
  
  const image_1 = params.get("image_1") || "https://lunar-merch.b-cdn.net/hello.test.tdalunar.com/media/46/image.png";
  const image_2 = params.get("image_2") || "https://lunar-merch.b-cdn.net/hello.test.tdalunar.com/media/35/image.png";
  const image_3 = params.get("image_3") || "https://lunar-merch.b-cdn.net/hello.test.tdalunar.com/media/78/image.png";
  const image_4 = params.get("image_4") || "https://lunar-merch.b-cdn.net/hello.test.tdalunar.com/media/66/image.png";

  const rawTitle = params.get("text_1") || "The Fighter Merchandise Store";
  const title = `WELCOME TO ${rawTitle.replace(/^WELCOME TO\s+/i, "")}`;
  const words = title.split(" ");
  const half = Math.ceil(words.length / 2);
  const title_top = words.slice(0, half).join(" ");
  const title_sub = words.slice(half).join(" ");

  const main_text_1 = params.get("main_text_1") || "NEW";
  const main_text_2 = params.get("main_text_2") || "ARRIVAL";
  const badge_text = params.get("badge_text") || "NEW COLLECTION";
  const shop_url = params.get("text_2") || "CAYLUSSTORE.COM";

  const containerWidth = 1920;
  const containerHeight = 730;

  const colors = {
    beige: "#e8e0d5",
    lightBlue: "#9ecae1",
    darkBlue: "#5b9bd5",
    strokeColor: "#000",
  };

  return (
    <div
      style={{
        width: containerWidth,
        height: containerHeight,
        position: "relative",
        overflow: "hidden",
        background: "#000",
        fontFamily: "'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
        display: "flex",       
        flexDirection: "column",
      }}
    >
      {/* 1. Background Image Layer */}
      <img
        src={bg_image}
        alt="Background"
        style={{
          position: "absolute",
          width: containerWidth,
          height: containerHeight,
          objectFit: "cover",
          opacity: 0.8,
          zIndex: 0,
        }}
      />
      
      {/* Overlay gradient */}
      <div 
        style={{
          position: "absolute",
          top: 0, left: 0, right: 0, bottom: 0,
          background: "linear-gradient(90deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0) 100%)",
          zIndex: 1,
          display: "flex", 
        }}
      />

      {/* 2. Decorative Waves */}
      <div style={{
          position: "absolute",
          top: -300,
          right: -100,
          width: 800,
          height: 800,
          background: colors.beige,
          borderRadius: "50%",
          zIndex: 1,
          display: "flex",
      }} />

      <div style={{
          position: "absolute",
          bottom: -450,
          left: 0,
          width: "100%",
          height: 600,
          background: colors.lightBlue,
          borderRadius: "100% 100% 0 0",
          transform: "rotate(-2deg) translateY(50px)",
          zIndex: 2,
          display: "flex",
      }} />

      <div style={{
          position: "absolute",
          bottom: -400,
          left: -100,
          width: "110%",
          height: 550,
          background: colors.beige,
          borderRadius: "100%",
          zIndex: 3,
          display: "flex",
      }} />


      {/* 3. Main Content Layer */}
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          position: "relative",
          zIndex: 10,
          padding: "0 80px",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >

        {/* --- LEFT COLUMN: TYPOGRAPHY --- */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", marginTop: -20 }}>
          
          {/* Top Title */}
          <div style={{ 
            display: "flex",
            flexDirection: "column",
            fontSize: 48, 
            fontWeight: 900, 
            color: "white", 
            textTransform: "uppercase", 
            lineHeight: 1.1,
            textShadow: "2px 2px 0px black",
            marginBottom: 10
          }}>
            <span>{title_top}</span>
            <span>{title_sub}</span>
          </div>

          {/* Main Title Container */}
          <div style={{ 
            display: "flex",
            flexDirection: "column",
            position: "relative", 
            marginTop: 50 
          }}>
            {/* Layer 1: Outline Text */}
            <div style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 160,
              fontWeight: 900,
              color: "transparent",
              WebkitTextStroke: "4px white",
              lineHeight: 0.9,
              fontStyle: "italic",
              textTransform: "uppercase",
              letterSpacing: -2,
            }}>
              <span>{main_text_1}</span>
              <span style={{ marginLeft: 50 }}>{main_text_2}</span>
            </div>

            {/* Layer 2: Gradient Text (Absolute) */}
            <div style={{
              position: "absolute",
              top: 5,
              left: 5,
              display: "flex",
              flexDirection: "column",
              fontSize: 160,
              fontWeight: 900,
              backgroundImage: "linear-gradient(180deg, #9ecae1 0%, #5b9bd5 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
              lineHeight: 0.9,
              fontStyle: "italic",
              textTransform: "uppercase",
              letterSpacing: -2,
              zIndex: -1,
              textShadow: "4px 4px 10px rgba(0,0,0,0.5)"
            }}>
               <span>{main_text_1}</span>
               <span style={{ marginLeft: 50 }}>{main_text_2}</span>
            </div>
          </div>

          {/* Shop Now Button */}
          <div style={{
            marginTop: 40,
            padding: "20px 50px 13px",
            border: "3px solid white",
            borderRadius: 50,
            color: "white",
            fontSize: 28,
            fontWeight: "bold",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(0,0,0,0.4)",
            boxShadow: "0 4px 15px rgba(0,0,0,0.3)"
          }}>
            SHOP NOW
          </div>
        </div>

        {/* --- RIGHT COLUMN: CIRCLE IMAGES --- */}
        <div style={{ 
          position: "relative", 
          width: 800, 
          height: 700, 
          display: "flex",       
          justifyContent: "center", 
          alignItems: "center"
        }}>
          
          {/* Circle 1 (Top Center) - Áo thun */}
          <div style={{
            position: "absolute",
            top: 20,
            left: 200,
            width: 330,
            height: 330,
            borderRadius: "50%",
            border: `10px solid ${colors.beige}`,
            overflow: "hidden",
            zIndex: 2, 
            boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
            backgroundColor: "#fff",
            display: "flex"
          }}>
            <img src={image_1} alt="P1" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>

          {/* Circle 2 (Bottom Center) - Ốp lưng */}
          <div style={{
            position: "absolute",
            bottom: 40,
            left: 300, 
            width: 330,
            height: 330,
            borderRadius: "50%",
            border: `10px solid ${colors.beige}`,
            overflow: "hidden",
            zIndex: 1, 
            boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
            backgroundColor: "#fff",
            display: "flex"
          }}>
             <img src={image_2} alt="P2" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>

          {/* Circle 3 (Rightmost) - Người hoodie xanh */}
          <div style={{
            position: "absolute",
            top: 75,
            right: -78,
            width: 400,
            height: 400,
            borderRadius: "50%",
            border: `12px solid ${colors.beige}`,
            overflow: "hidden",
            zIndex: 5, 
            boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
            backgroundColor: "#fff",
            display: "flex"
          }}>
             <img src={image_3} alt="P3" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>

          {/* Circle 4 (Leftmost) - Người ngồi ghế */}
          <div style={{
            position: "absolute",
            bottom: 150, 
            left: 20,   
            width: 320,
            height: 320,
            borderRadius: "50%",
            border: `10px solid ${colors.beige}`,
            overflow: "hidden",
            zIndex: 6, 
            boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
            backgroundColor: "#fff",
            display: "flex"
          }}>
             <img src={image_4} alt="P4" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>

        </div>

      </div>

      {/* 4. Bottom Elements */}
      
      {/* Badge */}
      <div style={{
        position: "absolute",
        bottom: 80,
        left: 650,
        padding: "20px 40px 13px",
        backgroundColor: colors.lightBlue,
        borderRadius: 40,
        color: "white",
        fontSize: 32,
        fontWeight: 800,
        fontStyle: "italic",
        letterSpacing: 1,
        zIndex: 20,
        boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
        border: "3px solid white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}>
        {badge_text}
      </div>

      {/* URL */}
      <div style={{
        position: "absolute",
        bottom: 15,
        width: "100%",
        display: "flex", 
        justifyContent: "center",
        fontSize: 20,
        fontWeight: 600,
        color: "#555",
        zIndex: 20,
        letterSpacing: 2,
        textTransform: "uppercase"
      }}>
        {shop_url}
      </div>

    </div>
  );
}