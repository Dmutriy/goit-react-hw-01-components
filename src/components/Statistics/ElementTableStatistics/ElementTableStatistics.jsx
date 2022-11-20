import PropTypes from 'prop-types';
// import css from './ElementTableStatistics.module.css';
import { Item, Label, Percentage } from './ElementTableStatistics.styled';

export const ElementTableStatistics = ({ id, label, percentage }) => {
  return (
    <>
      <Item>
        <Label>{label}</Label>
        <Percentage>{percentage}%</Percentage>
      </Item>
    </>
  );
};

ElementTableStatistics.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
