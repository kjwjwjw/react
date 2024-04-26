import React from 'react';
import './App.css';
import { commentListMock, favoriteListMock, latestBoardListMock, top3BoardListMock } from 'mocks';
import Top3Item from 'components/Top3Item';
import CommentItem from 'components/CommentItem';
import FavoriteItem from 'components/FavoriteItem';

function App() {
  return (
    <>
    <div style={{ display: 'flex',  columnGap: '30px', rowGap: '20px'}}>
      {favoriteListMock.map(favoriteListMock =>  <FavoriteItem favoriteListItem={favoriteListMock}/>)}
     
  </div>
    </>
  );
}

export default App;
