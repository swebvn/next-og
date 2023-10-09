export default async function Mocpart({ params, host }) {
  const productName = params.get('product_name')


  console.log('image', image)


  return (
    <div tw="flex w-full h-full items-center justify-center">
      <img src={`http://${host}/brickscompare/moc-part-bg.png`} tw="absolute w-full h-full" />

      <div tw="absolute top-[100px] px-[200px] w-full flex flex-col items-center justify-center h-[800px]">
        <img src={image} tw="w-full h-full" />
      </div>

      <div tw="absolute top-[980px] px-[50px] w-full flex flex-col items-center justify-center h-[100px]">
        <div tw="text-center text-4xl">{productName}</div>
      </div>
    </div>
  )
}
