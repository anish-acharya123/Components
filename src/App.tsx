import "./App.css";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="  text-center space-x-4 gap-2  flex-1">
        <p className="text-white text-xl">Button Component</p>
        <Button>Default</Button>
        <Button variant="red">Red</Button>
        <Button variant="green">Green</Button>
        <Button variant="yellow">Yellow</Button>
        <Button variant="purple">Purple</Button>
        <Button variant="light">Light</Button>
        <Button variant="dark">Dark</Button>
        <Button variant="alternative">Alternative</Button>
      </div>
      <div className="space-y-4 flex-1 ">
        <p className="text-xl text-white">Alert Component</p>
        <Alert type="success" option="colored" title="Success" />
        <Alert type="error" option="default" title="Error" />
        <Alert type="info" option="colored" title="Info" />
        <Alert type="warning" option="default" title="Warning" />
      </div>
    </div>
  );
}

export default App;
