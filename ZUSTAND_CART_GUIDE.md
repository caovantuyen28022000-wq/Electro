# Hướng dẫn sử dụng Zustand Cart Store

## 🎯 Tổng quan
Đã tích hợp **Zustand** v5.0.13 để quản lý global state cho giỏ hàng (shopping cart) và tạo luồng mua hàng hoàn chỉnh từ Shop → Single Page → Cart → Checkout.

## 📦 Cài đặt

```bash
npm install zustand
```

## 🔧 Cấu trúc

### 1. Cart Store (`src/store/cartStore.ts`)
Sử dụng Zustand để tạo global state quản lý giỏ hàng:

```tsx
import { create } from 'zustand';
import type { Product } from '../types/product';

export interface CartItem extends Product {
  quantity: number;
}

interface CartState {
  items: CartItem[];
  addItem: (product: Product, quantity?: number) => void;
  removeItem: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
}

export const useCartStore = create<CartState>((set, get) => ({
  items: [],
  
  addItem: (product, quantity = 1) => {
    set((state) => {
      const existingItem = state.items.find(item => item.id === product.id);
      if (existingItem) {
        return {
          items: state.items.map(item =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + quantity }
              : item
          ),
        };
      }
      return { items: [...state.items, { ...product, quantity }] };
    });
  },
  
  removeItem: (productId) => {
    set((state) => ({
      items: state.items.filter(item => item.id !== productId),
    }));
  },
  
  updateQuantity: (productId, quantity) => {
    set((state) => ({
      items: state.items.map(item =>
        item.id === productId
          ? { ...item, quantity: Math.max(0, quantity) }
          : item
      ).filter(item => item.quantity > 0),
    }));
  },
  
  clearCart: () => set({ items: [] }),
  
  getTotalItems: () => get().items.reduce((total, item) => total + item.quantity, 0),
  
  getTotalPrice: () => get().items.reduce(
    (total, item) => total + item.price * item.quantity, 0
  ),
}));
```

### 2. Dynamic Routing (`src/App.tsx`)
```tsx
<Routes>
  <Route path="/shop" element={<Shop />} />
  <Route path="/single/:id" element={<Singlepage />} />
  <Route path="/cart" element={<CartPage />} />
  <Route path="/checkout" element={<Checkout />} />
</Routes>
```

### 3. Product List with Add to Cart (`src/components/ProductCard.tsx`)
```tsx
import { useCartStore } from '../store/cartStore';

export default function ProductCard({ product }) {
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = (e) => {
    e.preventDefault();
    addItem(product, 1);
    alert(`${product.name} đã được thêm vào giỏ hàng!`);
  };

  return (
    <button onClick={handleAddToCart}>
      <i className="fas fa-shopping-cart" /> Add To Cart
    </button>
  );
}
```

### 4. Single Product Page (`src/pages/105021006_Singlepage.tsx`)
```tsx
import { useParams } from 'react-router-dom';
import productsData from '../data/products.json';
import { useCartStore } from '../store/cartStore';

function Singlepage() {
  const { id } = useParams();
  const addItem = useCartStore((state) => state.addItem);
  const product = productsData.find(p => p.id === parseInt(id));

  const handleAddToCart = () => {
    if (product) {
      addItem(product, quantity);
      alert(`Đã thêm ${quantity} sản phẩm vào giỏ!`);
    }
  };

  return (
    <div>
      <h1>{product.name}</h1>
      <button onClick={handleAddToCart}>Thêm vào Giỏ Hàng</button>
    </div>
  );
}
```

### 5. Cart Page (`src/pages/105021006_Cart.tsx`)
```tsx
import { useCartStore } from '../store/cartStore';

function CartPage() {
  const { items, removeItem, updateQuantity, getTotalPrice } = useCartStore();

  return (
    <div>
      {items.map(item => (
        <div key={item.id}>
          <span>{item.name}</span>
          <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
          <span>{item.quantity}</span>
          <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
          <button onClick={() => removeItem(item.id)}>Xóa</button>
        </div>
      ))}
      <div>Tổng: ${getTotalPrice()}</div>
    </div>
  );
}
```

### 6. Header Cart Badge (`src/components/105021006_Header.tsx`)
```tsx
import { useCartStore } from '../store/cartStore';

function Header() {
  const totalItems = useCartStore((state) => state.getTotalItems());
  const totalPrice = useCartStore((state) => state.getTotalPrice());

  return (
    <NavLink to="/cart">
      <span className="position-relative">
        <i className="fas fa-shopping-cart" />
        {totalItems > 0 && (
          <span className="badge rounded-pill bg-danger">
            {totalItems}
          </span>
        )}
      </span>
      <span>${totalPrice.toLocaleString()}</span>
    </NavLink>
  );
}
```

