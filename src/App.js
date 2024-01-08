import Home from "./pages/Home";
import Cbse from "./pages/Cbse";
import Stateboard from "./pages/Stateboard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Lifeskills from "./pages/LifeSkills";
import Robotics from "./pages/Robotics";
import Roboticsai from "./pages/Roboticsai";
import Roboticsiot from "./pages/Roboticsiot";
import GameDevelopment from "./pages/GameDevelopment";
import Firstgrade from "./pages/Firstgrade";
import Secondgrade from "./pages/Secondgrade";
import Thirdgrade from "./pages/Thirdgrade";
import Fourthgrade from "./pages/Fourthgrade";
import Fifthgrade from "./pages/Fifthgrade";
import Class6 from "./pages/Class6";
import Class7 from "./pages/Class7";
import Class8 from "./pages/Class8";
import Class9 from "./pages/Class9";
import Class10 from "./pages/Class10";
import Cbseboard from "./pages/Cbseboard";
import Andhrapradeshboard from "./pages/Andhrapradeshboard";
import Telanganaboard from "./pages/Telanganaboard";
import Viteee from "./pages/Viteee";
import Jeemain from "./pages/Jeemain";
import Jeeadvanced from "./pages/Jeeadvanced";
import Vsat from "./pages/Vsat";
import Kleee from "./pages/Kleee";
import Neet from "./pages/Neet";
import Aiims from "./pages/Aiims";
import Apeamcet from "./pages/Apeamcet";
import Tseamcet from "./pages/Tseamcet";
import Learnmodule from "./pages/Learnmodule";
import Testmodule from "./pages/Testmodule";
import Doubtsmodule from "./pages/Doubtsmodule";
import Schools from "./pages/Schools";
import Loginfaculty from "./pages/Loginfaculty";
import Loginschooladmin from "./pages/Loginschooladmin";
import Loginstudent from "./pages/Loginstudent";
import Privacypolicy from "./pages/Privacypolicy";
import Termsofuse from "./pages/Termsofuse";

import Header from "./components/header";
import Footer from "./components/footer";
import {Routes, Route} from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
       <Route path="/"  element={<Home/>} />
       <Route path="/cbse" element={<Cbse/>} />
       <Route path="/stateboard" element={<Stateboard/>} />
       <Route path="/lifeskills" element={<Lifeskills/>} />
       <Route path="/robotics" element={<Robotics/>} />
       <Route path="/roboticsai" element={<Roboticsai/>} />
       <Route path="/roboticiot" element={<Roboticsiot/>} />
       <Route path="/gamedevelopment" element={<GameDevelopment/>} />
       <Route path="/firstgrade" element={<Firstgrade/>} />
       <Route path="/secondgrade" element={<Secondgrade/>} />
       <Route path="/thirdgrade" element={<Thirdgrade/>} />
       <Route path="/fourthgrade" element={<Fourthgrade/>} />
       <Route path="/fifthgrade" element={<Fifthgrade/>} />
       <Route path="/class6" element={<Class6/>} />
       <Route path="/class7" element={<Class7/>} />
       <Route path="/class8" element={<Class8/>} />
       <Route path="/class9" element={<Class9/>} />
       <Route path="/class10" element={<Class10/>} />
       <Route path="/cbseboard" element={<Cbseboard/>} />
       <Route path="/andhrapradeshboard" element={<Andhrapradeshboard/>} />
       <Route path="/telanganaboard" element={<Telanganaboard/>} />
       <Route path="/viteee" element={<Viteee/>} />
       <Route path="/jeemain" element={<Jeemain/>} />
       <Route path="/jeeadvanced" element={<Jeeadvanced/>} />
       <Route path="/vsat" element={<Vsat/>} />
       <Route path="/kleee" element={<Kleee/>} />
       <Route path="/neet" element={<Neet/>} />
       <Route path="/aiims" element={<Aiims/>} />
       <Route path="/apeamcet" element={<Apeamcet/>} />
       <Route path="/tseamcet" element={<Tseamcet/>} />
       <Route path="/learnmodule" element={<Learnmodule/>} />
       <Route path="/Testmodule" element={<Testmodule/>} />
       <Route path="/Doubtsmodule" element={<Doubtsmodule/>} />
       <Route path="/schools" element={<Schools/>} />
       <Route path="/loginfaculty" element={<Loginfaculty/>} />
       <Route path="/loginschooladmin" element={<Loginschooladmin/>} />
       <Route path="/loginstudent" element={<Loginstudent/>} />
       <Route path="/privacypolicy" element={<Privacypolicy/>} />
       <Route path="/termsofuse" element={<Termsofuse/>} />

       <Route path="/login" element={<Login/>} />
       <Route path="/Signup" element={<Signup/>} />
      </Routes>
      <Footer/>


    </div>
  );
}

export default App;
