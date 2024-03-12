import React from "react"



class Aside extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          diceNumber: 6,
          diceType: 6
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


    render() {
        return (
            <aside>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="dice_number">Введите количество: </label>
                        <input
                            type="number"
                            id="dice_number"
                            name="diceNumber"
                            value={this.state.diceNumber}
                            onChange={this.handleInputChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="dice_type">Введите тип кубов: </label>
                        <input
                            type="number"
                            id="dice_type"
                            name="diceType"
                            value={this.state.diceType}
                            onChange={this.handleInputChange}
                        />
                    </div>
                    <div>
                        <input type="submit" value="Бросить" />
                    </div>
                </form>
            </aside>
        );
    }
}
 
export default Aside;