'use client';

import { useState } from 'react';
import { LAYOUTS } from '../image.png/templates/LunarLogo';

const VARIANTS = Object.values(LAYOUTS);

export default function PreviewLogos() {
    const [keyword, setKeyword] = useState('The Lucommerce');
    const [refreshKey, setRefreshKey] = useState(0);

    const handleRefresh = () => {
        setRefreshKey(prev => prev + 1);
    };

    const getImageUrl = (variant) => {
        const baseUrl = window.location.origin;
        return `${baseUrl}/image.png?template=lunar-logo&text=${encodeURIComponent(keyword)}&variant=${variant}&_=${refreshKey}`;
    };

    return (
        <div className="min-h-screen bg-gray-900 text-white p-8">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                    Lunar Logo Variants Preview
                </h1>

                {/* Controls */}
                <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-12 bg-gray-800 p-6 rounded-lg">
                    <div className="flex flex-col sm:flex-row gap-4 items-center">
                        <label className="text-lg font-medium">Text:</label>
                        <input
                            type="text"
                            value={keyword}
                            onChange={(e) => setKeyword(e.target.value)}
                            className="px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 min-w-[200px]"
                            placeholder="Enter logo text"
                        />
                    </div>
                    <button
                        onClick={handleRefresh}
                        className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-colors"
                    >
                        Refresh All
                    </button>
                </div>

                {/* Logo Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                    {VARIANTS.map((variant) => (
                        <div key={variant} className="bg-gray-800 rounded-lg p-6 shadow-lg">
                            <h3 className="text-xl font-bold mb-4 capitalize text-center text-blue-400">
                                {variant} Layout
                            </h3>
                            <div className="bg-black rounded-lg p-4 mb-4">
                                <img
                                    src={getImageUrl(variant)}
                                    alt={`${variant} logo variant`}
                                    className="w-full h-auto rounded border border-gray-600"
                                    style={{ aspectRatio: '500/200' }}
                                />
                            </div>
                            <div className="text-center">
                                <p className="text-sm text-gray-400 mb-2">Size: 500x200</p>
                                <button
                                    onClick={() => window.open(getImageUrl(variant), '_blank')}
                                    className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded text-sm font-medium transition-colors"
                                >
                                    Open Full Size
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Random Variant */}
                <div className="mt-12 bg-gray-800 rounded-lg p-6 shadow-lg">
                    <h3 className="text-2xl font-bold mb-4 text-center text-purple-400">
                        Random Variant (No variant parameter)
                    </h3>
                    <div className="bg-black rounded-lg p-4 mb-4 max-w-2xl mx-auto">
                        <img
                            src={`${typeof window !== 'undefined' ? window.location.origin : ''}/image.png?text=${encodeURIComponent(keyword)}&_=${refreshKey}`}
                            alt="Random logo variant"
                            className="w-full h-auto rounded border border-gray-600"
                            style={{ aspectRatio: '500/200' }}
                        />
                    </div>
                    <div className="text-center">
                        <p className="text-sm text-gray-400 mb-4">
                            This shows a randomly selected variant (changes on each refresh)
                        </p>
                        <button
                            onClick={handleRefresh}
                            className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-medium transition-colors"
                        >
                            Get New Random Variant
                        </button>
                    </div>
                </div>

                {/* Usage Information */}
                <div className="mt-12 bg-gray-800 rounded-lg p-6">
                    <h3 className="text-xl font-bold mb-4 text-yellow-400">Usage Instructions</h3>
                    <div className="space-y-3 text-gray-300">
                        <p><strong>Base URL:</strong> <code className="bg-gray-700 px-2 py-1 rounded">/image.png</code></p>
                        <p><strong>Parameters:</strong></p>
                        <ul className="list-disc list-inside ml-4 space-y-1">
                            <li><code className="bg-gray-700 px-2 py-1 rounded">text</code> - The text to display (default: "The Lucommerce")</li>
                            <li><code className="bg-gray-700 px-2 py-1 rounded">variant</code> - Specific variant: {VARIANTS.join(', ')}</li>
                        </ul>
                        <p><strong>Examples:</strong></p>
                        <ul className="list-disc list-inside ml-4 space-y-1 text-sm">
                            <li><code className="bg-gray-700 px-2 py-1 rounded">/image.png?text=My Brand&variant=stacked</code></li>
                            <li><code className="bg-gray-700 px-2 py-1 rounded">/image.png?text=Cool Logo&variant=gradient</code></li>
                            <li><code className="bg-gray-700 px-2 py-1 rounded">/image.png?text=Random Logo</code> (random variant)</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
