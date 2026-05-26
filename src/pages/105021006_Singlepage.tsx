import { useEffect } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import productsData from '../data/products.json';
import type { Product } from '../types/product';
import { useCartStore } from '../store/cartStore';
import { useQuantityButton } from '../hooks';

function Singlepage() {
  const { id } = useParams<{ id: string }>();
  const addItem = useCartStore((state) => state.addItem);
  const { quantity, increment, decrement } = useQuantityButton(1);

  // Find product by ID
  const product: Product | undefined = productsData.find(
    (p: Product) => p.id === parseInt(id || '0')
  );

  // Initialize WOW.js animations
  useEffect(() => {
    const initWow = async () => {
      try {
        const WOW = (await import('wowjs')).WOW;
        const wow = new WOW({
          boxClass: 'wow',
          animateClass: 'animated',
          offset: 0,
          mobile: true,
          live: true,
        });
        wow.init();
      } catch (error) {
        console.warn('WOW.js not available:', error);
      }
    };
    initWow();
  }, []);

  const handleAddToCart = () => {
    if (product) {
      addItem(product, quantity);
      alert(`${product.name} (x${quantity}) đã được thêm vào giỏ hàng!`);
    }
  };

  if (!product) {
    return (
      <>
        <div className="container-fluid page-header py-5">
          <h1 className="text-center text-white display-6">Product Not Found</h1>
        </div>
        <div className="container py-5 text-center">
          <p className="fs-4">Sản phẩm không tồn tại.</p>
          <NavLink to="/shop" className="btn btn-primary rounded-pill mt-3">
            Quay lại Shop
          </NavLink>
        </div>
      </>
    );
  }

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

  return (
    <>
      <div>
        {/* Single Page Header start */}
        <div className="container-fluid page-header py-5">
          <h1 className="text-center text-white display-6 wow fadeInUp" data-wow-delay="0.1s">
            {product.name}
          </h1>
          <ol className="breadcrumb justify-content-center mb-0 wow fadeInUp" data-wow-delay="0.3s">
            <li className="breadcrumb-item"><a href="/">Home</a></li>
            <li className="breadcrumb-item"><NavLink to="/shop">Shop</NavLink></li>
            <li className="breadcrumb-item active text-white">{product.name}</li>
          </ol>
        </div>
        {/* Single Page Header End */}

        {/* Single Product Start */}
        <div className="container-fluid py-5">
          <div className="container py-5">
            <div className="row g-5">
              {/* Product Image */}
              <div className="col-lg-6 wow fadeInLeft" data-wow-delay="0.1s">
                <div className="position-relative">
                  <img
                    src={product.image}
                    className="img-fluid w-100 rounded"
                    alt={product.name}
                  />
                  {product.isNew && (
                    <div
                      className="position-absolute top-0 start-0 bg-primary text-white px-4 py-2 rounded-end"
                      style={{ zIndex: 10 }}
                    >
                      NEW
                    </div>
                  )}
                  {product.isSale && (
                    <div
                      className="position-absolute top-0 end-0 bg-danger text-white px-4 py-2 rounded-start"
                      style={{ zIndex: 10 }}
                    >
                      SALE
                    </div>
                  )}
                </div>
              </div>

              {/* Product Details */}
              <div className="col-lg-6 wow fadeInRight" data-wow-delay="0.2s">
                <div className="d-flex align-items-center mb-3">
                  <span className="badge bg-primary me-2">{product.category}</span>
                  <div className="d-flex">{renderStars(product.rating)}</div>
                </div>

                <h1 className="display-5 mb-4">{product.name}</h1>

                <div className="d-flex align-items-center mb-4">
                  <del className="fs-4 text-muted me-3">
                    ${product.originalPrice.toLocaleString()}
                  </del>
                  <span className="fs-3 text-primary fw-bold">
                    ${product.price.toLocaleString()}
                  </span>
                </div>

                <p className="text-muted mb-4">{product.description}</p>

                {/* Quantity Selector */}
                <div className="d-flex align-items-center mb-4">
                  <span className="me-3 fw-bold">Số lượng:</span>
                  <div className="d-flex align-items-center border rounded">
                    <button
                      className="btn btn-outline-secondary px-3"
                      onClick={decrement}
                      disabled={quantity <= 1}
                    >
                      -
                    </button>
                    <span className="px-4 py-2 fw-bold">{quantity}</span>
                    <button
                      className="btn btn-outline-secondary px-3"
                      onClick={increment}
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Add to Cart Button */}
                <div className="d-flex gap-3 mb-4">
                  <button
                    className="btn btn-primary rounded-pill py-3 px-5"
                    onClick={handleAddToCart}
                  >
                    <i className="fas fa-shopping-cart me-2" />
                    Thêm vào Giỏ Hàng
                  </button>
                  <button className="btn btn-outline-primary rounded-pill py-3 px-4">
                    <i className="fas fa-heart me-2" />
                    Yêu Thích
                  </button>
                </div>

                {/* Product Info */}
                <div className="bg-light rounded p-4">
                  <div className="row g-3">
                    <div className="col-6">
                      <p className="mb-1 text-muted">Mã sản phẩm:</p>
                      <p className="fw-bold mb-0">#{product.id}</p>
                    </div>
                    <div className="col-6">
                      <p className="mb-1 text-muted">Danh mục:</p>
                      <p className="fw-bold mb-0">{product.category}</p>
                    </div>
                    <div className="col-6">
                      <p className="mb-1 text-muted">Tình trạng:</p>
                      <p className="fw-bold mb-0">
                        {product.isNew ? 'Mới' : 'Có sẵn'}
                      </p>
                    </div>
                    <div className="col-6">
                      <p className="mb-1 text-muted">Đánh giá:</p>
                      <p className="fw-bold mb-0">
                        {product.rating}/5 sao
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Product Description Tabs */}
            <div className="row g-4 mt-5">
              <div className="col-12 wow fadeInUp" data-wow-delay="0.1s">
                <ul className="nav nav-pills mb-4" id="pills-tab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link active rounded-pill px-4"
                      id="pills-description-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-description"
                      type="button"
                      role="tab"
                    >
                      Mô tả
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link rounded-pill px-4"
                      id="pills-reviews-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-reviews"
                      type="button"
                      role="tab"
                    >
                      Đánh giá ({Math.floor(Math.random() * 100) + 10})
                    </button>
                  </li>
                </ul>
                <div className="tab-content" id="pills-tabContent">
                  <div
                    className="tab-pane fade show active"
                    id="pills-description"
                    role="tabpanel"
                  >
                    <div className="bg-light rounded p-4">
                      <h4 className="mb-3">Mô tả sản phẩm</h4>
                      <p className="text-muted">{product.description}</p>
                      <p className="text-muted">
                        Đây là sản phẩm chất lượng cao từ danh mục {product.category}.
                        Sản phẩm được bảo hành chính hãng và hỗ trợ đổi trả trong 30 ngày.
                      </p>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="pills-reviews"
                    role="tabpanel"
                  >
                    <div className="bg-light rounded p-4">
                      <h4 className="mb-3">Đánh giá từ khách hàng</h4>
                      <div className="d-flex align-items-center mb-3">
                        {renderStars(product.rating)}
                        <span className="ms-2 text-muted">
                          ({Math.floor(Math.random() * 100) + 10} đánh giá)
                        </span>
                      </div>
                      <p className="text-muted">
                        Sản phẩm nhận được nhiều đánh giá tích cực từ khách hàng.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Single Product End */}
      </div>
    </>
  );
}

export default Singlepage;