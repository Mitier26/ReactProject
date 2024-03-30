import './App.css';
import { useMemo, useState } from 'react';
import Todopage from './components/Todopage';

const expansiveCalculate = (numbers) => {
    console.log('Calculating sum...');
    return numbers.reduce((acc, curr) => acc + curr, 0);
};

function App() {
    const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);
    const [addNumber, setAddNumber] = useState('');
    const sum = useMemo(() => expansiveCalculate(numbers), [numbers]);

    const handleAddNumber = () => {
        setNumbers([...numbers, parseInt(addNumber)]);
        setAddNumber('');
    };

    return (
        <div>
            <input type="text" value={addNumber} onChange={(e) => setAddNumber(e.target.value)} />
            <button onClick={handleAddNumber}>Add Number</button>
            <h2>Numbers: {numbers.join(', ')}</h2>
            <h2>sum: {sum}</h2>

            <Todopage />
        </div>
    );
}

export default App;
