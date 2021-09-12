import Todos from "./components/Todos";

import "./App.css";
// import ChombaRibbon from './components/ChombaRibbon';

function App() {
  return (
    <main>
      {/* <ChombaRibbon projectName={"Zochita"} />  */}
      <div className="body-ya-app">
        <Todos />
      </div>
    </main>
  );
}

export default App;
