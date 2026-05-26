function Error() {
    return (
        <>
         <div>
  {/* Single Page Header start */}
  <div className="container-fluid page-header py-5">
    <h1 className="text-center text-white display-6 wow fadeInUp" data-wow-delay="0.1s">Lỗi 404</h1>
    <ol className="breadcrumb justify-content-center mb-0 wow fadeInUp" data-wow-delay="0.3s">
      <li className="breadcrumb-item"><a href="/">Trang Chủ</a></li>
      <li className="breadcrumb-item"><a href="#">Trang</a></li>
      <li className="breadcrumb-item active text-white">Lỗi 404</li>
    </ol>
  </div>
  {/* Single Page Header End */}
  {/* 404 Start */}
  <div className="container-fluid py-5">
    <div className="container py-5 text-center">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <i className="bi bi-exclamation-triangle display-1 text-secondary" />
          <h1 className="display-1">404</h1>
          <h1 className="mb-4">Không Tìm Thấy Trang</h1>
          <p className="mb-4">Xin lỗi, trang bạn đang tìm kiếm không tồn tại trên hệ thống của chúng tôi! Vui lòng quay lại trang chủ hoặc thử sử dụng công cụ tìm kiếm.</p>
          <a className="btn btn-primary rounded-pill py-3 px-5" href="/">Quay Về Trang Chủ</a>
        </div>
      </div>
    </div>
  </div>
  {/* 404 End */}
</div>


        </>
    )
}
export default Error;
