export default function LunarCollectionOG({ params }) {
  const productImage =
    params.get("image") ||
    "https://lunar-merch.b-cdn.net/rinalipa.shop/media/840/image.png";
    "https://lunar-merch-2.b-cdn.net/papameat.shop/media/226/ssrco,classic_tee,mens_02,101010:01c5ca27c6,front,product_square,x600.jpg";
    //"https://lunar-merch-2.b-cdn.net/hughlauriemerchandise.shop/media/917/image.png";

  const styleId = params.get("style") || "v1";

  const styles = {
    v1: {
      frameUrl:
        "https://lunar-merch.b-cdn.net/hot.test.tdalunar.com/media/1146/png-mixed-media-purple-frame-design-trans.png",
      product: {
        x: 148.5,
        y: 148.5,
        width: 786.5,
        height: 786.5,
      },
    },

    v2: {
      frameUrl:
        "https://lunar-merch.b-cdn.net/hot.test.tdalunar.com/media/1145/37233511_fashion_8-(1)-(1).png",

      productFrame: {
        padding: 24,
        borderRadius: 28,
        backgroundColor: "#ffffff",
        boxShadow: "0 18px 40px rgba(0,0,0,0.18)",
      },

      product: {
        x: 282.6,
        y: 308.1,
        width: 500.8,
        height: 500.8,
      },
    },

    v3: {
      frameUrl:
        "https://lunar-merch.b-cdn.net/hot.test.tdalunar.com/media/1148/New-Project-(9).png",
        product: {
          x: 32,
          y: 60.7,
          width: 979,
          height: 979,
        },  
    },
    v4: {
      frameUrl:
        "https://lunar-merch.b-cdn.net/hot.test.tdalunar.com/media/1156/edited_39248386_fashion_7.png",
      product: {
        x: 233.6,
        y: 233.6,
        width: 612.8,
        height: 612.8,
      },     
    },
    v5: {
      frameUrl:
        "https://lunar-merch.b-cdn.net/hot.test.tdalunar.com/media/1149/37233493_fashion_3_2-_square.png",
      product: {
        x: 137,
        y: 127,
        width: 812,
        height: 812,
      },
    },
    v6: {
      frameUrl:
        "https://lunar-merch.b-cdn.net/hot.test.tdalunar.com/media/1155/39524431_3g-(1).png",
      product: {
        x: 183,
            y: 131,
            width: 702,
            height: 702,
      },
    },
  };

  const style = styles[styleId] || styles.v1;

  return (
    <div
      style={{
        width: 1080,
        height: 1080,
        position: "relative",
        display: "flex",
        backgroundColor: "transparent",
      }}
    >
      {/* ===== PRODUCT ===== */}
      {style.product ? (
        style.productFrame ? (
          <div
            style={{
              position: "absolute",
              left: style.product.x - style.productFrame.padding,
              top: style.product.y - style.productFrame.padding,
              width:
                style.product.width +
                style.productFrame.padding * 2,
              height:
                style.product.height +
                style.productFrame.padding * 2,
              backgroundColor: style.productFrame.backgroundColor,
              borderRadius: style.productFrame.borderRadius,
              boxShadow: style.productFrame.boxShadow,
              display: "flex",
              zIndex: 1,
            }}
          >
            <img
              src={productImage}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius:
                  style.productFrame.borderRadius -
                  style.productFrame.padding / 2,
              }}
            />
          </div>
        ) : (
          <img
            src={productImage}
            style={{
              position: "absolute",
              left: style.product.x,
              top: style.product.y,
              width: style.product.width,
              height: style.product.height,
              objectFit: "cover",
              zIndex: 1,
            }}
          />
        )
      ) : (
        // 👉 v3: full image
        <img
          src={productImage}
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 1080,
            height: 1080,
            objectFit: "cover",
            zIndex: 1,
          }}
        />
      )}

      {/* ===== FRAME ===== */}
      <img
        src={style.frameUrl}
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 1080,
          height: 1080,
          zIndex: 3,
        }}
      />
    </div>
  );
}
