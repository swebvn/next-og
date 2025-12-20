export default function LunarCollectionOG({ params }) {
  const productImage =
    params.get("image") ||
    //"https://lunar-merch.b-cdn.net/rinalipa.shop/media/840/image.png";
    "https://lunar-merch-2.b-cdn.net/papameat.shop/media/226/ssrco,classic_tee,mens_02,101010:01c5ca27c6,front,product_square,x600.jpg";
    //"https://lunar-merch.b-cdn.net/hot.test.tdalunar.com/media/553/307_20251030_174757_mockup.jpg";

  const styleId = params.get("style") || "v1";

  const styles = {
    v1: {
      frameUrl:
        //"https://lunar-merch.b-cdn.net/hot.test.tdalunar.com/media/1146/png-mixed-media-purple-frame-design-trans.png",
        "https://tda-sale-stuff.b-cdn.net/lunar/collections/collection-template3-v1.png",
      product: {
        x: 148.5,
        y: 148.5,
        width: 786.5,
        height: 786.5,
      },
    },

    v2: {
      frameUrl:
        //"https://lunar-merch.b-cdn.net/hot.test.tdalunar.com/media/1171/26992588_social_media_post_83_12-(3).png",
        "https://tda-sale-stuff.b-cdn.net/lunar/collections/collection-template3-v2.png",
      product: {
        x: 80.5,
        y: 80.5,
        width: 911.8,
        height: 911.8,
      },
    },

    v3: {
      frameUrl:
        //"https://lunar-merch.b-cdn.net/hot.test.tdalunar.com/media/1171/26992588_social_media_post_83_12-(3).png",
        "https://tda-sale-stuff.b-cdn.net/lunar/collections/collection-template3-v2.png",
        product: {
          x: 32,
          y: 60.7,
          width: 979,
          height: 979,
        },  
    },
    v4: {
      frameUrl:
        //"https://lunar-merch.b-cdn.net/hot.test.tdalunar.com/media/1166/edited_39248386_fashion_7-V1.png",
        "https://tda-sale-stuff.b-cdn.net/lunar/collections/collection-template3-v4.png",
      product: {
        x: 233.6,
        y: 233.6,
        width: 612.8,
        height: 612.8,
      },     
    },
    v5: {
      frameUrl:
        //"https://lunar-merch.b-cdn.net/hot.test.tdalunar.com/media/1165/edited_37233493_fashion_3_2V1.png",
        "https://tda-sale-stuff.b-cdn.net/lunar/collections/collection-template3-v5.png",
      product: {
        x: 137,
        y: 127,
        width: 812,
        height: 812,
      },
    },
    v6: {
      frameUrl:
        //"https://lunar-merch.b-cdn.net/hot.test.tdalunar.com/media/1170/edited_39524431_3g-(3).png",
        "https://tda-sale-stuff.b-cdn.net/lunar/collections/collection-template3-v6.png",
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
