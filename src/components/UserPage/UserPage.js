import React from 'react';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import BetItem from '../BetItem/BetItem';


// this could also be written with destructuring parameters as:
// const UserPage = ({ user }) => (
// and then instead of `props.user.username` you could use `user.username`
const UserPage = (props) => (
  <div>
    <h1 className= "currentBets"id="welcome">
      CURRENT BETS
    </h1>
    <div className="newBet">
      <p className="info">New Bet +</p>
    </div>
    <div>
      {props.bets.map((bet) => (
          <div className= "betItem" key={bet.id}>
              <span className="alignBet"><p className= "info">{bet.bet_type_id} </p> 
              <p className= "time">{bet.time_amount}am</p>
              <p className= "money">${bet.bet_amount} </p>
              <button className= "openButton">open</button>
              </span>
          </div>
      ))}
    </div>
  </div>
);

// Instead of taking everything from state, we just want the user info.
// if you wanted you could write this code like this:
// const mapStateToProps = ({user}) => ({ user });
const mapStateToProps = state => ({
  user: state.user,
  bets: state.bets,
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(UserPage);
