import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import Products from './components/Products/Products'; // ✅ import Products

// Assets
import collectionImg from './assets/collection.jpg';
import gifPreview from './assets/gif-cartoons.webp';
import checkoutImg from './assets/checkout.jpeg';
import deliveryImg from './assets/delivery.jpeg';
import limitedImg from './assets/limited.jpeg';
import returnsImg from './assets/returns.jpeg';

function HomePage() {
  return (
    <main>
      <section className="hero">
        <h2>The Ultimate Cartoon Toy Store</h2>
      </section>

      <section className="features">
        <article className="card">
          <img src={collectionImg} alt="Exclusive Cartoon Collections" className="card-img" />
          <p>Exclusive Cartoon Collections</p>
        </article>

        <article className="card">
          <img src={gifPreview} alt="GIF & Animation Previews" className="card-img" />
          <p>GIF & Animation Previews</p>
        </article>

        <article className="card">
          <img src={checkoutImg} alt="Safe & Secure Checkout" className="card-img" />
          <p>Safe & Secure Checkout</p>
        </article>

        <article className="card">
          <img src={deliveryImg} alt="Super Fast Delivery" className="card-img" />
          <p>Super Fast Delivery</p>
        </article>

        <article className="card">
          <img src={limitedImg} alt="Limited Edition Toys" className="card-img" />
          <p>Limited Edition Toys</p>
        </article>

        <article className="card">
          <img src={returnsImg} alt="Easy Returns & Support" className="card-img" />
          <p>Easy Returns & Support</p>
        </article>
      </section>
    </main>
  );
}

function App() {
  return (
    <>
      <header className="navbar">
        <h1 className="logo">ToonCart</h1>

        <form className="search" aria-label="Search the catalogue">
          <input type="text" placeholder="Search toys, characters…" aria-label="Search" />
          <button aria-label="submit search">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </form>

        <nav>
          <ul className="nav-links">
            <li><Link className="active" to="/">Home</Link></li>
            <li><Link to="/products">Shop</Link></li> {/* ✅ Link to Products Page */}
            <li><Link to="/signup">Login/SignUp</Link></li>
          </ul>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/products" element={<Products />} /> {/* ✅ Products Route */}
      </Routes>
    </>
  );
}

export default App;
