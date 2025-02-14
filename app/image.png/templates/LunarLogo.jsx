export default function LunarLogo({params}) {
    const keyword = params.get('text') || 'The Lucommerce';

    const layoutVariants = ['default', 'vertical', 'circular', 'diagonal'];
    const variant = params.get('variant') || layoutVariants[Math.floor(Math.random() * layoutVariants.length)];

    // expanded color palette with modern, neon, and pastel colors
    const colors = [
        '#ff6b6b', // coral red
        '#48bb78', // green
        '#3182ce', // blue
        '#f6e05e', // yellow
        '#f6ad55', // orange
        '#9f7aea', // purple
        '#ed64a6', // pink
        '#38b2ac', // teal
        '#4fd1c5', // cyan
        '#667eea', // indigo
        '#fc8181', // light red
        '#4299e1', // sky blue
        '#b794f4', // lavender
        '#68d391', // lime green
        '#4fd1c5'  // turquoise
    ];
    const color = colors[Math.floor(Math.random() * colors.length)];

    const titleStyle = {
        color: '#f1f1f1',
        WebkitTextStroke: `0.5px ${color}`,
        textShadow: `
            0 0 2px #ffffff,
            0 0 4px ${color},
            0 0 6px ${color},
            0 0 10px ${color}
        `
    }

    const DefaultLayout = () => (
        <div tw="mx-auto flex items-center text-3xl uppercase max-w-[450px]">
            <div tw="pr-2 word-wrap text-right text-4xl" style={titleStyle}>
                {keyword}
            </div>
            <div tw="pl-2 flex flex-col items-start text-white border-l-2 border-white font-bold">
                <span>FANS</span>
                <span>MERCH</span>
            </div>
        </div>
    );

    const VerticalLayout = () => (
        <div tw="mx-auto flex flex-col items-center text-3xl uppercase max-w-[450px]">
            <div tw="mb-2 text-center text-4xl" style={titleStyle}>
                {keyword}
            </div>
            <div tw="pt-2 flex gap-4 items-center text-white border-t-2 border-white font-bold">
                <span>FANS</span>
                <span>MERCH</span>
            </div>
        </div>
    );

    const CircularLayout = () => (
        <div tw="mx-auto relative text-3xl uppercase flex flex-col items-center">
            <div tw="text-center text-4xl mb-4" style={titleStyle}>
                {keyword}
            </div>
            <div tw="flex gap-12 items-center justify-center">
                <div tw="relative rotate-[-15deg] text-white font-bold">FANS</div>
                <div tw="relative rotate-[15deg] text-white font-bold">MERCH</div>
            </div>
        </div>
    );

    const DiagonalLayout = () => (
        <div tw="mx-auto flex flex-col items-center text-3xl uppercase max-w-[500px] relative">
            <div
                tw="text-5xl transform -rotate-12 mb-6"
                style={{
                    ...titleStyle,
                    filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))'
                }}
            >
                {keyword}
            </div>
            <div tw="flex flex-col items-end transform rotate-12 absolute -bottom-4 right-0">
                <div tw="flex items-center gap-3 p-3" style={{
                    background: `linear-gradient(135deg, transparent, ${color}33)`,
                    border: `1px solid ${color}`,
                    borderRadius: '4px'
                }}>
                    <span tw="text-white font-bold tracking-wider">FANS</span>
                    <span tw="text-white font-bold tracking-wider">MERCH</span>
                </div>
            </div>
        </div>
    );

    const layouts = {
        default: DefaultLayout,
        vertical: VerticalLayout,
        circular: CircularLayout,
        diagonal: DiagonalLayout
    };

    const SelectedLayout = layouts[variant] || layouts.default;

    return (
        <div tw="absolute inset-0 flex items-center justify-center"
            style={{
                fontFamily: 'Outfit',
            }}
        >
            <SelectedLayout />
        </div>
    );
}