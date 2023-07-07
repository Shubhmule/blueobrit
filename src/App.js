import Actions from "./Actions";
import Certification from "./componet/Certification";
import Districtops from "./componet/Districtops";
import Due from "./componet/Due";
import Footer from "./componet/Footer";
import Nave from "./componet/Navbar";
import New from "./componet/New";
import Safestep from "./componet/Safestep";
import Schooltool from "./componet/Schooltool";
import Studentinfo from "./componet/Studentinfo";


function App() {
  return (
    <>
   <Nave/>
   <br/><br/>
   <Due/>
   <br/><br/>
   <New/>
   <br/><br/>
   <Certification/>
   <br/><br/>
<Schooltool/>
<br/><br/>
<Districtops/>
<br/><br/>
<Actions/>
<br/><br/><br/>
<Studentinfo/>
<br/><br/><br/>
<Safestep/>
<br/><br/>
<Footer/>
   </>
  );
}

export default App;