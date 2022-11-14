import PropTypes from 'prop-types';
// import css from './ElementTableStatistics.module.css';
import { getRandomHexColor } from 'utils';
import { Item, Label, Percentage } from './ElementTableStatistics.styled';

export const ElementTableStatistics = ({ id, label, percentage }) => {
  return (
    <>
      <Item
        style={{
          backgroundColor: getRandomHexColor(),
        }}
      >
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
