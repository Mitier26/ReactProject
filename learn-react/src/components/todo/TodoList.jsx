function TodoList ({todos=[]}) {
  // StrictMode 모드에서 버그 검출, 순수 컴포넌트 확인 때문에
  // 2번 실행 되는 것 같은 현상이 발생한다.
  // 주소 참조를 할 경우 리스트에 2번 추가되는 현상이 발생한다.
  // 이것을 막기위해 [...todos] 를 이용해 얕은 복사로 값을 보낸다.
  // const items = todos;
  const items = [...todos];
  items.push({id:2, label:'포트폴리오 사이트 만들기'});

  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>{item.label}</li>
      ))}
    </ul>
  )
}

export default TodoList;