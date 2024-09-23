import { useState } from "react";

export default function Counter({onTotal}) {

    const [counter, setCounter] = useState(0);

    const handleCounter = () => {
        setCounter(counter + 1);
        setCounter(counter + 1);
        setCounter(counter + 1);
        // 위에 것은 변하지 않는다.
        // 이 함수가 실행할 당시의 counter가 0 이기 때문이다.
        // 이것을 방지 하기 위해서는 콜백 함수를 이용해야 한다.
        setCounter((prevCounter)=> prevCounter + 1);
        setCounter((prevCounter)=> prevCounter + 1);
        setCounter((prevCounter)=> prevCounter + 1);
        if(onTotal) {
            onTotal();
        }
    }


    return (
        <button onClick={handleCounter}>Counter: {counter}</button>
    )
}