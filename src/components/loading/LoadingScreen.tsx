import ReactLoading from "react-loading"

const LoadingScreen: React.FC = () => {
  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
      <ReactLoading
        type='spin'
        color='#48329C' />
    </div>
  )
}

export default LoadingScreen