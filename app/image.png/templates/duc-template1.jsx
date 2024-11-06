export default function Demo({ params }) {
    const image_goc1 = params.get('image_goc1')
    const bg_goc1 = params.get('bg_goc1')
    return (
        <div tw="flex w-full h-full items-center justify-center">
            <div tw="absolute w-full h-full object-cover flex flex-col items-center justify-center">
                <img src={image_goc1} tw="w-full h-full" />
            </div>
            <div tw="flex">
            <img src={bg_goc1} alt="" style={{
                position: 'absolute',
                top: 'calc(50% - 260px)',
                left: 'calc(50% - 350px)',
                width: '700px',
                height: '470px', 
                transform: 'rotate3d(1, 0, 10, 15deg)',
            }} />
            </div>
        </div>
    )
}
