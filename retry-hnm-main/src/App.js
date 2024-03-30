import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './scss/style.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Login from './pages/Login';
import ProductAll from './pages/ProductAll';
// import ProductDetail from './pages/ProductDetail';
import Footer from './components/Footer';
import PrivateRoute from './routes/PrivateRoute';

function App() {
    const [auth, setAuth] = useState(false);
    console.log(auth);

    useEffect(() => {
        console.log('로그인상태:', auth);
    }, [auth]);

    return (
        <div className="App">
            <Header setAuth={setAuth} auth={auth} />
            <Routes>
                <Route path="/" element={<ProductAll />} />
                <Route path="/login" element={<Login setAuth={setAuth} />} />
                <Route path="/Product/:id" element={<PrivateRoute auth={auth} />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
