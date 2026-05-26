import { useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useCartStore } from '../store/cartStore';
import { useQuantityButton } from '../hooks';

function CartPage() {
  const { items, removeItem, updateQuantity, clearCart, getTotalPrice } = useCartStore();
  const navigate = useNavigate();

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

  const handleCheckout = () => {
    navigate('/checkout');
  };

  if (items.length === 0) {
    return (
      <>
        <div>
          {/* Cart Page Header start */}
          <div className="container-fluid page-header py-5">
            <h1 className="text-center text-white display-6 wow fadeInUp" data-wow-delay="0.1s">
              Giỏ Hàng
            </h1>
            <ol className="breadcrumb justify-content-center mb-0 wow fadeInUp" data-wow-delay="0.3s">
              <li className="breadcrumb-item"><a href="/">Home</a></li>
              <li className="breadcrumb-item active text-white">Giỏ Hàng</li>
            </ol>
          </div>
          {/* Cart Page Header End */}

          {/* Empty Cart */}
          <div className="container py-5 text-center">
            <div className="py-5">
              <i className="fas fa-shopping-cart fa-5x text-muted mb-4" />
              <h3 className="mb-3">Giỏ hàng trống</h3>
              <p className="text-muted mb-4">Chưa có sản phẩm nào trong giỏ hàng của bạn.</p>
              <NavLink to="/shop" className="btn btn-primary rounded-pill py-3 px-5">
                <i className="fas fa-shopping-bag me-2" />
                Mua Sắm Ngay
              </NavLink>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div>
        {/* Cart Page Header start */}
        <div className="container-fluid page-header py-5">
          <h1 className="text-center text-white display-6 wow fadeInUp" data-wow-delay="0.1s">
            Giỏ Hàng
          </h1>
          <ol className="breadcrumb justify-content-center mb-0 wow fadeInUp" data-wow-delay="0.3s">
            <li className="breadcrumb-item"><a href="/">Home</a></li>
            <li className="breadcrumb-item active text-white">Giỏ Hàng</li>
          </ol>
        </div>
        {/* Cart Page Header End */}

        {/* Cart Content */}
        <div className="container py-5">
          <div className="row g-5">
            {/* Cart Items */}
            <div className="col-lg-8 wow fadeInLeft" data-wow-delay="0.1s">
              <div className="table-responsive">
                <table className="table table-hover align-middle">
                  <thead className="bg-light">
                    <tr>
                      <th scope="col" className="rounded-start">Sản phẩm</th>
                      <th scope="col">Giá</th>
                      <th scope="col">Số lượng</th>
                      <th scope="col">Tổng</th>
                      <th scope="col" className="rounded-end">Thao tác</th>
                    </tr>
                  </thead>
                  <tbody>
                    {items.map((item) => (
                      <tr key={item.id}>
                        <td>
                          <div className="d-flex align-items-center">
                            <img
                              src={item.image}
                              alt={item.name}
                              style={{ width: 80, height: 80, objectFit: 'cover' }}
                              className="rounded me-3"
                            />
                            <div>
                              <h6 className="mb-0">{item.name}</h6>
                              <small className="text-muted">{item.category}</small>
                            </div>
                          </div>
                        </td>
                        <td>
                          <span className="fw-bold">${item.price.toLocaleString()}</span>
                        </td>
                        <td>
                          <div className="d-flex align-items-center border rounded" style={{ width: 120 }}>
                            <button
                              className="btn btn-sm btn-outline-secondary"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              disabled={item.quantity <= 1}
                            >
                              -
                            </button>
                            <span className="px-3 py-1 fw-bold">{item.quantity}</span>
                            <button
                              className="btn btn-sm btn-outline-secondary"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            >
                              +
                            </button>
                          </div>
                        </td>
                        <td>
                          <span className="text-primary fw-bold">
                            ${(item.price * item.quantity).toLocaleString()}
                          </span>
                        </td>
                        <td>
                          <button
                            className="btn btn-sm btn-outline-danger"
                            onClick={() => removeItem(item.id)}
                          >
                            <i className="fas fa-trash" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="d-flex justify-content-between align-items-center mt-4">
                <NavLink to="/shop" className="btn btn-outline-primary rounded-pill">
                  <i className="fas fa-arrow-left me-2" />
                  Tiếp tục mua sắm
                </NavLink>
                <button
                  className="btn btn-outline-danger rounded-pill"
                  onClick={clearCart}
                >
                  <i className="fas fa-trash-alt me-2" />
                  Xóa tất cả
                </button>
              </div>
            </div>

            {/* Cart Summary */}
            <div className="col-lg-4 wow fadeInRight" data-wow-delay="0.2s">
              <div className="bg-light rounded p-4">
                <h4 className="mb-4">Tổng quan giỏ hàng</h4>
                
                <div className="d-flex justify-content-between mb-3">
                  <span>Tổng số sản phẩm:</span>
                  <span className="fw-bold">{items.length} sản phẩm</span>
                </div>
                
                <div className="d-flex justify-content-between mb-3">
                  <span>Tổng số lượng:</span>
                  <span className="fw-bold">
                    {items.reduce((sum, item) => sum + item.quantity, 0)} sản phẩm
                  </span>
                </div>

                <hr />

                <div className="d-flex justify-content-between mb-3">
                  <span className="fs-5">Tổng cộng:</span>
                  <span className="fs-4 text-primary fw-bold">
                    ${getTotalPrice().toLocaleString()}
                  </span>
                </div>

                <button
                  className="btn btn-primary rounded-pill w-100 py-3 mb-3"
                  onClick={handleCheckout}
                >
                  <i className="fas fa-credit-card me-2" />
                  Thanh Toán
                </button>

                <NavLink
                  to="/shop"
                  className="btn btn-outline-primary rounded-pill w-100 py-3"
                >
                  <i className="fas fa-shopping-bag me-2" />
                  Tiếp tục mua sắm
                </NavLink>
              </div>

              <div className="bg-light rounded p-4 mt-4">
                <h5 className="mb-3">Mã giảm giá?</h5>
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Nhập mã giảm giá"
                  />
                  <button className="btn btn-outline-primary" type="button">
                    Áp dụng
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartPage;