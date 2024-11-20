export default function InsurlinkMarketing({ params }) {
    const background = params.get('bg') || 'https://bomfy.customedge.co/storage/media/f8bab50a-179f-41d8-b877-29d00780ff0b.jpg'
    const name = params.get('name')
    const phone = params.get('phone')
    const left = '125px';

    return (
        <div tw="flex w-full h-full items-center justify-center">

            <div tw="absolute w-full h-full object-cover flex flex-col items-center justify-center">
                <img src={background} tw="w-full h-full" />
            </div>

            <div tw="font-bold" style={{
                position: 'absolute',
                top: '445px',
                left: left,
                fontWeight: 900,
                fontSize: '16px',
                textTransform: 'uppercase',
            }}>{name}</div>
            <div style={{
                position: 'absolute',
                top: '465px',
                left: left,
                fontSize: '14px',
            }}>{phone}</div>
        </div>
    )
}
