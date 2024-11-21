export default function InsurlinkMarketing({ params }) {
    const background = params.get('bg') || 'https://bomfy.customedge.co/storage/media/f8bab50a-179f-41d8-b877-29d00780ff0b.jpg'
    const name = params.get('name')
    const phone = params.get('phone')
    const avatar = params.get('avatar')
    const left = '125px';

    return (
        <div tw="flex w-full h-full items-center justify-center">

            <div tw="absolute w-full h-full object-cover flex flex-col items-center justify-center">
                <img src={background} tw="w-full h-full" />
            </div>


            {avatar ?
                <img src={avatar} alt="" style={{
                    width: '78px',
                    height: '78px',
                    top: '407px',
                    left: '16px',
                    borderRadius: '100%',
                    position: 'absolute',
                }} />
                : null
            }

            <div tw="font-bold" style={{
                position: 'absolute',
                top: '450px',
                left: left,
                fontWeight: 900,
                fontSize: '16px',
                textTransform: 'uppercase',
            }}>{name}</div>
            <div style={{
                position: 'absolute',
                top: '466px',
                left: left,
                fontSize: '14px',
            }}>{phone}</div>
        </div>
    )
}
