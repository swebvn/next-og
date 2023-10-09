export default function Mocpart({ params, host }: { params: URLSearchParams, host: string }) {
  const productName = params.get('product_name')
  const image = params.get('image')

  return (
    <div style={{
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      {/* background */}
      <img src={`http://${host}/brickscompare/moc-part-bg.png`} style={{ position: 'absolute', width: '100%', height: '100%' }} />

      {/* product image */}
      <div style={{
        position: 'absolute',
        top: '100px',
        left: '200px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '800px',
        height: '800px',
        border: '1px solid black',
      }}>
        <img src={image} style={{ width: '100%', height: '100%' }} />
      </div>

      {/* product name */}
      <div style={{
        position: 'absolute',
        top: '980px',
        left: '50px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '1100px',
        height: '100px',
      }}>
        <div style={{
          textAlign: 'center',
          fontSize: '32px',
          wordBreak: 'break-all',
        }}>{productName}</div>
      </div>
    </div>
  )
}