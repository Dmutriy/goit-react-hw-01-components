import { Profile } from './Profile/Profile';
import currentUser from '../user.json';
export const App = () => {
  return (
    <>
      <Profile
        username={currentUser.username}
        tag={currentUser.tag}
        location={currentUser.location}
        avatar={currentUser.avatar}
        followers={currentUser.stats.followers}
        views={currentUser.stats.views}
        likes={currentUser.stats.likes}
      />
    </>
  );
};