## 🗺️ Luồng mua hàng (Shopping Flow)

### 1. Xem danh sách sản phẩm (Shop Page)
- Người dùng truy cập `/shop`
- Xem danh sách 16 sản phẩm được render từ `products.json`
- Mỗi sản phẩm có nút "Add to Cart"

### 2. Xem chi tiết sản phẩm (Single Page)
- Click vào sản phẩm → Điều hướng đến `/single/:id`
- Hiển thị thông tin chi tiết sản phẩm theo ID
- Chọn số lượng và click "Thêm vào Giỏ Hàng"

### 3. Xem giỏ hàng (Cart Page)
- Click vào icon giỏ hàng trên header
- Hiển thị tất cả sản phẩm đã thêm
- Có thể:
  - Tăng/giảm số lượng
  - Xóa sản phẩm
  - Xem tổng tiền
  - Nhập mã giảm giá
  - Thanh toán

### 4. Thanh toán (Checkout Page)
- Click "Thanh Toán" từ Cart page
- Điều hướng đến `/checkout`

## 🎨 Các tính năng

### ✅ Add to Cart
- Thêm sản phẩm từ Shop page
- Thêm sản phẩm từ Single page với số lượng tùy chọn
- Tự động cập nhật nếu sản phẩm đã có trong giỏ

### ✅ Update Quantity
- Tăng/giảm số lượng trong Cart page
- Tự động tính lại tổng tiền

### ✅ Remove Item
- Xóa sản phẩm khỏi giỏ hàng
- Nút "Xóa tất cả" để clear cart

### ✅ Cart Badge
- Hiển thị số lượng sản phẩm trong giỏ
- Hiển thị tổng tiền
- Cập nhật realtime khi thêm/xóa sản phẩm

### ✅ Empty Cart
- Hiển thị thông báo khi giỏ hàng trống
- Nút "Mua Sắm Ngay" để quay lại Shop

## 📊 State Structure

```typescript
{
  items: [
    {
      id: 1,
      name: "Apple iPad Mini G2356",
      category: "SmartPhone",
      price: 1050,
      originalPrice: 1250,
      image: "/img/product-3.png",
      description: "...",
      rating: 4,
      isNew: true,
      isSale: false,
      quantity: 2
    },
    // ... more items
  ],
  addItem: (product, quantity) => void,
  removeItem: (productId) => void,
  updateQuantity: (productId, quantity) => void,
  clearCart: () => void,
  getTotalItems: () => number,
  getTotalPrice: () => number
}
```

## 🚀 Testing

### Chạy ứng dụng:
```bash
npm run dev
```

### Test luồng mua hàng:
1. Mở `http://localhost:5173/`
2. Click "Shop" trên navbar
3. Click "Add to Cart" vào một sản phẩm
4. Click vào sản phẩm để xem chi tiết
5. Chọn số lượng và click "Thêm vào Giỏ Hàng"
6. Click vào icon giỏ hàng trên header
7. Xem giỏ hàng với đầy đủ sản phẩm
8. Tăng/giảm số lượng hoặc xóa sản phẩm
9. Click "Thanh Toán" để đến checkout

### Kiểm tra:
- ✅ Add to cart từ Shop page
- ✅ Add to cart từ Single page với số lượng
- ✅ Giỏ hàng hiển thị đúng sản phẩm
- ✅ Số lượng badge trên header cập nhật
- ✅ Tổng tiền tính đúng
- ✅ Tăng/giảm số lượng hoạt động
- ✅ Xóa sản phẩm hoạt động
- ✅ Empty cart hiển thị đúng

## 🔍 Troubleshooting

### Lỗi: "Cannot find module 'zustand'"
```bash
npm install zustand
```

### Lỗi: Cart không cập nhật
Kiểm tra xem đã import đúng hook chưa:
```tsx
import { useCartStore } from '../store/cartStore';
```

### Lỗi: Tổng tiền hiển thị sai
Đảm bảo gọi đúng method:
```tsx
const getTotalPrice = useCartStore((state) => state.getTotalPrice());
```

## 📚 Tham khảo

- **Zustand Documentation**: https://github.com/pmndrs/zustand
- **Cart Store**: `src/store/cartStore.ts`
- **Product Data**: `src/data/products.json`
- **Shop Page**: `src/pages/105021006_Shop.tsx`
- **Single Page**: `src/pages/105021006_Singlepage.tsx`
- **Cart Page**: `src/pages/105021006_Cart.tsx`
- **ProductCard**: `src/components/ProductCard.tsx`
- **Header**: `src/components/105021006_Header.tsx`

---

**Ngày cập nhật**: 16/05/2026  
**Phiên bản**: Zustand v5.0.13  
**Trạng thái**: ✅ Hoàn thành