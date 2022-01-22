import ReactDOM from "react-dom";
import Logo from "jsx:./logo.svg";

function App() {
  return <Logo />;
}

const app = document.getElementById("app");
ReactDOM.render(<App />, app);
