export default function Mocpart({ params, host }: { params: URLSearchParams, host: string }) {
  const productName = params.get('product_name')

  return (
    <div style={{
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <img src={`http://${host}/brickscompare/moc-part-bg.png`} style={{ position: 'absolute', width: '100%', height: '100%' }} />
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