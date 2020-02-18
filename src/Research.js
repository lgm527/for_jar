import React from 'react';
import './style/Research.css';
import collective_innovation from './assets/collective_innovation.png';
import knowledge_reuse from './assets/knowledge_reuse.png';
import predicting_history from './assets/predicting_history.png';
import resilient_coop from './assets/resilient_coop.png';
import team_size from './assets/team_size.png';

export default class Research extends React.Component {

  render(){
    return(
      <div className='research_container'>
      <h3>Authored</h3>
        <div className='research_item'>
          <img src={predicting_history} alt='graph' />
          <h6>Predicting History</h6>
          <p>Joseph Risi, Amit Sharma, Rohan Shah, Matthew Connelly, and Duncan J. Watts. "Predicting History." <i>Nature Human Behavior</i> (2019).
          <br></br> Can events be accurately predicted as eventually becoming historic at the time they are happening? We applied machine learning prediction models on cables sent to and from the State Department to answer this question. On balance, we found predicting history to be incredibly difficult, and in line with previous work suggesting inherent limitations to predictability in complex social systems. <a href='https://rdcu.be/bFvwT'>Read it</a></p>
        </div>
      <h3>Acknowledged</h3>
        <div className='research_item'>
          <h6>Implementation and Impacts of the New York City Pretrial Supervised Release Program</h6>
          <p>Skemer, Melanie, Cindy Redcross, and Jessi LaChance. Forthcoming. <i>Implementation and Impacts of the New York City Pretrial Supervised Release Program</i>. New York: MDRC.</p>
        </div>
        <div className='research_item'>
          <img src={resilient_coop} alt='graph' />
          <h6>Resilient Cooperators Stabilize Long-Run Cooperation in the Finitely Repeated Prisoner's Dilemma.</h6>
          <p>Andrew Mao, Lili Dworkin, Siddharth Suri, and Duncan J. Watts. "Resilient Cooperators Stabilize Long-Run Cooperation in the Finitely Repeated Prisoner’s Dilemma." <i>Nature Communications</i> (2017).
          <br></br>What would happen if you got a bunch of people to play the popular economics game, Prisoner's Dilemma, repeatedly over the course a month? Standard theory suggested everybody would eventually betray everybody creating a Lord of the Flies society. We found people remained relatively cooperative. Underlying the cooperativeness was a large minority of people willing to cooperate even at great personal expense to themselves. <a href='https://www.nature.com/articles/ncomms13800'>Read it</a></p>
        </div>
        <div className='research_item'>
          <img src={knowledge_reuse} alt='graph' />
          <h6>Knowledge Reuse for Customization in an Open Design Community for 3D Printing</h6>
          <p>Harris Kyriakou, Jeffrey V. Nickerson, and Gaurav Sabnis. "Knowledge Reuse for Customization in an Open Design Community for 3D Printing." <i>MIS Quarterly</i> (2017).
          <br></br>In the 3D printing community, it is common for users to share and "open-source" the design plans for their objects. We explored the design family tree that develops as many users borrow aspects from many different objects. We find that metamodels (more abstract designs) are used/customized much more often than their more concrete descendants. Additionally metamodels tend to get reused much more often from users who are seen as experts within the community. <a href='https://arxiv.org/abs/1702.08072'>Read it</a></p>
        </div>
        <div className='research_item'>
          <img src={team_size} alt='graph' />
          <h6>An Experimental Study of Team Size and Performance on a Complex Task</h6>
          <p>Andrew Mao, Winter Mason, Siddharth Suri, and Duncan J. Watts. "An Experimental Study of Team Size and Performance on a Complex Task." <i>PLOS ONE</i> (2016).
          <br></br>The relationship between team size and productivity is a question of broad relevance in the social sciences. However experimental findings typically rely on groups working on very general, simple tasks or very specific, complex tasks all of which run the risk of not generalizing. To bridge the gap, we recruited people to work on a real life crisis-mapping task. Overall, we found increasing team size was correlated with less individual effort. However, increasing team size was also correlated with increased collaboration. We found, as a result, the gains from collaboration were much greater than the losses from decreased effort suggesting teams of individuals perform better than a similar number of independent workers. <a href='https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0153048'>Read it</a></p>
        </div>
        <div className='research_item'>
          <img src={collective_innovation} alt='graph' />
          <h6>Collective Innovation: Novelty, Reuse, and Their Interplay</h6>
          <p>Harris Kyriakou. "Collective Innovation: Novelty, Reuse, and Their Interplay." <i>Stevens Institute of Technology</i> (2016).
          <br></br>In the 3D printing community in contrast to patent networks, the more novel a design, the more likely it is to be further used in future designs. Furthermore, the best designs and the best designers tended to be the ones which most actively reused components from other designs. <a href='https://papers.ssrn.com/sol3/papers.cfm?abstract_id=2931473'>Read it</a></p>
        </div>

      </div>
    )
  }
}
