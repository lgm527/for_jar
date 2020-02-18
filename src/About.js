import React from 'react';
import './style/About.css';
import jar from './assets/jar_by_sean.png';
import resume from './assets/Joseph_Risi_Resume.pdf';

export default class About extends React.Component {

  render(){
    return(
      <div id='about'>

        <div id='bio'>
          <p>Data scientist interested in data analysis, data visualization, machine learning, and data communication to promote social justice and contribute to more equitable social policy. I worked at the Center for Decision Technologies at my alma mater (Stevens Institute Technology) and then after college, I worked at Microsoft Research labs in NYC in the Computational Social Science Division. Currently, I'm a data scientist at the nonprofit social policy research firm, MDRC. For fun, I go hiking (AT Thru-hiker SOBO, 2015), and I go to concerts (in 2019 I went to 23).</p>
          <h4><a id='download' href={resume} target='_blank' rel='noopener noreferrer'>Download Resume</a></h4>
        </div>

        <div id='pic'>
          <a href='http://seanstartrunning.com/'><img src={jar} id='jar' alt='Joseph Risi' /></a>
        </div>

      </div>
    )
  }
}
