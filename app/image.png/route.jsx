// import { ImageResponse } from '@cloudflare/pages-plugin-vercel-og/api';
import { ImageResponse } from 'next/server';
import Mocpart from './brickscompare/Mocpart';

export const runtime = 'edge';

export async function GET(request) {
  const { searchParams, host } = new URL(request.url);
  const template = searchParams.get('template');
  const productName = searchParams.get('product_name')
  const imageUrl = searchParams.get('image')?.toString()

  let background = await fetch(`http://${host}/brickscompare/moc-part-bg.png`).then((res) => res.arrayBuffer())
  let image = await fetch(imageUrl).then((res) => res.arrayBuffer())

  if (template === 'brickscompare:moc-part') {

  } else {
    // 404
    return new Response('Template not found', { status: 404 });
  }

  return new ImageResponse(
    (
      <div tw="flex w-full h-full items-center justify-center">
        <img src={background} tw="absolute w-full h-full" />

        <div tw="absolute top-[100px] px-[200px] w-full flex flex-col items-center justify-center h-[800px]">
          <img src={image} tw="w-full h-full" />
        </div>

        <div tw="absolute top-[980px] px-[50px] w-full flex flex-col items-center justify-center h-[100px]">
          <div tw="text-center text-4xl">{productName}</div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 1200,
    },
  );
}