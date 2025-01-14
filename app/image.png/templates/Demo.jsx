export default function Demo({ params }) {
    const title = params.get('title') || 'Title'
    const image = params.get('image') || 'https://placehold.co/200x200.png'
    const image1 = params.get('image1') || 'https://placehold.co/100x100.png'

    return (
        <div tw="flex w-full h-full items-center justify-center">

            <div tw="absolute w-full h-full object-cover flex flex-col items-center justify-center">
                <img src={image} tw="w-full h-full" width="200" height="200" />
            </div>

            <div tw="flex">
                <img src={image1} alt="" style={{
                    width: '200px',
                    height: '200px',
                    transform: 'rotate(69deg)',
                }} />
            </div>

            <h1 tw="text-center absolute top-[20px] text-red-500 text-[69px] font-bold">{title}</h1>
        </div>
    )
}
