import React, {Component} from 'react';
import { connect } from 'react-redux';
import BetItem from '../BetItem/BetItem';





class AboutPage extends Component {

  componentDidMount() {
    this.props.dispatch({type: 'GET_BETS'})
    console.log(this.props.user)
  }

  render() {
    return (
  <div>
    <h1 className= "profileName"id="welcome">
      {this.props.user.first_name} {this.props.user.last_name}
    </h1>
    <div>
      <img className="profileImage" src={ require('./profilepic.jpg')} />
    </div>
    <div>
      <p className="userName">Username: {this.props.user.username}</p>
    </div>
    <div>
      <p className="userName">Account Amount: ${this.props.user.amount_cash}.00</p>
    </div>
    <ul className="history">
    <li>BET HISTORY</li>
    <li>_</li>
    <li>_</li>
    <li>_</li>
    <li>_</li>
    <li>_</li>
    <li>_</li>
    <li>_</li>
    <li>_</li>
    <li>_</li>
    <li>_</li>
    </ul>
  </div>
  );
 }
}


const mapStateToProps = state => ({
  user: state.user,
  bets: state.bets,
});


export default connect(mapStateToProps)(AboutPage);
