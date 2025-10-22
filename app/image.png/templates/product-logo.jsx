export default function ProductLogo({ params }) {
    const image = params.get('image') || 'https://placehold.co/500x500.png';
    const logo = params.get('logo') || 'https://placehold.co/200x70.png';

    return (
        <div tw="size-full flex p-10">
            <div tw="relative flex size-full border border-4 border-black">
                <img src={image} tw="size-full" />

                <div tw="absolute top-0 right-0 mt-2 mr-2 flex h-[100px]">
                    <img src={logo} tw="size-full object-contain w-[300px]" />
                </div>
            </div>
        </div>
    );
}