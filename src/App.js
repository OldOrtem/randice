
import './App.css';
import Header from './components/Header';
import Aside from './components/Aside';
import Main from './components/Main';
import React from "react";

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      dices: [],
      loading: false
    }
    this.rollDice = this.rollDice.bind(this)
  }

  render(){
    return (
      <div >
        <Header/>
        <div id="flex">
        <Aside dices={this.state.dices} rollDice={this.rollDice}/>
        <Main dices={this.state.dices} loading={this.state.loading}/>
        </div>
        
      </div>
    );
  }
  
  rollDice(dice) {
    this.setState({dices:  dice})
    console.log(dice)
  }

}

export default App;
