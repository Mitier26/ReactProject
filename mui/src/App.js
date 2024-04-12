import logo from './logo.svg';
// import './App.css';
import { CustomButton } from './CustomButton.style';
import styles from './App.module.css';
import { Button } from '@mui/material';

function App() {
    return (
        <div className="App">
            <Button className={styles['button']}>Button</Button>
            <CustomButton variant="contained" size="large" color="secondary" disableRipple={true} border="blue">
                Contained
            </CustomButton>
            <Button>버튼</Button>
        </div>
    );
}

export default App;
