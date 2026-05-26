function Footer() {
    return (
        <>
        {/* Footer Start */}
  <div className="container-fluid footer py-5 wow fadeIn" data-wow-delay="0.2s">
    <div className="container py-5">
      <div className="row g-4 rounded mb-5" style={{background: 'rgba(255, 255, 255, .03)'}}>
        <div className="col-md-6 col-lg-6 col-xl-3">
          <div className="rounded p-4">
            <div className="rounded-circle bg-secondary d-flex align-items-center justify-content-center mb-4" style={{width: 70, height: 70}}>
              <i className="fas fa-map-marker-alt fa-2x text-primary" />
            </div>
            <div>
              <h4 className="text-white">Địa chỉ</h4>
              <p className="mb-2">123 Trịnh Văn Bô, Hà Nội</p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-6 col-xl-3">
          <div className="rounded p-4">
            <div className="rounded-circle bg-secondary d-flex align-items-center justify-content-center mb-4" style={{width: 70, height: 70}}>
              <i className="fas fa-envelope fa-2x text-primary" />
            </div>
            <div>
              <h4 className="text-white">Email liên hệ</h4>
              <p className="mb-2">info@electro.com.vn</p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-6 col-xl-3">
          <div className="rounded p-4">
            <div className="rounded-circle bg-secondary d-flex align-items-center justify-content-center mb-4" style={{width: 70, height: 70}}>
              <i className="fa fa-phone-alt fa-2x text-primary" />
            </div>
            <div>
              <h4 className="text-white">Điện thoại</h4>
              <p className="mb-2">(+84) 963 633 122</p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-6 col-xl-3">
          <div className="rounded p-4">
            <div className="rounded-circle bg-secondary d-flex align-items-center justify-content-center mb-4" style={{width: 70, height: 70}}>
              <i className="fab fa-firefox-browser fa-2x text-primary" />
            </div>
            <div>
              <h4 className="text-white">Website</h4>
              <p className="mb-2">(+012) 3456 7890</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row g-5">
        <div className="col-md-6 col-lg-6 col-xl-3">
          <div className="footer-item d-flex flex-column">
            <div className="footer-item">
              <h4 className="text-primary mb-4">Đăng ký nhận tin</h4>
              <p className="mb-3">Đăng ký nhận bản tin của chúng tôi để luôn cập nhật những ưu đãi hấp dẫn và các sản phẩm công nghệ mới nhất.</p>
              <div className="position-relative mx-auto rounded-pill">
                <input className="form-control rounded-pill w-100 py-3 ps-4 pe-5" type="text" placeholder="Nhập email của bạn" />
                <button type="button" className="btn btn-primary rounded-pill position-absolute top-0 end-0 py-2 mt-2 me-2">Đăng Ký</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-6 col-xl-3">
          <div className="footer-item d-flex flex-column">
            <h4 className="text-primary mb-4">Chăm Sóc Khách Hàng</h4>
            <a href="#" ><i className="fas fa-angle-right me-2" /> Liên hệ</a>
            <a href="#" ><i className="fas fa-angle-right me-2" /> Chính sách đổi trả</a>
            <a href="#" ><i className="fas fa-angle-right me-2" /> Lịch sử đơn hàng</a>
            <a href="#" ><i className="fas fa-angle-right me-2" /> Sơ đồ trang</a>
            <a href="#" ><i className="fas fa-angle-right me-2" /> Đánh giá từ khách hàng</a>
            <a href="#" ><i className="fas fa-angle-right me-2" /> Tài khoản của tôi</a>
            <a href="#" ><i className="fas fa-angle-right me-2" /> Hủy đăng ký nhận tin</a>
          </div>
        </div>
        <div className="col-md-6 col-lg-6 col-xl-3">
          <div className="footer-item d-flex flex-column">
            <h4 className="text-primary mb-4">Thông Tin</h4>
            <a href="#" ><i className="fas fa-angle-right me-2" /> Về chúng tôi</a>
            <a href="#" ><i className="fas fa-angle-right me-2" /> Thông tin giao hàng</a>
            <a href="#" ><i className="fas fa-angle-right me-2" /> Chính sách bảo mật</a>
            <a href="#" ><i className="fas fa-angle-right me-2" /> Điều khoản &amp; Điều kiện</a>
            <a href="#" ><i className="fas fa-angle-right me-2" /> Chính sách bảo hành</a>
            <a href="#" ><i className="fas fa-angle-right me-2" /> Câu hỏi thường gặp</a>
            <a href="#" ><i className="fas fa-angle-right me-2" /> Đăng nhập người bán</a>
          </div>
        </div>
        <div className="col-md-6 col-lg-6 col-xl-3">
          <div className="footer-item d-flex flex-column">
            <h4 className="text-primary mb-4">Mở Rộng</h4>
            <a href="#" ><i className="fas fa-angle-right me-2" /> Thương hiệu</a>
            <a href="#" ><i className="fas fa-angle-right me-2" /> Phiếu quà tặng</a>
            <a href="#" ><i className="fas fa-angle-right me-2" /> Đối tác & Cộng tác viên</a>
            <a href="#" ><i className="fas fa-angle-right me-2" /> Danh sách yêu thích</a>
            <a href="#" ><i className="fas fa-angle-right me-2" /> Lịch sử đơn hàng</a>
            <a href="#" ><i className="fas fa-angle-right me-2" /> Theo dõi đơn hàng</a>
            <a href="#" ><i className="fas fa-angle-right me-2" /> Hỗ trợ kỹ thuật</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Footer End */}
 
        </>
    )
}
export default Footer;
