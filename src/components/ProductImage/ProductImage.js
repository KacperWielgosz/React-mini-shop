import styles from '../Product/Product.module.scss';
import PropTypes from 'prop-types'

const ProductImage = props =>
  <div className={styles.imageContainer}>
    <img
      className={styles.image}
      alt={props.name}
      src={`${process.env.PUBLIC_URL}/images/products/shirt-${props.name}--${props.currentColor}.jpg`} />
  </div>

ProductImage.propTypes = {
  currentColor: PropTypes.string,
  setCurrentColor: PropTypes.func,
  name: PropTypes.string,
  title: PropTypes.string
}

export default ProductImage;
