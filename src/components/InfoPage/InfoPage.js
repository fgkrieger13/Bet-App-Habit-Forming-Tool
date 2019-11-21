import React, {Component} from 'react';
import { connect } from 'react-redux';
import BetItem from '../BetItem/BetItem';




// this could also be written with destructuring parameters as:
// const UserPage = ({ user }) => (
// and then instead of `props.user.username` you could use `user.username`
class InfoPage extends Component {

  componentDidMount() {
    this.props.dispatch({type: 'GET_BETS'})
  }

  render() {
    return (
  <div>
    <h1 className= "currentBets"id="welcome">
      NEW BET
    </h1>
      <div> <span className="inline">
        <p className="labelSelector">Type of Bet: </p>
      <select className="selector">
        <option value="wakeup">Wake Up</option>
        <option value="workout">Workout</option>
      </select>
      </span>
      </div>
      <div className="inputLabel"> Days of the Week:
      <label className="radioButton">S
      <input type="radio" />
      </label>
      <label className="radioButton">M
      <input type="radio" />
      </label>
      <label className="radioButton">T
      <input type="radio" />
      </label >
      <label className="radioButton">W
      <input type="radio" />
      </label>
      <label className="radioButton1">R
      <input type="radio" />
      </label>
      <label className="radioButton">F
      <input type="radio" />
      </label>
      <label className="radioButton">S
      <input type="radio" />
      </label>
      </div>
      <div> <span className="inline">
        <p className="labelSelector">Amount of Time: </p>
      <select className="selector">
        <option value="0">0:00 mins</option>
        <option value="5">5:00 mins</option>
        <option value="10">10:00 mins</option>
        <option value="30">30:00 mins</option>
        <option value="60">60:00 mins</option>
        <option value="90">90:00 mins</option>
      </select>
      </span>
      </div>
      <div> <span className="inline">
        <p className="labelSelector">Wake Up Time: </p>
      <select className="selector">
        <option value="5am">5:00 am</option>
        <option value="530am">5:30 am</option>
        <option value="6am">6:00 am</option>
        <option value="630am">6:30 am</option>
        <option value="7am">7:00 am</option>
      </select>
      </span>
      </div>
      <div> <span className="inline">
        <p className="labelSelector">Bet Amount: </p>
      <select className="selector">
        <option value="2">$2</option>
        <option value="5">$5</option>
        <option value="10">$10</option>
        <option value="20">$20</option>
        <option value="100">$100</option>
      </select>
      </span>
      </div>
      <div> <span className="inline">
        <p className="labelSelector">Charity: </p>
      <select className="selector">
        <option value="ALZ">Alzeihmers Organization</option>
        <option value="Wounded">Wounded Warrior</option>
        <option value="Childrens">Childrens Hospital</option>
      </select>
      </span>
      </div>
      
      <button className="newBetButton">Make Bet</button>
  </div>
  );
 }
}

// Instead of taking everything from state, we just want the user info.
// if you wanted you could write this code like this:
// const mapStateToProps = ({user}) => ({ user });
const mapStateToProps = state => ({
  user: state.user,
  bets: state.bets,
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(InfoPage);
