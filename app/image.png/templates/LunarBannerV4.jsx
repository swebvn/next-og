import { getRandomBgImage } from "./utils/bannerAssets";

export default function LunarBannerV4({ params }) {

  const bg_image = getRandomBgImage(params.get("bg_image"));
  const image_1 = params.get("image_1") || "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=400";
  const image_2 = params.get("image_2") || "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400";
  const image_3 = params.get("image_3") || "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400";
  const image_4 = params.get("image_4") || "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=400";
  const rawTitle = params.get("text_1") || "The Fighter and the Kid MERCHANDISE STORE";
  let title = rawTitle;
  let subtitle = "MERCHANDISE STORE";

  if (rawTitle.toLowerCase().includes("merchandise store")) {
      title = rawTitle.replace(/Merchandise Store/gi, "").trim();
      subtitle = "MERCHANDISE STORE";
  }

  // Dynamic font size for title
  let titleFontSize = 100; // Increased base size
  if (title.length > 40) {
    titleFontSize = 55;
  } else if (title.length > 25) {
    titleFontSize = 75;
  } else if (title.length > 15) {
    titleFontSize = 85;
  }
  const description = `The Best Store of ${rawTitle}`
    .replace(/Merchandise Store/gi, "")
    .trim();
  const shop_url = params.get("text_2") || "coldonesshop.com";

  const containerWidth = 1920;
  const containerHeight = 730;

  return (
    <div
      style={{
        width: containerWidth,
        height: containerHeight,
        position: "relative",
        overflow: "hidden",
        background: "#000",
        fontFamily: "system-ui, sans-serif",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Background Image */}
      <img
        src={bg_image}
        alt="Background"
        style={{
          position: "absolute",
          width: containerWidth,
          height: containerHeight,
          objectFit: "cover",
          opacity: 0.4,
        }}
      />

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

        {/* Left Column: Product Images */}
        <div style={{ display: "flex", flexDirection: "column", gap: 40, alignItems: "flex-start", width: 350 }}>
          
          {/* Tấm ảnh 1 */}
          <div style={{ 
            display: "flex", 
            flexDirection: "column",
            padding: "15px 15px 60px 15px", // Padding dưới dày hơn (60px) để tạo phần lề trắng viết chữ
            backgroundColor: "white", 
            transform: "rotate(-5deg) translateY(20px)", 
            borderRadius: 4, // Polaroid thường chỉ bo góc rất nhẹ
            boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
          }}>
            <img src={image_1} alt="P1" width={280} height={280} style={{ objectFit: "cover" }} />
            {/* Bạn có thể thêm text nhỏ ở đây nếu muốn giống mẫu hơn */}
            <div style={{ position: "absolute", bottom: 15, left: 15, fontSize: 14, color: "#333", fontWeight: "bold" }}> </div>
          </div>

          {/* Tấm ảnh 2 */}
          <div style={{ 
            display: "flex", 
            flexDirection: "column",
            padding: "15px 15px 60px 15px", 
            backgroundColor: "white", 
            transform: "rotate(3deg) translateY(-20px)", 
            marginLeft: 40,
            borderRadius: 4,
            boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
          }}>
            <img src={image_2} alt="P2" width={280} height={280} style={{ objectFit: "cover" }} />
            <div style={{ position: "absolute", bottom: 15, left: 15, fontSize: 14, color: "#333", fontWeight: "bold" }}></div>
          </div>

        </div>

        {/* Center Column: The "Cold Ones" Style Logo & CTA */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            flex: 1, // Allow dynamic width
            maxWidth: 1000,
            margin: "0 20px",
          }}
        >
          {/* Top Bubble: Title */}
          <div
            style={{
              display: "flex",
              backgroundColor: "black",
              padding: "25px 70px 45px 70px",
              borderTopLeftRadius: "50px",
              borderTopRightRadius: "50px",
              borderBottomLeftRadius: "25px",
              borderBottomRightRadius: "25px",
              zIndex: 2,
              marginBottom: -35,
              textAlign: "center",
              justifyContent: "center",
            }}
          >
            <span style={{ fontSize: titleFontSize, fontWeight: 900, color: "white", lineHeight: 0.9, textTransform: "uppercase", textAlign: "center" }}>
              {title}
            </span>
          </div>

          {/* Bottom Bubble: Subtitle */}
          <div
            style={{
              display: "flex",
              backgroundColor: "black",
              padding: "15px 60px",
              borderRadius: "50px",
              zIndex: 1,
              textAlign: "center",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <span style={{ fontSize: 45, fontWeight: 900, color: "white", letterSpacing: 2, lineHeight: 1, textTransform: "uppercase" }}>
              {subtitle}
            </span>
          </div>

          {/* Additional Info Section */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: 40, gap: 20 }}>
            <div style={{ color: "white", fontSize: 32, fontWeight: 600, textAlign: "center", textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}>
              {description}
            </div>
            
            {/* Domain Label */}
            <div style={{ 
                display: "flex", 
                backgroundColor: "rgba(0,0,0,0.8)", 
                color: "white", 
                padding: "6px 16px", 
                fontSize: 24, 
                borderRadius: 6, 
                textDecoration: "underline",
                border: "1px solid rgba(255,255,255,0.2)" 
            }}>
              {shop_url}
            </div>

            {/* NEW: BUY NOW BUTTON */}
            <div
              style={{
                display: "flex",
                background: "black",
                color: "white",
                fontSize: 34,
                fontWeight: 900,
                padding: "16px 22px 4px 26px",
                borderRadius: "12px",
                letterSpacing: "3px",
                justifyContent: "center",
                alignItems: "center",
                border: "4px solid white",
                marginTop: 50,
                boxShadow: "0 10px 20px rgba(0,0,0,0.3)"
              }}
            >
              BUY NOW
            </div>
            
          </div>
        </div>

        {/* Right Column: Product Images */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 40,
            alignItems: "flex-end",
          }}
        >
          {/* Tấm ảnh 3 */}
          <div
            style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              padding: "15px 15px 60px 15px",
              backgroundColor: "white",
              transform: "rotate(4deg) translateY(20px)",
              borderRadius: 4,
              boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
            }}
          >
            <img
              src={image_3}
              alt="P3"
              width={280}
              height={280}
              style={{ objectFit: "cover" }}
            />
            <div
              style={{
                position: "absolute",
                bottom: 15,
                left: 15,
                fontSize: 14,
                color: "#333",
                fontWeight: "bold",
              }}
            />
          </div>

          {/* Tấm ảnh 4 */}
          <div
            style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              padding: "15px 15px 60px 15px",
              backgroundColor: "white",
              transform: "rotate(-3deg) translateY(-20px)",
              marginRight: 40,
              borderRadius: 4,
              boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
            }}
          >
            <img
              src={image_4}
              alt="P4"
              width={280}
              height={280}
              style={{ objectFit: "cover" }}
            />
            <div
              style={{
                position: "absolute",
                bottom: 15,
                left: 15,
                fontSize: 14,
                color: "#333",
                fontWeight: "bold",
              }}
            />
          </div>
        </div>

      </div>
    </div>
  );
}