// ComboImage.jsx
export default function ComboImage({ params }) {
  // Parse image URLs from the params
  const imageUrls = params.get("images")?.split(",") || [];
  const backgroundImage = params.get("background") || "https://genesis-dev.tdagroup.online/storage/media/322/01K6FF2QW34DYZNSPBTPM60SQ9.png";
  const title = params.get("title") || "";
  
  // Determine layout based on number of images
  const imageCount = imageUrls.length;
  
  // Generate the appropriate layout
  let layout;
  
  // Helper function to render an image with a sequence number
  const renderImageWithNumber = (url, index, width, height) => (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: `${width}px`, height: `${height}px`, position: "relative" }}>
      <img 
        src={url}
        style={{
          width: "100%",
          height: "100%",
          borderRadius: "8px",
          objectFit: "contain",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)"
        }}
        width={width}
        height={height}
      />
      <div style={{ 
        position: "absolute", 
        top: "-10px", 
        left: "50%", 
        transform: "translateX(-50%)",
        backgroundColor: "rgba(0, 0, 0, 0.7)", 
        color: "white", 
        borderRadius: "50%", 
        width: "24px", 
        height: "24px", 
        display: "flex", 
        alignItems: "center", 
        justifyContent: "center",
        fontSize: "14px",
        fontWeight: "bold"
      }}>
        {index + 1}
      </div>
    </div>
  );
  
  if (imageCount <= 1) {
    // Single image centered
    layout = (
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%", height: "100%" }}>
        {imageUrls[0] && renderImageWithNumber(imageUrls[0], 0, 400, 400)}
      </div>
    );
  } else if (imageCount === 2) {
    // 2 images side by side
    layout = (
      <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", width: "100%", height: "100%", gap: "16px" }}>
        {imageUrls.map((url, index) => renderImageWithNumber(url, index, 230, 230))}
      </div>
    );
  } else if (imageCount === 3) {
    // 3 images: 1 on top, 2 on bottom
    layout = (
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", width: "100%", height: "100%", gap: "16px" }}>
        {renderImageWithNumber(imageUrls[0], 0, 230, 230)}
        <div style={{ display: "flex", flexDirection: "row", gap: "16px" }}>
          {renderImageWithNumber(imageUrls[1], 1, 230, 230)}
          {renderImageWithNumber(imageUrls[2], 2, 230, 230)}
        </div>
      </div>
    );
  } else if (imageCount === 4) {
    // 4 images in a 2x2 grid
    layout = (
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", width: "100%", height: "100%", gap: "16px" }}>
        <div style={{ display: "flex", flexDirection: "row", gap: "16px" }}>
          {renderImageWithNumber(imageUrls[0], 0, 230, 230)}
          {renderImageWithNumber(imageUrls[1], 1, 230, 230)}
        </div>
        <div style={{ display: "flex", flexDirection: "row", gap: "16px" }}>
          {renderImageWithNumber(imageUrls[2], 2, 230, 230)}
          {renderImageWithNumber(imageUrls[3], 3, 230, 230)}
        </div>
      </div>
    );
  } else if (imageCount === 5) {
    // 5 images: 2 on top, 3 on bottom
    layout = (
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", width: "100%", height: "100%", gap: "8px" }}>
        <div style={{ display: "flex", flexDirection: "row", gap: "8px" }}>
          {renderImageWithNumber(imageUrls[0], 0, 240, 240)}
          {renderImageWithNumber(imageUrls[1], 1, 240, 240)}
        </div>
        <div style={{ display: "flex", flexDirection: "row", gap: "8px" }}>
          {renderImageWithNumber(imageUrls[2], 2, 156, 156)}
          {renderImageWithNumber(imageUrls[3], 3, 156, 156)}
          {renderImageWithNumber(imageUrls[4], 4, 156, 156)}
        </div>
      </div>
    );
  } else {
    // 6 images in a 3x2 grid
    layout = (
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", width: "100%", height: "100%", gap: "8px" }}>
        <div style={{ display: "flex", flexDirection: "row", gap: "8px" }}>
          {renderImageWithNumber(imageUrls[0], 0, 156, 156)}
          {renderImageWithNumber(imageUrls[1], 1, 156, 156)}
          {renderImageWithNumber(imageUrls[2], 2, 156, 156)}
        </div>
        <div style={{ display: "flex", flexDirection: "row", gap: "8px" }}>
          {renderImageWithNumber(imageUrls[3], 3, 156, 156)}
          {renderImageWithNumber(imageUrls[4], 4, 156, 156)}
          {renderImageWithNumber(imageUrls[5], 5, 156, 156)}
        </div>
      </div>
    );
  }

  // Create a simplified component structure to reduce nesting
  return (
    <div style={{ width: "100%", height: "100%", position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <img 
        src={backgroundImage} 
        width={500}
        height={500}
        style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover" }}
      />
      
      {title && (
        <div style={{ position: "absolute", top: "16px", left: 0, right: 0, display: "flex", justifyContent: "center" }}>
          <h1 style={{ fontSize: "20px", fontWeight: "bold", textAlign: "center", padding: "8px 16px", backgroundColor: "rgba(255, 255, 255, 0.8)", borderRadius: "8px" }}>
            {title}
          </h1>
        </div>
      )}
      
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%", height: "100%", padding: "32px" }}>
        {layout}
      </div>
    </div>
  );
}
