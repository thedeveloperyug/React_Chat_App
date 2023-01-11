import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Navigation from './Components/Navigation';
function App(){
    return (
    <>
    <Router>
        <Navigation/>
        <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/about" element={<About/>} />
        </Routes>
    </Router>
    </>
    )

}
export default App;