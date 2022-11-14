import { Profile } from './Profile/Profile';
import currentUser from '../data/user.json';
import { Container } from './App/App.styled';

import { Statistics } from './Statistics/Statistics';
import data from '../data/data.json';

import { FriendList } from './FriendList/FriendList';
import friends from '../data/friends.json';

import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import transactions from '../data/transactions.json';

export const App = () => {
  return (
    <Container>
      <Profile
        username={currentUser.username}
        tag={currentUser.tag}
        location={currentUser.location}
        avatar={currentUser.avatar}
        followers={currentUser.stats.followers}
        views={currentUser.stats.views}
        likes={currentUser.stats.likes}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </Container>
  );
};
