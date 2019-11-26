import React, { Component } from 'react';
import { connect } from 'react-redux';
// import BetItem from '../BetItem/BetItem';
import LogOutButton from '../LogOutButton/LogOutButton';





class AboutPage extends Component {

  componentDidMount() {
    this.props.dispatch({type: 'GET_COMPLETION'})
  }

  addToAccount = () => {
    this.props.dispatch({type: 'EDIT_AMOUNT', payload: this.props.user.id})
    window.location.reload();
  }

  render() {
    return (
      <div>
        <h1 className="profileName" id="welcome">
          {this.props.user.first_name} {this.props.user.last_name}
        </h1>
        <div>
          <img className="profileImage" src={require('./profilepic.jpg')} />
        </div>
        <div className="border">
          <div>
            <p className="userName">Username: {this.props.user.username}</p>
          </div>
          <div>
            <span className="inline">
              <p className="accountAmount">Account Amount: ${this.props.user.amount_cash}.00</p>
              <button className="editAmount" onClick = {this.addToAccount}>+</button>
            </span>
          </div>
          <div>
            <LogOutButton className="logoutButton" />
          </div>
        </div>
        <div>
        <ul className="history">
          <li>BET HISTORY</li>
          <li> <span className="inline">
            <p className="betHistory">BET</p> <p className="historyDate">DATE</p>
            <p className="historyStatus">STATUS</p> <p className="historyMoney">$$$</p>
          </span>
          </li>
          <>{this.props.history.map((bet, i) => (
            <li  key={i}>
              <span className="inline">
                <p className="betHistory1">{bet.type}</p> 
                <p className="historyDate1">{bet.time.substring(0, 10)}</p>
                <p className="historyStatus1">{JSON.stringify(bet.status)}</p>
                {bet.status === false &&
                <p className="historyMoney1">-{bet.bet_amount}</p>
                }
                {bet.status === true &&
                <p className="historyMoney1">0</p>
                }
                
              </span>
            </li>
          ))}</>
        </ul>
        </div>
        {/* <pre>{JSON.stringify(this.props.history, null, 2)}</pre> */}
      </div>
    );
  }
}


const mapStateToProps = state => ({
  user: state.user,
  bets: state.bets,
  history: state.history,
});


export default connect(mapStateToProps)(AboutPage);
