import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Button} from './components/Button/index'
import CounterManagment from './components/CounterManagemant';

interface AppState{
  change : boolean
}

class App extends React.Component<{}, AppState> {
  constructor(props : {}){
    super(props);
    this.state = {
      change : true
    }
  }

  clickButton = () => {
    this.setState({change : !this.state.change})
  }

  render(): React.ReactNode {
      const {change} = this.state
      return(
        <>
          <h1>My App</h1>
          {change?<CounterManagment ownerName="alex" />:null}
          <button onClick={this.clickButton}>Change</button>
          <h2>{change?"true":"false"}</h2>
        </>
      )
  }
}

// function App() {
//   return (
//     <>
//     <h1>My app</h1>
//     <CounterManagment ownerName='Rysh'/>
//     </>
//   );
// }

export default App;
