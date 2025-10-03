// ComboImage.jsx
import { Poppins } from "next/font/google";

const titleFont = Poppins({
  subsets: ["devanagari"],
  weight: ["700"], 
});

export default function VipComboImage({ params }) {
  const scale = 1024 / 500; // ~2.048
  const imageUrls = params.get("images")
  ? params.get("images")
      .split(",")
      .map(url => {
        const cleanUrl = url.replace(/^https?:\/\//, "");
        return `https://remove-bg.tdagroup.online/${cleanUrl}`;
      })
  : [
      "https://remove-bg.tdagroup.online/aihkfac.skymage.net/v1/genesis-portal.b-cdn.net/media/3600/01K6FM72NENHRX94Y4KYSCQKRR.jpg?w=500",
      "https://remove-bg.tdagroup.online/aihkfac.skymage.net/v1/genesis-portal.b-cdn.net/media/3602/01K6FM72NFNETSQDGV4TH8AJ97.jpg?w=500",
      "https://remove-bg.tdagroup.online/aihkfac.skymage.net/v1/genesis-portal.b-cdn.net/media/3604/01K6FM72NGZ9AVJ9KEFTFMMRJQ.jpg?w=500",
      "https://remove-bg.tdagroup.online/aihkfac.skymage.net/v1/genesis-portal.b-cdn.net/media/3606/01K6FM72NJR48YHXM9ADSBQWZF.jpg?w=500",
    ];
  const backgroundImage = params.get("background") || "https://images.unsplash.com/photo-1729575846511-f499d2e17d79?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const title = params.get("title") || "CHOOSE YOUR OPTION";
  const startIndex = params.get("start_index")
  ? parseInt(params.get("start_index"), 10) - 1
  : 0;

  const imageCount = imageUrls.length;
  let layout;

  // Helper render
  const renderImageWithNumber = (url, index, width, height) => (
    <div style={{ 
      display: "flex", 
      alignItems: "center", 
      justifyContent: "center", 
      width: `${width * scale}px`, 
      height: `${height * scale}px`, 
      position: "relative" 
    }}>
      <img 
        src={url}
        style={{
          width: "100%",
          height: "100%",
          borderRadius: `${8 * scale}px`,
          objectFit: "contain"
        }}
      />
      <div style={{ 
        position: "absolute", 
/*         top: `${10 * scale}px`, 
        left: "50%",  */
        bottom: `${10 * scale}px`,   // thay top -> bottom
        right: `${0 * scale}px`,   // thay left -> right
        transform: "translateX(-50%)",
        backgroundColor: "rgba(0, 0, 0, 0.7)", 
        color: "white", 
        borderRadius: "50%", 
        width: `${30 * scale}px`, 
        height: `${30 * scale}px`, 
        display: "flex", 
        alignItems: "center", 
        justifyContent: "center",
        fontSize: `${14 * scale}px`,
        fontWeight: "bold"
      }}>
        {index + 1 + startIndex}
      </div>
    </div>
  );

  // Layouts (scale applied)
  if (imageCount <= 1) {
    layout = (
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%", height: "100%" }}>
        {imageUrls[0] && renderImageWithNumber(imageUrls[0], 0, 400, 400)}
      </div>
    );
  } else if (imageCount === 2) {
    layout = (
      <div style={{ display: "flex", flexDirection: "row", gap: `${6 * scale}px` }}>
        {imageUrls.map((url, i) => renderImageWithNumber(url, i, 230, 230))}
      </div>
    );
  } else if (imageCount === 3) {
    layout = (
      <div style={{ display: "flex", flexDirection: "column", gap: `${0 * scale}px` }}>
        {/* Hàng trên: 2 ảnh cạnh nhau */}
        <div style={{ display: "flex", flexDirection: "row", gap: `${8 * scale}px`, justifyContent: "center" }}>
          {renderImageWithNumber(imageUrls[0], 0, 230, 230)}
          {renderImageWithNumber(imageUrls[1], 1, 230, 230)}
        </div>
        {/* Hàng dưới: 1 ảnh căn giữa */}
        <div style={{ display: "flex", justifyContent: "center" }}>
          {renderImageWithNumber(imageUrls[2], 2, 230, 230)}
        </div>
      </div>
    );
  } else if (imageCount === 4) {
    layout = (
      <div style={{ display: "flex", flexDirection: "column", gap: `${8 * scale}px` }}>
        <div style={{ display: "flex", gap: `${8 * scale}px` }}>
          {renderImageWithNumber(imageUrls[0], 0, 210, 210)}
          {renderImageWithNumber(imageUrls[1], 1, 210, 210)}
        </div>
        <div style={{ display: "flex", gap: `${8 * scale}px` }}>
          {renderImageWithNumber(imageUrls[2], 2, 210, 210)}
          {renderImageWithNumber(imageUrls[3], 3, 210, 210)}
        </div>
      </div>
    );
  } else if (imageCount === 5) {
    layout = (
      <div style={{ display: "flex", flexDirection: "column", gap: `${8 * scale}px` }}>
        {/* Hàng trên: 3 ảnh, căn giữa */}
        <div style={{ display: "flex", gap: `${8 * scale}px`, justifyContent: "center" }}>
          {renderImageWithNumber(imageUrls[0], 0, 156, 156)}
          {renderImageWithNumber(imageUrls[1], 1, 156, 156)}
          {renderImageWithNumber(imageUrls[2], 2, 156, 156)}
        </div>
        {/* Hàng dưới: 2 ảnh, căn giữa */}
        <div style={{ display: "flex", gap: `${8 * scale}px`, justifyContent: "center" }}>
          {renderImageWithNumber(imageUrls[3], 3, 156, 156)}
          {renderImageWithNumber(imageUrls[4], 4, 156, 156)}
        </div>
      </div>
    );
  } else {
    layout = (
      <div style={{ display: "flex", flexDirection: "column", gap: `${8 * scale}px` }}>
        <div style={{ display: "flex", gap: `${8 * scale}px` }}>
          {renderImageWithNumber(imageUrls[0], 0, 156, 156)}
          {renderImageWithNumber(imageUrls[1], 1, 156, 156)}
          {renderImageWithNumber(imageUrls[2], 2, 156, 156)}
        </div>
        <div style={{ display: "flex", gap: `${8 * scale}px` }}>
          {renderImageWithNumber(imageUrls[3], 3, 156, 156)}
          {renderImageWithNumber(imageUrls[4], 4, 156, 156)}
          {renderImageWithNumber(imageUrls[5], 5, 156, 156)}
        </div>
      </div>
    );
  }

  return (
    <div style={{ width: "1024px", height: "1024px", position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <img 
        src={backgroundImage} 
        width={1024}
        height={1024}
        style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover" }}
      />
      {title && (
        <div
          style={{
            position: "absolute",
            top: `${0 * scale}px`,
            left: 0,
            right: 0,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <h1
            className={titleFont.className}
            style={{
              fontSize: `${20 * scale}px`,
              textAlign: "center",
              padding: `${8 * scale}px ${16 * scale}px`,
              borderRadius: `${8 * scale}px`,
              color: "#fff",
              textShadow: "2px 2px 4px rgba(0,0,0,0.6)",
            }}
          >
            {title}
          </h1>
        </div>
      )}
      <div style={{ 
          display: "flex", 
          alignItems: "center", 
          justifyContent: "center", 
          width: "100%", 
          height: "100%", 
          padding: `${32 * scale}px`,
          paddingTop: `${80 * scale}px`  // chừa chỗ cho title
        }}
      >
        {layout}
      </div>
    </div>
  );
}
