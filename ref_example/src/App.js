import logo from './logo.svg';
import './App.css';
import { useState, useRef } from 'react';

function App() {
    const [stateCount, setStateCount] = useState(0);
    const refCount = useRef(0);
    let count = 0;
    const inputEl = useRef(null);
    console.log('input', inputEl);
    return (
        <div>
            <div>state: {stateCount}</div>
            <div>변수 : {count}</div>
            <div>Ref : {refCount.current}</div>
            <button onClick={() => setStateCount((prev) => prev + 1)}>state up</button>
            <button
                onClick={() => {
                    count++;
                    console.log(count);
                }}
            >
                변수 up
            </button>
            <button
                onClick={() => {
                    refCount.current++;
                    console.log('ref', refCount);
                }}
            >
                Ref up
            </button>
            <input type="text" ref={inputEl} />
            <button onClick={() => inputEl.current.focus()}>검색</button>
        </div>
    );
}

export default App;
