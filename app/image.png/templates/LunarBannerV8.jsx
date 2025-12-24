export default function LunarBannerV8() {
  // 1. Lấy dữ liệu động từ URL params
  const params = new URLSearchParams(typeof window !== "undefined" ? window.location.search : "");

  const bg_image = params.get("bg_image") || "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1920";
  const image_1 = params.get("image_1") || "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=400";
  const image_2 = params.get("image_2") || "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400";
  const image_3 = params.get("image_3") || "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400";
  const image_4 = params.get("image_4") || "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=400";
  
  const rawTitle = params.get("title") || "The Fighter and the Kid MERCHANDISE STORE";
  let title = rawTitle;
  let subtitle = "MERCHANDISE STORE";

  if (rawTitle.toLowerCase().includes("merchandise store")) {
      title = rawTitle.replace(/Merchandise Store/gi, "").trim();
      subtitle = "MERCHANDISE STORE";
  }

  // Dynamic font size for title
  let titleFontSize = 90; 
  if (title.length > 40) {
    titleFontSize = 50;
  } else if (title.length > 25) {
    titleFontSize = 70;
  } else if (title.length > 15) {
    titleFontSize = 80;
  }
  const description = (params.get("description") || "The Best Store of Cold Ones Merchandise Store").replace(/Merchandise Store/g, "").trim();
  const shop_url = params.get("shop_url") || "coldonesshop.com";

  const containerWidth = 1920;
  const containerHeight = 730;

  // Colors
  const accentColor = "#00f3ff"; // Cyan/Neon Blue
  const secondaryColor = "#bc13fe"; // Neon Purple

  return (
    <div
      style={{
        width: containerWidth,
        height: containerHeight,
        position: "relative",
        overflow: "hidden",
        background: "#050505",
        fontFamily: "'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Background Image with Dark Overlay */}
      <img
        src={bg_image}
        alt="Background"
        style={{
          position: "absolute",
          width: containerWidth,
          height: containerHeight,
          objectFit: "cover",
          opacity: 0.3,
          filter: "grayscale(100%) contrast(1.2)", // Grayscale for Cyber look
        }}
      />
      
      {/* Grid Overlay Effect */}
      <div style={{
          position: "absolute",
          top: 0, left: 0, width: "100%", height: "100%",
          background: "rgba(255, 255, 255, 0.03)",
          backgroundSize: "40px 40px",
          zIndex: 1
      }}/>

      {/* Main Content Layer */}
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          position: "relative",
          padding: "0 60px",
          justifyContent: "space-between",
          alignItems: "center",
          zIndex: 10,
        }}
      >

        {/* Left Column: Product Images - FRAMED STYLE */}
        <div style={{ display: "flex", flexDirection: "column", gap: 30, alignItems: "flex-start", width: 350 }}>
          
          {/* Image 1 */}
          <div style={{ 
            display: "flex", 
            padding: "5px",
            backgroundColor: "rgba(0,0,0,0.5)", 
            border: `2px solid ${accentColor}`,
            transform: "rotate(-3deg) translateX(20px)", 
            boxShadow: `0 0 15px ${accentColor}40`, // Glow effect
          }}>
            <img src={image_1} alt="P1" width={320} height={320} style={{ objectFit: "cover" }} />
          </div>

          {/* Image 2 */}
          <div style={{ 
            display: "flex", 
            padding: "5px",
            backgroundColor: "rgba(0,0,0,0.5)", 
            border: `2px solid ${secondaryColor}`,
            transform: "rotate(2deg) translateX(40px)", 
            boxShadow: `0 0 15px ${secondaryColor}40`,
          }}>
            <img src={image_2} alt="P2" width={320} height={320} style={{ objectFit: "cover" }} />
          </div>

        </div>

        {/* Center Column: Modern Typographic Layout */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            flex: 1, 
            maxWidth: 1000,
            margin: "0 20px",
            position: "relative",
          }}
        >
          {/* Glassmorphism Card for Title */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              background: "rgba(255, 255, 255, 0.05)",
              backdropFilter: "blur(10px)",
              padding: "40px 60px",
              borderRadius: "20px",
              border: "1px solid rgba(255,255,255,0.1)",
              textAlign: "center",
              justifyContent: "center",
              alignItems: "center",
              boxShadow: "0 20px 50px rgba(0,0,0,0.5)",
            }}
          >
            {/* Title with Gradient */}
            <span style={{ 
                fontSize: titleFontSize, 
                fontWeight: 900, 
                background: `linear-gradient(90deg, ${accentColor}, white, ${secondaryColor})`,
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                color: "transparent",
                lineHeight: 0.9, 
                textTransform: "uppercase", 
                textAlign: "center",
                letterSpacing: -2,
                marginBottom: 10
            }}>
              {title}
            </span>

            {/* Subtitle */}
            <span style={{ 
                fontSize: 35, 
                fontWeight: 700, 
                color: "white", 
                letterSpacing: 8, 
                lineHeight: 1, 
                textTransform: "uppercase",
                marginTop: 10,
                opacity: 0.9
            }}>
              {subtitle}
            </span>

             {/* Divider */}
            <div style={{ width: 100, height: 4, background: "white", margin: "20px 0", borderRadius: 2 }}></div>

            {/* Description */}
            <div style={{ color: "#ccc", fontSize: 24, fontWeight: 500, textAlign: "center", maxWidth: "80%" }}>
              {description}
            </div>
          </div>
            
          {/* CTA Button */}
          <div
            style={{
              display: "flex",
              background: "transparent",
              color: "white",
              fontSize: 32,
              fontWeight: 900,
              padding: "25px 50px 14px",
              lineHeight: 1,
              borderRadius: "50px",
              letterSpacing: "2px",
              justifyContent: "center",
              alignItems: "center",
              border: `3px solid ${accentColor}`,
              marginTop: 40,
              boxShadow: `0 0 20px ${accentColor}40`,
              textShadow: `0 0 10px ${accentColor}`,
              position: "relative",
              overflow: "hidden"
            }}
          >
            <div style={{
                position: "absolute",
                top: 0, left: 0, width: "100%", height: "100%",
                background: accentColor,
                opacity: 0.1,
            }}/>
            SHOP NOW
          </div>
          
          {/* URL */}
          <div style={{ 
              marginTop: 20,
              color: "rgba(255,255,255,0.5)", 
              fontSize: 18, 
              letterSpacing: 2,
              textTransform: "uppercase"
          }}>
            {shop_url}
          </div>

        </div>

        {/* Right Column: Product Images - FRAMED STYLE */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 30,
            alignItems: "flex-end",
            width: 350
          }}
        >
          {/* Image 3 */}
          <div
            style={{
              display: "flex",
              padding: "5px",
              backgroundColor: "rgba(0,0,0,0.5)",
              border: `2px solid ${secondaryColor}`,
              transform: "rotate(3deg) translateX(-20px)",
              boxShadow: `0 0 15px ${secondaryColor}40`,
            }}
          >
            <img
              src={image_3}
              alt="P3"
              width={320}
              height={320}
              style={{ objectFit: "cover" }}
            />
          </div>

          {/* Image 4 */}
          <div
            style={{
              display: "flex",
              padding: "5px",
              backgroundColor: "rgba(0,0,0,0.5)",
              border: `2px solid ${accentColor}`,
              transform: "rotate(-2deg) translate(-40px, -20px)",
              boxShadow: `0 0 15px ${accentColor}40`,
            }}
          >
            <img
              src={image_4}
              alt="P4"
              width={320}
              height={320}
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>

      </div>
    </div>
  );
}
