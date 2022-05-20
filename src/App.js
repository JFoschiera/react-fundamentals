import './App.css';
import FirstComponent from "./components/FirstComponent";
import AnotherComponent from "./components/AnotherComponent";
import Images from "./components/Images";
import Hooks from "./components/Hooks";
import List from "./components/List";
import RenderCond from "./components/RenderCond";
import Fragment from "./components/Fragment";
import Container from "./components/Container";


function App() {
  return (
    <div className="App">
      <h1>hello</h1>
      <FirstComponent />
      <AnotherComponent />
      <Images />
      <Hooks />
      <List />
      <RenderCond x={3} y={2} />
      <Fragment />
      <Container>
        <h1>Filho do Container</h1>
      </Container>
    </div>
  );
}

export default App;
