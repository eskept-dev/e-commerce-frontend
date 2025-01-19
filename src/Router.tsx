import { Routes, Route } from 'react-router-dom';

const Home = () => {
    return (
        <div className="home-container">
            <h1>Home Page</h1>
            <p>Discover amazing products at great prices!</p>
        </div>
    );
};

const Product = () => {
    return (
        <div className="product-container">
            <h1>Product Page</h1>
            <p>Discover amazing products at great prices!</p>
        </div>
    );
};

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<Product />} />
        </Routes>
    );
};

export default Router;