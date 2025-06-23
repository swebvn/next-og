'use client';

import { useState } from 'react';

const VARIANTS = ['v1', 'v2', 'v3'];

export const ssr = false;

export default function PreviewBanners() {
    const [text1, setText1] = useState('The Lunar Collection');
    const [text2, setText2] = useState('Shop the latest merchandise products');
    const [image1, setImage1] = useState('https://daudau.cc/images/crab.png');
    const [image2, setImage2] = useState('https://daudau.cc/images/crab.png');
    const [image3, setImage3] = useState('https://daudau.cc/images/crab.png');
    const [image4, setImage4] = useState('https://daudau.cc/images/crab.png');
    const [refreshKey, setRefreshKey] = useState(0);

    const handleRefresh = () => {
        setRefreshKey(prev => prev + 1);
    };

    const getImageUrl = (variant) => {
        const params = new URLSearchParams({
            template: 'mockup-banner-lunar',
            variant: variant,
            text_1: text1,
            text_2: text2,
            image_1: image1,
            image_2: image2,
            image_3: image3,
            image_4: image4,
            _: refreshKey
        });
        return `/image.png?${params.toString()}`;
    };

    return (
        <div className="min-h-screen bg-gray-900 text-white p-8">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                    Lunar Banner Variants Preview
                </h1>

                {/* Controls */}
                <div className="bg-gray-800 p-6 rounded-lg mb-12">
                    <h2 className="text-2xl font-bold mb-6 text-yellow-400">Customize Your Banner</h2>

                    {/* Text Controls */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                            <label className="block text-lg font-medium mb-2">Main Text:</label>
                            <input
                                type="text"
                                value={text1}
                                onChange={(e) => setText1(e.target.value)}
                                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                                placeholder="Enter main text"
                            />
                        </div>
                        <div>
                            <label className="block text-lg font-medium mb-2">Subtitle:</label>
                            <input
                                type="text"
                                value={text2}
                                onChange={(e) => setText2(e.target.value)}
                                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                                placeholder="Enter subtitle text"
                            />
                        </div>
                    </div>

                    {/* Image Controls */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                        <div>
                            <label className="block text-sm font-medium mb-2">Image 1 URL:</label>
                            <input
                                type="url"
                                value={image1}
                                onChange={(e) => setImage1(e.target.value)}
                                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded text-white text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                                placeholder="https://example.com/image1.jpg"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2">Image 2 URL:</label>
                            <input
                                type="url"
                                value={image2}
                                onChange={(e) => setImage2(e.target.value)}
                                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded text-white text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                                placeholder="https://example.com/image2.jpg"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2">Image 3 URL:</label>
                            <input
                                type="url"
                                value={image3}
                                onChange={(e) => setImage3(e.target.value)}
                                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded text-white text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                                placeholder="https://example.com/image3.jpg"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2">Image 4 URL:</label>
                            <input
                                type="url"
                                value={image4}
                                onChange={(e) => setImage4(e.target.value)}
                                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded text-white text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                                placeholder="https://example.com/image4.jpg"
                            />
                        </div>
                    </div>

                    <div className="flex justify-center">
                        <button
                            onClick={handleRefresh}
                            className="px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-medium transition-colors"
                        >
                            Refresh All Variants
                        </button>
                    </div>
                </div>

                {/* Banner Variants Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                    {VARIANTS.map((variant) => (
                        <div key={variant} className="bg-gray-800 rounded-lg p-6 shadow-lg">
                            <h3 className="text-2xl font-bold mb-4 capitalize text-center text-purple-400">
                                Variant {variant.toUpperCase()}
                            </h3>
                            <div className="bg-black rounded-lg p-4 mb-4">
                                <div className="w-full rounded overflow-hidden border border-gray-600" style={{ aspectRatio: '1200/800' }}>
                                    <img
                                        src={getImageUrl(variant)}
                                        alt={`Banner variant ${variant}`}
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                            </div>
                            <div className="text-center">
                                <a
                                    href={getImageUrl(variant)}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded text-sm font-medium transition-colors"
                                >
                                    Open Full Size
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Variant Descriptions */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
                    <div className="bg-gray-800 rounded-lg p-6">
                        <h3 className="text-xl font-bold mb-3 text-purple-400">Variant V1</h3>
                        <ul className="text-gray-300 space-y-2">
                            <li>• Four circular images positioned around the edges</li>
                            <li>• Central text placement with white color</li>
                            <li>• Clean, symmetric layout</li>
                            <li>• Main title at top, subtitle in center</li>
                        </ul>
                    </div>
                    <div className="bg-gray-800 rounded-lg p-6">
                        <h3 className="text-xl font-bold mb-3 text-purple-400">Variant V2</h3>
                        <ul className="text-gray-300 space-y-2">
                            <li>• Four rectangular images with rotation effects</li>
                            <li>• Text positioned on the right side</li>
                            <li>• Warm cream-colored text (#fdefd2)</li>
                            <li>• Subtitle has background accent</li>
                        </ul>
                    </div>
                    <div className="bg-gray-800 rounded-lg p-6">
                        <h3 className="text-xl font-bold mb-3 text-purple-400">Variant V3</h3>
                        <ul className="text-gray-300 space-y-2">
                            <li>• Custom retro-style CSS background</li>
                            <li>• Four polaroid-style photo frames</li>
                            <li>• Warm brown/orange color palette</li>
                            <li>• Central CTA button, no external images</li>
                        </ul>
                    </div>
                </div>

                {/* Usage Information */}
                <div className="bg-gray-800 rounded-lg p-6">
                    <h3 className="text-xl font-bold mb-4 text-yellow-400">API Usage Instructions</h3>
                    <div className="space-y-3 text-gray-300">
                        <p><strong>Base URL:</strong> <code className="bg-gray-700 px-2 py-1 rounded">/image.png</code></p>
                        <p><strong>Template:</strong> <code className="bg-gray-700 px-2 py-1 rounded">mockup-banner-lunar</code></p>
                        <p><strong>Parameters:</strong></p>
                        <ul className="list-disc list-inside ml-4 space-y-1 text-sm">
                            <li><code className="bg-gray-700 px-2 py-1 rounded">variant</code> - v1, v2, or v3 (random if not specified)</li>
                            <li><code className="bg-gray-700 px-2 py-1 rounded">text_1</code> - Main title text</li>
                            <li><code className="bg-gray-700 px-2 py-1 rounded">text_2</code> - Subtitle text</li>
                            <li><code className="bg-gray-700 px-2 py-1 rounded">image_1</code> - First image URL</li>
                            <li><code className="bg-gray-700 px-2 py-1 rounded">image_2</code> - Second image URL</li>
                            <li><code className="bg-gray-700 px-2 py-1 rounded">image_3</code> - Third image URL</li>
                            <li><code className="bg-gray-700 px-2 py-1 rounded">image_4</code> - Fourth image URL</li>
                        </ul>
                        <p><strong>Example URL:</strong></p>
                        <div className="bg-gray-700 p-3 rounded text-sm overflow-x-auto">
                            <code>
                                /image.png?template=mockup-banner-lunar&variant=v1&text_1=Your Title&text_2=Your Subtitle&image_1=https://example.com/img1.jpg
                            </code>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
