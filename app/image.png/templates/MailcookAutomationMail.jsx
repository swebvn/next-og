export default function MailcookAutomationMail({ params }) {
    const background = params.get('bg') || 'https://tda-dev-asset.b-cdn.net/mailcook/banner-header.jpg'
    const logo = params.get('logo')

    return (
        <div tw="flex w-full h-full items-center justify-center">

            <div tw="absolute w-full h-full object-cover flex flex-col items-center justify-center">
                <img src={background} tw="w-full h-full" />
            </div>


            {logo ?
                <img src={logo} alt="logo" tw="absolute top-10 w-[24%]" />
                : null
            }
        </div>
    )
}
