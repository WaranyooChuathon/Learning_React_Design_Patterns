
import { SplitScreen } from './LayoutComponents/Split_screen_components'
import './App.css'

const Left = () => {
  return (
    <h1 style={{ background: 'black',color: 'white'}}>Black</h1>
  )
}

const Right = () => {
  return (
    <h1 style={{ background: 'white'}}>White</h1>
  )
}
function App() {


  return (
    <>
      <SplitScreen 
      left={Left}
      right={Right}
      />
    </>
  )
}

export default App
