import { NavLink } from 'react-router-dom';
import { useStickyNavbar } from '../hooks';
import { useCartStore } from '../store/cartStore';

function Header() {
    const isSticky = useStickyNavbar(45);
    const totalItems = useCartStore((state) => state.getTotalItems());
    const totalPrice = useCartStore((state) => state.getTotalPrice());

    return (
        <>
         {/* Topbar Start */}
  <div className="container-fluid px-5 d-none border-bottom d-lg-block">
    <div className="row gx-0 align-items-center">
      <div className="col-lg-4 text-center text-lg-start mb-lg-0">
        <div className="d-inline-flex align-items-center" style={{height: 45}}>
          <a href="#" className="text-muted me-2"> Trợ giúp</a><small> / </small>
          <a href="#" className="text-muted mx-2"> Hỗ trợ</a><small> / </small>
          <a href="#" className="text-muted ms-2"> Liên hệ</a>
        </div>
      </div>
      <div className="col-lg-4 text-center d-flex align-items-center justify-content-center">
        <small className="text-dark">Gọi cho chúng tôi:</small>
        <a href="#" className="text-muted">(+84) 963 633 122</a>
      </div>
      <div className="col-lg-4 text-center text-lg-end">
        <div className="d-inline-flex align-items-center" style={{height: 45}}>
          <div className="dropdown">
            <a href="#" className="dropdown-toggle text-muted me-2" data-bs-toggle="dropdown"><small>
                USD</small></a>
            <div className="dropdown-menu rounded">
              <a href="#" className="dropdown-item"> Euro</a>
              <a href="#" className="dropdown-item"> Dolar</a>
            </div>
          </div>
          <div className="dropdown">
            <a href="#" className="dropdown-toggle text-muted mx-2" data-bs-toggle="dropdown"><small>
                Tiếng Việt</small></a>
            <div className="dropdown-menu rounded">
              <a href="#" className="dropdown-item"> Tiếng Việt</a>
              <a href="#" className="dropdown-item"> Tiếng Anh</a>
              <a href="#" className="dropdown-item"> Tiếng Pháp</a>
              <a href="#" className="dropdown-item"> Tiếng Tây Ban Nha</a>
            </div>
          </div>
          <div className="dropdown">
            <a href="#" className="dropdown-toggle text-muted ms-2" data-bs-toggle="dropdown"><small><i className="fa fa-home me-2" /> Bảng điều khiển</small></a>
            <div className="dropdown-menu rounded">
              <a href="#" className="dropdown-item"> Đăng nhập</a>
              <a href="#" className="dropdown-item"> Yêu thích</a>
              <a href="#" className="dropdown-item"> Giỏ hàng</a>
              <a href="#" className="dropdown-item"> Thông báo</a>
              <a href="#" className="dropdown-item"> Cài đặt tài khoản</a>
              <a href="#" className="dropdown-item"> Tài khoản của tôi</a>
              <a href="#" className="dropdown-item"> Đăng xuất</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="container-fluid px-5 py-4 d-none d-lg-block">
    <div className="row gx-0 align-items-center text-center">
      <div className="col-md-4 col-lg-3 text-center text-lg-start">
        <div className="d-inline-flex align-items-center">
          <a href="#" className="navbar-brand p-0">
            <h1 className="display-5 text-primary m-0"><i className="fas fa-shopping-bag text-secondary me-2" />Electro</h1>
            {/* <img src="/img/logo.png" alt="Logo"> */}
          </a>
        </div>
      </div>
      <div className="col-md-4 col-lg-6 text-center">
        <div className="position-relative ps-4">
          <div className="d-flex border rounded-pill">
            <input className="form-control border-0 rounded-pill w-100 py-3" type="text" data-bs-target="#dropdownToggle123" placeholder="Bạn đang tìm gì?" />
            <select className="form-select text-dark border-0 border-start rounded-0 p-3" style={{width: 200}}>
              <option value="All Category">Tất cả danh mục</option>
              <option value="Pest Control-2">Danh mục 1</option>
              <option value="Pest Control-3">Danh mục 2</option>
              <option value="Pest Control-4">Danh mục 3</option>
              <option value="Pest Control-5">Danh mục 4</option>
            </select>
            <button type="button" className="btn btn-primary rounded-pill py-3 px-5" style={{border: 0}}><i className="fas fa-search" /></button>
          </div>
        </div>
      </div>
      <div className="col-md-4 col-lg-3 text-center text-lg-end">
        <div className="d-inline-flex align-items-center">
          <a href="#" className="text-muted d-flex align-items-center justify-content-center me-3"><span className="rounded-circle btn-md-square border"><i className="fas fa-random" /></span></a>
          <a href="#" className="text-muted d-flex align-items-center justify-content-center me-3"><span className="rounded-circle btn-md-square border"><i className="fas fa-heart" /></span></a>
          <NavLink to="/cart" className="text-muted d-flex align-items-center justify-content-center">
            <span className="rounded-circle btn-md-square border position-relative">
              <i className="fas fa-shopping-cart" />
              {totalItems > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{ fontSize: '0.6rem' }}>
                  {totalItems}
                </span>
              )}
            </span>
            <span className="text-dark ms-2">${totalPrice.toLocaleString()}</span>
          </NavLink>
        </div>
      </div>
    </div>
  </div>
  {/* Topbar End */}
  {/* Navbar & Hero Start */}
  <div className={`container-fluid nav-bar p-0 ${isSticky ? 'sticky-top shadow-sm' : ''}`}>
    <div className="row gx-0 bg-primary px-5 align-items-center">
      <div className="col-lg-3 d-none d-lg-block">
        <nav className="navbar navbar-light position-relative" style={{width: 250}}>
          <button className="navbar-toggler border-0 fs-4 w-100 px-0 text-start" type="button" data-bs-toggle="collapse" data-bs-target="#allCat">
            <h4 className="m-0"><i className="fa fa-bars me-2" />Tất Cả Danh Mục</h4>
          </button>
          <div className="collapse navbar-collapse rounded-bottom" id="allCat">
            <div className="navbar-nav ms-auto py-0">
              <ul className="list-unstyled categories-bars">
                <li>
                  <div className="categories-bars-item">
                    <a href="#">Phụ kiện</a>
                    <span>(3)</span>
                  </div>
                </li>
                <li>
                  <div className="categories-bars-item">
                    <a href="#">Điện tử &amp; Máy tính</a>
                    <span>(5)</span>
                  </div>
                </li>
                <li>
                  <div className="categories-bars-item">
                    <a href="#">Laptop &amp; PC</a>
                    <span>(2)</span>
                  </div>
                </li>
                <li>
                  <div className="categories-bars-item">
                    <a href="#">Điện thoại &amp; Máy tính bảng</a>
                    <span>(8)</span>
                  </div>
                </li>
                <li>
                  <div className="categories-bars-item">
                    <a href="#">Smartphone &amp; Smart TV</a>
                    <span>(5)</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <div className="col-12 col-lg-9">
        <nav className="navbar navbar-expand-lg navbar-light bg-primary ">
          <a href="#" className="navbar-brand d-block d-lg-none">
            <h1 className="display-5 text-secondary m-0"><i className="fas fa-shopping-bag text-white me-2" />Electro</h1>
            {/* <img src="/img/logo.png" alt="Logo"> */}
          </a>
          <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="fa fa-bars fa-1x" />
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto py-0">
              <NavLink to="/" className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`} end>Trang Chủ</NavLink>
              <NavLink to="/shop" className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}>Cửa Hàng</NavLink>
              <NavLink to="/single" className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}>Chi Tiết</NavLink>
              <div className="nav-item dropdown">
                <button className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Trang</button>
                <div className="dropdown-menu m-0">
                  <NavLink to="/bestseller" className="dropdown-item">Bán Chạy Nhất</NavLink>
                  <NavLink to="/cart" className="dropdown-item">Giỏ Hàng</NavLink>
                  <NavLink to="/checkout" className="dropdown-item">Thanh Toán</NavLink>
                  <NavLink to="/404" className="dropdown-item">Lỗi 404</NavLink>
                </div>
              </div>
              <NavLink to="/contact" className={({ isActive }) => `nav-item nav-link me-2 ${isActive ? 'active' : ''}`}>Liên Hệ</NavLink>
              <div className="nav-item dropdown d-block d-lg-none mb-3">
                <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Tất Cả Danh Mục</a>
                <div className="dropdown-menu m-0">
                  <ul className="list-unstyled categories-bars">
                    <li>
                      <div className="categories-bars-item">
                        <a href="#">Phụ kiện</a>
                        <span>(3)</span>
                      </div>
                    </li>
                    <li>
                      <div className="categories-bars-item">
                        <a href="#">Điện tử &amp; Máy tính</a>
                        <span>(5)</span>
                      </div>
                    </li>
                    <li>
                      <div className="categories-bars-item">
                        <a href="#">Laptop &amp; PC</a>
                        <span>(2)</span>
                      </div>
                    </li>
                    <li>
                      <div className="categories-bars-item">
                        <a href="#">Điện thoại &amp; Máy tính bảng</a>
                        <span>(8)</span>
                      </div>
                    </li>
                    <li>
                      <div className="categories-bars-item">
                        <a href="#">Smartphone &amp; Smart TV</a>
                        <span>(5)</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <a href="#" className="btn btn-secondary rounded-pill py-2 px-4 px-lg-3 mb-3 mb-md-3 mb-lg-0"><i className="fa fa-mobile-alt me-2" /> +84 963 633 122</a>
          </div>
        </nav>
      </div>
    </div>
  </div>
  {/* Navbar & Hero End */}
        </>
    )
}
export default Header;
