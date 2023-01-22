import {  Routes, Route, BrowserRouter} from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Navigation from './Components/Navigation';
import Learn from './Pages/Learn';
import Discuss from './Pages/Discuss'
import Developers from './Pages/Developers';
import Register from './Pages/Register';
import Login from './Pages/Login';
import ChatSystem from './Pages/ChatSystem';
import { useContext } from 'react';
import { AuthContext, useAuth } from './context/AuthContext';
import  {Navigate} from 'react-router-dom'
function App() {
    const currentUser = useContext(AuthContext)
    // console.log(currentUser);
//  const currentUser = useAuth();
    // console.log(currentUser.email);
    const ProtectedRoute = ({ children }) => {
        if (!currentUser) {
            return <Navigate to="/register" />
        }
        return children;
    }
    return (
        <>
        <BrowserRouter>
                <Navigation />
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/learn" element={<Learn />} />
                    <Route exact path="/discuss" element={<Discuss />} />
                    <Route exact path="/developers" element={<Developers />} />
                    <Route exact path="/about" element={<About />} />
                    <Route exact path="/register" element={<Register />} />
                    <Route exact path="/login" element={<Login />} />

                    <Route path="/chatsys" element={
                        <ProtectedRoute>
                            <ChatSystem />
                        </ProtectedRoute>
                    } />

                </Routes>
            
            </BrowserRouter>
        </>
    )

}
export default App;