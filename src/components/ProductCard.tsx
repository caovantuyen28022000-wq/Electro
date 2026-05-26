import type { Product } from '../types/product';
import { NavLink } from 'react-router-dom';
import { useCartStore } from '../store/cartStore';

interface ProductCardProps {
  product: Product;
  delay?: string;
}

export default function ProductCard({ product, delay = '0.1s' }: ProductCardProps) {
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, 1);
    alert(`${product.name} đã được thêm vào giỏ hàng!`);
  };

  // Render star rating
  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <i
          key={i}
          className={`fas fa-star ${i <= rating ? 'text-primary' : ''}`}
        />
      );
    }
    return stars;
  };

  // Calculate discount percentage
  const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

  return (
    <div className="col-lg-4">
      <div className="product-item rounded wow fadeInUp" data-wow-delay={delay}>
        <div className="product-item-inner border rounded">
          <div className="product-item-inner-item">
            <img 
              src={product.image} 
              className="img-fluid w-100 rounded-top" 
              alt={product.name} 
              style={{ height: '250px', objectFit: 'contain', padding: '1rem', backgroundColor: '#fff' }} 
            />
            {product.isNew && <div className="product-new">New</div>}
            {product.isSale && <div className="product-sale">Sale</div>}
            <div className="product-details">
              <NavLink to={`/single/${product.id}`}>
                <i className="fa fa-eye fa-1x" />
              </NavLink>
            </div>
          </div>
          <div className="text-center rounded-bottom p-4">
            <NavLink to={`/shop`} className="d-block mb-2">
              {product.category}
            </NavLink>
            <NavLink to={`/single/${product.id}`} className="d-block h4">
              {product.name}
            </NavLink>
            <del className="me-2 fs-5">${product.originalPrice.toLocaleString()}</del>
            <span className="text-primary fs-5">${product.price.toLocaleString()}</span>
          </div>
        </div>
        <div className="product-item-add border border-top-0 rounded-bottom text-center p-4 pt-0">
          <button 
            className="btn btn-primary border-secondary rounded-pill py-2 px-4 mb-4"
            onClick={handleAddToCart}
          >
            <i className="fas fa-shopping-cart me-2" /> Add To Cart
          </button>
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex">{renderStars(product.rating)}</div>
            <div className="d-flex">
              <button className="text-primary d-flex align-items-center justify-content-center me-3">
                <span className="rounded-circle btn-sm-square border">
                  <i className="fas fa-random" />
                </span>
              </button>
              <button className="text-primary d-flex align-items-center justify-content-center me-0">
                <span className="rounded-circle btn-sm-square border">
                  <i className="fas fa-heart" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}