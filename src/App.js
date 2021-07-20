import './App.css';


//custom imports
import Todos from './components/Todos';
import ChombaRibbon from './components/ChombaRibbon';

function App() {
  return (
    <main>
     <ChombaRibbon projectName={"Zochita"} /> 
    <div className="body-ya-app">
      <Todos />
    </div>
    </main>
  );
}

export default App;
