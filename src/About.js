import React from 'react';
import jar from './assets/jar_by_sean.png'

export default class About extends React.Component {

  render(){
    return(
      <div>

      <p>Data scientist interested in data analysis, data visualization, machine learning, and data communication to promote social justice and contribute to more equitable social policy. I worked at the Center for Decision Technologies at my alma mater (Stevens Institute Technology) and then after college, I worked at Microsoft Research labs in NYC in the Computational Social Science Division. Currently, I'm a data scientist at the nonprofit social policy research firm, MDRC. For fun, I go hiking (AT Thru-hiker SOBO, 2015), and I go to concerts (in 2019 I went to 23).</p>

      <img src={jar} id='jar' alt='Joseph Risi' />
      <a href='http://seanstartrunning.com/'>©seanstartrunning</a>
      </div>
    )
  }
}
