import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Box from './components/Box';

// 가위바위보의 선택지와 이미지 URL을 객체로 정의합니다.
const choices = {
  rock: {
    name: "바위",
    img: "https://image.auction.co.kr/itemimage/28/65/8e/28658ea5e6.jpg"
  },
  scissors: {
    name: "가위",
    img: "https://cdn.imweb.me/thumbnail/20200514/7fc8b1411fa8d.png"
  },
  paper: {
    name: "보",
    img: "https://m.media-amazon.com/images/I/617B4LbYLnL._AC_UF894,1000_QL80_.jpg"
  }
};

function App() {
  // 사용자와 컴퓨터가 선택한 항목, 게임 결과를 상태로 관리합니다.
  const [userSelect, setUserSelect] = useState(null);
  const [comSelect, setComSelect] = useState(null);
  const [gameResult, setGameResult] = useState(null);
  
  // 사용자가 선택한 항목을 받아와서 게임을 진행하는 함수입니다.
  const play = (selected) => {
    // 사용자가 선택한 항목을 상태로 업데이트합니다.
    setUserSelect(choices[selected]);

    // 컴퓨터가 랜덤으로 선택한 항목을 가져와 상태로 업데이트합니다.
    const computerChoice = randomChoice();
    setComSelect(choices[computerChoice]);

    // 사용자와 컴퓨터의 선택으로 승패를 판단하고 결과를 상태로 업데이트합니다.
    const result = judgement(choices[selected].name, choices[computerChoice].name);
    setGameResult(result);
  };

  // 컴퓨터가 랜덤으로 항목을 선택하는 함수입니다.
  const randomChoice = () => {
    const items = Object.keys(choices);
    const randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
  };

  // 사용자와 컴퓨터의 선택으로 승패를 판단하는 함수입니다.
  const judgement = (user, computer) => {
    if (user === computer) return '무승부';
    else if (
      (user === "바위" && computer === "가위") ||
      (user === "가위" && computer === "보") ||
      (user === "보" && computer === "바위")
    ) {
      return '승리!';
    } else {
      return '패배!';
    }
  };

  return (
    <div className='body'>
      <div className='main'>
        {/* 사용자와 컴퓨터의 선택 결과를 Box 컴포넌트로 전달합니다. */}
        <Box title="당신" item={userSelect} result={gameResult} />
        <Box title="컴퓨터" item={comSelect} result={gameResult} />
      </div>
      <div className='main'>
        {/* 가위, 바위, 보 버튼을 클릭하면 해당 항목으로 게임을 시작합니다. */}
        <button onClick={() => play("scissors")}>가위</button>
        <button onClick={() => play("rock")}>바위</button>
        <button onClick={() => play("paper")}>보</button>
      </div>
    </div>
  );
}

export default App;
