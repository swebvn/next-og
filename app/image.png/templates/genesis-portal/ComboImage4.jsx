// ComboImage.jsx

export default function ComboImage4({ params }) {
    const scale = 1024 / 500; // ~2.048
    const imageUrls = params.get("images")
    ? params.get("images")
        .split(",")
        .map(url => {
          const cleanUrl = url.replace(/^https?:\/\//, "");
          return `https://remove-bg.tdagroup.online/${cleanUrl}`;
        })
    : [
        "https://remove-bg.tdagroup.online/aihkfac.skymage.net/v1/genesis-portal.b-cdn.net/media/4683/01K6TJZA35M2SJS697NH93DJXC.jpg?w=500",
        "https://remove-bg.tdagroup.online/aihkfac.skymage.net/v1/genesis-portal.b-cdn.net/media/4686/01K6TJZA36GGT2ZKD22WK4YB05.jpg?w=500",
        "https://remove-bg.tdagroup.online/aihkfac.skymage.net/v1/genesis-portal.b-cdn.net/media/4689/01K6TJZA37527B5HFFNXZKK96Z.jpg?w=500",
        "https://remove-bg.tdagroup.online/aihkfac.skymage.net/v1/genesis-portal.b-cdn.net/media/4692/01K6TJZA3815N9DGVFDA93AHYB.jpg?w=500",
        "https://remove-bg.tdagroup.online/aihkfac.skymage.net/v1/genesis-portal.b-cdn.net/media/4695/01K6TJZA39TK1WSJHX791S7VTB.jpg?w=500",
        "https://remove-bg.tdagroup.online/aihkfac.skymage.net/v1/genesis-portal.b-cdn.net/media/4698/01K6TJZA3B1MW0T3Y4M5QJJGWV.jpg?w=500",
      ];
    const backgroundImage = params.get("background") || "https://genesis-portal.b-cdn.net/media/5100/01K6X8Y1Z4QRJRXKXZXDRQF8CG.png";
    const title = params.get("title") || "Choose Your Option";
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
      bottom: `${10 * scale}px`, 
      right: `${10 * scale}px`, 
      width: `${42 * scale}px`, 
      height: `${42 * scale}px`, 
      background: "#FFCC00", 
      clipPath: "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
      display: "flex", 
      alignItems: "center", 
      justifyContent: "center",
      fontSize: `${16 * scale}px`,
      fontWeight: "bold",
      color: "#043671",
      textShadow: "1px 1px 2px rgba(0,0,0,0.6)"
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
              style={{
                fontSize: `${30 * scale}px`,
                textAlign: "center",
                padding: `${8 * scale}px ${16 * scale}px`,
                borderRadius: `${8 * scale}px`,
                color: "#043671",
                letterSpacing: '5px',
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
  