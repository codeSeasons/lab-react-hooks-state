import React from 'react'
import ProductCard from './ProductCard'

export const sampleProducts = [
  { id: 1, name: 'Apple', price: '$1.00', category: 'Fruits', inStock: true },
  { id: 2, name: 'Milk', price: '$2.50', category: 'Dairy', inStock: false }
]

const ProductList = ({ category, onAddToCart }) => {
  // Filter products based on selected category
  const filteredProducts =
    category === "all" || !category
      ? sampleProducts
      : sampleProducts.filter((p) => p.category === category)

  return (
    <div>
      <h2>Available Products</h2>
      {/* Display message if no products are available */}
      {filteredProducts.length === 0 && (
        <p>No products available.</p>
      )}
      {/* Render ProductCard components for each filtered product */}
      {filteredProducts.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  )
}

export default ProductList