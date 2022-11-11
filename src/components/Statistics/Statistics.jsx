import css from './Statistics.module.css';
import PropTypes from 'prop-types';

import { ElemkentTableStatistics } from 'components/ElemkentTableStatistics/ElemkentTableStatistics';

export const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}

      <ul className={css.stat__list}>
        {stats.map(({ id, label, percentage }) => (
          <ElemkentTableStatistics
            key={id}
            label={label}
            percentage={percentage}
          />
        ))}
      </ul>
    </section>
  );
};

// Statistics.propTypes = {};
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
