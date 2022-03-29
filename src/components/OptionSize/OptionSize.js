import styles from '../Product/Product.module.scss';
import shortid from 'shortid';
import clsx from 'clsx';
import PropTypes from 'prop-types'

const OptionSize = props =>
    <div className={styles.sizes}>
      <h3 className={styles.optionLabel}>Sizes</h3>
      <ul className={styles.choices}>
        {props.sizes.map(size =>
          <li id={shortid()}>
            <button type="button" onClick={() => props.setCurrentSize(size.name)} className={clsx(props.currentSize === size.name && styles.active)}>{size.name}</button>
          </li>)}
      </ul>
    </div>

OptionSize.propTypes = {
  currentSize: PropTypes.string,
  setCurrentSize: PropTypes.func
}

export default OptionSize;
