export default function Demo({ params, host }) {
    const title = params.get('title') || 'Title'
    const image = params.get('image')
    const image1 = params.get('image1')

    return (
        <div tw="flex w-full h-full items-center justify-center">

            <div tw="absolute top-[25px] px-[90px] w-full flex flex-col items-center justify-center h-[600px]">
                <img src={image} tw="w-full h-full" />
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
