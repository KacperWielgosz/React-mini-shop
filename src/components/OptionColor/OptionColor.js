import styles from '../Product/Product.module.scss';
import shortid from 'shortid';
import clsx from 'clsx';

const prepareColorClassName = color => {
  return styles['color' + color[0].toUpperCase() + color.substr(1).toLowerCase()];
}

const OptionColor = (props) => {
  return(
    <div className={styles.colors}>
      <h3 className={styles.optionLabel}>Colors</h3>
      <ul className={styles.choices}>
      {props.colors.map(color =>
        <li id={shortid()}>
          <button type="button" onClick={() => props.setCurrentColor(color)} className={clsx(prepareColorClassName(color), props.currentColor === color && styles.active)} />
        </li>)}
      </ul>
    </div>
  )
}

export default OptionColor
