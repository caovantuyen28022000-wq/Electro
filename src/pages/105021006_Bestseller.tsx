function Bestseller() {
    return (
        <>
        <div>
  {/* Single Page Header start */}
  <div className="container-fluid page-header py-5">
    <h1 className="text-center text-white display-6 wow fadeInUp" data-wow-delay="0.1s">Sản Phẩm Bán Chạy</h1>
    <ol className="breadcrumb justify-content-center mb-0 wow fadeInUp" data-wow-delay="0.3s">
      <li className="breadcrumb-item"><a href="/">Trang Chủ</a></li>
      <li className="breadcrumb-item"><a href="#">Trang</a></li>
      <li className="breadcrumb-item active text-white">Bán Chạy</li>
    </ol>
  </div>
  {/* Single Page Header End */}
  {/* Searvices Start */}
  <div className="container-fluid px-0">
    <div className="row g-0">
      <div className="col-6 col-md-4 col-lg-2 border-start border-end wow fadeInUp" data-wow-delay="0.1s">
        <div className="p-4">
          <div className="d-inline-flex align-items-center">
            <i className="fa fa-sync-alt fa-2x text-primary" />
            <div className="ms-4">
              <h6 className="text-uppercase mb-2">Hoàn Trả Miễn Phí</h6>
              <p className="mb-0">Đảm bảo hoàn tiền trong 30 ngày!</p>
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
  {/* Searvices End */}
  {/* Products Offer Start */}
  <div className="container-fluid bg-light py-5">
    <div className="container">
      <div className="row g-4">
        <div className="col-lg-6 wow fadeInLeft" data-wow-delay="0.2s">
          <a href="#" className="d-flex align-items-center justify-content-between border bg-white rounded p-4">
            <div>
              <p className="text-muted mb-3">Tìm kiếm Camera phù hợp nhất!</p>
              <h3 className="text-primary">Camera Thông Minh</h3>
              <h1 className="display-3 text-secondary mb-0">Giảm <span className="text-primary fw-normal">40%</span></h1>
            </div>
            <img src="img/product-1.png" className="img-fluid" alt="" />
          </a>
        </div>
        <div className="col-lg-6 wow fadeInRight" data-wow-delay="0.3s">
          <a href="#" className="d-flex align-items-center justify-content-between border bg-white rounded p-4">
            <div>
              <p className="text-muted mb-3">Tìm kiếm Đồng hồ phù hợp nhất!</p>
              <h3 className="text-primary">Đồng hồ Thông Minh</h3>
              <h1 className="display-3 text-secondary mb-0">Giảm <span className="text-primary fw-normal">20%</span></h1>
            </div>
            <img src="img/product-2.png" className="img-fluid" alt="" />
          </a>
        </div>
      </div>
    </div>
  </div>
  {/* Products Offer End */}
  {/* Bestseller Products Start */}
  <div className="container-fluid products pt-5">
    <div className="container products-mini py-5">
      <div className="mx-auto text-center mb-5" style={{maxWidth: 700}}>
        <h4 className="text-primary mb-4 border-bottom border-primary border-2 d-inline-block p-2 title-border-radius wow fadeInUp" data-wow-delay="0.1s">Sản Phẩm Bán Chạy</h4>
        <p className="mb-0 wow fadeInUp" data-wow-delay="0.2s">Khám phá những sản phẩm công nghệ bán chạy nhất của chúng tôi với chất lượng tuyệt vời và mức giá ưu đãi không thể bỏ lỡ.</p>
      </div>
      <div className="row g-4">
        <div className="col-md-6 col-lg-6 col-xl-4 wow fadeInUp" data-wow-delay="0.1s">
          <div className="products-mini-item border">
            <div className="row g-0">
              <div className="col-5">
                <div className="products-mini-img border-end h-100">
                  <img src="img/product-3.png" className="img-fluid w-100 h-100" alt="Image" />
                  <div className="products-mini-icon rounded-circle bg-primary">
                    <a href="#"><i className="fa fa-eye fa-1x text-white" /></a>
                  </div>
                </div>
              </div>
              <div className="col-7">
                <div className="products-mini-content p-3">
                  <a href="#" className="d-block mb-2">Điện Thoại</a>
                  <a href="#" className="d-block h4">Apple iPad Mini <br /> G2356</a>
                  <del className="me-2 fs-5">$1,250.00</del>
                  <span className="text-primary fs-5">$1,050.00</span>
                </div>
              </div>
            </div>
            <div className="products-mini-add border p-3">
              <a href="#" className="btn btn-primary border-secondary rounded-pill py-2 px-4"><i className="fas fa-shopping-cart me-2" /> Thêm Vào Giỏ</a>
              <div className="d-flex">
                <a href="#" className="text-primary d-flex align-items-center justify-content-center me-3"><span className="rounded-circle btn-sm-square border"><i className="fas fa-random" /></span></a>
                <a href="#" className="text-primary d-flex align-items-center justify-content-center me-0"><span className="rounded-circle btn-sm-square border"><i className="fas fa-heart" /></span></a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-6 col-xl-4 wow fadeInUp" data-wow-delay="0.3s">
          <div className="products-mini-item border">
            <div className="row g-0">
              <div className="col-5">
                <div className="products-mini-img border-end h-100">
                  <img src="img/product-4.png" className="img-fluid w-100 h-100" alt="Image" />
                  <div className="products-mini-icon rounded-circle bg-primary">
                    <a href="#"><i className="fa fa-eye fa-1x text-white" /></a>
                  </div>
                </div>
              </div>
              <div className="col-7">
                <div className="products-mini-content p-3">
                  <a href="#" className="d-block mb-2">Điện Thoại</a>
                  <a href="#" className="d-block h4">Apple iPad Mini <br /> G2356</a>
                  <del className="me-2 fs-5">$1,250.00</del>
                  <span className="text-primary fs-5">$1,050.00</span>
                </div>
              </div>
            </div>
            <div className="products-mini-add border p-3">
              <a href="#" className="btn btn-primary border-secondary rounded-pill py-2 px-4"><i className="fas fa-shopping-cart me-2" /> Thêm Vào Giỏ</a>
              <div className="d-flex">
                <a href="#" className="text-primary d-flex align-items-center justify-content-center me-3"><span className="rounded-circle btn-sm-square border"><i className="fas fa-random" /></span></a>
                <a href="#" className="text-primary d-flex align-items-center justify-content-center me-0"><span className="rounded-circle btn-sm-square border"><i className="fas fa-heart" /></span></a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-6 col-xl-4 wow fadeInUp" data-wow-delay="0.5s">
          <div className="products-mini-item border">
            <div className="row g-0">
              <div className="col-5">
                <div className="products-mini-img border-end h-100">
                  <img src="img/product-5.png" className="img-fluid w-100 h-100" alt="Image" />
                  <div className="products-mini-icon rounded-circle bg-primary">
                    <a href="#"><i className="fa fa-eye fa-1x text-white" /></a>
                  </div>
                </div>
              </div>
              <div className="col-7">
                <div className="products-mini-content p-3">
                  <a href="#" className="d-block mb-2">Điện Thoại</a>
                  <a href="#" className="d-block h4">Apple iPad Mini <br /> G2356</a>
                  <del className="me-2 fs-5">$1,250.00</del>
                  <span className="text-primary fs-5">$1,050.00</span>
                </div>
              </div>
            </div>
            <div className="products-mini-add border p-3">
              <a href="#" className="btn btn-primary border-secondary rounded-pill py-2 px-4"><i className="fas fa-shopping-cart me-2" /> Thêm Vào Giỏ</a>
              <div className="d-flex">
                <a href="#" className="text-primary d-flex align-items-center justify-content-center me-3"><span className="rounded-circle btn-sm-square border"><i className="fas fa-random" /></span></a>
                <a href="#" className="text-primary d-flex align-items-center justify-content-center me-0"><span className="rounded-circle btn-sm-square border"><i className="fas fa-heart" /></span></a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-6 col-xl-4 wow fadeInUp" data-wow-delay="0.1s">
          <div className="products-mini-item border">
            <div className="row g-0">
              <div className="col-5">
                <div className="products-mini-img border-end h-100">
                  <img src="img/product-6.png" className="img-fluid w-100 h-100" alt="Image" />
                  <div className="products-mini-icon rounded-circle bg-primary">
                    <a href="#"><i className="fa fa-eye fa-1x text-white" /></a>
                  </div>
                </div>
              </div>
              <div className="col-7">
                <div className="products-mini-content p-3">
                  <a href="#" className="d-block mb-2">Điện Thoại</a>
                  <a href="#" className="d-block h4">Apple iPad Mini <br /> G2356</a>
                  <del className="me-2 fs-5">$1,250.00</del>
                  <span className="text-primary fs-5">$1,050.00</span>
                </div>
              </div>
            </div>
            <div className="products-mini-add border p-3">
              <a href="#" className="btn btn-primary border-secondary rounded-pill py-2 px-4"><i className="fas fa-shopping-cart me-2" /> Thêm Vào Giỏ</a>
              <div className="d-flex">
                <a href="#" className="text-primary d-flex align-items-center justify-content-center me-3"><span className="rounded-circle btn-sm-square border"><i className="fas fa-random" /></span></a>
                <a href="#" className="text-primary d-flex align-items-center justify-content-center me-0"><span className="rounded-circle btn-sm-square border"><i className="fas fa-heart" /></span></a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-6 col-xl-4 wow fadeInUp" data-wow-delay="0.3s">
          <div className="products-mini-item border">
            <div className="row g-0">
              <div className="col-5">
                <div className="products-mini-img border-end h-100">
                  <img src="img/product-7.png" className="img-fluid w-100 h-100" alt="Image" />
                  <div className="products-mini-icon rounded-circle bg-primary">
                    <a href="#"><i className="fa fa-eye fa-1x text-white" /></a>
                  </div>
                </div>
              </div>
              <div className="col-7">
                <div className="products-mini-content p-3">
                  <a href="#" className="d-block mb-2">Điện Thoại</a>
                  <a href="#" className="d-block h4">Apple iPad Mini <br /> G2356</a>
                  <del className="me-2 fs-5">$1,250.00</del>
                  <span className="text-primary fs-5">$1,050.00</span>
                </div>
              </div>
            </div>
            <div className="products-mini-add border p-3">
              <a href="#" className="btn btn-primary border-secondary rounded-pill py-2 px-4"><i className="fas fa-shopping-cart me-2" /> Thêm Vào Giỏ</a>
              <div className="d-flex">
                <a href="#" className="text-primary d-flex align-items-center justify-content-center me-3"><span className="rounded-circle btn-sm-square border"><i className="fas fa-random" /></span></a>
                <a href="#" className="text-primary d-flex align-items-center justify-content-center me-0"><span className="rounded-circle btn-sm-square border"><i className="fas fa-heart" /></span></a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-6 col-xl-4 wow fadeInUp" data-wow-delay="0.5s">
          <div className="products-mini-item border">
            <div className="row g-0">
              <div className="col-5">
                <div className="products-mini-img border-end h-100">
                  <img src="img/product-11.png" className="img-fluid w-100 h-100" alt="Image" />
                  <div className="products-mini-icon rounded-circle bg-primary">
                    <a href="#"><i className="fa fa-eye fa-1x text-white" /></a>
                  </div>
                </div>
              </div>
              <div className="col-7">
                <div className="products-mini-content p-3">
                  <a href="#" className="d-block mb-2">Điện Thoại</a>
                  <a href="#" className="d-block h4">Apple iPad Mini <br /> G2356</a>
                  <del className="me-2 fs-5">$1,250.00</del>
                  <span className="text-primary fs-5">$1,050.00</span>
                </div>
              </div>
            </div>
            <div className="products-mini-add border p-3">
              <a href="#" className="btn btn-primary border-secondary rounded-pill py-2 px-4"><i className="fas fa-shopping-cart me-2" /> Thêm Vào Giỏ</a>
              <div className="d-flex">
                <a href="#" className="text-primary d-flex align-items-center justify-content-center me-3"><span className="rounded-circle btn-sm-square border"><i className="fas fa-random" /></span></a>
                <a href="#" className="text-primary d-flex align-items-center justify-content-center me-0"><span className="rounded-circle btn-sm-square border"><i className="fas fa-heart" /></span></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Bestseller Products End */}
  {/* Our Products Start */}
  <div className="container-fluid product pt-5">
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
                  <span className="text-dark" style={{width: 130}}>Nổi Bật</span>
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
              <div className="col-md-6 col-lg-4 col-xl-3">
                <div className="product-item rounded wow fadeInUp" data-wow-delay="0.1s">
                  <div className="product-item-inner border rounded">
                    <div className="product-item-inner-item">
                      <img src="img/product-3.png" className="img-fluid w-100 rounded-top" alt="" />
                      <div className="product-new">Mới</div>
                      <div className="product-details">
                        <a href="#"><i className="fa fa-eye fa-1x" /></a>
                      </div>
                    </div>
                    <div className="text-center rounded-bottom p-4">
                      <a href="#" className="d-block mb-2">Điện Thoại</a>
                      <a href="#" className="d-block h4">Apple iPad Mini <br /> G2356</a>
                      <del className="me-2 fs-5">$1,250.00</del>
                      <span className="text-primary fs-5">$1,050.00</span>
                    </div>
                  </div>
                  <div className="product-item-add border border-top-0 rounded-bottom  text-center p-4 pt-0">
                    <a href="#" className="btn btn-primary border-secondary rounded-pill py-2 px-4 mb-4"><i className="fas fa-shopping-cart me-2" /> Thêm Vào Giỏ</a>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="d-flex">
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star" />
                      </div>
                      <div className="d-flex">
                        <a href="#" className="text-primary d-flex align-items-center justify-content-center me-3"><span className="rounded-circle btn-sm-square border"><i className="fas fa-random" /></span></a>
                        <a href="#" className="text-primary d-flex align-items-center justify-content-center me-0"><span className="rounded-circle btn-sm-square border"><i className="fas fa-heart" /></span></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 col-xl-3">
                <div className="product-item rounded wow fadeInUp" data-wow-delay="0.3s">
                  <div className="product-item-inner border rounded">
                    <div className="product-item-inner-item">
                      <img src="img/product-4.png" className="img-fluid w-100 rounded-top" alt="Image" />
                      <div className="product-sale">Giảm Giá</div>
                      <div className="product-details">
                        <a href="#"><i className="fa fa-eye fa-1x" /></a>
                      </div>
                    </div>
                    <div className="text-center rounded-bottom p-4">
                      <a href="#" className="d-block mb-2">Điện Thoại</a>
                      <a href="#" className="d-block h4">Apple iPad Mini <br /> G2356</a>
                      <del className="me-2 fs-5">$1,250.00</del>
                      <span className="text-primary fs-5">$1,050.00</span>
                    </div>
                  </div>
                  <div className="product-item-add border border-top-0 rounded-bottom  text-center p-4 pt-0">
                    <a href="#" className="btn btn-primary border-secondary rounded-pill py-2 px-4 mb-4"><i className="fas fa-shopping-cart me-2" /> Thêm Vào Giỏ</a>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="d-flex">
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star" />
                      </div>
                      <div className="d-flex">
                        <a href="#" className="text-primary d-flex align-items-center justify-content-center me-3"><span className="rounded-circle btn-sm-square border"><i className="fas fa-random" /></span></a>
                        <a href="#" className="text-primary d-flex align-items-center justify-content-center me-0"><span className="rounded-circle btn-sm-square border"><i className="fas fa-heart" /></span></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 col-xl-3">
                <div className="product-item rounded wow fadeInUp" data-wow-delay="0.5s">
                  <div className="product-item-inner border rounded">
                    <div className="product-item-inner-item">
                      <img src="img/product-5.png" className="img-fluid w-100 rounded-top" alt="Image" />
                      <div className="product-details">
                        <a href="#"><i className="fa fa-eye fa-1x" /></a>
                      </div>
                    </div>
                    <div className="text-center rounded-bottom p-4">
                      <a href="#" className="d-block mb-2">Điện Thoại</a>
                      <a href="#" className="d-block h4">Apple iPad Mini <br /> G2356</a>
                      <del className="me-2 fs-5">$1,250.00</del>
                      <span className="text-primary fs-5">$1,050.00</span>
                    </div>
                  </div>
                  <div className="product-item-add border border-top-0 rounded-bottom  text-center p-4 pt-0">
                    <a href="#" className="btn btn-primary border-secondary rounded-pill py-2 px-4 mb-4"><i className="fas fa-shopping-cart me-2" /> Thêm Vào Giỏ</a>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="d-flex">
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star" />
                      </div>
                      <div className="d-flex">
                        <a href="#" className="text-primary d-flex align-items-center justify-content-center me-3"><span className="rounded-circle btn-sm-square border"><i className="fas fa-random" /></span></a>
                        <a href="#" className="text-primary d-flex align-items-center justify-content-center me-0"><span className="rounded-circle btn-sm-square border"><i className="fas fa-heart" /></span></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 col-xl-3">
                <div className="product-item rounded wow fadeInUp" data-wow-delay="0.7s">
                  <div className="product-item-inner border rounded">
                    <div className="product-item-inner-item">
                      <img src="img/product-6.png" className="img-fluid w-100 rounded-top" alt="Image" />
                      <div className="product-new">Mới</div>
                      <div className="product-details">
                        <a href="#"><i className="fa fa-eye fa-1x" /></a>
                      </div>
                    </div>
                    <div className="text-center rounded-bottom p-4">
                      <a href="#" className="d-block mb-2">Điện Thoại</a>
                      <a href="#" className="d-block h4">Apple iPad Mini <br /> G2356</a>
                      <del className="me-2 fs-5">$1,250.00</del>
                      <span className="text-primary fs-5">$1,050.00</span>
                    </div>
                  </div>
                  <div className="product-item-add border border-top-0 rounded-bottom  text-center p-4 pt-0">
                    <a href="#" className="btn btn-primary border-secondary rounded-pill py-2 px-4 mb-4"><i className="fas fa-shopping-cart me-2" /> Thêm Vào Giỏ</a>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="d-flex">
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star" />
                      </div>
                      <div className="d-flex">
                        <a href="#" className="text-primary d-flex align-items-center justify-content-center me-3"><span className="rounded-circle btn-sm-square border"><i className="fas fa-random" /></span></a>
                        <a href="#" className="text-primary d-flex align-items-center justify-content-center me-0"><span className="rounded-circle btn-sm-square border"><i className="fas fa-heart" /></span></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 col-xl-3">
                <div className="product-item rounded wow fadeInUp" data-wow-delay="0.1s">
                  <div className="product-item-inner border rounded">
                    <div className="product-item-inner-item">
                      <img src="img/product-7.png" className="img-fluid w-100 rounded-top" alt="Image" />
                      <div className="product-sale">Giảm Giá</div>
                      <div className="product-details">
                        <a href="#"><i className="fa fa-eye fa-1x" /></a>
                      </div>
                    </div>
                    <div className="text-center rounded-bottom p-4">
                      <a href="#" className="d-block mb-2">Điện Thoại</a>
                      <a href="#" className="d-block h4">Apple iPad Mini <br /> G2356</a>
                      <del className="me-2 fs-5">$1,250.00</del>
                      <span className="text-primary fs-5">$1,050.00</span>
                    </div>
                  </div>
                  <div className="product-item-add border border-top-0 rounded-bottom  text-center p-4 pt-0">
                    <a href="#" className="btn btn-primary border-secondary rounded-pill py-2 px-4 mb-4"><i className="fas fa-shopping-cart me-2" /> Thêm Vào Giỏ</a>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="d-flex">
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star" />
                      </div>
                      <div className="d-flex">
                        <a href="#" className="text-primary d-flex align-items-center justify-content-center me-3"><span className="rounded-circle btn-sm-square border"><i className="fas fa-random" /></span></a>
                        <a href="#" className="text-primary d-flex align-items-center justify-content-center me-0"><span className="rounded-circle btn-sm-square border"><i className="fas fa-heart" /></span></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 col-xl-3">
                <div className="product-item rounded wow fadeInUp" data-wow-delay="0.3s">
                  <div className="product-item-inner border rounded">
                    <div className="product-item-inner-item">
                      <img src="img/product-8.png" className="img-fluid w-100 rounded-top" alt="Image" />
                      <div className="product-details">
                        <a href="#"><i className="fa fa-eye fa-1x" /></a>
                      </div>
                    </div>
                    <div className="text-center rounded-bottom p-4">
                      <a href="#" className="d-block mb-2">Điện Thoại</a>
                      <a href="#" className="d-block h4">Apple iPad Mini <br /> G2356</a>
                      <del className="me-2 fs-5">$1,250.00</del>
                      <span className="text-primary fs-5">$1,050.00</span>
                    </div>
                  </div>
                  <div className="product-item-add border border-top-0 rounded-bottom  text-center p-4 pt-0">
                    <a href="#" className="btn btn-primary border-secondary rounded-pill py-2 px-4 mb-4"><i className="fas fa-shopping-cart me-2" /> Thêm Vào Giỏ</a>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="d-flex">
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star" />
                      </div>
                      <div className="d-flex">
                        <a href="#" className="text-primary d-flex align-items-center justify-content-center me-3"><span className="rounded-circle btn-sm-square border"><i className="fas fa-random" /></span></a>
                        <a href="#" className="text-primary d-flex align-items-center justify-content-center me-0"><span className="rounded-circle btn-sm-square border"><i className="fas fa-heart" /></span></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 col-xl-3">
                <div className="product-item rounded wow fadeInUp" data-wow-delay="0.5s">
                  <div className="product-item-inner border rounded">
                    <div className="product-item-inner-item">
                      <img src="img/product-9.png" className="img-fluid w-100 rounded-top" alt="Image" />
                      <div className="product-new">New</div>
                      <div className="product-details">
                        <a href="#"><i className="fa fa-eye fa-1x" /></a>
                      </div>
                    </div>
                    <div className="text-center rounded-bottom p-4">
                      <a href="#" className="d-block mb-2">Điện Thoại</a>
                      <a href="#" className="d-block h4">Apple iPad Mini <br /> G2356</a>
                      <del className="me-2 fs-5">$1,250.00</del>
                      <span className="text-primary fs-5">$1,050.00</span>
                    </div>
                  </div>
                  <div className="product-item-add border border-top-0 rounded-bottom  text-center p-4 pt-0">
                    <a href="#" className="btn btn-primary border-secondary rounded-pill py-2 px-4 mb-4"><i className="fas fa-shopping-cart me-2" /> Thêm Vào Giỏ</a>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="d-flex">
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star" />
                      </div>
                      <div className="d-flex">
                        <a href="#" className="text-primary d-flex align-items-center justify-content-center me-3"><span className="rounded-circle btn-sm-square border"><i className="fas fa-random" /></span></a>
                        <a href="#" className="text-primary d-flex align-items-center justify-content-center me-0"><span className="rounded-circle btn-sm-square border"><i className="fas fa-heart" /></span></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 col-xl-3">
                <div className="product-item rounded wow fadeInUp" data-wow-delay="0.7s">
                  <div className="product-item-inner border rounded">
                    <div className="product-item-inner-item">
                      <img src="img/product-10.png" className="img-fluid w-100 rounded-top" alt="" />
                      <div className="product-sale">Sale</div>
                      <div className="product-details">
                        <a href="#"><i className="fa fa-eye fa-1x" /></a>
                      </div>
                    </div>
                    <div className="text-center rounded-bottom p-4">
                      <a href="#" className="d-block mb-2">Điện Thoại</a>
                      <a href="#" className="d-block h4">Apple iPad Mini <br /> G2356</a>
                      <del className="me-2 fs-5">$1,250.00</del>
                      <span className="text-primary fs-5">$1,050.00</span>
                    </div>
                  </div>
                  <div className="product-item-add border border-top-0 rounded-bottom  text-center p-4 pt-0">
                    <a href="#" className="btn btn-primary border-secondary rounded-pill py-2 px-4 mb-4"><i className="fas fa-shopping-cart me-2" /> Thêm Vào Giỏ</a>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="d-flex">
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star" />
                      </div>
                      <div className="d-flex">
                        <a href="#" className="text-primary d-flex align-items-center justify-content-center me-3"><span className="rounded-circle btn-sm-square border"><i className="fas fa-random" /></span></a>
                        <a href="#" className="text-primary d-flex align-items-center justify-content-center me-0"><span className="rounded-circle btn-sm-square border"><i className="fas fa-heart" /></span></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="tab-2" className="tab-pane fade show p-0">
            <div className="row g-4">
              <div className="col-md-6 col-lg-4 col-xl-3">
                <div className="product-item rounded wow fadeInUp" data-wow-delay="0.1s">
                  <div className="product-item-inner border rounded">
                    <div className="product-item-inner-item">
                      <img src="img/product-3.png" className="img-fluid rounded-top" alt="" />
                      <div className="product-new">Mới</div>
                      <div className="product-details">
                        <a href="#"><i className="fa fa-eye fa-1x" /></a>
                      </div>
                    </div>
                    <div className="text-center rounded-bottom p-4">
                      <a href="#" className="d-block mb-2">Điện Thoại</a>
                      <a href="#" className="d-block h4">Apple iPad Mini <br /> G2356</a>
                      <del className="me-2 fs-5">$1,250.00</del>
                      <span className="text-primary fs-5">$1,050.00</span>
                    </div>
                  </div>
                  <div className="product-item-add border border-top-0 rounded-bottom  text-center p-4 pt-0">
                    <a href="#" className="btn btn-primary border-secondary rounded-pill py-2 px-4 mb-4"><i className="fas fa-shopping-cart me-2" /> Thêm Vào Giỏ</a>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="d-flex">
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star" />
                      </div>
                      <div className="d-flex">
                        <a href="#" className="text-primary d-flex align-items-center justify-content-center me-3"><span className="rounded-circle btn-sm-square border"><i className="fas fa-random" /></span></a>
                        <a href="#" className="text-primary d-flex align-items-center justify-content-center me-0"><span className="rounded-circle btn-sm-square border"><i className="fas fa-heart" /></span></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 col-xl-3">
                <div className="product-item rounded wow fadeInUp" data-wow-delay="0.3s">
                  <div className="product-item-inner border rounded">
                    <div className="product-item-inner-item">
                      <img src="img/product-4.png" className="img-fluid w-100 rounded-top" alt="" />
                      <div className="product-new">Mới</div>
                      <div className="product-details">
                        <a href="#"><i className="fa fa-eye fa-1x" /></a>
                      </div>
                    </div>
                    <div className="text-center rounded-bottom p-4">
                      <a href="#" className="d-block mb-2">Điện Thoại</a>
                      <a href="#" className="d-block h4">Apple iPad Mini <br /> G2356</a>
                      <del className="me-2 fs-5">$1,250.00</del>
                      <span className="text-primary fs-5">$1,050.00</span>
                    </div>
                  </div>
                  <div className="product-item-add border border-top-0 rounded-bottom  text-center p-4 pt-0">
                    <a href="#" className="btn btn-primary border-secondary rounded-pill py-2 px-4 mb-4"><i className="fas fa-shopping-cart me-2" /> Thêm Vào Giỏ</a>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="d-flex">
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star" />
                      </div>
                      <div className="d-flex">
                        <a href="#" className="text-primary d-flex align-items-center justify-content-center me-3"><span className="rounded-circle btn-sm-square border"><i className="fas fa-random" /></span></a>
                        <a href="#" className="text-primary d-flex align-items-center justify-content-center me-0"><span className="rounded-circle btn-sm-square border"><i className="fas fa-heart" /></span></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 col-xl-3">
                <div className="product-item rounded wow fadeInUp" data-wow-delay="0.5s">
                  <div className="product-item-inner border rounded">
                    <div className="product-item-inner-item">
                      <img src="img/product-5.png" className="img-fluid w-100 rounded-top" alt="" />
                      <div className="product-new">Mới</div>
                      <div className="product-details">
                        <a href="#"><i className="fa fa-eye fa-1x" /></a>
                      </div>
                    </div>
                    <div className="text-center rounded-bottom p-4">
                      <a href="#" className="d-block mb-2">Điện Thoại</a>
                      <a href="#" className="d-block h4">Apple iPad Mini <br /> G2356</a>
                      <del className="me-2 fs-5">$1,250.00</del>
                      <span className="text-primary fs-5">$1,050.00</span>
                    </div>
                  </div>
                  <div className="product-item-add border border-top-0 rounded-bottom  text-center p-4 pt-0">
                    <a href="#" className="btn btn-primary border-secondary rounded-pill py-2 px-4 mb-4"><i className="fas fa-shopping-cart me-2" /> Thêm Vào Giỏ</a>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="d-flex">
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star" />
                      </div>
                      <div className="d-flex">
                        <a href="#" className="text-primary d-flex align-items-center justify-content-center me-3"><span className="rounded-circle btn-sm-square border"><i className="fas fa-random" /></span></a>
                        <a href="#" className="text-primary d-flex align-items-center justify-content-center me-0"><span className="rounded-circle btn-sm-square border"><i className="fas fa-heart" /></span></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 col-xl-3">
                <div className="product-item rounded wow fadeInUp" data-wow-delay="0.7s">
                  <div className="product-item-inner border rounded">
                    <div className="product-item-inner-item">
                      <img src="img/product-6.png" className="img-fluid w-100 rounded-top" alt="Image" />
                      <div className="product-new">Mới</div>
                      <div className="product-sale">Giảm Giá</div>
                      <div className="product-sale">Giảm Giá</div>
                      <div className="product-details">
                        <a href="#"><i className="fa fa-eye fa-1x" /></a>
                      </div>
                    </div>
                    <div className="text-center rounded-bottom p-4">
                      <a href="#" className="d-block mb-2">Điện Thoại</a>
                      <a href="#" className="d-block h4">Apple iPad Mini <br /> G2356</a>
                      <del className="me-2 fs-5">$1,250.00</del>
                      <span className="text-primary fs-5">$1,050.00</span>
                    </div>
                  </div>
                  <div className="product-item-add border border-top-0 rounded-bottom  text-center p-4 pt-0">
                    <a href="#" className="btn btn-primary border-secondary rounded-pill py-2 px-4 mb-4"><i className="fas fa-shopping-cart me-2" /> Thêm Vào Giỏ</a>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="d-flex">
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star" />
                      </div>
                      <div className="d-flex">
                        <a href="#" className="text-primary d-flex align-items-center justify-content-center me-3"><span className="rounded-circle btn-sm-square border"><i className="fas fa-random" /></span></a>
                        <a href="#" className="text-primary d-flex align-items-center justify-content-center me-0"><span className="rounded-circle btn-sm-square border"><i className="fas fa-heart" /></span></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="tab-3" className="tab-pane fade show p-0">
            <div className="row g-4">
              <div className="col-md-6 col-lg-4 col-xl-3">
                <div className="product-item rounded wow fadeInUp" data-wow-delay="0.1s">
                  <div className="product-item-inner border rounded">
                    <div className="product-item-inner-item">
                      <img src="img/product-9.png" className="img-fluid w-100 rounded-top" alt="" />
                      <div className="product-details">
                        <a href="#"><i className="fa fa-eye fa-1x" /></a>
                      </div>
                    </div>
                    <div className="text-center rounded-bottom p-4">
                      <a href="#" className="d-block mb-2">Điện Thoại</a>
                      <a href="#" className="d-block h4">Apple iPad Mini <br /> G2356</a>
                      <del className="me-2 fs-5">$1,250.00</del>
                      <span className="text-primary fs-5">$1,050.00</span>
                    </div>
                  </div>
                  <div className="product-item-add border border-top-0 rounded-bottom  text-center p-4 pt-0">
                    <a href="#" className="btn btn-primary border-secondary rounded-pill py-2 px-4 mb-4"><i className="fas fa-shopping-cart me-2" /> Thêm Vào Giỏ</a>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="d-flex">
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star" />
                      </div>
                      <div className="d-flex">
                        <a href="#" className="text-primary d-flex align-items-center justify-content-center me-3"><span className="rounded-circle btn-sm-square border"><i className="fas fa-random" /></span></a>
                        <a href="#" className="text-primary d-flex align-items-center justify-content-center me-0"><span className="rounded-circle btn-sm-square border"><i className="fas fa-heart" /></span></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 col-xl-3">
                <div className="product-item rounded wow fadeInUp" data-wow-delay="0.3s">
                  <div className="product-item-inner border rounded">
                    <div className="product-item-inner-item">
                      <img src="img/product-10.png" className="img-fluid w-100 rounded-top" alt="Image" />
                      <div className="product-details">
                        <a href="#"><i className="fa fa-eye fa-1x" /></a>
                      </div>
                    </div>
                    <div className="text-center rounded-bottom p-4">
                      <a href="#" className="d-block mb-2">Điện Thoại</a>
                      <a href="#" className="d-block h4">Apple iPad Mini <br /> G2356</a>
                      <del className="me-2 fs-5">$1,250.00</del>
                      <span className="text-primary fs-5">$1,050.00</span>
                    </div>
                  </div>
                  <div className="product-item-add border border-top-0 rounded-bottom  text-center p-4 pt-0">
                    <a href="#" className="btn btn-primary border-secondary rounded-pill py-2 px-4 mb-4"><i className="fas fa-shopping-cart me-2" /> Thêm Vào Giỏ</a>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="d-flex">
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star" />
                      </div>
                      <div className="d-flex">
                        <a href="#" className="text-primary d-flex align-items-center justify-content-center me-3"><span className="rounded-circle btn-sm-square border"><i className="fas fa-random" /></span></a>
                        <a href="#" className="text-primary d-flex align-items-center justify-content-center me-0"><span className="rounded-circle btn-sm-square border"><i className="fas fa-heart" /></span></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 col-xl-3">
                <div className="product-item rounded wow fadeInUp" data-wow-delay="0.5s">
                  <div className="product-item-inner border rounded">
                    <div className="product-item-inner-item">
                      <img src="img/product-11.png" className="img-fluid w-100 rounded-top" alt="Image" />
                      <div className="product-details">
                        <a href="#"><i className="fa fa-eye fa-1x" /></a>
                      </div>
                    </div>
                    <div className="text-center rounded-bottom p-4">
                      <a href="#" className="d-block mb-2">Điện Thoại</a>
                      <a href="#" className="d-block h4">Apple iPad Mini <br /> G2356</a>
                      <del className="me-2 fs-5">$1,250.00</del>
                      <span className="text-primary fs-5">$1,050.00</span>
                    </div>
                  </div>
                  <div className="product-item-add border border-top-0 rounded-bottom  text-center p-4 pt-0">
                    <a href="#" className="btn btn-primary border-secondary rounded-pill py-2 px-4 mb-4"><i className="fas fa-shopping-cart me-2" /> Thêm Vào Giỏ</a>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="d-flex">
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star" />
                      </div>
                      <div className="d-flex">
                        <a href="#" className="text-primary d-flex align-items-center justify-content-center me-3"><span className="rounded-circle btn-sm-square border"><i className="fas fa-random" /></span></a>
                        <a href="#" className="text-primary d-flex align-items-center justify-content-center me-0"><span className="rounded-circle btn-sm-square border"><i className="fas fa-heart" /></span></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 col-xl-3">
                <div className="product-item rounded wow fadeInUp" data-wow-delay="0.7s">
                  <div className="product-item-inner border rounded">
                    <div className="product-item-inner-item">
                      <img src="img/product-12.png" className="img-fluid w-100 rounded-top" alt="Image" />
                      <div className="product-details">
                        <a href="#"><i className="fa fa-eye fa-1x" /></a>
                      </div>
                    </div>
                    <div className="text-center rounded-bottom p-4">
                      <a href="#" className="d-block mb-2">Điện Thoại</a>
                      <a href="#" className="d-block h4">Apple iPad Mini <br /> G2356</a>
                      <del className="me-2 fs-5">$1,250.00</del>
                      <span className="text-primary fs-5">$1,050.00</span>
                    </div>
                  </div>
                  <div className="product-item-add border border-top-0 rounded-bottom  text-center p-4 pt-0">
                    <a href="#" className="btn btn-primary border-secondary rounded-pill py-2 px-4 mb-4"><i className="fas fa-shopping-cart me-2" /> Thêm Vào Giỏ</a>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="d-flex">
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star" />
                      </div>
                      <div className="d-flex">
                        <a href="#" className="text-primary d-flex align-items-center justify-content-center me-3"><span className="rounded-circle btn-sm-square border"><i className="fas fa-random" /></span></a>
                        <a href="#" className="text-primary d-flex align-items-center justify-content-center me-0"><span className="rounded-circle btn-sm-square border"><i className="fas fa-heart" /></span></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="tab-4" className="tab-pane fade show p-0">
            <div className="row g-4">
              <div className="col-md-6 col-lg-4 col-xl-3">
                <div className="product-item rounded wow fadeInUp" data-wow-delay="0.1s">
                  <div className="product-item-inner border rounded">
                    <div className="product-item-inner-item">
                      <img src="img/product-14.png" className="img-fluid w-100 rounded-top" alt="Image" />
                      <div className="product-details">
                        <a href="#"><i className="fa fa-eye fa-1x" /></a>
                      </div>
                    </div>
                    <div className="text-center rounded-bottom p-4">
                      <a href="#" className="d-block mb-2">Điện Thoại</a>
                      <a href="#" className="d-block h4">Apple iPad Mini <br /> G2356</a>
                      <del className="me-2 fs-5">$1,250.00</del>
                      <span className="text-primary fs-5">$1,050.00</span>
                    </div>
                  </div>
                  <div className="product-item-add border border-top-0 rounded-bottom  text-center p-4 pt-0">
                    <a href="#" className="btn btn-primary border-secondary rounded-pill py-2 px-4 mb-4"><i className="fas fa-shopping-cart me-2" /> Thêm Vào Giỏ</a>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="d-flex">
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star" />
                      </div>
                      <div className="d-flex">
                        <a href="#" className="text-primary d-flex align-items-center justify-content-center me-3"><span className="rounded-circle btn-sm-square border"><i className="fas fa-random" /></span></a>
                        <a href="#" className="text-primary d-flex align-items-center justify-content-center me-0"><span className="rounded-circle btn-sm-square border"><i className="fas fa-heart" /></span></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 col-xl-3">
                <div className="product-item rounded wow fadeInUp" data-wow-delay="0.3s">
                  <div className="product-item-inner border rounded">
                    <div className="product-item-inner-item">
                      <img src="img/product-15.png" className="img-fluid w-100 rounded-top" alt="Image" />
                      <div className="product-details">
                        <a href="#"><i className="fa fa-eye fa-1x" /></a>
                      </div>
                    </div>
                    <div className="text-center rounded-bottom p-4">
                      <a href="#" className="d-block mb-2">Điện Thoại</a>
                      <a href="#" className="d-block h4">Apple iPad Mini <br /> G2356</a>
                      <del className="me-2 fs-5">$1,250.00</del>
                      <span className="text-primary fs-5">$1,050.00</span>
                    </div>
                  </div>
                  <div className="product-item-add border border-top-0 rounded-bottom  text-center p-4 pt-0">
                    <a href="#" className="btn btn-primary border-secondary rounded-pill py-2 px-4 mb-4"><i className="fas fa-shopping-cart me-2" /> Thêm Vào Giỏ</a>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="d-flex">
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star" />
                      </div>
                      <div className="d-flex">
                        <a href="#" className="text-primary d-flex align-items-center justify-content-center me-3"><span className="rounded-circle btn-sm-square border"><i className="fas fa-random" /></span></a>
                        <a href="#" className="text-primary d-flex align-items-center justify-content-center me-0"><span className="rounded-circle btn-sm-square border"><i className="fas fa-heart" /></span></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 col-xl-3">
                <div className="product-item rounded wow fadeInUp" data-wow-delay="0.5s">
                  <div className="product-item-inner border rounded">
                    <div className="product-item-inner-item">
                      <img src="img/product-17.png" className="img-fluid w-100 rounded-top" alt="Image" />
                      <div className="product-details">
                        <a href="#"><i className="fa fa-eye fa-1x" /></a>
                      </div>
                    </div>
                    <div className="text-center rounded-bottom p-4">
                      <a href="#" className="d-block mb-2">Điện Thoại</a>
                      <a href="#" className="d-block h4">Apple iPad Mini <br /> G2356</a>
                      <del className="me-2 fs-5">$1,250.00</del>
                      <span className="text-primary fs-5">$1,050.00</span>
                    </div>
                  </div>
                  <div className="product-item-add border border-top-0 rounded-bottom  text-center p-4 pt-0">
                    <a href="#" className="btn btn-primary border-secondary rounded-pill py-2 px-4 mb-4"><i className="fas fa-shopping-cart me-2" /> Thêm Vào Giỏ</a>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="d-flex">
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star" />
                      </div>
                      <div className="d-flex">
                        <a href="#" className="text-primary d-flex align-items-center justify-content-center me-3"><span className="rounded-circle btn-sm-square border"><i className="fas fa-random" /></span></a>
                        <a href="#" className="text-primary d-flex align-items-center justify-content-center me-0"><span className="rounded-circle btn-sm-square border"><i className="fas fa-heart" /></span></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 col-xl-3">
                <div className="product-item rounded wow fadeInUp" data-wow-delay="0.7s">
                  <div className="product-item-inner border rounded">
                    <div className="product-item-inner-item">
                      <img src="img/product-16.png" className="img-fluid w-100 rounded-top" alt="Image" />
                      <div className="product-details">
                        <a href="#"><i className="fa fa-eye fa-1x" /></a>
                      </div>
                    </div>
                    <div className="text-center rounded-bottom p-4">
                      <a href="#" className="d-block mb-2">Điện Thoại</a>
                      <a href="#" className="d-block h4">Apple iPad Mini <br /> G2356</a>
                      <del className="me-2 fs-5">$1,250.00</del>
                      <span className="text-primary fs-5">$1,050.00</span>
                    </div>
                  </div>
                  <div className="product-item-add border border-top-0 rounded-bottom  text-center p-4 pt-0">
                    <a href="#" className="btn btn-primary border-secondary rounded-pill py-2 px-4 mb-4"><i className="fas fa-shopping-cart me-2" /> Thêm Vào Giỏ</a>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="d-flex">
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star" />
                      </div>
                      <div className="d-flex">
                        <a href="#" className="text-primary d-flex align-items-center justify-content-center me-3"><span className="rounded-circle btn-sm-square border"><i className="fas fa-random" /></span></a>
                        <a href="#" className="text-primary d-flex align-items-center justify-content-center me-0"><span className="rounded-circle btn-sm-square border"><i className="fas fa-heart" /></span></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Our Products End */}
  {/* Product List Satrt */}
  <div className="container-fluid products productList overflow-hidden">
    <div className="container products-mini py-5">
      <div className="mx-auto text-center mb-5" style={{maxWidth: 900}}>
        <h4 className="text-primary border-bottom border-primary border-2 d-inline-block p-2 title-border-radius wow fadeInUp" data-wow-delay="0.1s">Sản Phẩm</h4>
        <h1 className="mb-0 display-3 wow fadeInUp" data-wow-delay="0.3s">Tất Cả Sản Phẩm</h1>
      </div>
      <div className="productList-carousel owl-carousel wow fadeInUp" data-wow-delay="0.3s">
        <div className="productImg-carousel owl-carousel productList-item">
          <div className="productImg-item products-mini-item border">
            <div className="row g-0">
              <div className="col-5">
                <div className="products-mini-img border-end h-100">
                  <img src="img/product-4.png" className="img-fluid w-100 h-100" alt="Image" />
                  <div className="products-mini-icon rounded-circle bg-primary">
                    <a href="#"><i className="fa fa-eye fa-1x text-white" /></a>
                  </div>
                </div>
              </div>
              <div className="col-7">
                <div className="products-mini-content p-3">
                  <a href="#" className="d-block mb-2">Điện Thoại</a>
                  <a href="#" className="d-block h4">Apple iPad Mini <br /> G2356</a>
                  <del className="me-2 fs-5">$1,250.00</del>
                  <span className="text-primary fs-5">$1,050.00</span>
                </div>
              </div>
            </div>
            <div className="products-mini-add border p-3">
              <a href="#" className="btn btn-primary border-secondary rounded-pill py-2 px-4"><i className="fas fa-shopping-cart me-2" /> Thêm Vào Giỏ</a>
              <div className="d-flex">
                <a href="#" className="text-primary d-flex align-items-center justify-content-center me-3"><span className="rounded-circle btn-sm-square border"><i className="fas fa-random" /></span></a>
                <a href="#" className="text-primary d-flex align-items-center justify-content-center me-0"><span className="rounded-circle btn-sm-square border"><i className="fas fa-heart" /></span></a>
              </div>
            </div>
          </div>
          <div className="productImg-item products-mini-item border">
            <div className="row g-0">
              <div className="col-5">
                <div className="products-mini-img border-end h-100">
                  <img src="img/product-4.png" className="img-fluid w-100 h-100" alt="Image" />
                  <div className="products-mini-icon rounded-circle bg-primary">
                    <a href="#"><i className="fa fa-eye fa-1x text-white" /></a>
                  </div>
                </div>
              </div>
              <div className="col-7">
                <div className="products-mini-content p-3">
                  <a href="#" className="d-block mb-2">Điện Thoại</a>
                  <a href="#" className="d-block h4">Apple iPad Mini <br /> G2356</a>
                  <del className="me-2 fs-5">$1,250.00</del>
                  <span className="text-primary fs-5">$1,050.00</span>
                </div>
              </div>
            </div>
            <div className="products-mini-add border p-3">
              <a href="#" className="btn btn-primary border-secondary rounded-pill py-2 px-4"><i className="fas fa-shopping-cart me-2" /> Thêm Vào Giỏ</a>
              <div className="d-flex">
                <a href="#" className="text-primary d-flex align-items-center justify-content-center me-3"><span className="rounded-circle btn-sm-square border"><i className="fas fa-random" /></span></a>
                <a href="#" className="text-primary d-flex align-items-center justify-content-center me-0"><span className="rounded-circle btn-sm-square border"><i className="fas fa-heart" /></span></a>
              </div>
            </div>
          </div>
          <div className="productImg-item products-mini-item border">
            <div className="row g-0">
              <div className="col-5">
                <div className="products-mini-img border-end h-100">
                  <img src="img/product-6.png" className="img-fluid w-100 h-100" alt="Image" />
                  <div className="products-mini-icon rounded-circle bg-primary">
                    <a href="#"><i className="fa fa-eye fa-1x text-white" /></a>
                  </div>
                </div>
              </div>
              <div className="col-7">
                <div className="products-mini-content p-3">
                  <a href="#" className="d-block mb-2">Điện Thoại</a>
                  <a href="#" className="d-block h4">Apple iPad Mini <br /> G2356</a>
                  <del className="me-2 fs-5">$1,250.00</del>
                  <span className="text-primary fs-5">$1,050.00</span>
                </div>
              </div>
            </div>
            <div className="products-mini-add border p-3">
              <a href="#" className="btn btn-primary border-secondary rounded-pill py-2 px-4"><i className="fas fa-shopping-cart me-2" /> Thêm Vào Giỏ</a>
              <div className="d-flex">
                <a href="#" className="text-primary d-flex align-items-center justify-content-center me-3"><span className="rounded-circle btn-sm-square border"><i className="fas fa-random" /></span></a>
                <a href="#" className="text-primary d-flex align-items-center justify-content-center me-0"><span className="rounded-circle btn-sm-square border"><i className="fas fa-heart" /></span></a>
              </div>
            </div>
          </div>
          <div className="productImg-item products-mini-item border">
            <div className="row g-0">
              <div className="col-5">
                <div className="products-mini-img border-end h-100">
                  <img src="img/product-7.png" className="img-fluid w-100 h-100" alt="Image" />
                  <div className="products-mini-icon rounded-circle bg-primary">
                    <a href="#"><i className="fa fa-eye fa-1x text-white" /></a>
                  </div>
                </div>
              </div>
              <div className="col-7">
                <div className="products-mini-content p-3">
                  <a href="#" className="d-block mb-2">Điện Thoại</a>
                  <a href="#" className="d-block h4">Apple iPad Mini <br /> G2356</a>
                  <del className="me-2 fs-5">$1,250.00</del>
                  <span className="text-primary fs-5">$1,050.00</span>
                </div>
              </div>
            </div>
            <div className="products-mini-add border p-3">
              <a href="#" className="btn btn-primary border-secondary rounded-pill py-2 px-4"><i className="fas fa-shopping-cart me-2" /> Thêm Vào Giỏ</a>
              <div className="d-flex">
                <a href="#" className="text-primary d-flex align-items-center justify-content-center me-3"><span className="rounded-circle btn-sm-square border"><i className="fas fa-random" /></span></a>
                <a href="#" className="text-primary d-flex align-items-center justify-content-center me-0"><span className="rounded-circle btn-sm-square border"><i className="fas fa-heart" /></span></a>
              </div>
            </div>
          </div>
        </div>
        <div className="productImg-carousel owl-carousel productList-item">
          <div className="productImg-item products-mini-item border">
            <div className="row g-0">
              <div className="col-5">
                <div className="products-mini-img border-end h-100">
                  <img src="img/product-8.png" className="img-fluid w-100 h-100" alt="Image" />
                  <div className="products-mini-icon rounded-circle bg-primary">
                    <a href="#"><i className="fa fa-eye fa-1x text-white" /></a>
                  </div>
                </div>
              </div>
              <div className="col-7">
                <div className="products-mini-content p-3">
                  <a href="#" className="d-block mb-2">Điện Thoại</a>
                  <a href="#" className="d-block h4">Apple iPad Mini <br /> G2356</a>
                  <del className="me-2 fs-5">$1,250.00</del>
                  <span className="text-primary fs-5">$1,050.00</span>
                </div>
              </div>
            </div>
            <div className="products-mini-add border p-3">
              <a href="#" className="btn btn-primary border-secondary rounded-pill py-2 px-4"><i className="fas fa-shopping-cart me-2" /> Thêm Vào Giỏ</a>
              <div className="d-flex">
                <a href="#" className="text-primary d-flex align-items-center justify-content-center me-3"><span className="rounded-circle btn-sm-square border"><i className="fas fa-random" /></span></a>
                <a href="#" className="text-primary d-flex align-items-center justify-content-center me-0"><span className="rounded-circle btn-sm-square border"><i className="fas fa-heart" /></span></a>
              </div>
            </div>
          </div>
          <div className="productImg-item products-mini-item border">
            <div className="row g-0">
              <div className="col-5">
                <div className="products-mini-img border-end h-100">
                  <img src="img/product-9.png" className="img-fluid w-100 h-100" alt="Image" />
                  <div className="products-mini-icon rounded-circle bg-primary">
                    <a href="#"><i className="fa fa-eye fa-1x text-white" /></a>
                  </div>
                </div>
              </div>
              <div className="col-7">
                <div className="products-mini-content p-3">
                  <a href="#" className="d-block mb-2">Điện Thoại</a>
                  <a href="#" className="d-block h4">Apple iPad Mini <br /> G2356</a>
                  <del className="me-2 fs-5">$1,250.00</del>
                  <span className="text-primary fs-5">$1,050.00</span>
                </div>
              </div>
            </div>
            <div className="products-mini-add border p-3">
              <a href="#" className="btn btn-primary border-secondary rounded-pill py-2 px-4"><i className="fas fa-shopping-cart me-2" /> Thêm Vào Giỏ</a>
              <div className="d-flex">
                <a href="#" className="text-primary d-flex align-items-center justify-content-center me-3"><span className="rounded-circle btn-sm-square border"><i className="fas fa-random" /></span></a>
                <a href="#" className="text-primary d-flex align-items-center justify-content-center me-0"><span className="rounded-circle btn-sm-square border"><i className="fas fa-heart" /></span></a>
              </div>
            </div>
          </div>
          <div className="productImg-item products-mini-item border">
            <div className="row g-0">
              <div className="col-5">
                <div className="products-mini-img border-end h-100">
                  <img src="img/product-10.png" className="img-fluid w-100 h-100" alt="Image" />
                  <div className="products-mini-icon rounded-circle bg-primary">
                    <a href="#"><i className="fa fa-eye fa-1x text-white" /></a>
                  </div>
                </div>
              </div>
              <div className="col-7">
                <div className="products-mini-content p-3">
                  <a href="#" className="d-block mb-2">Điện Thoại</a>
                  <a href="#" className="d-block h4">Apple iPad Mini <br /> G2356</a>
                  <del className="me-2 fs-5">$1,250.00</del>
                  <span className="text-primary fs-5">$1,050.00</span>
                </div>
              </div>
            </div>
            <div className="products-mini-add border p-3">
              <a href="#" className="btn btn-primary border-secondary rounded-pill py-2 px-4"><i className="fas fa-shopping-cart me-2" /> Thêm Vào Giỏ</a>
              <div className="d-flex">
                <a href="#" className="text-primary d-flex align-items-center justify-content-center me-3"><span className="rounded-circle btn-sm-square border"><i className="fas fa-random" /></span></a>
                <a href="#" className="text-primary d-flex align-items-center justify-content-center me-0"><span className="rounded-circle btn-sm-square border"><i className="fas fa-heart" /></span></a>
              </div>
            </div>
          </div>
          <div className="productImg-item products-mini-item border">
            <div className="row g-0">
              <div className="col-5">
                <div className="products-mini-img border-end h-100">
                  <img src="img/product-11.png" className="img-fluid w-100 h-100" alt="Image" />
                  <div className="products-mini-icon rounded-circle bg-primary">
                    <a href="#"><i className="fa fa-eye fa-1x text-white" /></a>
                  </div>
                </div>
              </div>
              <div className="col-7">
                <div className="products-mini-content p-3">
                  <a href="#" className="d-block mb-2">Điện Thoại</a>
                  <a href="#" className="d-block h4">Apple iPad Mini <br /> G2356</a>
                  <del className="me-2 fs-5">$1,250.00</del>
                  <span className="text-primary fs-5">$1,050.00</span>
                </div>
              </div>
            </div>
            <div className="products-mini-add border p-3">
              <a href="#" className="btn btn-primary border-secondary rounded-pill py-2 px-4"><i className="fas fa-shopping-cart me-2" /> Thêm Vào Giỏ</a>
              <div className="d-flex">
                <a href="#" className="text-primary d-flex align-items-center justify-content-center me-3"><span className="rounded-circle btn-sm-square border"><i className="fas fa-random" /></span></a>
                <a href="#" className="text-primary d-flex align-items-center justify-content-center me-0"><span className="rounded-circle btn-sm-square border"><i className="fas fa-heart" /></span></a>
              </div>
            </div>
          </div>
        </div>
        <div className="productImg-carousel owl-carousel productList-item">
          <div className="productImg-item products-mini-item border">
            <div className="row g-0">
              <div className="col-5">
                <div className="products-mini-img border-end h-100">
                  <img src="img/product-12.png" className="img-fluid w-100 h-100" alt="Image" />
                  <div className="products-mini-icon rounded-circle bg-primary">
                    <a href="#"><i className="fa fa-eye fa-1x text-white" /></a>
                  </div>
                </div>
              </div>
              <div className="col-7">
                <div className="products-mini-content p-3">
                  <a href="#" className="d-block mb-2">Điện Thoại</a>
                  <a href="#" className="d-block h4">Apple iPad Mini <br /> G2356</a>
                  <del className="me-2 fs-5">$1,250.00</del>
                  <span className="text-primary fs-5">$1,050.00</span>
                </div>
              </div>
            </div>
            <div className="products-mini-add border p-3">
              <a href="#" className="btn btn-primary border-secondary rounded-pill py-2 px-4"><i className="fas fa-shopping-cart me-2" /> Thêm Vào Giỏ</a>
              <div className="d-flex">
                <a href="#" className="text-primary d-flex align-items-center justify-content-center me-3"><span className="rounded-circle btn-sm-square border"><i className="fas fa-random" /></span></a>
                <a href="#" className="text-primary d-flex align-items-center justify-content-center me-0"><span className="rounded-circle btn-sm-square border"><i className="fas fa-heart" /></span></a>
              </div>
            </div>
          </div>
          <div className="productImg-item products-mini-item border">
            <div className="row g-0">
              <div className="col-5">
                <div className="products-mini-img border-end h-100">
                  <img src="img/product-13.png" className="img-fluid w-100 h-100" alt="Image" />
                  <div className="products-mini-icon rounded-circle bg-primary">
                    <a href="#"><i className="fa fa-eye fa-1x text-white" /></a>
                  </div>
                </div>
              </div>
              <div className="col-7">
                <div className="products-mini-content p-3">
                  <a href="#" className="d-block mb-2">Điện Thoại</a>
                  <a href="#" className="d-block h4">Apple iPad Mini <br /> G2356</a>
                  <del className="me-2 fs-5">$1,250.00</del>
                  <span className="text-primary fs-5">$1,050.00</span>
                </div>
              </div>
            </div>
            <div className="products-mini-add border p-3">
              <a href="#" className="btn btn-primary border-secondary rounded-pill py-2 px-4"><i className="fas fa-shopping-cart me-2" /> Thêm Vào Giỏ</a>
              <div className="d-flex">
                <a href="#" className="text-primary d-flex align-items-center justify-content-center me-3"><span className="rounded-circle btn-sm-square border"><i className="fas fa-random" /></span></a>
                <a href="#" className="text-primary d-flex align-items-center justify-content-center me-0"><span className="rounded-circle btn-sm-square border"><i className="fas fa-heart" /></span></a>
              </div>
            </div>
          </div>
          <div className="productImg-item products-mini-item border">
            <div className="row g-0">
              <div className="col-5">
                <div className="products-mini-img border-end h-100">
                  <img src="img/product-14.png" className="img-fluid w-100 h-100" alt="Image" />
                  <div className="products-mini-icon rounded-circle bg-primary">
                    <a href="#"><i className="fa fa-eye fa-1x text-white" /></a>
                  </div>
                </div>
              </div>
              <div className="col-7">
                <div className="products-mini-content p-3">
                  <a href="#" className="d-block mb-2">Điện Thoại</a>
                  <a href="#" className="d-block h4">Apple iPad Mini <br /> G2356</a>
                  <del className="me-2 fs-5">$1,250.00</del>
                  <span className="text-primary fs-5">$1,050.00</span>
                </div>
              </div>
            </div>
            <div className="products-mini-add border p-3">
              <a href="#" className="btn btn-primary border-secondary rounded-pill py-2 px-4"><i className="fas fa-shopping-cart me-2" /> Thêm Vào Giỏ</a>
              <div className="d-flex">
                <a href="#" className="text-primary d-flex align-items-center justify-content-center me-3"><span className="rounded-circle btn-sm-square border"><i className="fas fa-random" /></span></a>
                <a href="#" className="text-primary d-flex align-items-center justify-content-center me-0"><span className="rounded-circle btn-sm-square border"><i className="fas fa-heart" /></span></a>
              </div>
            </div>
          </div>
          <div className="productImg-item products-mini-item border">
            <div className="row g-0">
              <div className="col-5">
                <div className="products-mini-img border-end h-100">
                  <img src="img/product-15.png" className="img-fluid w-100 h-100" alt="Image" />
                  <div className="products-mini-icon rounded-circle bg-primary">
                    <a href="#"><i className="fa fa-eye fa-1x text-white" /></a>
                  </div>
                </div>
              </div>
              <div className="col-7">
                <div className="products-mini-content p-3">
                  <a href="#" className="d-block mb-2">Điện Thoại</a>
                  <a href="#" className="d-block h4">Apple iPad Mini <br /> G2356</a>
                  <del className="me-2 fs-5">$1,250.00</del>
                  <span className="text-primary fs-5">$1,050.00</span>
                </div>
              </div>
            </div>
            <div className="products-mini-add border p-3">
              <a href="#" className="btn btn-primary border-secondary rounded-pill py-2 px-4"><i className="fas fa-shopping-cart me-2" /> Thêm Vào Giỏ</a>
              <div className="d-flex">
                <a href="#" className="text-primary d-flex align-items-center justify-content-center me-3"><span className="rounded-circle btn-sm-square border"><i className="fas fa-random" /></span></a>
                <a href="#" className="text-primary d-flex align-items-center justify-content-center me-0"><span className="rounded-circle btn-sm-square border"><i className="fas fa-heart" /></span></a>
              </div>
            </div>
          </div>
        </div>
        <div className="productImg-carousel owl-carousel productList-item">
          <div className="productImg-item products-mini-item border">
            <div className="row g-0">
              <div className="col-5">
                <div className="products-mini-img border-end h-100">
                  <img src="img/product-16.png" className="img-fluid w-100 h-100" alt="Image" />
                  <div className="products-mini-icon rounded-circle bg-primary">
                    <a href="#"><i className="fa fa-eye fa-1x text-white" /></a>
                  </div>
                </div>
              </div>
              <div className="col-7">
                <div className="products-mini-content p-3">
                  <a href="#" className="d-block mb-2">Điện Thoại</a>
                  <a href="#" className="d-block h4">Apple iPad Mini <br /> G2356</a>
                  <del className="me-2 fs-5">$1,250.00</del>
                  <span className="text-primary fs-5">$1,050.00</span>
                </div>
              </div>
            </div>
            <div className="products-mini-add border p-3">
              <a href="#" className="btn btn-primary border-secondary rounded-pill py-2 px-4"><i className="fas fa-shopping-cart me-2" /> Thêm Vào Giỏ</a>
              <div className="d-flex">
                <a href="#" className="text-primary d-flex align-items-center justify-content-center me-3"><span className="rounded-circle btn-sm-square border"><i className="fas fa-random" /></span></a>
                <a href="#" className="text-primary d-flex align-items-center justify-content-center me-0"><span className="rounded-circle btn-sm-square border"><i className="fas fa-heart" /></span></a>
              </div>
            </div>
          </div>
          <div className="productImg-item products-mini-item border">
            <div className="row g-0">
              <div className="col-5">
                <div className="products-mini-img border-end h-100">
                  <img src="img/product-17.png" className="img-fluid w-100 h-100" alt="Image" />
                  <div className="products-mini-icon rounded-circle bg-primary">
                    <a href="#"><i className="fa fa-eye fa-1x text-white" /></a>
                  </div>
                </div>
              </div>
              <div className="col-7">
                <div className="products-mini-content p-3">
                  <a href="#" className="d-block mb-2">SmartPhone</a>
                  <a href="#" className="d-block h4">Apple iPad Mini <br /> G2356</a>
                  <del className="me-2 fs-5">$1,250.00</del>
                  <span className="text-primary fs-5">$1,050.00</span>
                </div>
              </div>
            </div>
            <div className="products-mini-add border p-3">
              <a href="#" className="btn btn-primary border-secondary rounded-pill py-2 px-4"><i className="fas fa-shopping-cart me-2" /> Add To Cart</a>
              <div className="d-flex">
                <a href="#" className="text-primary d-flex align-items-center justify-content-center me-3"><span className="rounded-circle btn-sm-square border"><i className="fas fa-random" /></span></a>
                <a href="#" className="text-primary d-flex align-items-center justify-content-center me-0"><span className="rounded-circle btn-sm-square border"><i className="fas fa-heart" /></span></a>
              </div>
            </div>
          </div>
          <div className="productImg-item products-mini-item border">
            <div className="row g-0">
              <div className="col-5">
                <div className="products-mini-img border-end h-100">
                  <img src="img/product-3.png" className="img-fluid w-100 h-100" alt="Image" />
                  <div className="products-mini-icon rounded-circle bg-primary">
                    <a href="#"><i className="fa fa-eye fa-1x text-white" /></a>
                  </div>
                </div>
              </div>
              <div className="col-7">
                <div className="products-mini-content p-3">
                  <a href="#" className="d-block mb-2">SmartPhone</a>
                  <a href="#" className="d-block h4">Apple iPad Mini <br /> G2356</a>
                  <del className="me-2 fs-5">$1,250.00</del>
                  <span className="text-primary fs-5">$1,050.00</span>
                </div>
              </div>
            </div>
            <div className="products-mini-add border p-3">
              <a href="#" className="btn btn-primary border-secondary rounded-pill py-2 px-4"><i className="fas fa-shopping-cart me-2" /> Add To Cart</a>
              <div className="d-flex">
                <a href="#" className="text-primary d-flex align-items-center justify-content-center me-3"><span className="rounded-circle btn-sm-square border"><i className="fas fa-random" /></span></a>
                <a href="#" className="text-primary d-flex align-items-center justify-content-center me-0"><span className="rounded-circle btn-sm-square border"><i className="fas fa-heart" /></span></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Product List End */}
  {/* Product Banner Start */}
  <div className="container-fluid py-5">
    <div className="container pb-5">
      <div className="row g-4">
        <div className="col-lg-6 wow fadeInLeft" data-wow-delay="0.1s">
          <a href="#">
          </a><div className="bg-primary rounded position-relative"><a href="#">
              <img src="img/product-banner.jpg" className="img-fluid w-100 rounded" alt="" />
            </a><div className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center rounded p-4" style={{background: 'rgba(255, 255, 255, 0.5)'}}><a href="#">
                <h3 className="display-5 text-primary">EOS Rebel <br /> <span>T7i Kit</span></h3>
                <p className="fs-4 text-muted">$899.99</p>
              </a><a href="#" className="btn btn-primary rounded-pill align-self-start py-2 px-4">Mua Ngay</a>
            </div>
          </div>
        </div>
        <div className="col-lg-6 wow fadeInRight" data-wow-delay="0.2s">
          <a href="#">
          </a><div className="text-center bg-primary rounded position-relative"><a href="#">
              <img src="img/product-banner-2.jpg" className="img-fluid w-100" alt="" />
            </a><div className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center rounded p-4" style={{background: 'rgba(242, 139, 0, 0.5)'}}><a href="#">
                <h2 className="display-2 text-secondary">GIẢM GIÁ</h2>
                <h4 className="display-5 text-white mb-4">Giảm Lên Đến 50%</h4>
              </a><a href="#" className="btn btn-secondary rounded-pill align-self-center py-2 px-4">Mua Ngay</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Product Banner End */}
</div>

        </>
    )
}
export default Bestseller;