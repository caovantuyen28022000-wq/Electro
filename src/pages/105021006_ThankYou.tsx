import { useEffect } from 'react';
import { useLocation, NavLink } from 'react-router-dom';

interface LocationState {
  firstName: string;
  lastName: string;
  address: string;
  phone: string;
}

function ThankYou() {
  const location = useLocation();
  const state = location.state as LocationState;

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

  // If no state provided, show generic message
  if (!state) {
    return (
      <>
        <div>
          {/* Single Page Header start */}
          <div className="container-fluid page-header py-5">
            <h1 className="text-center text-white display-6 wow fadeInUp" data-wow-delay="0.1s">
              Cảm Ơn Quý Khách
            </h1>
            <ol className="breadcrumb justify-content-center mb-0 wow fadeInUp" data-wow-delay="0.3s">
              <li className="breadcrumb-item"><a href="/">Home</a></li>
              <li className="breadcrumb-item active text-white">Thank You</li>
            </ol>
          </div>
          {/* Single Page Header End */}

          <div className="container py-5 text-center">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="bg-light rounded p-5 wow fadeInUp" data-wow-delay="0.1s">
                  <i className="fas fa-check-circle text-success fa-5x mb-4" />
                  <h2 className="mb-4">Cảm ơn quý khách đã đặt hàng!</h2>
                  <p className="fs-5 mb-4">
                    Đơn hàng của quý khách đã được ghi nhận. Chúng tôi sẽ liên hệ sớm nhất có thể.
                  </p>
                  <NavLink to="/shop" className="btn btn-primary rounded-pill py-3 px-5">
                    Tiếp tục mua sắm
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  const { firstName, lastName, address, phone } = state;

  return (
    <>
      <div>
        {/* Single Page Header start */}
        <div className="container-fluid page-header py-5">
          <h1 className="text-center text-white display-6 wow fadeInUp" data-wow-delay="0.1s">
            Cảm Ơn Quý Khách
          </h1>
          <ol className="breadcrumb justify-content-center mb-0 wow fadeInUp" data-wow-delay="0.3s">
            <li className="breadcrumb-item"><a href="/">Home</a></li>
            <li className="breadcrumb-item active text-white">Thank You</li>
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
                    <h6 className="text-uppercase mb-2">Free Return</h6>
                    <p className="mb-0">30 days money back guarantee!</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-2 border-end wow fadeInUp" data-wow-delay="0.2s">
              <div className="p-4">
                <div className="d-flex align-items-center">
                  <i className="fab fa-telegram-plane fa-2x text-primary" />
                  <div className="ms-4">
                    <h6 className="text-uppercase mb-2">Free Shipping</h6>
                    <p className="mb-0">Free shipping on all order</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-2 border-end wow fadeInUp" data-wow-delay="0.3s">
              <div className="p-4">
                <div className="d-flex align-items-center">
                  <i className="fas fa-life-ring fa-2x text-primary" />
                  <div className="ms-4">
                    <h6 className="text-uppercase mb-2">Support 24/7</h6>
                    <p className="mb-0">We support online 24 hrs a day</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-2 border-end wow fadeInUp" data-wow-delay="0.4s">
              <div className="p-4">
                <div className="d-flex align-items-center">
                  <i className="fas fa-credit-card fa-2x text-primary" />
                  <div className="ms-4">
                    <h6 className="text-uppercase mb-2">Receive Gift Card</h6>
                    <p className="mb-0">Recieve gift all over oder $50</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-2 border-end wow fadeInUp" data-wow-delay="0.5s">
              <div className="p-4">
                <div className="d-flex align-items-center">
                  <i className="fas fa-lock fa-2x text-primary" />
                  <div className="ms-4">
                    <h6 className="text-uppercase mb-2">Secure Payment</h6>
                    <p className="mb-0">We Value Your Security</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-2 border-end wow fadeInUp" data-wow-delay="0.6s">
              <div className="p-4">
                <div className="d-flex align-items-center">
                  <i className="fas fa-blog fa-2x text-primary" />
                  <div className="ms-4">
                    <h6 className="text-uppercase mb-2">Online Service</h6>
                    <p className="mb-0">Free return products in 30 days</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Services End */}

        {/* Thank You Message Start */}
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="bg-light rounded p-5 wow fadeInUp" data-wow-delay="0.1s">
                <div className="text-center mb-4">
                  <i className="fas fa-check-circle text-success fa-5x mb-4" />
                  <h2 className="mb-4">Đặt Hàng Thành Công!</h2>
                </div>

                <div className="bg-white rounded p-4 mb-4 border">
                  <p className="fs-5 text-center mb-0">
                    Cảm ơn <strong>{firstName} {lastName}</strong> đã đặt hàng. Đơn hàng của bạn đã được ghi nhận và gửi về địa chỉ{' '}
                    <strong>{address}</strong> trong thời gian sớm nhất. Chúng tôi sẽ liên lạc thông qua số điện thoại{' '}
                    <strong>{phone}</strong> để giao hàng. Vui lòng chú ý điện thoại. Cảm ơn!
                  </p>
                </div>

                <div className="text-center">
                  <NavLink to="/shop" className="btn btn-primary rounded-pill py-3 px-5 me-2">
                    <i className="fas fa-shopping-bag me-2" />
                    Tiếp tục mua sắm
                  </NavLink>
                  <NavLink to="/" className="btn btn-outline-primary rounded-pill py-3 px-4">
                    <i className="fas fa-home me-2" />
                    Về trang chủ
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Thank You Message End */}
      </div>
    </>
  );
}

export default ThankYou;