export default function LunarCollection({ params }) {
    const image = 'https://remove-bg.customedge.co/lunar-merch.b-cdn.net/ouranhighschoolhostclub.store/media/150/ssrco,mhoodie,mens,fafafa:ca443f4786,front,square_product,x600-bg,f8f8f8.1.jpg';
    const text = "The Simpson T-shirt"


    return (
        <div tw="absolute inset-0 flex items-center justify-center border border-[10px] border-rose-500">
            <img
                tw="-mt-[20px] w-[220px] h-[220px] object-cover rounded-full border border-2 border-gray-900"
                src={image} />
            <div style={{
                position: 'absolute',
                bottom: '5px',
                fontSize: '15px',
                textTransform: 'uppercase',
                fontWeight: 900,
            }}>{text}</div>
        </div>
    )
}