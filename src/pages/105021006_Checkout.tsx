import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCartStore } from '../store/cartStore';

interface FormData {
  firstName: string;
  lastName: string;
  companyName: string;
  address: string;
  town: string;
  country: string;
  postcode: string;
  phone: string;
  email: string;
  orderNotes: string;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  address?: string;
  phone?: string;
}

function Checkout() {
  const navigate = useNavigate();
  const { items, getTotalPrice, clearCart } = useCartStore();
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    companyName: '',
    address: '',
    town: '',
    country: '',
    postcode: '',
    phone: '',
    email: '',
    orderNotes: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [submitted, setSubmitted] = useState(false);

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

  const validateForm = (): FormErrors => {
    const newErrors: FormErrors = {};

    // Validate First Name
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'Tên là bắt buộc';
    }

    // Validate Last Name
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Họ là bắt buộc';
    }

    // Validate Address
    if (!formData.address.trim()) {
      newErrors.address = 'Địa chỉ là bắt buộc';
    }

    // Validate Phone - Vietnamese phone format (10-11 digits only)
    if (!formData.phone.trim()) {
      newErrors.phone = 'Số điện thoại là bắt buộc';
    } else if (!/^[0-9]{10,11}$/.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Số điện thoại phải có 10-11 chữ số (chỉ chứa số)';
    }

    return newErrors;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name } = e.target;
    setTouched(prev => ({
      ...prev,
      [name]: true,
    }));

    // Validate the field on blur
    const fieldErrors = validateForm();
    if (fieldErrors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: fieldErrors[name as keyof FormErrors],
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const fieldErrors = validateForm();
    setErrors(fieldErrors);

    // Mark all fields as touched to show errors
    const allTouched: Record<string, boolean> = {};
    Object.keys(formData).forEach(key => {
      allTouched[key] = true;
    });
    setTouched(allTouched);

    // If there are no errors, proceed with the order
    if (Object.keys(fieldErrors).length === 0) {
      // Clear the cart
      clearCart();
      
      // Navigate to Thank You page with user data
      navigate('/thankyou', {
        state: {
          firstName: formData.firstName,
          lastName: formData.lastName,
          address: formData.address,
          phone: formData.phone,
        },
      });
    } else {
      // Scroll to first error
      const firstErrorField = Object.keys(fieldErrors)[0];
      const errorElement = document.getElementById(firstErrorField);
      if (errorElement) {
        errorElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
        errorElement.focus();
      }
    }
  };

  const shouldShowError = (fieldName: string) => {
    return (touched[fieldName] || submitted) && errors[fieldName as keyof FormErrors];
  };

  return (
    <>
      <div>
        {/* Single Page Header start */}
        <div className="container-fluid page-header py-5">
          <h1 className="text-center text-white display-6 wow fadeInUp" data-wow-delay="0.1s">Thanh Toán</h1>
          <ol className="breadcrumb justify-content-center mb-0 wow fadeInUp" data-wow-delay="0.3s">
            <li className="breadcrumb-item"><a href="/">Trang Chủ</a></li>
            <li className="breadcrumb-item"><a href="#">Trang</a></li>
            <li className="breadcrumb-item active text-white">Thanh Toán</li>
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

        {/* Checkout Page Start */}
        <div className="container-fluid bg-light overflow-hidden py-5">
          <div className="container py-5">
            <h1 className="mb-4 wow fadeInUp" data-wow-delay="0.1s">Thông tin thanh toán</h1>
            <form onSubmit={handleSubmit} noValidate>
              <div className="row g-5">
                <div className="col-md-12 col-lg-6 col-xl-6 wow fadeInUp" data-wow-delay="0.1s">
                  <div className="row">
                    <div className="col-md-12 col-lg-6">
                      <div className="form-item w-100">
                        <label className="form-label my-3" htmlFor="firstName">
                          Tên<sup className="text-danger">*</sup>
                        </label>
                        <input
                          type="text"
                          className={`form-control ${shouldShowError('firstName') ? 'is-invalid' : ''}`}
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          onBlur={handleBlur}
                          placeholder="Nhập tên của bạn"
                        />
                        {shouldShowError('firstName') && (
                          <div className="invalid-feedback d-block">
                            {errors.firstName}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="col-md-12 col-lg-6">
                      <div className="form-item w-100">
                        <label className="form-label my-3" htmlFor="lastName">
                          Họ<sup className="text-danger">*</sup>
                        </label>
                        <input
                          type="text"
                          className={`form-control ${shouldShowError('lastName') ? 'is-invalid' : ''}`}
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          onBlur={handleBlur}
                          placeholder="Nhập họ của bạn"
                        />
                        {shouldShowError('lastName') && (
                          <div className="invalid-feedback d-block">
                            {errors.lastName}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="form-item">
                    <label className="form-label my-3" htmlFor="companyName">
                      Tên công ty
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="companyName"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      placeholder="Tên công ty (tùy chọn)"
                    />
                  </div>

                  <div className="form-item">
                    <label className="form-label my-3" htmlFor="address">
                      Địa chỉ<sup className="text-danger">*</sup>
                    </label>
                    <input
                      type="text"
                      className={`form-control ${shouldShowError('address') ? 'is-invalid' : ''}`}
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      placeholder="Số nhà, tên đường"
                    />
                    {shouldShowError('address') && (
                      <div className="invalid-feedback d-block">
                        {errors.address}
                      </div>
                    )}
                  </div>

                  <div className="form-item">
                    <label className="form-label my-3" htmlFor="town">
                      Tỉnh/Thành phố
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="town"
                      name="town"
                      value={formData.town}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      placeholder="Nhập tỉnh/thành phố"
                    />
                  </div>

                  <div className="form-item">
                    <label className="form-label my-3" htmlFor="country">
                      Quốc gia
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="country"
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      placeholder="Nhập quốc gia"
                    />
                  </div>

                  <div className="form-item">
                    <label className="form-label my-3" htmlFor="postcode">
                      Mã bưu điện/Zip
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="postcode"
                      name="postcode"
                      value={formData.postcode}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      placeholder="Nhập mã bưu điện"
                    />
                  </div>

                  <div className="form-item">
                    <label className="form-label my-3" htmlFor="phone">
                      Số điện thoại<sup className="text-danger">*</sup>
                    </label>
                    <input
                      type="tel"
                      className={`form-control ${shouldShowError('phone') ? 'is-invalid' : ''}`}
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      placeholder="Nhập số điện thoại"
                    />
                    {shouldShowError('phone') && (
                      <div className="invalid-feedback d-block">
                        {errors.phone}
                      </div>
                    )}
                  </div>

                  <div className="form-item">
                    <label className="form-label my-3" htmlFor="email">
                      Địa chỉ email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      placeholder="Nhập địa chỉ email"
                    />
                  </div>

                  <div className="form-check my-3">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="Account-1"
                      name="Accounts"
                      defaultValue="Accounts"
                    />
                    <label className="form-check-label" htmlFor="Account-1">
                      Tạo tài khoản?
                    </label>
                  </div>

                  <hr />

                  <div className="form-check my-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="Address-1"
                      name="Address"
                      defaultValue="Address"
                    />
                    <label className="form-check-label" htmlFor="Address-1">
                      Giao đến địa chỉ khác?
                    </label>
                  </div>

                  <div className="form-item">
                    <label className="form-label my-3" htmlFor="orderNotes">
                      Ghi chú đơn hàng (Tùy chọn)
                    </label>
                    <textarea
                      name="orderNotes"
                      className="form-control"
                      spellCheck="false"
                      cols={30}
                      rows={11}
                      id="orderNotes"
                      value={formData.orderNotes}
                      onChange={handleInputChange}
                      placeholder="Ghi chú về đơn hàng của bạn, ví dụ: ghi chú đặc biệt cho việc giao hàng."
                    />
                  </div>
                </div>

                <div className="col-md-12 col-lg-6 col-xl-6 wow fadeInUp" data-wow-delay="0.3s">
                  <div className="table-responsive">
                    <table className="table">
                      <thead>
                        <tr className="text-center">
                          <th scope="col" className="text-start">Tên</th>
                          <th scope="col">Mẫu</th>
                          <th scope="col">Giá</th>
                          <th scope="col">Số lượng</th>
                          <th scope="col">Tổng</th>
                        </tr>
                      </thead>
                      <tbody>
                        {items.map((item) => (
                          <tr className="text-center" key={item.id}>
                            <th scope="row" className="text-start py-4">
                              {item.name}
                            </th>
                            <td className="py-4">{item.category || 'N/A'}</td>
                            <td className="py-4">${item.price.toLocaleString()}</td>
                            <td className="py-4 text-center">{item.quantity}</td>
                            <td className="py-4">${(item.price * item.quantity).toLocaleString()}</td>
                          </tr>
                        ))}
                        <tr>
                          <th scope="row"></th>
                          <td className="py-4" />
                          <td className="py-4" />
                          <td className="py-4">
                            <p className="mb-0 text-dark py-2">Tạm tính</p>
                          </td>
                          <td className="py-4">
                            <div className="py-2 text-center border-bottom border-top">
                              <p className="mb-0 text-dark">${getTotalPrice().toLocaleString()}</p>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row"></th>
                          <td className="py-4">
                            <p className="mb-0 text-dark py-4">Vận chuyển</p>
                          </td>
                          <td colSpan={3} className="py-4">
                            <div className="form-check text-start">
                              <input
                                type="checkbox"
                                className="form-check-input bg-primary border-0"
                                id="Shipping-1"
                                name="Shipping-1"
                                defaultValue="Shipping"
                              />
                              <label className="form-check-label" htmlFor="Shipping-1">
                                Miễn phí vận chuyển
                              </label>
                            </div>
                            <div className="form-check text-start">
                              <input
                                type="checkbox"
                                className="form-check-input bg-primary border-0"
                                id="Shipping-2"
                                name="Shipping-1"
                                defaultValue="Shipping"
                              />
                              <label className="form-check-label" htmlFor="Shipping-2">
                                Phí cố định: $15.00
                              </label>
                            </div>
                            <div className="form-check text-start">
                              <input
                                type="checkbox"
                                className="form-check-input bg-primary border-0"
                                id="Shipping-3"
                                name="Shipping-1"
                                defaultValue="Shipping"
                              />
                              <label className="form-check-label" htmlFor="Shipping-3">
                                Nhận tại cửa hàng: $8.00
                              </label>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row"></th>
                          <td className="py-4">
                            <p className="mb-0 text-dark text-uppercase py-2">TỔNG CỘNG</p>
                          </td>
                          <td className="py-4" />
                          <td className="py-4" />
                          <td className="py-4">
                            <div className="py-2 text-center border-bottom border-top">
                              <p className="mb-0 text-dark">${getTotalPrice().toLocaleString()}</p>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="row g-0 text-center align-items-center justify-content-center border-bottom py-2">
                    <div className="col-12">
                      <div className="form-check text-start my-2">
                        <input
                          type="checkbox"
                          className="form-check-input bg-primary border-0"
                          id="Transfer-1"
                          name="Transfer"
                          defaultValue="Transfer"
                        />
                        <label className="form-check-label" htmlFor="Transfer-1">
                          Chuyển khoản ngân hàng
                        </label>
                      </div>
                      <p className="text-start text-dark">
                        Thực hiện thanh toán trực tiếp vào tài khoản ngân hàng của chúng tôi. Vui lòng
                        sử dụng ID đơn hàng của bạn làm tham chiếu thanh toán. Đơn hàng của bạn sẽ không được giao
                        cho đến khi khoản tiền đã được chuyển vào tài khoản của chúng tôi.
                      </p>
                    </div>
                  </div>

                  <div className="row g-4 text-center align-items-center justify-content-center border-bottom py-2">
                    <div className="col-12">
                      <div className="form-check text-start my-2">
                        <input
                          type="checkbox"
                          className="form-check-input bg-primary border-0"
                          id="Payments-1"
                          name="Payments"
                          defaultValue="Payments"
                        />
                        <label className="form-check-label" htmlFor="Payments-1">
                          Thanh toán bằng séc
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="row g-4 text-center align-items-center justify-content-center border-bottom py-2">
                    <div className="col-12">
                      <div className="form-check text-start my-2">
                        <input
                          type="checkbox"
                          className="form-check-input bg-primary border-0"
                          id="Delivery-1"
                          name="Delivery"
                          defaultValue="Delivery"
                        />
                        <label className="form-check-label" htmlFor="Delivery-1">
                          Thanh toán khi nhận hàng (COD)
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="row g-4 text-center align-items-center justify-content-center border-bottom py-2">
                    <div className="col-12">
                      <div className="form-check text-start my-2">
                        <input
                          type="checkbox"
                          className="form-check-input bg-primary border-0"
                          id="Paypal-1"
                          name="Paypal"
                          defaultValue="Paypal"
                        />
                        <label className="form-check-label" htmlFor="Paypal-1">
                          Paypal
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="row g-4 text-center align-items-center justify-content-center pt-4">
                    <button
                      type="submit"
                      className="btn btn-primary border-secondary py-3 px-4 text-uppercase w-100 text-primary"
                    >
                      Đặt Hàng
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        {/* Checkout Page End */}
      </div>
    </>
  );
}

export default Checkout;