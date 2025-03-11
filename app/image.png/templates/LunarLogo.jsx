const COLORS = {
    red: '#ff6b6b',
    green: '#48bb78',
    blue: '#3182ce',
    yellow: '#f6e05e',
    orange: '#f6ad55',
    purple: '#9f7aea',
    pink: '#ed64a6',
    teal: '#38b2ac',
    cyan: '#4fd1c5',
    indigo: '#667eea',
    lightRed: '#fc8181',
    skyBlue: '#4299e1',
    lavender: '#b794f4',
    lime: '#68d391'
};

const LAYOUTS = {
    DEFAULT: 'default',
    VERTICAL: 'vertical',
    CIRCULAR: 'circular',
    DIAGONAL: 'diagonal'
};

const getRandomItem = (array) => array[Math.floor(Math.random() * array.length)];

const createNeonStyle = (color) => ({
    color: '#f1f1f1',
    WebkitTextStroke: `0.5px ${color}`,
    textShadow: `
        0 0 2px #ffffff,
        0 0 4px ${color},
        0 0 6px ${color},
        0 0 10px ${color}
    `
});

const DefaultLayout = ({ keyword, titleStyle }) => (
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

const VerticalLayout = ({ keyword, titleStyle }) => (
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

const CircularLayout = ({ keyword, titleStyle }) => (
    <div tw="mx-auto relative text-3xl uppercase flex flex-col items-center">
        <div tw="text-center text-4xl mb-4" style={titleStyle}>
            {keyword}
        </div>
        <div tw="flex gap-12 items-center justify-center">
            <div tw="relative text-white font-bold">FANS</div>
            <div tw="relative text-white font-bold">MERCH</div>
        </div>
    </div>
);

const DiagonalLayout = ({ keyword, titleStyle, color }) => (
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

const layoutComponents = {
    [LAYOUTS.DEFAULT]: DefaultLayout,
    [LAYOUTS.VERTICAL]: VerticalLayout,
    [LAYOUTS.CIRCULAR]: CircularLayout,
    [LAYOUTS.DIAGONAL]: DiagonalLayout
};

export default function LunarLogo({ params }) {
    const keyword = params.get('text') || 'The Lucommerce';
    const variant = params.get('variant') || getRandomItem(Object.values(LAYOUTS));
    const color = getRandomItem(Object.values(COLORS));
    const titleStyle = createNeonStyle(color);

    const SelectedLayout = layoutComponents[variant] || layoutComponents[LAYOUTS.DEFAULT];

    return (
        <div tw="absolute inset-0 flex items-center justify-center" style={{ fontFamily: 'Outfit' }}>
            <SelectedLayout keyword={keyword} titleStyle={titleStyle} color={color} />
        </div>
    );
}