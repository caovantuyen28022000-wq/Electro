# Hướng dẫn chuyển đổi từ jQuery sang React

## Tổng quan
Đã chuyển đổi toàn bộ chức năng từ `public/js/main.js` (jQuery-based) sang các React components và custom hooks, đảm bảo tương thích hoàn toàn với ứng dụng React + TypeScript.

## Các thay đổi đã thực hiện

### 1. Custom Hooks đã tạo

#### `useStickyNavbar(threshold?: number)`
- **Mục đích**: Xử lý sticky navbar khi scroll
- **Tham số**: `threshold` - khoảng cách scroll để kích hoạt (mặc định: 45px)
- **Trả về**: `boolean` - trạng thái sticky
- **Ví dụ**:
```tsx
import { useStickyNavbar } from './hooks';

function Header() {
  const isSticky = useStickyNavbar(45);
  return (
    <div className={`navbar ${isSticky ? 'sticky-top shadow-sm' : ''}`}>
      {/* content */}
    </div>
  );
}
```

#### `useBackToTop(threshold?: number)`
- **Mục đích**: Xử lý nút back-to-top
- **Tham số**: `threshold` - khoảng cách scroll để hiển thị nút (mặc định: 300px)
- **Trả về**: `{ isVisible: boolean, scrollToTop: () => void }`
- **Ví dụ**:
```tsx
import { useBackToTop } from './hooks';

function BackToTopButton() {
  const { isVisible, scrollToTop } = useBackToTop(300);
  
  return isVisible ? (
    <button onClick={scrollToTop}>↑ Top</button>
  ) : null;
}
```

#### `useSpinner(delay?: number)`
- **Mục đích**: Hiển thị loading spinner
- **Tham số**: `delay` - thời gian hiển thị spinner (mặc định: 1ms)
- **Trả về**: `boolean` - có hiển thị spinner không
- **Ví dụ**:
```tsx
import { useSpinner } from './hooks';

function LoadingSpinner() {
  const showSpinner = useSpinner(1000);
  return showSpinner ? <div className="spinner">Loading...</div> : null;
}
```

#### `useQuantityButton(initialValue?: number)`
- **Mục đích**: Xử lý nút tăng/giảm số lượng sản phẩm
- **Tham số**: `initialValue` - giá trị khởi tạo (mặc định: 1)
- **Trả về**: `{ quantity, increment, decrement, updateQuantity }`
- **Ví dụ**:
```tsx
import { useQuantityButton } from './hooks';

function ProductQuantity() {
  const { quantity, increment, decrement } = useQuantityButton(1);
  
  return (
    <div>
      <button onClick={decrement}>-</button>
      <span>{quantity}</span>
      <button onClick={increment}>+</button>
    </div>
  );
}
```

#### `useWowAnimation()`
- **Mục đích**: Khởi tạo WOW.js animations
- **Sử dụng**: Tự động gọi trong `useEffect` khi component mount
- **Ví dụ**:
```tsx
import { useWowAnimation } from './hooks';

function HomePage() {
  useWowAnimation();
  return (
    <div>
      <div className="wow fadeInUp">Animated content</div>
    </div>
  );
}
```

### 2. React Components đã tạo

#### `Spinner` Component
- Hiển thị loading spinner khi trang đang load
- Tự động ẩn sau 1ms
- **Sử dụng**:
```tsx
import Spinner from './components/Spinner';

function App() {
  return (
    <>
      <Spinner />
      {/* rest of app */}
    </>
  );
}
```

#### `BackToTop` Component
- Hiển thị nút back-to-top khi scroll xuống 300px
- Smooth scroll về đầu trang khi click
- **Sử dụng**:
```tsx
import BackToTop from './components/BackToTop';

function App() {
  return (
    <>
      {/* content */}
      <BackToTop />
    </>
  );
}
```

#### `QuantityButton` Component
- Component nút tăng/giảm số lượng
- **Props**:
  - `initialValue`: Giá trị ban đầu
  - `onQuantityChange`: Callback khi số lượng thay đổi
  - `className`: CSS class tùy chỉnh
