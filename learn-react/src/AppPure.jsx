import './App.css'
import PullUpPure from './components/PullUpPure';
import PullUpImpure from './components/PullUpImpure';

function AppPure(props) {
  return (
    <div>
      <PullUpPure counter={11}/>
      <PullUpPure counter={12}/>
      <PullUpPure counter={13}/>
      {/* <PullUpImpure/>
      <PullUpImpure/>
      <PullUpImpure/> */}
    </div>
  );
}

export default AppPure;