import React, {Component} from 'react';
import { connect } from 'react-redux';







class BetItem extends Component {

    state= {
        showInfo: false
    }

    showDelete = () => {
        this.setState({
            showInfo: !this.state.showInfo
        })
    }

    deleteButton = (bet) => {
        this.props.dispatch({ type: "DELETE_BET", payload: bet })
    }

    componentDidMount() {
    this.props.dispatch({type: 'GET_BETS'})
  }

  render() {
    return (
    <>
   <span className="alignBet"><p className= "info">{this.props.bet.type} </p> 
              <p className= "time">{this.props.bet.time_amount}:00am</p>
              <p className= "money">${this.props.bet.bet_amount} </p>
              {!this.state.showInfo && <i className="material-icons" onClick={this.showDelete}>keyboard_arrow_down</i>}
              </span>
              
              <div>
              {this.state.showInfo && <><button className= "deleteButton" onClick={() => this.deleteButton(this.props.bet.bets_id)}>Delete Bet</button> 
              <div className="upArrow">
              <i className="material-icons" onClick={this.showDelete}>keyboard_arrow_up</i>
              </div></>}
              </div>
    </>
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
export default connect(mapStateToProps)(BetItem);
