import React from 'react'

class NewGame extends React.Component {
  render() {
    return (
      <div className="secondary-container">
        <div className="new-game">
          
          <form name="new-game" id="new-game">
          <h2>Параметры новой игры</h2>
            <div>
              <label htmlFor="players-num">Число игроков: </label>
              <select id="players-num">
                <option value="2">2</option>
                <option value="3">3</option>
                <option defaultValue="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
              </select>
            </div>
            <div>
              <label htmlFor="questions-num">Число вопросов в теме: </label>
              <select id="questions-num">
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option defaultValue="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
            </div>
            <div>
              <label htmlFor="multiplier">Мультипликатор стоимости вопроса: </label>
              <select id="multiplier">
                <option value="1">1</option>
                <option defaultValue="10">10</option>
                <option value="100">100</option>
                <option value="1000">1000</option>
              </select>
            </div>
            <button type="submit">Начать игру</button>
          </form>
        </div>
      </div>
    )
  }
}

export default NewGame