export default function LunarCollection({ params }) {
  const image = params.get("image") || "https://lunar-merch.b-cdn.net/davidhenrie.shop/media/631/conversions/image-small.png";
  const text = params.get("text") || "";
  const circle = "https://tda-dev-asset.b-cdn.net/lunar/circle.png";
  const variant = params.get("variant") || "v1";
  const bg_image = params.get("bg_image") || "https://tda-dev-asset.b-cdn.net/lunar/collection-theme-2-new.png";
  if (variant === "v1") {
    return (
      <div tw="absolute inset-0 flex items-center justify-center">
        <div tw="flex relative w-[500px] h-[500px] p-[20px]">
          <img
            src={circle}
            tw="absolute w-[500px] h-[500px] inset-0 object-cover"
          />
          <img tw="w-full h-full object-cover rounded-full" src={image} />
        </div>

        {text ? (
          <div
            style={{
              position: "absolute",
              bottom: "5px",
              fontSize: "15px",
              textTransform: "uppercase",
              fontWeight: 900,
            }}
          >
            {text}
          </div>
        ) : null}
      </div>
    );
  }

  if (variant === "v2") {
    return (
    <div tw="relative flex w-full h-full items-center justify-center">
      <div
        tw="absolute flex flex-col items-center justify-center"
        style={{
          top: "12px",
          left: "12px",
          width: "475px",
          height: "475px",
          borderRadius: "70px",
          overflow: "hidden",
        }}
      >
        <img
          src={image}
          alt=""
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
          }}
        />
      </div>
      <div tw="absolute w-full h-full object-cover flex flex-col items-center justify-center">
        <img src={bg_image} tw="w-full h-full" />
      </div>
    </div>
    );
  }
}
