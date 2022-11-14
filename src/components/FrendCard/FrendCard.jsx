import PropTypes from 'prop-types';
import { FrendItem, Chip, Avatar, Name } from './FrendCard.styled';

export const FrendCard = ({ avatar, name, isOnline }) => {
  return (
    <>
      <FrendItem>
        <Chip isOnline={isOnline}></Chip>
        <Avatar src={avatar} alt="User avatar" width="48" />
        <Name>{name}</Name>
      </FrendItem>
    </>
  );
};

FrendCard.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  id: PropTypes.number,
};
