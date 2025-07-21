
export default function Lachai({ params }) {
    const real1 = 'http://localhost:3000/img/tuyet.jpg'
    const real2 = 'http://localhost:3000/img/843c821c544bcfdb561c6d0f1bf72b6f.jpg'
    const real3 = 'http://localhost:3000/img/e6df767a2d3d7827522a71a7226b81af.jpg'
    const real4 = 'http://localhost:3000/img/real1.jpg'
    const ai = 'http://localhost:3000/img/photo_2025-07-16_19-59-30.jpg'
    const ai1 = 'http://localhost:3000/img/removebg.png'
    const ai2 = 'http://localhost:3000/img/bupbe.png'
    const ai3 = 'http://localhost:3000/img/ai3.png'
    const bg1 = 'http://localhost:3000/img/bg1.png'
    const meo1 = 'http://localhost:3000/img/meo1.jpeg'
    const meo2 = 'http://localhost:3000/img/meo2.jpeg'
    const treo_real = 'http://localhost:3000/img/bang treo.jpeg'
    const treo_ai = 'http://localhost:3000/img/bangtreoai.jpg'
    const treo_ai2 = 'http://localhost:3000/img/treo_ai2.jpg'
    const treo_ai2_bg = 'http://localhost:3000/img/treo_ai2_removebg.png'
    const mac = 'http://localhost:3000/img/mac.png'
    const door1 = 'http://localhost:3000/img/door1.jpg'
    const hongty = 'http://localhost:3000/img/hongty.jpeg'
    const den1 = 'http://localhost:3000/img/den1.png'
    const num = params.get('avatar')
    return (
        <div tw="flex w-full h-full items-center justify-center">

            <div tw="realtive w-full h-full object-cover flex flex-col items-center justify-center" style="object-fit:contain!importain">
                <img src={ai} tw="w-full absolute blur-2xl z-2"/>
                <img src={door1} tw="w-full h-full blur-2xl z-2 opacity-3" />
                <img src={door1} tw="w-full h-full blur-2xl z-2 opacity-3" />
                <img src={door1} tw="w-full h-full blur-2xl z-2 opacity-3" />
                <img src={door1} tw="w-full h-full blur-2xl z-2 opacity-3" />
                <img src={door1} tw="w-full h-full blur-2xl z-2 opacity-3" />
                {/*<img src={treo_real} tw="w-[20%] absolute z-100 top-1 right-1"/>*/}
                {/*<p tw="absolute z-1 text-white top-32 text-2xl right-23">hello ronaldo</p>*/}
                {/*<img src={real1} tw="w-full h-full absolute z-1 opacity-50" />*/}
                {/*<img src={real2} tw="w-full h-full absolute opacity-2" />*/}
                {/*<img src={real3} tw="w-full h-full absolute opacity-2" />*/}
                {/*<img src={real1} tw="w-full h-full absolute opacity-2" />*/}
                {/*<img src={real2} tw="w-full h-full absolute opacity-2" />*/}
            </div>

        </div>
    )
}
