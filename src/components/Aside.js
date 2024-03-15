import React from "react"



class Aside extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          diceNumber: 6,
          diceType: 6,
          sliderVal: 10,
          isChecked: false 
        };
      }
    
    handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await fetch("http://192.168.0.101:8000/api/roll-dice", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            diceNumber: this.state.diceNumber,
            diceType: this.state.diceType,
            sort: this.state.isChecked,
        }),
        });

        if (!response.ok) {
        throw new Error("Failed to roll dice");
        }
        const data = await response.json();
        console.log(data)
        this.props.rollDice(data.result);
        // Обработка успешного ответа, если это необходимо
    } catch (error) {
        console.error("Error rolling dice:", error);
    }
    };

    handleInputChange = (e) => {
    this.setState({
        [e.target.name]: parseInt(e.target.value),
    });
    };

    handleSliderChange = (event) => {
        this.setState({ sliderVal: event.target.value });
    }

    handleCheckChange = () => {
    this.setState({ isChecked: !this.state.isChecked });
    }

    render() {
        return (
            <aside>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="dice_number">Количество кубов: {this.state.diceNumber}</label>
                        <input
                            id="dice_number"
                            name="diceNumber"
                            type="range"
                            min="1"
                            max="100"
                            value={this.state.diceNumber}
                            onChange={(event)=>{this.handleSliderChange(event);this.handleInputChange(event) }}
                        />
                        
                    </div>
                    <div hidden>
                        <label htmlFor="dice_type">Введите тип кубов: </label>
                        <input
                            type="number"
                            id="dice_type"
                            name="diceType"
                            value={this.state.diceType}
                            onChange={this.handleInputChange}
                            placeholder="6 и только 6"
                        />
                    </div>
                    <div>
                        <div>
                        <input 
                            id="c"
                            name="c"
                            type="checkbox"
                            checked={this.state.isChecked}
                            onChange={this.handleCheckChange}
                            
                        />
                        <label htmlFor="c">
                        Сортировать
                        </label>
                        </div>
                    </div>
                    <div>
                        <input id="submit" type="submit" value="Бросить" />
                    </div>
                </form>
            </aside>
        );
    }
}
 
export default Aside;