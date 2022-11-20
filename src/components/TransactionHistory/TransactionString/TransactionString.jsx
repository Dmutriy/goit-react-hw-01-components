import PropTypes from 'prop-types';
import css from './TransactionString.module.css';

export const TransactionString = ({ id, type, amount, currency }) => {
  return (
    <>
      <tr className={css.line} key={id}>
        <td className={css.value__title}>{type}</td>
        <td className={css.value}>{amount}</td>
        <td className={css.value}>{currency}</td>
      </tr>
    </>
  );
};

TransactionString.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
