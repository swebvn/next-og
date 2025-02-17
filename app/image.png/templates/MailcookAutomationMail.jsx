export default function MailcookAutomationMail({ params }) {
    const background = params.get('bg') || 'https://tda-dev-asset.b-cdn.net/mailcook/mail5.jpg'
    const text = params.get('text')
    const name = params.get('name')

    return (
        <div tw="flex w-full h-full items-center justify-center">

            <div tw="absolute w-full h-full object-cover flex flex-col items-center justify-center">
                <img src={background} tw="w-full h-full" />
            </div>

            <div tw="flex flex-col items-center justify-center w-full px-[14%] mt-[180px]">
                {text && <div tw="text-4xl">{text}</div>}
                <div tw="flex items-center justify-center w-full mt-6">{<span tw="mr-2">-----</span>}{name && <div tw="text-4xl">{name}</div>}{<span tw="ml-2">-----</span>} </div>
            </div>
        </div>
    )
}