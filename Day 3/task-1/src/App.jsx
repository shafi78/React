import './App.css'
import ElementPass from './components/task3/ElementPass'
import Summary from './components/Summary'
import CoreConcepts from './components/task2/CoreConcepts'

function App() {

  return (
  <>

  {/* task 1 */}
  <div>
      <div id="app" data-testid="app">
        <Summary text="Fragments help you avoid unnecessary HTML elements." />
      </div>
    </div>


  {/* task 2 */}
  <CoreConcepts />


  {/* task 3 */}
  <ElementPass />

  </>
  )
}

export default App
