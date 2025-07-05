import './Products.css';
import { Link } from 'react-router-dom';

const dummyProducts = [
  {
    id: 1,
    name: 'Iron Man Figure',
    price: '₹999',
    img: 'https://tse2.mm.bing.net/th/id/OIP.Rsbbw3ClO397iSUP6sJd2AHaHM?pid=Api&P=0&h=180',
  },
  {
    id: 2,
    name: 'Ben 10 Omnitrix',
    price: '₹799',
    img: 'https://tse3.mm.bing.net/th/id/OIP.GK04zUrQPJbQxD7H7qfSMQHaFP?pid=Api&P=0&h=180',
  },
  {
    id: 3,
    name: 'Tom & Jerry Plush',
    price: '₹499',
    img: 'https://tse1.mm.bing.net/th/id/OIP.XG--_KdWKmIGEML9bTlaMwHaHa?pid=Api&P=0&h=180',
  },
  {
    id: 4,
    name: 'Oggy Action Toy',
    price: '₹599',
    img: 'https://m.media-amazon.com/images/I/91jvXoAYiHL._SL1500_.jpg',
  },
];

function Products() {
  return (
    <div className="products-page">
      <div className="products-header">
        <h2>ToonCart Products</h2>
        <div>
          <Link to="/cart" className="nav-btn">Cart 🛒</Link>
          <Link to="/" className="nav-btn">Logout 🔒</Link>
        </div>
      </div>

      <div className="product-grid">
        {dummyProducts.map(product => (
          <div className="product-card" key={product.id}>
            <img src={product.img} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <button className="add-btn">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
