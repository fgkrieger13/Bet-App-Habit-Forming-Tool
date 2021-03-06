import React, { Component } from 'react';
import { connect } from 'react-redux';
import swal from 'sweetalert';
import { checkServerIdentity } from 'tls';


class CurrentBetItem extends Component {

    state = {
       status: true,
       check: 'checked',
    }

    handleCheckFor = (property, event) => {
        let newVal = false;
        if(this.state[property] === false) {
          newVal = true;
        }
        const d = new Date();
        let time = d.getHours();
        console.log(this.props.bet.time_amount)
        if (this.props.bet.bet_type_id === 1 && time >= this.props.bet.time_amount) {
            swal(`You didn't wakeup in time! 
            Make sure to click the status check before ${this.props.bet.time_amount}:00am next time. `)
        }
        else {
      
        this.setState({
            ...this.state,
            [property]: newVal,
        })
        console.log(newVal)
        this.props.dispatch({type: 'EDIT_STATUS', payload: { id: this.props.bet.bets_id, status: this.state.status}})
        }
      }


      //conditionally render current bets for TODAY and allow dispatching of status checkbox
    render() {
        
        return (
             <>       
                        <span className="alignBet">
                        
                        <p className= "info"> {this.props.bet.type} </p>

                        <p className= "today">TODAY</p>

                        {this.props.bet.bet_type_id === 1 &&
                        <p className= "time">{this.props.bet.time_amount}:00am</p>
                        }
                        {this.props.bet.bet_type_id === 2 &&
                        <p className= "time">{this.props.bet.time_select}:00 mins</p>
                        }
                        <p className= "money"> ${this.props.bet.bet_amount}.00 </p>
                        <div>
                        <label className="radioButton" value={this.state.status}
                            onClick={(event) => this.handleCheckFor('status', event)}>
                        <input type="checkbox" checked={!this.state.status} className="statusCheck"/>
                        </label>
                        </div>
                        </span>
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
export default connect(mapStateToProps)(CurrentBetItem);
