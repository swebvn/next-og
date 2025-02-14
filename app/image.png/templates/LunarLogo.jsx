export default function LunarLogo({params}) {
    const keyword = params.get('text') || 'Saber Marionette';

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

    return (
        <div tw="absolute inset-0 flex items-center justify-center"
        style={{
            fontFamily: 'Outfit',
        }}
        >
            <div tw="mx-auto flex items-center text-3xl uppercase max-w-[450px]">
                <div tw="pr-2 word-wrap text-right text-4xl"
                    style={titleStyle}
                >
                    {keyword}
                </div>
                <div tw="pl-2 flex flex-col items-start text-white border-l-2 border-white font-bold">
                    <span>FANS</span>
                    <span>MERCH</span>
                </div>
            </div>
        </div>
    )
}