import PropTypes from 'prop-types';
import css from './ElemkentTableStatistics.module.css';
import { getRandomHexColor } from 'utils';

export const ElemkentTableStatistics = ({ id, label, percentage }) => {
  return (
    <>
      <li
        key={id}
        className={css.item}
        style={{
          backgroundColor: getRandomHexColor(),
        }}
      >
        <span className={css.label}>{label}</span>
        <span className={css.percentage}>{percentage}%</span>
      </li>
    </>
  );
};

ElemkentTableStatistics.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
