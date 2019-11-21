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
    <div className="newBet" onClick={()=>{}}>
      <p className="info">New Bet +</p>
    </div>
    <div>
      {props.bets.map((bet, i) => (
          <div className= "betItem" key={i}>
              <span className="alignBet"><p className= "info">{bet.type} </p> 
              <p className= "time">{bet.time_amount}:00am</p>
              <p className= "money">${bet.bet_amount} </p>
              <i class="material-icons">keyboard_arrow_up</i>
              {/* <button className= "openButton">open</button> */}
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
