
import { SplitScreen } from './LayoutComponents/Split_screen_components'
import {SplitScreenImprovent} from './LayoutComponents/Split_screen_components_Improvement'
import './App.css'

interface MessageProps {
  message: string;
}

// Example components for the SplitScreenImprovent
const LeftHandComponent = ({ message }: MessageProps) => {
  return (
    <h1 style={{ background: 'black', color: 'white' }}>{message}</h1>
  );
};
// Example components for the SplitScreenImprovent
const RightHandComponent = ({ message }: MessageProps) => {
  return (
    <h1 style={{ background: 'white' }}>{message}</h1>
  );
};


const Left = () => {
  return (
    <h1 style={{ background: 'black',color: 'white'}}>black</h1>
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

      
      {/*
        Assuming SplitScreenImprovent expects left/right as props, not children.
        If it expects children, you may need to adjust the SplitScreenImprovent component accordingly.
      */}
      <SplitScreenImprovent
        left={() => <LeftHandComponent message="LEFT!!" />}
        right={() => <RightHandComponent message="RIGHT!!" />}
        leftWeight={1}
        rightWeight={1}
      />


    </>
  )
}

export default App
