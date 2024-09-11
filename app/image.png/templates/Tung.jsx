export default function Demo({ params }) {
    const title = params.get('title') || 'Blank title'
    const image = params.get('image')
    const logo = params.get('logo')

    return (
        <div tw="flex w-full h-full items-center justify-center">


            <div tw="absolute w-full h-full flex flex-col items-center justify-center" >
                <img src={image} tw="w-full h-full" />
            </div>

            <img src={logo} alt="" style={{
                position: 'absolute',
                top: '20px',
                left: '20px',
                width: '100px',
                height: '100px',
                transform: 'rotate(69deg)',
            }} />

            <h1 tw="text-center absolute top-[20px] text-red-500 text-[69px] font-bold"
                style={{
                    fontFamily: 'BeVietnamPro',
                    color: 'cyan',
                    fontFamily: 'Arial',
                }}
            >{title}</h1>
        </div>
    )
}
