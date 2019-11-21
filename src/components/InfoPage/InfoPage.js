import React, {Component} from 'react';
import { connect } from 'react-redux';




// this could also be written with destructuring parameters as:
// const UserPage = ({ user }) => (
// and then instead of `props.user.username` you could use `user.username`
class InfoPage extends Component {

  state = {
    bet_type: '1',
    bet_amount: '2',
    time_select: '5',
    time_amount: '0',
    charity: "1",
    sunday: false,
    monday: false,
    tuesday: false,
    wednesday: false,
    thursday: false,
    friday: false,
    saturday: false,
  }


  handleChangeFor = (property, event) => {
    this.setState({
        ...this.state,
        [property]: event.target.value
    })
}

handleCheckFor = (property, event) => {
  console.log('clicked', property)
  let newVal = false;
  if(this.state[property] === false) {
    newVal = true;
  }

  this.setState({
      ...this.state,
      [property]: newVal,
  })
}


  componentDidMount() {
    this.props.dispatch({type: 'GET_BETS'})
  }

  submitNewBet = () => {
    this.props.dispatch({type: 'ADD_BET', payload: this.state})
    this.props.history.push('/');
  }

  render() {
    return (
  <div>
    <h1 className= "currentBets"id="welcome">
      NEW BET
    </h1>

      <div> <span className="inline">
        <p className="labelSelector">Type of Bet: </p>
      <select className="selector" name="bet_type" onChange={(event) => this.handleChangeFor('bet_type', event)}>
        <option value="1" >Wake Up</option>
        <option value="2">Workout</option>
      </select>
      </span>
      </div>

      <div className="inputLabel"> Days of the Week:
      <label className="radioButton" value={this.state.sunday}
      onClick={(event) => this.handleCheckFor('sunday', event)}>S
      <input type="checkbox"/>
      </label>

      <label className="radioButton" value={this.state.monday}
      onChange={(event) => this.handleCheckFor('monday', event)}>M
      <input type="checkbox" />
      </label>

      <label className="radioButton" value={this.state.tuesday}
      onChange={(event) => this.handleCheckFor('tuesday', event)}>T
      <input type="checkbox" />
      </label >

      <label className="radioButton" value={this.state.wednesday}
      onChange={(event) => this.handleCheckFor('wednesday', event)}>W
      <input type="checkbox" />
      </label>

      <label className="radioButton1" value={this.state.thursday}
      onChange={(event) => this.handleCheckFor('thursday', event)}>R
      <input type="checkbox" />
      </label>

      <label className="radioButton" value={this.state.friday}
      onChange={(event) => this.handleCheckFor('friday', event)}>F
      <input type="checkbox" />
      </label>

      <label className="radioButton" value={this.state.saturday}
      onChange={(event) => this.handleCheckFor('saturday', event)}>S
      <input type="checkbox" />
      </label>
      </div>

      {this.state.bet_type === '2' &&
      <div> <span className="inline">
        <p className="labelSelector">Amount of Time: </p>
      <select className="selector" onChange={(event) => this.handleChangeFor('time_select', event)}>
        <option value="0">0:00 mins</option>
        <option value="5">5:00 mins</option>
        <option value="10">10:00 mins</option>
        <option value="30">30:00 mins</option>
        <option value="60">60:00 mins</option>
        <option value="90">90:00 mins</option>
      </select>
      </span>
      </div>
      }

      {this.state.bet_type === '1' &&
      <div> <span className="inline">
        <p className="labelSelector">Wake Up Time: </p>
      <select className="selector" onChange={(event) => this.handleChangeFor('time_amount', event)}>
        <option value="5">5:00 am</option>
        <option value="6">6:00 am</option>
        <option value="7">7:00 am</option>
        <option value="8">8:00 am</option>
      </select>
      </span>
      </div>
      }

      <div> <span className="inline">
        <p className="labelSelector">Bet Amount: </p>
      <select className="selector" onChange={(event) => this.handleChangeFor('bet_amount', event)}>
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
      <select className="selector" onChange={(event) => this.handleChangeFor('charity', event)}>
        <option value="1">Alzeihmers Organization</option>
        <option value="2">Wounded Warrior</option>
        <option value="3">Childrens Hospital</option>
      </select>
      </span>
      </div>
      
      <button className="newBetButton" onClick={this.submitNewBet}>Make Bet</button>
      {/* {JSON.stringify(this.state, null, 2)} */}
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
