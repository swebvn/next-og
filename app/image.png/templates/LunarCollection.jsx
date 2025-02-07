export default function LunarCollection({ params }) {
    const image = params.get('image') || 'https://remove-bg.customedge.co/lunar-merch.b-cdn.net/ouranhighschoolhostclub.store/media/150/ssrco,mhoodie,mens,fafafa:ca443f4786,front,square_product,x600-bg,f8f8f8.1.jpg';
    const circle = "https://lunar-merch.b-cdn.net/000-assets/circle.png"


    return (
        <div tw="absolute inset-0 flex items-center justify-center">
            <div tw="flex relative w-[250px] h-[250px] p-[15px]">
                <img src={circle} tw="absolute w-[250px] h-[250px] inset-0 object-cover" />
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