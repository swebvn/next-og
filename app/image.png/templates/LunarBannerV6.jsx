export default function LunarBannerV6({ params }) {
  // --- Dữ liệu ---
  const bg_image = params.get("bg_image") || "https://tda-sale-stuff.b-cdn.net/lunar/banner/banner-01.jpg";
  
  const image_1 = params.get("image_1") || "https://lunar-merch.b-cdn.net/hello.test.tdalunar.com/media/46/image.png";
  const image_2 = params.get("image_2") || "https://lunar-merch.b-cdn.net/hello.test.tdalunar.com/media/35/image.png";
  const image_3 = params.get("image_3") || "https://lunar-merch.b-cdn.net/hello.test.tdalunar.com/media/78/image.png";
  const image_4 = params.get("image_4") || "https://lunar-merch.b-cdn.net/hello.test.tdalunar.com/media/66/image.png";

  let rawTitle = params.get("text_1") || "The Fighter";
  // Remove "Store" if it ends with "Merchandise Store" (keep "Merchandise")
  rawTitle = rawTitle.replace(/Merchandise\s+Store$/i, "Merchandise");
  
  const title = rawTitle.toUpperCase();

  const main_text_1 = params.get("main_text_1") || "NEW";
  const main_text_2 = params.get("main_text_2") || "ARRIVAL";
  const badge_text = params.get("badge_text") || "Collection";
  const shop_url = params.get("text_2") || "thesmithsstore.com";

  const containerWidth = 1920;
  const containerHeight = 730;

  return (
    <div
      style={{
        width: containerWidth,
        height: containerHeight,
        position: "relative",
        overflow: "hidden",
        background: "#1a1a1a",
        fontFamily: "'Inter', sans-serif",
        display: "flex", // BẮT BUỘC
        flexDirection: "row",
      }}
    >
      {/* 1. Background Image */}
      <img
        src={bg_image}
        alt="Background"
        style={{
          position: "absolute",
          width: containerWidth,
          height: containerHeight,
          objectFit: "cover",
          opacity: 0.6,
          zIndex: 0,
        }}
      />
      
      {/* Overlay gradient */}
      <div 
        style={{
          position: "absolute",
          top: 0, left: 0, right: 0, bottom: 0,
          background: "linear-gradient(90deg, #111 20%, rgba(0,0,0,0.4) 60%, rgba(0,0,0,0.2) 100%)",
          zIndex: 1,
          display: "flex" // Fix lỗi: dù rỗng cũng nên để flex
        }}
      />

      {/* 2. LEFT SIDE: COLLAGE */}
      <div style={{
          position: "absolute",
          top: 0, left: 0,
          width: "55%",
          height: "100%",
          zIndex: 10,
          display: "flex", // BẮT BUỘC
          flexDirection: "column"
      }}>
        
        {/* Image 1: Top Left - Portrait */}
        <div style={{
            position: "absolute",
            top: 40, left: 60,
            width: 340, height: 440,
            transform: "rotate(-2deg)",
            border: "12px solid white",
            boxShadow: "5px 10px 20px rgba(0,0,0,0.5)",
            overflow: "hidden",
            zIndex: 2,
            backgroundColor: "#fff",
            display: "flex"
        }}>
            <img src={image_1} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div>

        {/* Image 2: Top Right - Portrait */}
        <div style={{
            position: "absolute",
            top: 40, left: 440,
            width: 340, height: 440,
            transform: "rotate(3deg)",
            border: "12px solid white",
            boxShadow: "5px 10px 20px rgba(0,0,0,0.5)",
            overflow: "hidden",
            zIndex: 1,
            backgroundColor: "#fff",
            display: "flex"
        }}>
             <img src={image_2} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div>

        {/* Image 3: Bottom Left - Tilted Clockwise */}
        <div style={{
            position: "absolute",
            bottom: 40, left: 120,
            width: 300, height: 400,
            transform: "rotate(12deg)",
            border: "12px solid white",
            boxShadow: "5px 10px 20px rgba(0,0,0,0.5)",
            overflow: "hidden",
            zIndex: 3,
            backgroundColor: "#fff",
            display: "flex"
        }}>
             <img src={image_3} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div>

        {/* Image 4: Bottom Right - Tilted Counter-Clockwise */}
        <div style={{
            position: "absolute",
            bottom: 40, left: 520,
            width: 300, height: 400,
            transform: "rotate(-12deg)",
            border: "12px solid white",
            boxShadow: "5px 10px 20px rgba(0,0,0,0.5)",
            overflow: "hidden",
            zIndex: 4,
            backgroundColor: "#fff",
            display: "flex"
        }}>
             <img src={image_4} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div>
      </div>

      {/* 3. RIGHT SIDE: TEXT */}
      <div style={{
          position: "absolute",
          top: 0, right: 0,
          width: "50%",
          height: "100%",
          zIndex: 20,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          paddingRight: 50,
          fontFamily: "'Montserrat', sans-serif", // Default to Montserrat
      }}>

        {/* TOP PILL BADGE */}
        <div style={{
            backgroundColor: "white",
            padding: "25px 40px 15px", 
            borderRadius: 60,
            marginBottom: 30,
            boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
            //transform: "rotate(-1deg)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center"
        }}>
            <span style={{
                fontSize: 40,
                fontWeight: 900,
                color: "black",
                textTransform: "uppercase",
                letterSpacing: 1,
                lineHeight: 1.1,
                display: "flex",
                textAlign: "center"
            }}>
                THE BEST STORE OF {title}
            </span>
        </div>

        {/* MAIN TEXT */}
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: 70, // Tăng margin top để đẩy xuống
            marginBottom: 10,
            position: "relative"
        }}>
            {/* Dòng 1: NEW ARRIVAL */}
            <div style={{
                fontSize: 120,
                fontWeight: 900,
                lineHeight: 0.85,
                color: "white", 
                WebkitTextStroke: "3px black",
                textShadow: "6px 6px 0px rgba(255,255,255,0.4)",
                textTransform: "uppercase",
                fontStyle: "italic",
                letterSpacing: -2,
                textAlign: "center",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                zIndex: 2,
                whiteSpace: "nowrap"
            }}>
                <span>{main_text_1}</span>
                <span style={{ marginLeft: 30 }}>{main_text_2}</span>
            </div>

            {/* Dòng 2: Collection */}
            <div style={{
                fontSize: 120,
                color: "white",
                fontFamily: "GreatVibes",
                marginTop: 50,
                textShadow: "0 0 10px #fff, 0 0 20px #fff, 0 0 40px #fff, 0 0 80px rgba(255,255,255,0.8), 0 0 120px rgba(255,255,255,0.6)",
                zIndex: 3,
                //transform: "rotate(-10deg)"
            }}>
                {badge_text}
            </div>
        </div>

        {/* BOTTOM PILL: URL */}
        <div style={{
            marginTop: 30,
            backgroundColor: "white",
            padding: "15px 40px 12px",
            borderRadius: 50,
            boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        }}>
            <span style={{
                fontSize: 26,
                fontWeight: 800,
                color: "black",
                textTransform: "lowercase",
                letterSpacing: 1
            }}>
                {shop_url}
            </span>
        </div>

      </div>
    </div>
  );
}