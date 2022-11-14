import PropTypes from 'prop-types';
import { FriendListStyled } from './FriendList.styles';
import { FrendCard } from 'components/FrendCard/FrendCard';

export const FriendList = ({ friends }) => {
  return (
    <FriendListStyled>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <FrendCard key={id} name={name} avatar={avatar} isOnline={isOnline} />
      ))}
    </FriendListStyled>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.bool,
    })
  ).isRequired,
};
