import styles from './Product.module.scss';
import { useState, useMemo } from 'react';
import ProductImage from '../ProductImage/ProductImage';
import ProductForm from '../ProductForm/ProductForm';
import PropTypes from 'prop-types'

const Product = ({ title, basePrice, colors, sizes, name }) => {
  const handleSubmit = e => {
    e.preventDefault();
    console.log('')
    console.log('Summary')
    console.log('==============')
    console.log('Name:' + title)
    console.log('Price:' + getPrice)
    console.log('Size:' + currentSize)
    console.log('Color:' + currentColor)
  }

  const [currentColor, setCurrentColor] = useState(colors[0]);
  const [currentSize, setCurrentSize] = useState(sizes[0].name);

  const getPrice = useMemo(() => {
    const found = sizes.find(element => element.name === currentSize)
    return basePrice + found.additionalPrice
  }, [basePrice, currentSize, sizes])

  return (
    <article className={styles.product}>
      <ProductImage
        name={name}
        currentColor={currentColor}
      />
      <div>
        <header>
          <h2 className={styles.name}>{title}</h2>
          <span className={styles.price}>{getPrice}$</span>
        </header>
        <ProductForm
          currentSize={currentSize}
          currentColor={currentColor}
          setCurrentColor={setCurrentColor}
          setCurrentSize={setCurrentSize}
          sizes={sizes}
          colors={colors}
          title={title}
          price={getPrice}
          handleSubmit={handleSubmit}
        />
      </div>
    </article>
  )
};

Product.propTypes= {
  basePrice: PropTypes.number.isRequired,
  colors: PropTypes.array.isRequired,
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  sizes: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  getPrice: PropTypes.func
};

export default Product;
