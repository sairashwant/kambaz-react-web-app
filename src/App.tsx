import Labs from "./Labs";
import Kambaz from "./Kambaz";
import { HashRouter, Route, Routes, Navigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import store from "./Kambaz/store";
import { Provider } from "react-redux";
export default function App() {
  return (
    <HashRouter>
      <Provider store={store}>
      <div>
        
        <Routes>
          <Route path="/" element={<Navigate to="Kambaz"/>}/>
          <Route path="/Kambaz/*" element={<Kambaz />} />
          <Route path="/Labs/*" element={<Labs />} />
        </Routes>
      </div>
      </Provider>
    </HashRouter> 
);}