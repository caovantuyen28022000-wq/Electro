# Hướng dẫn tích hợp React Router v7

## 🎯 Tổng quan
Đã tích hợp thành công `react-router-dom` v7.15.1 để quản lý điều hướng giữa các trang trong ứng dụng React.

## 📦 Cài đặt

```bash
npm install react-router-dom
```

## 🔧 Cấu hình

### 1. main.tsx - BrowserRouter
```tsx
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
```

### 2. App.tsx - Routes Configuration
```tsx
import { Routes, Route, Navigate } from 'react-router-dom'

<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/shop" element={<Shop />} />
  <Route path="/single" element={<Singlepage />} />
  <Route path="/pages" element={<Page />} />
  <Route path="/bestseller" element={<BestSeller />} />
  <Route path="/cart" element={<Cart />} />
  <Route path="/checkout" element={<Checkout />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="/404" element={<Loi />} />
  <Route path="*" element={<Navigate to="/404" replace />} />
</Routes>
```

### 3. Header.tsx - Navigation Links
```tsx
import { NavLink } from 'react-router-dom'

// Main navigation
<NavLink 
  to="/" 
  className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
  end
>
  Home
</NavLink>

<NavLink 
  to="/shop" 
  className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
>
  Shop
</NavLink>

<NavLink 
  to="/single" 
  className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
>
  Single Page
</NavLink>

// Dropdown menu
<div className="nav-item dropdown">
  <button className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
    Pages
  </button>
  <div className="dropdown-menu m-0">
    <NavLink to="/bestseller" className="dropdown-item">Bestseller</NavLink>
    <NavLink to="/cart" className="dropdown-item">Cart Page</NavLink>
    <NavLink to="/checkout" className="dropdown-item">Checkout</NavLink>
    <NavLink to="/404" className="dropdown-item">404 Page</NavLink>
  </div>
</div>

<NavLink 
  to="/contact" 
  className={({ isActive }) => `nav-item nav-link me-2 ${isActive ? 'active' : ''}`}
>
  Contact
</NavLink>
```

## 🗺️ Routes Map

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | Home | Trang chủ |
| `/shop` | Shop | Trang cửa hàng |
| `/single` | Singlepage | Trang chi tiết sản phẩm |
| `/pages` | Page | Trang pages (dropdown) |
| `/bestseller` | BestSeller | Sản phẩm bán chạy |
| `/cart` | Cart | Giỏ hàng |
| `/checkout` | Checkout | Thanh toán |
| `/contact` | Contact | Liên hệ |
| `/404` | Loi | Trang lỗi 404 |
| `*` | Redirect to /404 | Tất cả route không tồn tại |

## 🎨 NavLink Styling

### Active Link Detection
```tsx
<NavLink 
  to="/path" 
  className={({ isActive }) => 
    isActive ? 'nav-link active' : 'nav-link'
  }
>
  Link Text
</NavLink>
```

### End Prop
Sử dụng `end` prop cho route gốc (`/`) để không bị active khi ở các route con:
```tsx
<NavLink to="/" end>Home</NavLink>
```

## 🔄 Navigation Methods

### Programmatic Navigation
```tsx
import { useNavigate } from 'react-router-dom'

function MyComponent() {
  const navigate = useNavigate()
  
  const goToShop = () => {
    navigate('/shop')
  }
  
  const goBack = () => {
    navigate(-1)
  }
  
  return <button onClick={goToShop}>Go to Shop</button>
}
```

### URL Parameters
```tsx
// Route definition
<Route path="/product/:id" element={<ProductDetail />} />

// Component
import { useParams } from 'react-router-dom'

function ProductDetail() {
  const { id } = useParams()
  return <div>Product ID: {id}</div>
}
```

### Query Parameters
```tsx
import { useSearchParams } from 'react-router-dom'

function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const query = searchParams.get('q')
  
  return (
    <div>
      <p>Searching for: {query}</p>
      <button onClick={() => setSearchParams({ q: 'new-query' })}>
        Update Search
      </button>
    </div>
  )
}
```

## 🎯 Lợi ích

### ✅ Trước khi dùng React Router
- ❌ Sử dụng `<a href>` truyền thống
- ❌ Page reload khi chuyển trang
- ❌ Không có active state tự động
- ❌ Không quản lý được history

### ✅ Sau khi dùng React Router
- ✅ Client-side routing (không reload)
- ✅ Active state tự động với `NavLink`
- ✅ Quản lý history và back/forward
- ✅ Dynamic routing với parameters
- ✅ Nested routes
- ✅ Code splitting và lazy loading
- ✅ Redirect và 404 handling

## 🚀 Testing

### Chạy ứng dụng
```bash
npm run dev
```

### Test các route
1. Mở trình duyệt tại `http://localhost:5173/`
2. Click vào các link trên navbar:
   - Home → `/`
   - Shop → `/shop`
   - Single Page → `/single`
   - Pages → Dropdown menu
   - Contact → `/contact`
3. Thử dropdown menu:
   - Bestseller → `/bestseller`
   - Cart Page → `/cart`
   - Checkout → `/checkout`
   - 404 Page → `/404`
4. Thử truy cập route không tồn tại → Tự động redirect về `/404`

## 🔍 Troubleshooting

### Lỗi: "Module not found: Can't resolve 'react-router-dom'"
```bash
npm install react-router-dom
```

### Lỗi: NavLink không có class "active"
Kiểm tra lại cách sử dụng `className` function:
```tsx
// ✅ Đúng
className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}

// ❌ Sai
className="nav-link active"
```

### Lỗi: Route không hoạt động
Kiểm tra:
1. Đã import `BrowserRouter` trong `main.tsx` chưa?
2. Đã wrap `<App />` với `<BrowserRouter>` chưa?
3. Route path có khớp với URL không?
4. Component đã được import đúng chưa?

## 📚 Tham khảo

- [React Router v7 Documentation](https://reactrouter.com/)
- [NavLink API](https://reactrouter.com/en/main/components/nav-link)
- [useNavigate Hook](https://reactrouter.com/en/main/hooks/use-navigate)
- [useParams Hook](https://reactrouter.com/en/main/hooks/use-params)

---

**Ngày cập nhật**: 16/05/2026  
**Phiên bản**: react-router-dom@7.15.1  
**Trạng thái**: ✅ Hoàn thành