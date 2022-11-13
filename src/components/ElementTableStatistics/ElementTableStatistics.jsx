import PropTypes from 'prop-types';
import css from './ElementTableStatistics.module.css';
import { getRandomHexColor } from 'utils';

export const ElementTableStatistics = ({ id, label, percentage }) => {
  return (
    <>
      <li
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

ElementTableStatistics.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
