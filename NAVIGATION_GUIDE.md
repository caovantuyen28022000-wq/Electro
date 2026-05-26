# Product Detail Navigation Guide

## Overview
The application implements a complete product detail navigation system where users can click on products in the Shop page and view detailed information on a single product page.

## How It Works

### 1. Shop Page (`src/pages/105021006_Shop.tsx`)
- Displays a grid of products using the `ProductCard` component
- Each product is rendered with its basic information (name, price, image, etc.)
- Products are mapped from `products.json` data file

```tsx
{products.map((product, index) => (
  <ProductCard
    key={product.id}
    product={product}
    delay={`${0.1 + (index % 3) * 0.2}s`}
  />
))}
```

### 2. Product Card Component (`src/components/ProductCard.tsx`)
- Renders individual product cards in the shop
- Contains navigation links using React Router's `NavLink`
- Two main navigation points:
  - Product name link: `<NavLink to={`/single/${product.id}`}>`
  - Quick view eye icon: `<NavLink to={`/single/${product.id}`}>`

```tsx
// Product name navigation
<NavLink to={`/single/${product.id}`} className="d-block h4">
  {product.name}
</NavLink>

// Quick view navigation
<div className="product-details">
  <NavLink to={`/single/${product.id}`}>
    <i className="fa fa-eye fa-1x" />
  </NavLink>
</div>
```

### 3. Routing Configuration (`src/App.tsx`)
- Defines the route for single product pages with URL parameter `:id`
- Route pattern: `/single/:id`

```tsx
<Route path="/single/:id" element={<Singlepage />} />
```

### 4. Single Product Page (`src/pages/105021006_Singlepage.tsx`)
- Extracts the product ID from the URL using `useParams()` hook
- Finds the corresponding product from the data file
- Displays comprehensive product details including:
  - Product images with NEW/SALE badges
  - Product name, category, and rating
  - Pricing with discount display
  - Full description
  - Quantity selector
  - Add to cart functionality
  - Product information (ID, category, status, rating)
  - Description and reviews tabs

```tsx
const { id } = useParams<{ id: string }>();
const product: Product | undefined = productsData.find(
  (p: Product) => p.id === parseInt(id || '0')
);
```

## Navigation Flow

1. **User browses Shop page** → Views product grid
2. **User clicks on a product** → Clicks either:
   - Product name link
   - Quick view (eye icon) button
3. **System navigates to Single Product page** → URL changes to `/single/{productId}`
4. **Single Product page loads** → Fetches product data by ID and displays details

## Product Data Structure

Each product in `src/data/products.json` has the following structure:

```json
{
  "id": 1,
  "name": "Product Name",
  "category": "Category",
  "price": 1050.00,
  "originalPrice": 1250.00,
  "image": "/img/product.png",
  "description": "Product description",
  "rating": 4,
  "isNew": true,
  "isSale": false
}
```

## Key Features

✅ **Dynamic Routing**: Uses React Router's dynamic routing with URL parameters  
✅ **Type Safety**: Full TypeScript support with Product interface  
✅ **Responsive Design**: Mobile-friendly product display  
✅ **Add to Cart**: Integrated with Zustand cart store  
✅ **Quantity Selection**: Users can select quantity before adding to cart  
✅ **Product Badges**: Displays NEW and SALE badges when applicable  
✅ **Star Ratings**: Visual star rating display  
✅ **Price Display**: Shows both original and discounted prices  
✅ **Detailed Information**: Comprehensive product details and specifications  
✅ **Tabbed Content**: Description and reviews tabs  
✅ **Error Handling**: Shows "Product Not Found" for invalid IDs  
✅ **Animations**: WOW.js animations for smooth visual effects  

## Testing the Navigation

1. Start the development server: `npm run dev`
2. Navigate to `http://localhost:5173/shop`
3. Click on any product card (either the product name or the eye icon)
4. Verify that you're redirected to the product detail page
5. Check that the URL follows the pattern `/single/{id}`
6. Confirm that the correct product details are displayed

## Example Navigation Paths

- Product ID 1: `http://localhost:5173/single/1`
- Product ID 5: `http://localhost:5173/single/5`
- Product ID 14: `http://localhost:5173/single/14`

## Cart Integration

The Single Product page integrates with the cart store:
- Users can select quantity using +/- buttons
- Click "Thêm vào Giỏ Hàng" to add the product with selected quantity
- Cart state is managed globally using Zustand
- Cart count is displayed in the header

## Conclusion

The product detail navigation system is fully functional and provides a smooth user experience for browsing and viewing product details. All components are properly connected and the routing works seamlessly.