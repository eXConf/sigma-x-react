import React from 'react'
import { connect } from 'react-redux'
import {Line } from 'react-chartjs-2'

class Graph extends React.Component {
  // Prepare answers data (plusses and minuses)
  copyAnswersData = () => {
    const {players} = this.props
    let csv = ''
    
    players.map(player => {
      csv += player.name + '\t'
      const {answers} = player
      const length = answers.length

      for (let i = 0; i < length; i++) {
        const text = !answers[i] ? ' ' : answers[i] > 0 ? 1 : -1
        csv += (text + '\t')
      }
      csv += '\n'
    })
    this.copyTextToClipboard(csv)
  }

  // copied from https://stackoverflow.com/questions/400212/how-do-i-copy-to-the-clipboard-in-javascript
fallbackCopyTextToClipboard = (text) => {
  var textArea = document.createElement("textarea");
  textArea.value = text;

  // Avoid scrolling to bottom
  textArea.style.top = "0";
  textArea.style.left = "0";
  textArea.style.position = "fixed";

  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  try {
    var successful = document.execCommand('copy');
    var msg = successful ? 'successful' : 'unsuccessful';
    // console.log('Fallback: Copying text command was ' + msg);
  } catch (err) {
    console.error('Fallback: Oops, unable to copy', err);
  }

  document.body.removeChild(textArea);
}

copyTextToClipboard = (text) => {
  if (!navigator.clipboard) {
    this.fallbackCopyTextToClipboard(text);
    return;
  }
  navigator.clipboard.writeText(text).then(function() {
    // console.log('Async: Copying to clipboard was successful!');
  }, function(err) {
    console.error('Async: Could not copy text: ', err);
  });
}
  
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
              width={this.props.uiWidth - 85}
              redraw={true}
              height={200}
              options={this.graphOptions}
              plugins={this.graphPlugins}
            />
        </div>
        <div className="copyAnswers" style={{marginTop: '1em'}}>
          <button
            onClick={this.copyAnswersData}
          >Копировать расплюсовку для таблицы</button>
        </div>
      </div>
    )
  }

  graphColors = ["#92e084", "#e08492", "#86a2e3",
            "#c287e6", "#e0aa84", "#83cae0",
            "#c7e07a", "#52e3c1", "#e0b051",
            "#e6d779"]

  graphOptions = { 
    maintainAspectRatio: true,
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
    animation: false,
    layout: {
      padding: 1
    }
  }

  graphPlugins = [{
    beforeDraw: function(chartInstance, easing) {
      var ctx = chartInstance.chart.ctx
      ctx.fillStyle = 'white' // Меняем цвет здесь
      ctx.fillRect(0, 0, 1920, 1080)
    }
  }]

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
        scores.push(0)
        for (let y = 1; y < (maxQuestions + 2); y++) {
            let score = players[i].answers[y - 1]
            // Если очки на этом вопросе не были начислены
            if (score === undefined) { 
              score = scores[y - 1]
            }
            // Если очки на этом вопросе были начислены, то
            // добавляем их к сумме предыдущих очков
            else {
                score += scores[y - 1]
            }
            scores.push(score)
        }
        playerData.data = scores
        arr.push({...playerData})
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
    maxQuestions: state.game.subjects.length * state.settings.numberOfQuestions,
    uiWidth: state.settings.uiWidth
  }
}

export default connect(mapStateToProps, {})(Graph)