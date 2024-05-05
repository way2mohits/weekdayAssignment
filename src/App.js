import { Provider } from "react-redux";
import { JobList } from "./Components/JobList/JobList";
import store from "./Redux/store";

function App() {
  return (
    <Provider store = {store}>
    <div style={{height:"100vh",width:"100vw"}}>
      <JobList />
    </div>
    </Provider>
  );
}

export default App;
