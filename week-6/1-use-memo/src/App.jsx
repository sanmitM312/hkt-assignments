import './App.css'
import { Assignment1 } from './components/Assignment1'
import { Assignment2 } from './components/Assignment2'
import { Assignment3 } from './components/Assignment3'

function App() {
  return (
    <>
      {/* <Assignment1 /> */}
      {/* <Assignment2 /> */}
      <Assignment3 />
    </>
  )
}
function DummyComp(){
  return (
    <div>
      <button>Click Me!</button>
    </div>
  )
}
export default App
