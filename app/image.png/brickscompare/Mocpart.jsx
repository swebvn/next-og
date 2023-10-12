export default function Mocpart({ params, host }) {
  const productName = params.get('product_name')
  const image = params.get('image')

  return (
    <div tw="flex w-full h-full items-center justify-center">
      <img src={`http://${host}/brickscompare/moc-part-bg.png`} tw="absolute w-full h-full" />

      <div tw="absolute top-[25px] px-[90px] w-full flex flex-col items-center justify-center h-[600px]">
        <img src={image} tw="w-full h-full" />
      </div>

      <div tw="absolute top-[650px] px-[35px] w-full flex flex-col items-center justify-center h-[70px]">
        <div tw="text-center text-2xl">{productName}</div>
      </div>
    </div>
  )
}
