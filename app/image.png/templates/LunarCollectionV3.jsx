export default function LunarCollectionV3({ params }) {
  const design =
    params.get("image") ||
    "https://lunar-merch-2.b-cdn.net/tylerdurdenmerch.shop/media/124/ssrco,essential_tee,mens_01,05081f:66c8590f4e,front,product_square,x600.jpg";

  const bg_image =
    params.get("bg_image") ||
    "https://tda-sale-stuff.b-cdn.net/lunar/collections/collection-v3.png";

  const type_code = params.get("type_code") || "t-Shirts";

  const typeLabelMap = {
    "t-shirts": "T-Shirts",
    "hoodies": "Hoodies",
    "sweatshirts": "Sweatshirt",
    "mugs": "Mugs",
    "cases": "Cases",
    "posters": "Posters",
    "pillows-covers": "Pillows Cover",
  };

  const label = typeLabelMap[type_code] || "New Arrival";

  return (
    <div
      style={{
        width: "1080px",
        height: "1080px",
        position: "relative",
        display: "flex",
      }}
    >
      {/* DESIGN */}
      <div
        style={{
          position: "absolute",
          left: "175px",
          top: "230px",
          width: "687px",
          height: "677px",
          overflow: "hidden",
          zIndex: 1,
          display: "flex",
        }}
      >
        <img
          src={design}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "top left",
          }}
        />
      </div>

      {/* BACKGROUND — KHUNG */}
      <img
        src={bg_image}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "1080px",
          height: "1080px",
          zIndex: 2,
        }}
      />

      {/* TEXT */}
      <div
        style={{
          position: "absolute",
          right: "35px",
          top: "60px",
          zIndex: 3,
          display: "flex",
          fontSize: "80px",
          fontWeight: 700,
          letterSpacing: "0.01em",
          color: "#ffffff",
          textTransform: "uppercase",
          whiteSpace: "nowrap",
        }}
      >
        {label}
      </div>
    </div>
  );
}
