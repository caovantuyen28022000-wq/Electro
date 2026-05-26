import { useEffect } from 'react';
import productsData from '../data/products.json';
import type { Product } from '../types/product';
import ProductItem from '../components/ProductItem';
import { NavLink } from 'react-router-dom';
import { useCartStore } from '../store/cartStore';

function Home() {
  // Phân loại dữ liệu sản phẩm để render bằng Array.map()
  const allProducts: Product[] = productsData.slice(0, 16);
  const newProducts: Product[] = productsData.filter(p => p.isNew);
  const saleProducts: Product[] = productsData.filter(p => p.isSale);
  const topSellingProducts: Product[] = productsData.slice(4, 12);
  
  const miniList1: Product[] = productsData.slice(0, 4);
  const miniList2: Product[] = productsData.slice(4, 8);
  const miniList3: Product[] = productsData.slice(8, 12);
  const bestsellerProducts: Product[] = productsData.slice(8, 14);

  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = (e: React.MouseEvent, product: Product) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, 1);
    alert(`${product.name} đã được thêm vào giỏ hàng!`);
  };

  // Khởi tạo Owl Carousel cho tất cả các slider trong trang chủ
  useEffect(() => {
    const $ = (window as any).$;
    if ($ && typeof $.fn.owlCarousel === 'function') {
      setTimeout(() => {
        // 1. Slider Header
        $(".header-carousel").owlCarousel({
          autoplay: true,
          smartSpeed: 1500,
          items: 1,
          dots: true,
          loop: true,
          nav: true,
          navText: [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
          ]
        });

        // 2. Slider Danh sách sản phẩm (Product List)
        $(".productList-carousel").owlCarousel({
          autoplay: true,
          smartSpeed: 1000,
          margin: 25,
          loop: true,
          dots: false,
          nav: true,
          navText: [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
          ],
          responsive: {
            0: { items: 1 },
            576: { items: 1 },
            768: { items: 2 },
            992: { items: 2 },
            1200: { items: 3 }
          }
        });

        // 3. Slider Ảnh sản phẩm con (Product Img)
        $(".productImg-carousel").owlCarousel({
          autoplay: true,
          smartSpeed: 1000,
          margin: 25,
          loop: true,
          dots: false,
          nav: false,
          items: 1
        });
      }, 100);
    }
  }, []);

  return (
    <>
    {/* Carousel Start */}
    <div className="container-fluid carousel bg-light px-0">
      <div className="row g-0 justify-content-end">
        <div className="col-12 col-lg-7 col-xl-9">
          <div className="header-carousel owl-carousel bg-light py-5">
            <div className="header-carousel-item position-relative">
              <div className="row g-0 align-items-center">
                <div className="col-xl-6 carousel-img wow fadeInLeft" data-wow-delay="0.1s">
                  <img src="/img/product-1.png" className="img-fluid w-100" alt="Camera Thông Minh" />
                </div>
                <div className="col-xl-6 carousel-content p-4">
                  <h4 className="text-uppercase fw-bold mb-4 wow fadeInRight" data-wow-delay="0.1s" style={{letterSpacing: 3}}>Tiết Kiệm Đến $300</h4>
                  <h1 className="display-3 text-capitalize mb-4 wow fadeInRight" data-wow-delay="0.3s">Thiết Bị Nhiếp Ảnh & Camera Thông Minh</h1>
                  <p className="text-dark wow fadeInRight" data-wow-delay="0.5s">Áp dụng Điều khoản và Điều kiện</p>
                  <a className="btn btn-primary rounded-pill py-3 px-5 wow fadeInRight" data-wow-delay="0.7s" href="#">Mua Ngay</a>
                </div>
              </div>
            </div>
            <div className="header-carousel-item position-relative">
              <div className="row g-0 align-items-center">
                <div className="col-xl-6 carousel-img wow fadeInLeft" data-wow-delay="0.1s">
                  <img src="/img/carousel-2.png" className="img-fluid w-100" alt="Hình ảnh" />
                </div>
                <div className="col-xl-6 carousel-content p-4">
                  <h4 className="text-uppercase fw-bold mb-4 wow fadeInRight" data-wow-delay="0.1s" style={{letterSpacing: 3}}>Tiết Kiệm Đến $200</h4>
                  <h1 className="display-3 text-capitalize mb-4 wow fadeInRight" data-wow-delay="0.3s">Cho Điện Thoại Và Máy Tính Tuyển Chọn</h1>
                  <p className="text-dark wow fadeInRight" data-wow-delay="0.5s">Áp dụng Điều khoản và Điều kiện</p>
                  <a className="btn btn-primary rounded-pill py-3 px-5 wow fadeInRight" data-wow-delay="0.7s" href="#">Mua Ngay</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-5 col-xl-3 wow fadeInRight" data-wow-delay="0.1s">
          <div className="carousel-header-banner h-100">
            <img src="/img/header-img.jpg" className="img-fluid w-100 h-100" style={{objectFit: 'cover'}} alt="Hình ảnh" />
            <div className="carousel-banner-offer">
              <p className="bg-primary text-white rounded fs-5 py-2 px-4 mb-0 me-3">Tiết Kiệm $48.00</p>
              <p className="text-primary fs-5 fw-bold mb-0">Ưu Đãi Đặc Biệt</p>
            </div>
            <div className="carousel-banner">
              <div className="carousel-banner-content text-center p-4">
                <a href="#" className="d-block mb-2">Điện Thoại</a>
                <a href="#" className="d-block text-white fs-3">Điện Thoại <br /> G2356</a>
                <del className="me-2 text-white fs-5">$1,250.00</del>
                <span className="text-primary fs-5">$1,050.00</span>
              </div>
              <a href="#" className="btn btn-primary rounded-pill py-2 px-4"><i className="fas fa-shopping-cart me-2" /> Thêm Vào Giỏ</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Carousel End */}
    
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
  
    {/* Products Offer Start */}
    <div className="container-fluid bg-light py-5">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-6 wow fadeInLeft" data-wow-delay="0.2s">
            <a href="#" className="d-flex align-items-center justify-content-between border bg-white rounded p-4">
              <div>
                <p className="text-muted mb-3">Tìm Kiếm Camera Phù Hợp Nhất!</p>
                <h3 className="text-primary">Camera Thông Minh</h3>
                <h1 className="display-3 text-secondary mb-0">Giảm <span className="text-primary fw-normal">40%</span></h1>
              </div>
              <img src="/img/product-1.png" className="img-fluid" alt="" />
            </a>
          </div>
          <div className="col-lg-6 wow fadeInRight" data-wow-delay="0.3s">
            <a href="#" className="d-flex align-items-center justify-content-between border bg-white rounded p-4">
              <div>
                <p className="text-muted mb-3">Tìm Kiếm Đồng Hồ Phù Hợp Nhất!</p>
                <h3 className="text-primary">Đồng Hồ Thông Minh</h3>
                <h1 className="display-3 text-secondary mb-0">Giảm <span className="text-primary fw-normal">20%</span></h1>
              </div>
              <img src="/img/product-2.png" className="img-fluid" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
    {/* Products Offer End */}
  
    {/* Our Products Start */}
    <div className="container-fluid product py-5">
      <div className="container py-5">
        <div className="tab-class">
          <div className="row g-4">
            <div className="col-lg-4 text-start wow fadeInLeft" data-wow-delay="0.1s">
              <h1>Sản Phẩm Của Chúng Tôi</h1>
            </div>
            <div className="col-lg-8 text-end wow fadeInRight" data-wow-delay="0.1s">
              <ul className="nav nav-pills d-inline-flex text-center mb-5">
                <li className="nav-item mb-4">
                  <a className="d-flex mx-2 py-2 bg-light rounded-pill active" data-bs-toggle="pill" href="#tab-1">
                    <span className="text-dark" style={{width: 130}}>Tất Cả Sản Phẩm</span>
                  </a>
                </li>
                <li className="nav-item mb-4">
                  <a className="d-flex py-2 mx-2 bg-light rounded-pill" data-bs-toggle="pill" href="#tab-2">
                    <span className="text-dark" style={{width: 130}}>Hàng Mới Về</span>
                  </a>
                </li>
                <li className="nav-item mb-4">
                  <a className="d-flex mx-2 py-2 bg-light rounded-pill" data-bs-toggle="pill" href="#tab-3">
                    <span className="text-dark" style={{width: 130}}>Khuyến Mãi</span>
                  </a>
                </li>
                <li className="nav-item mb-4">
                  <a className="d-flex mx-2 py-2 bg-light rounded-pill" data-bs-toggle="pill" href="#tab-4">
                    <span className="text-dark" style={{width: 130}}>Bán Chạy Nhất</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="tab-content">
            <div id="tab-1" className="tab-pane fade show p-0 active">
              <div className="row g-4">
                {allProducts.map((product, index) => (
                  <ProductItem key={product.id} product={product} delay={`${0.1 + (index % 4) * 0.2}s`} />
                ))}
              </div>
            </div>
            <div id="tab-2" className="tab-pane fade show p-0">
              <div className="row g-4">
                {newProducts.map((product, index) => (
                  <ProductItem key={product.id} product={product} delay={`${0.1 + (index % 4) * 0.2}s`} />
                ))}
              </div>
            </div>
            <div id="tab-3" className="tab-pane fade show p-0">
              <div className="row g-4">
                {saleProducts.map((product, index) => (
                  <ProductItem key={product.id} product={product} delay={`${0.1 + (index % 4) * 0.2}s`} />
                ))}
              </div>
            </div>
            <div id="tab-4" className="tab-pane fade show p-0">
              <div className="row g-4">
                {topSellingProducts.map((product, index) => (
                  <ProductItem key={product.id} product={product} delay={`${0.1 + (index % 4) * 0.2}s`} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Our Products End */}
  
    {/* Product Banner Start */}
    <div className="container-fluid py-5">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-6 wow fadeInLeft" data-wow-delay="0.1s">
            <div className="bg-primary rounded position-relative">
              <a href="#">
                <img src="/img/product-banner.jpg" className="img-fluid w-100 rounded" alt="" />
              </a>
              <div className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center rounded p-4" style={{background: 'rgba(255, 255, 255, 0.5)'}}>
                <a href="#">
                  <h3 className="display-5 text-primary">EOS Rebel <br /> <span>T7i Kit</span></h3>
                  <p className="fs-4 text-muted">$899.99</p>
                </a>
                <a href="#" className="btn btn-primary rounded-pill align-self-start py-2 px-4">Mua Ngay</a>
              </div>
            </div>
          </div>
          <div className="col-lg-6 wow fadeInRight" data-wow-delay="0.2s">
            <div className="text-center bg-primary rounded position-relative">
              <a href="#">
                <img src="/img/product-banner-2.jpg" className="img-fluid w-100" alt="" />
              </a>
              <div className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center rounded p-4" style={{background: 'rgba(242, 139, 0, 0.5)'}}>
                <a href="#">
                  <h2 className="display-2 text-secondary">GIẢM GIÁ</h2>
                  <h4 className="display-5 text-white mb-4">Giảm Lên Đến 50%</h4>
                </a>
                <a href="#" className="btn btn-secondary rounded-pill align-self-center py-2 px-4">Mua Ngay</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Product Banner End */}
  
    {/* Product List Start */}
    <div className="container-fluid products productList overflow-hidden">
      <div className="container products-mini py-5">
        <div className="mx-auto text-center mb-5" style={{maxWidth: 900}}>
          <h4 className="text-primary border-bottom border-primary border-2 d-inline-block p-2 title-border-radius wow fadeInUp" data-wow-delay="0.1s">Danh Sách</h4>
          <h1 className="mb-0 display-3 wow fadeInUp" data-wow-delay="0.3s">Tất Cả Sản Phẩm</h1>
        </div>
        <div className="productList-carousel owl-carousel pt-4 wow fadeInUp" data-wow-delay="0.3s">
          {[miniList1, miniList2, miniList3].map((list, idx) => (
            <div key={idx} className="productImg-carousel owl-carousel productList-item">
              {list.map((product) => (
                <div key={product.id} className="productImg-item products-mini-item border">
                  <div className="row g-0">
                    <div className="col-5">
                      <div className="products-mini-img border-end h-100">
                        <img src={product.image} className="img-fluid w-100 h-100" alt={product.name} />
                        <div className="products-mini-icon rounded-circle bg-primary">
                          <NavLink to={`/single/${product.id}`}><i className="fa fa-eye fa-1x text-white" /></NavLink>
                        </div>
                      </div>
                    </div>
                    <div className="col-7">
                      <div className="products-mini-content p-3">
                        <NavLink to="/shop" className="d-block mb-2 text-dark">{product.category}</NavLink>
                        <NavLink to={`/single/${product.id}`} className="d-block h4">{product.name}</NavLink>
                        <del className="me-2 fs-5">${product.originalPrice.toLocaleString()}</del>
                        <span className="text-primary fs-5">${product.price.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                  <div className="products-mini-add border p-3">
                    <button onClick={(e) => handleAddToCart(e, product)} className="btn btn-primary border-secondary rounded-pill py-2 px-4">
                      <i className="fas fa-shopping-cart me-2" /> Thêm Vào Giỏ
                    </button>
                    <div className="d-flex">
                      <a href="#" className="text-primary d-flex align-items-center justify-content-center me-3"><span className="rounded-circle btn-sm-square border"><i className="fas fa-random" /></span></a>
                      <a href="#" className="text-primary d-flex align-items-center justify-content-center me-0"><span className="rounded-circle btn-sm-square border"><i className="fas fa-heart" /></span></a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
    {/* Product List End */}
  
    {/* Bestseller Products Start */}
    <div className="container-fluid products pb-5">
      <div className="container products-mini py-5">
        <div className="mx-auto text-center mb-5" style={{maxWidth: 700}}>
          <h4 className="text-primary mb-4 border-bottom border-primary border-2 d-inline-block p-2 title-border-radius wow fadeInUp" data-wow-delay="0.1s">Sản Phẩm Bán Chạy</h4>
          <p className="mb-0 wow fadeInUp" data-wow-delay="0.2s">Khám phá những sản phẩm công nghệ bán chạy nhất của chúng tôi với chất lượng tuyệt vời và mức giá ưu đãi không thể bỏ lỡ.</p>
        </div>
        <div className="row g-4">
          {bestsellerProducts.map((product, index) => (
            <div key={product.id} className="col-md-6 col-lg-6 col-xl-4 wow fadeInUp" data-wow-delay={`${0.1 + (index % 3) * 0.2}s`}>
              <div className="products-mini-item border">
                <div className="row g-0">
                  <div className="col-5">
                    <div className="products-mini-img border-end h-100">
                      <img src={product.image} className="img-fluid w-100 h-100" alt={product.name} />
                      <div className="products-mini-icon rounded-circle bg-primary">
                        <NavLink to={`/single/${product.id}`}><i className="fa fa-eye fa-1x text-white" /></NavLink>
                      </div>
                    </div>
                  </div>
                  <div className="col-7">
                    <div className="products-mini-content p-3">
                      <NavLink to="/shop" className="d-block mb-2 text-dark">{product.category}</NavLink>
                      <NavLink to={`/single/${product.id}`} className="d-block h4">{product.name}</NavLink>
                      <del className="me-2 fs-5">${product.originalPrice.toLocaleString()}</del>
                      <span className="text-primary fs-5">${product.price.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
                <div className="products-mini-add border p-3">
                  <button onClick={(e) => handleAddToCart(e, product)} className="btn btn-primary border-secondary rounded-pill py-2 px-4">
                    <i className="fas fa-shopping-cart me-2" /> Thêm Vào Giỏ
                  </button>
                  <div className="d-flex">
                    <a href="#" className="text-primary d-flex align-items-center justify-content-center me-3"><span className="rounded-circle btn-sm-square border"><i className="fas fa-random" /></span></a>
                    <a href="#" className="text-primary d-flex align-items-center justify-content-center me-0"><span className="rounded-circle btn-sm-square border"><i className="fas fa-heart" /></span></a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    {/* Bestseller Products End */}
        </>
    )
}
export default Home;
