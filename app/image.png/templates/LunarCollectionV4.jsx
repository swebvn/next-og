export default function LunarCollectionV4({ params }) {
  const design =
    params.get("image") ||
    "https://lunar-merch.b-cdn.net/rinalipa.shop/media/840/image.png";

  return (
    <div
      style={{
        width: "1080px",
        height: "1080px",
        position: "relative",
        overflow: "hidden",
        background: "#0a0a0a",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* === OPTIMIZED BACKGROUND - Single Layer === */}
      <img
        src={design}
        style={{
          position: "absolute",
          top: "0px",
          left: "0px",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          opacity: 0.5,
          filter: "brightness(0.7) contrast(1.1)",
        }}
      />

      {/* === COMBINED BORDERS - Single div with pseudo-elements effect === */}
      <div
        style={{
          position: "absolute",
          top: "0px",
          left: "0px",
          right: "0px",
          bottom: "0px",
          border: "1px solid rgba(255,255,255,0.15)",
          boxShadow: `
            inset 0 0 0 1px rgba(255,255,255,0.05),
            inset 20px 20px 0 0 rgba(255,255,255,0.08),
            inset -20px -20px 0 0 rgba(255,255,255,0.08),
            inset 20px -20px 0 0 rgba(255,255,255,0.08),
            inset -20px 20px 0 0 rgba(255,255,255,0.08)
          `,
          pointerEvents: "none",
        }}
      />

      {/* === OPTIMIZED PATTERN - Simpler gradient === */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: "linear-gradient(45deg, rgba(255,255,255,0.02) 25%, transparent 25%)",
          backgroundSize: "40px 40px",
          opacity: 0.2,
          zIndex: 1,
        }}
      />

      {/* === OPTIMIZED MAIN PRODUCT FRAME - Reduced shadows === */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          width: "720px",
          height: "720px",
          borderRadius: "48px",
          background: "#f8f8f8",
          padding: "32px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: `
            0 40px 100px rgba(0,0,0,0.6),
            inset 0 0 0 2px rgba(0,0,0,0.1),
            inset 0 0 0 1px rgba(255,255,255,0.5),
            0 0 0 1px rgba(0,0,0,0.15),
            0 0 40px rgba(255,255,255,0.1),
            inset 0 0 30px rgba(255,255,255,0.2)
          `,
        }}
      >
        {/* Product image - Optimized container */}
        <div
          style={{
            display: "flex",
            width: "100%",
            height: "100%",
            borderRadius: "28px",
            overflow: "hidden",
            boxShadow: "0 10px 40px rgba(0,0,0,0.2), inset 0 0 0 1px rgba(0,0,0,0.08)",
            background: "#ffffff",
          }}
        >
          <img
            src={design}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
            }}
          />
        </div>
      </div>

      {/* === OPTIMIZED CORNER ACCENTS - Combined with borders === */}
      <svg
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
          zIndex: 2,
        }}
      >
        {/* Top-left corners */}
        <line x1="0" y1="40" x2="40" y2="40" stroke="rgba(255,255,255,0.2)" strokeWidth="2" />
        <line x1="40" y1="0" x2="40" y2="40" stroke="rgba(255,255,255,0.2)" strokeWidth="2" />
        <line x1="40" y1="40" x2="60" y2="40" stroke="rgba(255,255,255,0.8)" strokeWidth="2" />
        <line x1="40" y1="40" x2="40" y2="60" stroke="rgba(255,255,255,0.8)" strokeWidth="2" />
        
        {/* Top-right corners */}
        <line x1="1080" y1="40" x2="1040" y2="40" stroke="rgba(255,255,255,0.2)" strokeWidth="2" />
        <line x1="1040" y1="0" x2="1040" y2="40" stroke="rgba(255,255,255,0.2)" strokeWidth="2" />
        <line x1="1040" y1="40" x2="1020" y2="40" stroke="rgba(255,255,255,0.8)" strokeWidth="2" />
        <line x1="1040" y1="40" x2="1040" y2="60" stroke="rgba(255,255,255,0.8)" strokeWidth="2" />
        
        {/* Bottom-left corners */}
        <line x1="0" y1="1040" x2="40" y2="1040" stroke="rgba(255,255,255,0.2)" strokeWidth="2" />
        <line x1="40" y1="1080" x2="40" y2="1040" stroke="rgba(255,255,255,0.2)" strokeWidth="2" />
        <line x1="40" y1="1040" x2="60" y2="1040" stroke="rgba(255,255,255,0.8)" strokeWidth="2" />
        <line x1="40" y1="1040" x2="40" y2="1020" stroke="rgba(255,255,255,0.8)" strokeWidth="2" />
        
        {/* Bottom-right corners */}
        <line x1="1080" y1="1040" x2="1040" y2="1040" stroke="rgba(255,255,255,0.2)" strokeWidth="2" />
        <line x1="1040" y1="1080" x2="1040" y2="1040" stroke="rgba(255,255,255,0.2)" strokeWidth="2" />
        <line x1="1040" y1="1040" x2="1020" y2="1040" stroke="rgba(255,255,255,0.8)" strokeWidth="2" />
        <line x1="1040" y1="1040" x2="1040" y2="1020" stroke="rgba(255,255,255,0.8)" strokeWidth="2" />
      </svg>
    </div>
  );
}