- **Sử dụng**:
```tsx
import QuantityButton from './components/QuantityButton';

function ProductCard() {
  const handleQuantityChange = (qty) => {
    console.log('Quantity changed to:', qty);
  };
  
  return (
    <QuantityButton 
      initialValue={1}
      onQuantityChange={handleQuantityChange}
      className="my-quantity"
    />
  );
}
```

### 3. Cập nhật components có sẵn

#### `Header` Component
- Đã tích hợp `useStickyNavbar` hook
- Tự động thêm class `sticky-top shadow-sm` khi scroll
- **Không cần thay đổi gì thêm**

### 4. Thay đổi trong `App.tsx`

```tsx
import { useEffect } from 'react';
import Spinner from './components/Spinner';
import BackToTop from './components/BackToTop';

function App() {
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
      <Spinner />
      <div>
        <Header />
        <Home />
        <Footer />
        <BackToTop />
      </div>
    </>
  );
}
```

### 5. Cập nhật `index.html`

**ĐÃ XÓA**:
- `<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>`
- `<script src="js/main.js"></script>`

**ĐÃ GIỮ LẠI**:
- Bootstrap JS (cho dropdown, collapse, etc.)
- WOW.js (cho animations)
- Owl Carousel (cho carousels)

## Lợi ích của việc chuyển đổi

### ✅ **Ưu điểm**

1. **Type Safety**: TypeScript checking cho tất cả hooks và components
2. **Performance**: Không có jQuery overhead, tối ưu với React
3. **Maintainability**: Code dễ đọc, dễ bảo trì hơn
4. **Reusability**: Có thể sử dụng lại hooks và components ở nhiều nơi
5. **React Lifecycle**: Tự động cleanup khi unmount, không memory leaks
6. **Modern Architecture**: Phù hợp với kiến trúc React hiện đại

### 🔧 **Tương thích**

- ✅ Hoạt động với React 19+
- ✅ TypeScript support đầy đủ
- ✅ Tương thích với Vite build tool
- ✅ Không phá vỡ các tính năng hiện có

## Cách sử dụng

### 1. Import hooks
```tsx
import { 
  useStickyNavbar, 
  useBackToTop, 
  useSpinner, 
  useQuantityButton,
  useWowAnimation 
} from './hooks';
```

### 2. Import components
```tsx
import Spinner from './components/Spinner';
import BackToTop from './components/BackToTop';
import QuantityButton from './components/QuantityButton';
```

### 3. Sử dụng trong components
```tsx
function MyComponent() {
  const isSticky = useStickyNavbar(45);
  const { isVisible, scrollToTop } = useBackToTop(300);
  const showSpinner = useSpinner(1000);
  const { quantity, increment, decrement } = useQuantityButton(1);
  
  return (
    <div>
      <Spinner />
      <Header />
      <BackToTop />
      <QuantityButton />
    </div>
  );
}
```

## Kiểm tra

### Chạy development server:
```bash
npm run dev
```

### Build production:
```bash
npm run build
```

### Preview production build:
```bash
npm run preview
```

## Lưu ý

1. **WOW.js**: Vẫn cần file `lib/wow/wow.min.js` trong `index.html` để animations hoạt động
2. **Owl Carousel**: Vẫn cần file `lib/owlcarousel/owl.carousel.min.js` cho carousels
3. **Bootstrap**: Vẫn cần Bootstrap JS cho dropdown, collapse, modal, etc.
4. **CSS**: Không thay đổi CSS, tất cả styles cũ vẫn hoạt động

## Các tính năng chưa được chuyển đổi

### Owl Carousel
- Hiện tại Owl Carousel vẫn được load từ file JS cũ
- Trong tương lai có thể thay thế bằng `react-owl-carousel` hoặc `swiper/react`
- **Lý do**: Owl Carousel cần được khởi tạo sau khi React render xong

### Bootstrap Components
- Dropdown, collapse, modal vẫn sử dụng Bootstrap JS
- Không cần thiết phải chuyển sang React vì Bootstrap JS hoạt động tốt

## Hỗ trợ

Nếu gặp vấn đề hoặc cần hỗ trợ thêm, vui lòng tạo issue hoặc liên hệ với team development.

---

**Ngày cập nhật**: 16/05/2026  
**Phiên bản**: 1.0.0  
**Tác giả**: AI Assistant