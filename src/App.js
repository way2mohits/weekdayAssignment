import { Provider } from "react-redux";
import { JobList } from "./Components/JobList/JobList";
import store from "./Redux/store";
import { FilterBar } from "./Components/FilterBar/FIlterBar";

function App() {
  return (
    <Provider store = {store}>
    <div style={{height:"100vh",width:"100vw"}}>
      <FilterBar />
      <JobList />
    </div>
    </Provider>
  );
}

export default App;
