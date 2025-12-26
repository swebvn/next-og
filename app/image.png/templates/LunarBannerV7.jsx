import { getRandomBgImage } from "./utils/bannerAssets";
export default function LunarBannerV7({ params }) {

  // LẤY CÁC LINK ẢNH
  const bg_image = getRandomBgImage(params.get("bg_image"));
  
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

  // New Color Theme: Rose/Pink & Dark Red
  const colors = {
    beige: "#fff1f2",    // Light Rose
    lightBlue: "#fb7185", // Rose 400 (Main Accent)
    darkBlue: "#9f1239",  // Rose 800 (Dark Accent)
    strokeColor: "#fff",
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
          background: "linear-gradient(90deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0) 100%)",
          zIndex: 1,
          display: "flex", 
        }}
      />

      {/* 2. Decorative Shapes - Updated Colors & Positions */}
      {/* Top Right Blob */}
      <div style={{
          position: "absolute",
          top: -300,
          right: -100,
          width: 800,
          height: 800,
          background: colors.beige,
          borderRadius: "40%", // More organic shape
          zIndex: 1,
          display: "flex",
          transform: "rotate(45deg)"
      }} />

      {/* Bottom Wave */}
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

      {/* Bottom Left Blob */}
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

          {/* Main Title Container - NEW STYLE */}
          <div style={{ 
            display: "flex",
            flexDirection: "column",
            position: "relative", 
            marginTop: 40 
          }}>
            {/* New Style: Solid White with Colored Shadow/Block */}
            <div style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 160,
              fontWeight: 900,
              color: "white",
              lineHeight: 0.85,
              fontStyle: "normal", // Changed from italic
              textTransform: "uppercase",
              letterSpacing: -4,
              filter: `drop-shadow(8px 8px 0px ${colors.lightBlue})` // Hard shadow effect
            }}>
              <span>{main_text_1}</span>
              <span style={{ marginLeft: 0, color: colors.lightBlue, filter: "drop-shadow(8px 8px 0px white)" }}>{main_text_2}</span>
            </div>
          </div>

          {/* Shop Now Button */}
          <div style={{
            marginTop: 50,
            padding: "20px 60px 15px",
            backgroundColor: colors.lightBlue, // Solid background
            borderRadius: 10, // Less rounded, more boxy
            color: "white",
            fontSize: 28,
            fontWeight: "bold",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 10px 20px rgba(0,0,0,0.4)",
            border: "2px solid white",
            //transform: "skewX(-10deg)" // Skewed dynamic look
          }}>
            <span>SHOP NOW</span>
          </div>
        </div>

        {/* --- RIGHT COLUMN: SQUARE IMAGES --- */}
        <div style={{ 
          position: "relative", 
          width: 800, 
          height: 700, 
          display: "flex",       
          justifyContent: "center", 
          alignItems: "center"
        }}>
          
          {/* Image 1 (Top Center) */}
          <div style={{
            position: "absolute",
            top: 20,
            left: 200,
            width: 300,
            height: 300,
            borderRadius: 40, // Rounded Square
            border: `8px solid ${colors.beige}`,
            overflow: "hidden",
            zIndex: 2, 
            boxShadow: "0 15px 35px rgba(0,0,0,0.5)",
            backgroundColor: "#fff",
            display: "flex",
            transform: "rotate(-5deg)"
          }}>
            <img src={image_1} alt="P1" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>

          {/* Image 2 (Bottom Center) */}
          <div style={{
            position: "absolute",
            bottom: 40,
            left: 300, 
            width: 300,
            height: 300,
            borderRadius: 40, // Rounded Square
            border: `8px solid ${colors.beige}`,
            overflow: "hidden",
            zIndex: 1, 
            boxShadow: "0 15px 35px rgba(0,0,0,0.5)",
            backgroundColor: "#fff",
            display: "flex",
            transform: "rotate(3deg)"
          }}>
             <img src={image_2} alt="P2" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>

          {/* Image 3 (Rightmost) */}
          <div style={{
            position: "absolute",
            top: 80,
            right: -50,
            width: 380,
            height: 380,
            borderRadius: 50, // Slightly more rounded
            border: `10px solid ${colors.beige}`,
            overflow: "hidden",
            zIndex: 5, 
            boxShadow: "0 20px 40px rgba(0,0,0,0.6)",
            backgroundColor: "#fff",
            display: "flex",
            transform: "rotate(5deg)"
          }}>
             <img src={image_3} alt="P3" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>

          {/* Image 4 (Leftmost) */}
          <div style={{
            position: "absolute",
            bottom: 150, 
            left: 20,   
            width: 280,
            height: 280,
            borderRadius: 40, // Rounded Square
            border: `8px solid ${colors.beige}`,
            overflow: "hidden",
            zIndex: 6, 
            boxShadow: "0 15px 35px rgba(0,0,0,0.5)",
            backgroundColor: "#fff",
            display: "flex",
            transform: "rotate(-8deg)"
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
        padding: "15px 35px 12px",
        backgroundColor: "white",
        borderRadius: 10,
        color: colors.darkBlue,
        fontSize: 32,
        fontWeight: 800,
        fontStyle: "italic",
        letterSpacing: 1,
        zIndex: 20,
        boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
        border: `4px solid ${colors.lightBlue}`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transform: "rotate(-2deg)"
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
        fontWeight: 700,
        color: colors.darkBlue,
        zIndex: 20,
        letterSpacing: 2,
        textTransform: "uppercase"
      }}>
        {shop_url}
      </div>

    </div>
  );
}
