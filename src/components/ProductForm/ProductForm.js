import styles from '../Product/Product.module.scss';
import OptionColor from '../OptionColor/OptionColor';
import OptionSize from '../OptionSize/OptionSize';
import Button from '../Button/Button';
import PropTypes from 'prop-types'

const ProductForm = ({ handleSubmit, sizes, colors, currentSize, setCurrentSize, currentColor, setCurrentColor}) =>
  <form onSubmit={handleSubmit}>
    <OptionSize
      sizes={sizes}
      setCurrentSize={setCurrentSize}
      currentSize={currentSize}
    />

    <OptionColor
      colors={colors}
      setCurrentColor={setCurrentColor}
      currentColor={currentColor}
    />

    <Button className={styles.button}>
      <span className="fa fa-shopping-cart" />
    </Button>
  </form>

ProductForm.propTypes = {
handleSubmit: PropTypes.func
}

export default ProductForm;
