import React from "react"

function generateRandomArray(diceNumber, diceType, shouldSort) {
    let randomArray = [];
    for (let i = 0; i < diceNumber; i++) {
        randomArray.push(Math.floor(Math.random() * diceType) + 1);
    }
    if (shouldSort) {
        randomArray.sort((a, b) => b - a); // Сортируем массив по убыванию
    }
    return randomArray;
}

class Aside extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            diceNumber: 6,
            diceType: 6,
            isChecked: false 
        };
    }

    handleSubmit = async (e) => {
        e.preventDefault(); // Отменяем стандартное действие отправки формы

        const { diceNumber, diceType, isChecked } = e.target.elements;
        const data = generateRandomArray(parseInt(diceNumber.value), parseInt(diceType.value), isChecked.checked);
        console.log(data);
        this.props.rollDice(data);
    };

    handleSliderChange = (event) => {
        this.setState({ diceNumber: parseInt(event.target.value) });
    }

    handleCheckChange = () => {
        this.setState({ isChecked: !this.state.isChecked });
        if (!this.state.isChecked){
            this.props.sortDice();
        }
    }

    render() {
        return (
            <aside>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="dice_number" id="sliderVal">
                            Количество кубов: 
                            <input
                                id="num_slider_input"
                                type="number"
                                value={this.state.diceNumber}
                                onChange={(event) => this.setState({ diceNumber: parseInt(event.target.value) })}
                                inputMode="numeric"
                                min={1}
                                max={100} 
                                pattern="[0-9]*"
                            />
                        </label>
                        <input
                            id="dice_number"
                            name="diceNumber"
                            type="range"
                            min="1"
                            max="100"
                            value={this.state.diceNumber}
                            onChange={this.handleSliderChange}
                        />
                    </div>
                    <div hidden>
                        <label htmlFor="dice_type">Введите тип кубов: </label>
                        <input
                            type="number"
                            id="dice_type"
                            name="diceType"
                            defaultValue={this.state.diceType}
                            placeholder="6 и только 6"
                        />
                    </div>
                    <div>
                        <div>
                            <input 
                                id="checkbox"
                                name="isChecked"
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
