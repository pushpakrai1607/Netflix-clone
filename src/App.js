import { Provider } from "react-redux";
import Body from "./components/bodyComponent/Body";
import "./index.css";
import appStore from "../src/utils/store/userStore";

function App() {
  return (
    <div className="App">

{/* //57e94b014e156c5f726cfc9197a74e9e */}
      
      <Provider store={appStore}>
        <Body />
      </Provider>
    </div>
  );
}

export default App;
