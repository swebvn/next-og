export default function LunarCollection({ params }) {
    const image = params.get('image') || 'https://lunar-merch.b-cdn.net/davidhenrie.shop/media/631/conversions/image-small.png';
    const text = params.get('text') || '';
    const circle = "https://tda-dev-asset.b-cdn.net/lunar/circle.png"

    return (
        <div tw="absolute inset-0 flex items-center justify-center">
            <div tw="flex relative w-[500px] h-[500px] p-[20px]">
                <img src={circle} tw="absolute w-[500px] h-[500px] inset-0 object-cover" />
                <img
                    tw="w-full h-full object-cover rounded-full"
                    src={image} />
            </div>

            {text ? (
                <div style={{
                    position: 'absolute',
                    bottom: '5px',
                    fontSize: '15px',
                    textTransform: 'uppercase',
                    fontWeight: 900,
                }}>{text}</div>
            ) : null}
        </div>
    )
}