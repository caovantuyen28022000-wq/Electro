# Hướng dẫn sử dụng Mockup Data

## 🎯 Tổng quan
Đã tạo bộ dữ liệu giả lập (mockup data) cho các sản phẩm và tích hợp vào trang Shop sử dụng phương thức `.map()` để render danh sách sản phẩm động.

## 📁 Cấu trúc dữ liệu

### File: `src/data/products.json`
Bộ dữ liệu包含 16 sản phẩm mẫu với các trường thông tin:

```json
{
  "id": 1,
  "name": "Apple iPad Mini G2356",
  "category": "SmartPhone",
  "price": 1050.00,
  "originalPrice": 1250.00,
  "image": "/img/product-3.png",
  "description": "Compact and powerful tablet...",
  "rating": 4,
  "isNew": true,
  "isSale": false
}
```

### Các trường dữ liệu:
- **id**: Mã sản phẩm (duy nhất)
- **name**: Tên sản phẩm
- **category**: Danh mục (SmartPhone, Camera, Audio, Wearables, Laptops, Gaming, TV & Home)
- **price**: Giá bán
- **originalPrice**: Giá gốc (để so sánh)
- **image**: Đường dẫn hình ảnh
- **description**: Mô tả sản phẩm
- **rating**: Đánh giá (1-5 sao)
- **isNew**: Có phải sản phẩm mới không
- **isSale**: Có đang giảm giá không

## 🔧 Cách sử dụng

### 1. Import dữ liệu
```tsx
import productsData from '../data/products.json';
import type { Product } from '../types/product';
```

### 2. Sử dụng trong component
```tsx
function Shop() {
  const products: Product[] = productsData;
  
  return (
    <div className="row g-4 product">
      {products.map((product, index) => (
        <ProductCard
          key={product.id}
          product={product}
          delay={`${0.1 + (index % 3) * 0.2}s`}
        />
      ))}
    </div>
  );
}
```

### 3. ProductCard Component
Component `ProductCard` nhận props `product` và render:
- Hình ảnh sản phẩm
- Nhãn "New" hoặc "Sale" (nếu có)
- Tên và danh mục
- Giá bán và giá gốc
- Đánh giá sao
- Nút "Add to Cart"

## 📊 Thống kê dữ liệu

| Metric | Giá trị |
|--------|---------|
| Tổng số sản phẩm | 16 |
| Sản phẩm mới (isNew) | 7 |
| Sản phẩm giảm giá (isSale) | 5 |
| Danh mục | 7 (SmartPhone, Camera, Audio, Wearables, Laptops, Gaming, TV & Home) |
| Giá thấp nhất | $79.00 |
| Giá cao nhất | $1,999.00 |

## 🎨 Ví dụ sản phẩm

### 1. Apple iPad Mini G2356
- **ID**: 1
- **Category**: SmartPhone
- **Price**: $1,050.00 (was $1,250.00)
- **Rating**: ⭐⭐⭐⭐ (4/5)
- **Status**: New

### 2. Smart Camera Pro X1
- **ID**: 9
- **Category**: Camera
- **Price**: $899.00 (was $1,199.00)
- **Rating**: ⭐⭐⭐⭐⭐ (5/5)
- **Status**: New

### 3. Laptop Pro 15-inch
- **ID**: 12
- **Category**: Laptops
- **Price**: $1,999.00 (was $2,499.00)
- **Rating**: ⭐⭐⭐⭐⭐ (5/5)
- **Status**: Sale

## 🔄 Dynamic Rendering với .map()

### Trong Shop.tsx:
```tsx
{products.map((product, index) => (
  <ProductCard
    key={product.id}
    product={product}
    delay={`${0.1 + (index % 3) * 0.2}s`}
  />
))}
```

### Lợi ích:
- ✅ **Dynamic**: Tự động render dựa trên dữ liệu
- ✅ **Maintainable**: Dễ dàng thêm/xóa/sửa sản phẩm
- ✅ **Reusable**: Có thể sử dụng lại component
- ✅ **Type-safe**: TypeScript kiểm tra kiểu dữ liệu
- ✅ **Performance**: Sử dụng key prop để tối ưu re-render

## 🎯 Mở rộng

### Thêm sản phẩm mới:
Chỉ cần thêm object mới vào `products.json`:
```json
{
  "id": 17,
  "name": "New Product",
  "category": "Category",
  "price": 999.00,
  "originalPrice": 1199.00,
  "image": "/img/product-17.png",
  "description": "Product description",
  "rating": 5,
  "isNew": true,
  "isSale": false
}
```

### Lọc sản phẩm:
```tsx
// Lọc theo category
const smartphones = products.filter(p => p.category === 'SmartPhone');

// Lọc sản phẩm mới
const newProducts = products.filter(p => p.isNew);

// Lọc sản phẩm giảm giá
const saleProducts = products.filter(p => p.isSale);
```

### Sắp xếp sản phẩm:
```tsx
// Theo giá tăng dần
const lowToHigh = [...products].sort((a, b) => a.price - b.price);

// Theo giá giảm dần
const highToLow = [...products].sort((a, b) => b.price - a.price);

// Theo rating
const byRating = [...products].sort((a, b) => b.rating - a.rating);
```

## 📝 Lưu ý

1. **Image paths**: Đảm bảo các file hình ảnh tồn tại trong `public/img/`
2. **Unique IDs**: Mỗi sản phẩm phải có ID duy nhất
3. **Price formatting**: Sử dụng `.toLocaleString()` để format giá tiền
4. **Type safety**: Luôn sử dụng TypeScript interface cho Product
5. **Key prop**: Luôn sử dụng `key={product.id}` khi render danh sách

## 🚀 Testing

### Chạy ứng dụng:
```bash
npm run dev
```

### Truy cập Shop page:
1. Mở trình duyệt tại `http://localhost:5173/`
2. Click vào "Shop" trên navbar
3. Xem danh sách 16 sản phẩm được render từ dữ liệu

### Kiểm tra:
- ✅ Tất cả 16 sản phẩm hiển thị
- ✅ Hình ảnh hiển thị đúng
- ✅ Giá tiền format đúng ($1,050.00)
- ✅ Nhãn "New" và "Sale" hiển thị đúng
- ✅ Rating sao hiển thị đúng
- ✅ Click vào sản phẩm chuyển hướng đúng

## 📚 Tham khảo

- **products.json**: `src/data/products.json`
- **Product type**: `src/types/product.ts`
- **ProductCard component**: `src/components/ProductCard.tsx`
- **Shop page**: `src/pages/105021006_Shop.tsx`

---

**Ngày cập nhật**: 16/05/2026  
**Số lượng sản phẩm**: 16  
**Trạng thái**: ✅ Hoàn thành