export default function LunarFeaturedProduct({ params }) {
  const productImage =
    params.get("image") ||
    "https://lunar-merch.b-cdn.net/szamerch.shop/media/1194/17781_20251206_114813_mockup.jpg";

  const domain = params.get("domain") || "thesmithestore.com";

  const rawName =
    params.get("name") ||
    "Dragonball Z Goku Character Men's Pyjamas Short or Long Leg Options";

  const productName = rawName
    .toLowerCase()
    .replace(/\b\w/g, (c) => c.toUpperCase());

  const nameLength = productName.length;

  let titleFontSize = 56;
  let titleLineHeight = 1.15;

  if (nameLength > 42) titleFontSize = 52;
  if (nameLength > 58) {
    titleFontSize = 48;
    titleLineHeight = 1.12;
  }
  if (nameLength > 72) {
    titleFontSize = 44;
    titleLineHeight = 1.1;
  }

  const backgrounds = [
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
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover"
        }}
      />

      {/* Domain label */}
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
          color: "#fff",
          background: "linear-gradient(135deg,#FF6B35,#F7931E)"
        }}
      >
        {domain}
      </div>

      {/* Product frame */}
      <div
        style={{
          position: "relative",
          zIndex: 5,
          marginTop: "0px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        {/* Decorative layers */}
        {[
          "rotate(-8deg) translate(-15px,8px)",
          "rotate(6deg) translate(12px,5px)",
          "rotate(-3deg) translate(-6px,3px)"
        ].map((transform, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              width: "650px",
              height: "650px",
              borderRadius: "30px",
              background:
                i === 2
                  ? "linear-gradient(135deg, rgba(255,255,255,.15), rgba(255,255,255,.1))"
                  : "linear-gradient(135deg, rgba(255,107,53,.28), rgba(247,147,30,.22))",
              backdropFilter: "blur(12px)",
              transform
            }}
          />
        ))}

        {/* Main frame */}
        <div
          style={{
            width: "650px",
            height: "650px",
            padding: "22px",
            borderRadius: "30px",
            background:
              "linear-gradient(135deg, rgba(255,255,255,.25), rgba(255,255,255,.15))",
            backdropFilter: "blur(15px)",
            border: "1px solid rgba(255,255,255,.3)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative"
          }}
        >
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
          left: "60px",
          right: "60px",
          zIndex: 10,
          display: "flex",
          justifyContent: "center"
        }}
      >
        <div
          style={{
            fontSize: `${titleFontSize}px`,
            fontWeight: "900",
            lineHeight: titleLineHeight,
            color: "#fff",
            textAlign: "center",
            textShadow:
              "0 0 22px rgba(255,107,53,.45), 0 0 50px rgba(247,147,30,.35), 2px 2px 6px rgba(0,0,0,.35)",
            WebkitTextStroke: "2px rgba(0,0,0,.25)"
          }}
        >
          {productName}
        </div>
      </div>
    </div>
  );
}
