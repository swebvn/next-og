import { removeBackgroundUrl } from '../../supports';

export default function Demo({ params }) {
    const title = params.get('title') || 'Title'
    const image = params.get('image')
    const logo = removeBackgroundUrl(params.get('image1'));

    return (
        <div tw="flex w-full h-full items-center justify-center">

            <div tw="absolute w-full h-full object-cover flex flex-col items-center justify-center">
                <img src={image} tw="w-full h-full" />
            </div>

            <img src={logo} alt="" style={{
                position: 'absolute',
                top: '50px',
                left: '50px',
                width: '100px',
                height: '100px',
                transform: 'rotate(30deg)',
                borderRadius: '50%',
            }} />

            <h1 tw="text-center absolute top-[20px] text-red-500 text-[69px] font-bold">{title}</h1>
        </div>
    )
}
