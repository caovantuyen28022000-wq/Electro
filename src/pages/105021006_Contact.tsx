function Contact() {
    return (
        <>
        <div>
  {/* Single Page Header start */}
  <div className="container-fluid page-header py-5">
    <h1 className="text-center text-white display-6 wow fadeInUp" data-wow-delay="0.1s">Liên Hệ</h1>
    <ol className="breadcrumb justify-content-center mb-0 wow fadeInUp" data-wow-delay="0.3s">
      <li className="breadcrumb-item"><a href="/">Trang Chủ</a></li>
      <li className="breadcrumb-item"><a href="#">Trang</a></li>
      <li className="breadcrumb-item active text-white">Liên Hệ</li>
    </ol>
  </div>
  {/* Single Page Header End */}
  {/* Contucts Start */}
  <div className="container-fluid contact py-5">
    <div className="container py-5">
      <div className="p-5 bg-light rounded">
        <div className="row g-4">
          <div className="col-12">
            <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: 900}}>
              <h4 className="text-primary border-bottom border-primary border-2 d-inline-block pb-2">Kết Nối</h4>
              <p className="mb-5 fs-5 text-dark">Chúng tôi luôn ở đây vì bạn! Chúng tôi có thể giúp gì cho bạn?
              </p>
            </div>
          </div>
          <div className="col-lg-7">
            <h5 className="text-primary wow fadeInUp" data-wow-delay="0.1s">Hãy Kết Nối</h5>
            <h1 className="display-5 mb-4 wow fadeInUp" data-wow-delay="0.3s">Gửi Tin Nhắn Của Bạn</h1>
            <p className="mb-4 wow fadeInUp" data-wow-delay="0.5s">Biểu mẫu liên hệ hiện đang không hoạt động. Nhận biểu mẫu liên hệ đầy đủ chức năng với Ajax &amp; PHP trong vài phút. Chỉ cần sao chép và dán các tệp, thêm một chút mã và bạn đã hoàn tất. <a href="https://htmlcodex.com/contact-form">Tải Ngay</a>.</p>
            <form>
              <div className="row g-4 wow fadeInUp" data-wow-delay="0.1s">
                <div className="col-lg-12 col-xl-6">
                  <div className="form-floating">
                    <input type="text" className="form-control" id="name" placeholder="Tên của bạn" />
                    <label htmlFor="name">Tên của bạn</label>
                  </div>
                </div>
                <div className="col-lg-12 col-xl-6">
                  <div className="form-floating">
                    <input type="email" className="form-control" id="email" placeholder="Email của bạn" />
                    <label htmlFor="email">Email của bạn</label>
                  </div>
                </div>
                <div className="col-lg-12 col-xl-6">
                  <div className="form-floating">
                    <input type="phone" className="form-control" id="phone" placeholder="Số điện thoại" />
                    <label htmlFor="phone">Số điện thoại của bạn</label>
                  </div>
                </div>
                <div className="col-lg-12 col-xl-6">
                  <div className="form-floating">
                    <input type="text" className="form-control" id="project" placeholder="Dự án" />
                    <label htmlFor="project">Dự án của bạn</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-floating">
                    <input type="text" className="form-control" id="subject" placeholder="Chủ đề" />
                    <label htmlFor="subject">Chủ đề</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-floating">
                    <textarea className="form-control" placeholder="Để lại tin nhắn tại đây" id="message" style={{height: 160}} defaultValue={""} />
                    <label htmlFor="message">Tin nhắn</label>
                  </div>
                </div>
                <div className="col-12">
                  <button className="btn btn-primary w-100 py-3">Gửi Tin Nhắn</button>
                </div>
              </div>
            </form>
          </div>
          <div className="col-lg-5 wow fadeInUp" data-wow-delay="0.2s">
            <div className="h-100 rounded">
              <iframe className="rounded w-100" style={{height: '100%'}} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387191.33750346623!2d-73.97968099999999!3d40.6974881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1694259649153!5m2!1sen!2sbd" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </div>
          <div className="col-lg-12">
            <div className="row g-4 align-items-center justify-content-center">
              <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.1s">
                <div className="rounded p-4">
                  <div className="rounded-circle bg-secondary d-flex align-items-center justify-content-center mb-4" style={{width: 70, height: 70}}>
                    <i className="fas fa-map-marker-alt fa-2x text-primary" />
                  </div>
                  <div>
                    <h4>Địa Chỉ</h4>
                    <p className="mb-2">123 Đường New York, Mỹ</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.3s">
                <div className="rounded p-4">
                  <div className="rounded-circle bg-secondary d-flex align-items-center justify-content-center mb-4" style={{width: 70, height: 70}}>
                    <i className="fas fa-envelope fa-2x text-primary" />
                  </div>
                  <div>
                    <h4>Gửi Email</h4>
                    <p className="mb-2">info@example.com</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.5s">
                <div className="rounded p-4">
                  <div className="rounded-circle bg-secondary d-flex align-items-center justify-content-center mb-4" style={{width: 70, height: 70}}>
                    <i className="fa fa-phone-alt fa-2x text-primary" />
                  </div>
                  <div>
                    <h4>Điện Thoại</h4>
                    <p className="mb-2">(+84) 963 633 122</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.7s">
                <div className="rounded p-4">
                  <div className="rounded-circle bg-secondary d-flex align-items-center justify-content-center mb-4" style={{width: 70, height: 70}}>
                    <i className="fab fa-firefox-browser fa-2x text-primary" />
                  </div>
                  <div>
                    <h4>Website</h4>
                    <p className="mb-2">electro.com.vn</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Contuct End */}
</div>

        </>
    )
}
export default Contact;