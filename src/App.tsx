import "./App.css";
import Button from "./components/Button";

function App() {
  return (
    <>
      <div className="  flex gap-2 justify-center items-center min-h-screen">
        <Button>Default</Button>
        <Button variant="red">Red</Button>
        <Button variant="green">Green</Button>
        <Button variant="yellow">Yellow</Button>
        <Button variant="purple">Purple</Button>
        <Button variant="light">Light</Button>
        <Button variant="dark">Dark</Button>
        <Button variant="alternative">Alternative</Button>
      </div>
    </>
  );
}

export default App;
