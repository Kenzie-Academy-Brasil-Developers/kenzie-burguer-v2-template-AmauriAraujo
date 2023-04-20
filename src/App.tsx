
import { ToastContainer } from "react-toastify";
import Router from "./Routes/Routes";
import { GlobalStyles } from "./styles/global";
import 'react-toastify/dist/ReactToastify.css'

const App = () => {


  return(
    <>
    <ToastContainer position="bottom-right"/>
    <GlobalStyles />
   
    <Router />
  </>
  )
}
 


export default App;
