import React from "react";
import Dice from './Dice';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: this.props.dices,
      loading: false,
      error: null
    };
  }
  
  render() {
    return (
      <main>
        <div id="diceBoard">
          
            {this.props.dices.map((el) => (
              <Dice key={el.id} n={el} />
            ))}
          
        </div>
      </main>
    );
  }
}

export default Main;
