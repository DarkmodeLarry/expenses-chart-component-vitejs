import Header from './components/Header'
import Chart from './components/Chart'
import Attribution from './components/Attribution'
function App() {
  return (
    <>
      <div className='max-w-xl mx-auto p-5 flex flex-col justify-center h-screen'>
        <Header />
        <Chart />
        <Attribution />
      </div>
    </>
  )
}

export default App
