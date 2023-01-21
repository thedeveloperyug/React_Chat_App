import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Navigation from './Components/Navigation';
import Learn from './Pages/Learn';
import Discuss from './Pages/Discuss'
import Developers from './Pages/Developers';
import Register from './Pages/Register';
import ChatSystem from './Pages/ChatSystem';
function App(){
    return (
    <>
    <Router>
        <Navigation/>
        <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/learn" element={<Learn/>} />
        <Route exact path="/discuss" element={<Discuss/>} />
        <Route exact path="/developers" element={<Developers/>} />
        <Route exact path="/about" element={<About/>} />
        <Route exact path="/register" element={<Register/>} />
        <Route exact path="/chatSys" element={<ChatSystem/>} />
        </Routes>
    </Router>
    </>
    )

}
export default App;