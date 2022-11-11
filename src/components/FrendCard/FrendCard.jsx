import PropTypes from 'prop-types';
import css from './FrendCard.module.css';

export const FrendCard = ({ avatar, name, isOnline, id }) => {
  return (
    <>
      <li className={css.item} key={id}>
        <span className={isOnline ? css.online : css.offline}></span>
        <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
        <p className={css.name}>{name}</p>
      </li>
    </>
  );
};

FrendCard.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  id: PropTypes.number,
};
