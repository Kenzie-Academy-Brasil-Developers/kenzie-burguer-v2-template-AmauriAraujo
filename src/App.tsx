import { UserProvider } from "./providers/UserContext";
import Router from "./Routes/Routes";
import { GlobalStyles } from "./styles/global";

const App = () => {


  return(
    <>
    <GlobalStyles />
   
    <Router />
  </>
  )
}
 


export default App;
