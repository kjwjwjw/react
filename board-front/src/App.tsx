import React, { useState } from 'react';
import './App.css';
import { commentListMock, favoriteListMock, latestBoardListMock, top3BoardListMock } from 'mocks';
import Top3Item from 'components/Top3Item';
import CommentItem from 'components/CommentItem';
import FavoriteItem from 'components/FavoriteItem';
import InputBox from 'components/InputBox';

function App() {

  const [ value, setValue] = useState<String>('');

  return (
    <>
      <InputBox label='이메일' type='text' placeholder='이메일주소를 입력해주세요' value='value'  error={false}  setValue={setValue}/>
    </>
  );
}

export default App;
