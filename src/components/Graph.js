import React from 'react'
import { connect } from 'react-redux'
import {Line } from 'react-chartjs-2'

class Graph extends React.Component {
  render() {
    this.getDatasets()
    return(
      <div className="secondary-container">
        <div className="graph" id="graph">
          <h2>График</h2>
          <Line 
              data={{
                labels: this.getLabels(),
                datasets: this.getDatasets()
              }} 
              width={600}
              height={400}
              options={this.graphOptions} 
            />
        </div>
      </div>
    )
  }

  graphColors = ["#92e084", "#e08492", "#86a2e3",
            "#c287e6", "#e0aa84", "#83cae0",
            "#c7e07a", "#52e3c1", "#e0b051",
            "#e6d779"]

  graphOptions = { 
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        },
        scaleLabel: {
          display: true,
          labelString: "Набранные очки",
          fontSize: 16
        }
      }]
    },
    legend: {
      labels: {
        fontSize: 16
      }
    },
  }

  getDatasets = () => {
    let { players, maxQuestions } = this.props
    let arr = [] //будущий dataset
    for (let i = 0; i < players.length; i++) { // Для каждого игрока
        let playerData = {}
        playerData.label = players[i].name // Заполняем имя
        playerData.backgroundColor = this.graphColors[i] // Указываем цвет фона
        playerData.borderColor = this.graphColors[i] // Указываем цвет границы
        playerData.fill = false // Отменяем заливку
        // Превращаем очки за вопрос в сумму очков на момент вопроса
        let scores = []
        for (let y = 0; y < (maxQuestions + 1); y++) {
            let score = players[i].answers[y]
            // Если очки на этом вопросе не были начислены
            if (score === undefined) { 
                // Если это первый вопрос и нет очков, пишем 0 очков
                if (y === 0) {
                    score = 0
                } 
                // Если нет очков и это не первый вопрос,
                // то берем сумму очков из предыдущего вопроса
                else {
                    score = scores[y - 1]
                }
            }
            // Если очки на этом вопросе были начислены, то
            // добавляем их к сумме предыдущих очков
            else {
                score += scores[y - 1]
            }
            scores.push(score)
        }
        playerData.data = scores
        arr.push(playerData)
    }
    return arr
  }

  getLabels = () => {
    let labels = []
    for (let i = 0; i < (this.props.maxQuestions + 2); i++) {
        labels.push(i)
    }
    return labels
  }
}

const mapStateToProps = (state) => {
  return {
    players: state.game.players,
    maxQuestions: state.game.subjects.length * state.settings.numberOfQuestions
  }
}

export default connect(mapStateToProps, {})(Graph)