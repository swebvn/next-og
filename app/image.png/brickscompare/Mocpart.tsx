export default function Mocpart({ params }: { params: URLSearchParams }) {
  const name = params.get('name')
  return (
    <div style={{
      backgroundColor: 'white',
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <div style={{ fontSize: '50px'}}>{name}</div>
    </div>
  )
}