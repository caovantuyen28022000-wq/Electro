import { useEffect } from 'react';
import productsData from '../data/products.json';
import type { Product } from '../types/product';
import ProductCard from '../components/ProductCard';

function Shop() {
  const products: Product[] = productsData;

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

  return (
    <>
      <div>
        {/* Single Page Header start */}
        <div className="container-fluid page-header py-5">
          <h1 className="text-center text-white display-6 wow fadeInUp" data-wow-delay="0.1s">Cửa Hàng</h1>
          <ol className="breadcrumb justify-content-center mb-0 wow fadeInUp" data-wow-delay="0.3s">
            <li className="breadcrumb-item"><a href="/">Trang Chủ</a></li>
            <li className="breadcrumb-item"><a href="#">Trang</a></li>
            <li className="breadcrumb-item active text-white">Cửa Hàng</li>
          </ol>
        </div>
        {/* Single Page Header End */}

        {/* Services Start */}
        <div className="container-fluid px-0">
          <div className="row g-0">
            <div className="col-6 col-md-4 col-lg-2 border-start border-end wow fadeInUp" data-wow-delay="0.1s">
              <div className="p-4">
                <div className="d-inline-flex align-items-center">
                  <i className="fa fa-sync-alt fa-2x text-primary" />
                  <div className="ms-4">
                    <h6 className="text-uppercase mb-2">Hoàn Trả Miễn Phí</h6>
                    <p className="mb-0">Đảm bảo hoàn tiền 30 ngày!</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-2 border-end wow fadeInUp" data-wow-delay="0.2s">
              <div className="p-4">
                <div className="d-flex align-items-center">
                  <i className="fab fa-telegram-plane fa-2x text-primary" />
                  <div className="ms-4">
                    <h6 className="text-uppercase mb-2">Giao Hàng Miễn Phí</h6>
                    <p className="mb-0">Miễn phí giao hàng mọi đơn</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-2 border-end wow fadeInUp" data-wow-delay="0.3s">
              <div className="p-4">
                <div className="d-flex align-items-center">
                  <i className="fas fa-life-ring fa-2x text-primary" />
                  <div className="ms-4">
                    <h6 className="text-uppercase mb-2">Hỗ Trợ 24/7</h6>
                    <p className="mb-0">Hỗ trợ trực tuyến 24/24</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-2 border-end wow fadeInUp" data-wow-delay="0.4s">
              <div className="p-4">
                <div className="d-flex align-items-center">
                  <i className="fas fa-credit-card fa-2x text-primary" />
                  <div className="ms-4">
                    <h6 className="text-uppercase mb-2">Nhận Thẻ Quà Tặng</h6>
                    <p className="mb-0">Tặng quà cho đơn trên $50</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-2 border-end wow fadeInUp" data-wow-delay="0.5s">
              <div className="p-4">
                <div className="d-flex align-items-center">
                  <i className="fas fa-lock fa-2x text-primary" />
                  <div className="ms-4">
                    <h6 className="text-uppercase mb-2">Thanh Toán An Toàn</h6>
                    <p className="mb-0">Bảo mật giao dịch tuyệt đối</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-2 border-end wow fadeInUp" data-wow-delay="0.6s">
              <div className="p-4">
                <div className="d-flex align-items-center">
                  <i className="fas fa-blog fa-2x text-primary" />
                  <div className="ms-4">
                    <h6 className="text-uppercase mb-2">Dịch Vụ Trực Tuyến</h6>
                    <p className="mb-0">Miễn phí đổi trả 30 ngày</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Services End */}

        {/* Shop Page Start */}
        <div className="container-fluid shop py-5">
          <div className="container py-5">
            <div className="row g-4">
              {/* Sidebar */}
              <div className="col-lg-3 wow fadeInUp" data-wow-delay="0.1s">
                <div className="product-categories mb-4">
                  <h4>Danh Mục Sản Phẩm</h4>
                  <ul className="list-unstyled">
                    <li>
                      <div className="categories-item">
                        <a href="#" className="text-dark">
                          <i className="fas fa-headphones text-secondary me-2" /> Phụ kiện
                        </a>
                        <span>(3)</span>
                      </div>
                    </li>
                    <li>
                      <div className="categories-item">
                        <a href="#" className="text-dark">
                          <i className="fas fa-desktop text-secondary me-2" /> Điện tử & Máy tính
                        </a>
                        <span>(5)</span>
                      </div>
                    </li>
                    <li>
                      <div className="categories-item">
                        <a href="#" className="text-dark">
                          <i className="fas fa-laptop text-secondary me-2" /> Laptop & PC
                        </a>
                        <span>(2)</span>
                      </div>
                    </li>
                    <li>
                      <div className="categories-item">
                        <a href="#" className="text-dark">
                          <i className="fas fa-mobile-alt text-secondary me-2" /> Điện thoại & Tablet
                        </a>
                        <span>(8)</span>
                      </div>
                    </li>
                    <li>
                      <div className="categories-item">
                        <a href="#" className="text-dark">
                          <i className="fas fa-tv text-secondary me-2" /> Smartphone & Smart TV
                        </a>
                        <span>(5)</span>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="price mb-4">
                  <h4 className="mb-2">Mức Giá</h4>
                  <input
                    type="range"
                    className="form-range w-100"
                    id="rangeInput"
                    name="rangeInput"
                    min={0}
                    max={500}
                    defaultValue={0}
                  />
                  <output id="amount" name="amount" min-velue={0} max-value={500} htmlFor="rangeInput">
                    0
                  </output>
                </div>

                <div className="product-tags py-4">
                  <h4 className="mb-3">THẺ SẢN PHẨM</h4>
                  <div className="product-tags-items bg-light rounded p-3">
                    <a href="#" className="border rounded py-1 px-2 mb-2">Mới</a>
                    <a href="#" className="border rounded py-1 px-2 mb-2">Thương hiệu</a>
                    <a href="#" className="border rounded py-1 px-2 mb-2">Đen</a>
                    <a href="#" className="border rounded py-1 px-2 mb-2">Trắng</a>
                    <a href="#" className="border rounded py-1 px-2 mb-2">Tablet</a>
                    <a href="#" className="border rounded py-1 px-2 mb-2">Điện thoại</a>
                    <a href="#" className="border rounded py-1 px-2 mb-2">Máy ảnh</a>
                    <a href="#" className="border rounded py-1 px-2 mb-2">Phụ kiện</a>
                    <a href="#" className="border rounded py-1 px-2 mb-2">Tivi</a>
                    <a href="#" className="border rounded py-1 px-2 mb-2">Khuyến mãi</a>
                  </div>
                </div>
              </div>

              {/* Products Grid */}
              <div className="col-lg-9 wow fadeInUp" data-wow-delay="0.1s">
                <div className="row g-4">
                  <div className="col-xl-7">
                    <div className="input-group w-100 mx-auto d-flex">
                      <input type="search" className="form-control p-3" placeholder="Từ khóa tìm kiếm..." />
                      <span className="input-group-text p-3">
                        <i className="fa fa-search" />
                      </span>
                    </div>
                  </div>
                  <div className="col-xl-3 text-end">
                    <div className="bg-light ps-3 py-3 rounded d-flex justify-content-between">
                      <label htmlFor="electronics" className="text-nowrap mt-1 pe-2">Sắp xếp theo:</label>
                      <select
                        id="electronics"
                        name="electronicslist"
                        className="border-0 form-select-sm bg-light me-3"
                      >
                        <option value="default">Mặc định</option>
                        <option value="popularity">Phổ biến nhất</option>
                        <option value="newness">Hàng mới nhất</option>
                        <option value="rating">Đánh giá cao</option>
                        <option value="low">Giá: Thấp đến Cao</option>
                        <option value="high">Giá: Cao đến Thấp</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Products Grid using .map() */}
                <div className="row g-4 product mt-4">
                  {products.map((product, index) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      delay={`${0.1 + (index % 3) * 0.2}s`}
                    />
                  ))}
                </div>

                {/* Pagination */}
                <div className="col-12 wow fadeInUp" data-wow-delay="0.1s">
                  <div className="pagination d-flex justify-content-center mt-5">
                    <a href="#" className="rounded">«</a>
                    <a href="#" className="active rounded">1</a>
                    <a href="#" className="rounded">2</a>
                    <a href="#" className="rounded">3</a>
                    <a href="#" className="rounded">4</a>
                    <a href="#" className="rounded">5</a>
                    <a href="#" className="rounded">6</a>
                    <a href="#" className="rounded">»</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Shop Page End */}
      </div>
    </>
  );
}

export default Shop;