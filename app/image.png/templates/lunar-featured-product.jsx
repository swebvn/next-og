export default function LunarFeaturedProduct({ params }) {
  const productImage =
    params.get("image") ||
    "https://lunar-merch.b-cdn.net/szamerch.shop/media/1194/17781_20251206_114813_mockup.jpg";

  const domain = params.get("domain") || "thesmithestore.com";
  const rawName = params.get("name") || "the cure robert smith cure robert smith hoodies";

  const productName = rawName
    .toLowerCase()
    .replace(/\b\w/g, (c) => c.toUpperCase());

  const backgrounds = [
    /* "https://tda-sale-stuff.b-cdn.net/lunar/featured_product_bg_cta_02.png", */
    "https://tda-sale-stuff.b-cdn.net/lunar/featured_product_bg_cta_03.png",
    "https://tda-sale-stuff.b-cdn.net/lunar/featured_product_bg_cta_04.png",
    "https://tda-sale-stuff.b-cdn.net/lunar/featured_product_bg_cta_05.png",
    "https://tda-sale-stuff.b-cdn.net/lunar/featured_product_bg_cta_06.png",
    "https://tda-sale-stuff.b-cdn.net/lunar/featured_product_bg_cta_07.png"
  ];

  const bgIndex = params.get("bg_index")
    ? parseInt(params.get("bg_index"), 10)
    : Math.floor(Math.random() * backgrounds.length);

  const backgroundImage = params.get("background") || backgrounds[bgIndex];

  return (
    <div
      style={{
        width: "1024px",
        height: "1024px",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      {/* Background */}
      <img
        src={backgroundImage}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          objectFit: "cover"
        }}
      />

      {/* Domain Label */}
      <div
        style={{
          position: "absolute",
          top: "40px",
          right: "40px",
          zIndex: 10,
          padding: "12px 28px",
          borderRadius: "24px",
          fontSize: "28px",
          fontWeight: "700",
          color: "#FFFFFF",
          background: "linear-gradient(135deg, #FF6B35 0%, #F7931E 100%)"
        }}
      >
        {domain}
      </div>

      {/* Multi-layer frame */}
      <div
        style={{
          position: "relative",
          zIndex: 5,
          marginTop: "40px",
          marginBottom: "60px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        {/* Layer 4 */}
        <div
          style={{
            position: "absolute",
            width: "650px",
            height: "650px",
            borderRadius: "30px",
            background:
              "linear-gradient(135deg, rgba(255, 107, 53, 0.28) 0%, rgba(247, 147, 30, 0.22) 100%)",
            backdropFilter: "blur(10px)",
            transform: "rotate(-8deg) translate(-15px, 8px)"
          }}
        />

        {/* Layer 3 */}
        <div
          style={{
            position: "absolute",
            width: "650px",
            height: "650px",
            borderRadius: "30px",
            background:
              "linear-gradient(135deg, rgba(247, 147, 30, 0.3) 0%, rgba(255, 107, 53, 0.26) 100%)",
            backdropFilter: "blur(10px)",
            transform: "rotate(6deg) translate(12px, 5px)"
          }}
        />

        {/* Layer 2 */}
        <div
          style={{
            position: "absolute",
            width: "650px",
            height: "650px",
            borderRadius: "30px",
            background:
              "linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.1) 100%)",
            backdropFilter: "blur(12px)",
            transform: "rotate(-3deg) translate(-6px, 3px)"
          }}
        />

        {/* Main Frame */}
        <div
          style={{
            width: "650px",
            height: "650px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            padding: "22px",
            borderRadius: "30px",
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.15) 100%)",
            backdropFilter: "blur(15px)",
            border: "1px solid rgba(255,255,255,0.3)"
          }}
        >
          {/* Inner glow */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: "28px",
              background:
                "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.16) 0%, transparent 70%)",
              pointerEvents: "none"
            }}
          />

          {/* Product image */}
          <img
            src={productImage}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain"
            }}
          />
        </div>
      </div>

      {/* Title */}
      <div
        style={{
          position: "absolute",
          bottom: "60px",
          left: "65px",
          right: "60px",
          zIndex: 10,
          display: "flex",
          justifyContent: "center"
        }}
      >
        <div
          style={{
            fontSize: "56px",
            fontWeight: "900",
            color: "#FFFFFF",
            textAlign: "center",
            textTransform: "capitalize",
            lineHeight: "1.2",
            width: "100%",
            wordWrap: "break-word",
            textShadow:
              "0 0 22px rgba(255,107,53,0.45), 0 0 50px rgba(247,147,30,0.35), 2px 2px 6px rgba(0,0,0,0.35)",
            WebkitTextStroke: "2px rgba(0,0,0,0.25)"
          }}
        >
          {productName}
        </div>
      </div>

    </div>
  );
}
