import React from "react";

class Dice extends React.Component {
  
  
  render() {
    let imagePath;
    if (this.props.n >= 1 && this.props.n <= 100) {
      imagePath = `diceImgs/${this.props.n}.png`; 
    } else {
      imagePath = "images/default.png"; 
    }

    return (
      <div>
        <img src={imagePath} alt={this.props.n}/>
      </div>
    );
  }
}

export default Dice;
