import React from 'react'

class About extends React.Component {
  render() {
    return (
      <div className="secondary-container">
        <div className="about">
          <h2>SIGMA X v2</h2>
          <h4>Svoya Igra Game Manager Application by ExConfessor</h4>
          <div className="links">
            <div><a href="https://exconf.github.io/sigma-x-react/">Браузерная версия</a></div>
            <div><a href="https://github.com/eXConf/sigma-x-2/releases/">Десктопная версия</a></div>
            <div><a href="https://donatepay.ru/don/DomovinaOpen">Помочь автору</a></div>
          </div>
          <h3>Советы</h3>
          <div className="advices">
            <ul>
              <li>
                Браузерную версию SIGMA X можно использовать и в режиме оффлайн. Для этого установите её как веб-приложение, воспользовавшись иконкой в правой части адресной строки браузера (или соответствующим пунктом меню в мобильном браузере).
              </li>
              <li>
                Счёт и все настройки сохраняются после закрытия. Чтобы обнулить счёт, начните новую игру из меню слева.
              </li>
              <li>
                Нажмите на иконку сигмы (Σ) слева от счёта, чтобы скопировать текущий счёт в буфер обмена.
              </li>
              <li>
                Нажмите на текущий номер темы и вопроса в блоке навигации, чтобы: в браузерной версии — скопировать "отбивку" (номер темы и ее название, стоимость вопроса) в буфер обмена; в десктопной версии — отправить "отбивку" в последнее активное окно.
              </li>
              
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default About