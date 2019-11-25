import React, { Component } from 'react';
import { connect } from 'react-redux';
import CurrentBetInfo from '../CurrentBetInfo/CurrentBetInfo';


class CurrentBetItem extends Component {

    state = {
        mondayList: '',
        tuesdayList: '',
        wednesdayList: '',
        thursdayList: '',
        fridayList: '',
        saturdayList: '',
        sundayList: '',
        displayMonday: false,
        displayTuesday: false,
        displayWednesday: false,
        displayThursday: false,
        displayFriday: false,
        displaySaturday: false,
        displaySunday: false,
    }

    handleCheckFor = (property, event) => {
        let newVal = false;
        if(this.state[property] === false) {
          newVal = true;
        }
      
        this.setState({
            ...this.state,
            [property]: newVal,
        })
        console.log(newVal)
      }

    checkDay = () => {
        let mondays = []
        let tuesdays = []
        let wednesdays = []
        let thursdays = []
        let fridays = []
        let saturdays = []
        let sundays = []
        let bets = this.props.bets;
        console.log(this.props.bets)
        for ( let i=0; i < bets.length; i++) {
            if (bets[i].monday === true) {
                mondays.push(bets[i])
            }
            if (bets[i].tuesday === true) {
                tuesdays.push(bets[i])
            }
            if (bets[i].wednesday === true) {
                wednesdays.push(bets[i])
            }
            if (bets[i].thursday === true) {
                thursdays.push(bets[i])
            }
            if (bets[i].friday === true) {
                fridays.push(bets[i])
            }
            if (bets[i].saturday === true) {
                saturdays.push(bets[i])
            }
            if (bets[i].sunday === true) {
                sundays.push(bets[i])
            }
        }
        // console.log(fridays)
        return this.setState({
            ...this.state,
            mondayList: mondays,
            tuesdayList: tuesdays,
            wednesdayList: wednesdays,
            thursdayList: thursdays,
            fridayList: fridays,
            saturdayList: saturdays,
            sundayList: sundays,
        })
    }


    componentDidMount() {
        // this.props.dispatch({ type: 'GET_BETS' })
        let d = new Date();
        let specificDay = d.getDay();
       
        if (specificDay === 1) {
            let newVal = true
            return this.setState({
                ...this.state,
                displayMonday: newVal
            })
        }
        if (specificDay === 2) {
            let newVal = true
            return this.setState({
                ...this.state,
                displayTuesday: newVal
            })
        }
        if (specificDay === 3) {
            let newVal = true
            return this.setState({
                ...this.state,
                displayWednesday: newVal
            })
        }
        if (specificDay === 4) {
            let newVal = true
            return this.setState({
                ...this.state,
                displayThursday: newVal
            })
        }
        if (specificDay === 5) {
            let newVal = true
            return this.setState({
                ...this.state,
                displayFriday: newVal
            })
        }
        if (specificDay === 6) {
            let newVal = true
            return this.setState({
                ...this.state,
                displaySaturday: newVal
            })
        }
        if (specificDay === 7) {
            let newVal = true
            return this.setState({
                ...this.state,
                displaySunday: newVal
            })
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.bets !== prevProps.bets) {
            this.checkDay();
          }
    }

    render() {
        // this.checkDay();
        return (
             <> 
             {this.state.displayMonday === true &&
                <>{this.state.mondayList && this.state.mondayList.map((bet, i) => (
                    <div className= "betItem" key={i}> 
                      <CurrentBetInfo bet = {bet}/>
                    </div>
                ))}</>
                }

            {this.state.displayTuesday === true &&
                <>{this.state.tuesdayList && this.state.tuesdayList.map((bet, i) => (
                    <div className= "betItem" key={i}> 
                        <CurrentBetInfo bet = {bet}/>
                    </div>
                ))}</>
                }

            {this.state.displayWednesday === true &&
                <>{this.state.wednesdayList && this.state.wednesdayList.map((bet, i) => (
                    <div className= "betItem" key={i}>
                        <CurrentBetInfo bet = {bet}/>
                    </div>
                ))}</>
                }

            {this.state.displayThursday === true &&
                <>{this.state.thursdayList && this.state.thursdayList.map((bet, i) => (
                    <div className= "betItem" key={i}> 
                        <CurrentBetInfo bet = {bet}/>
                    </div>
                ))}</>
                }

                {this.state.displayFriday === true &&
                <>{this.state.fridayList && this.state.fridayList.map((bet, i) => (
                    <div className= "betItem" key={i}>
                      <CurrentBetInfo bet = {bet}/>
                    </div>
                ))}</>
                }

            {this.state.displaySaturday === true &&
                <>{this.state.saturdayList && this.state.saturdayList.map((bet, i) => (
                    <div className= "betItem" key={i}>
                     <CurrentBetInfo bet = {bet}/>
                    </div>
                ))}</>
                }

            {this.state.displaySunday === true &&
                <>{this.state.sundayList && this.state.sundayList.map((bet, i) => (
                    <div className= "betItem" key={i}>
                       <CurrentBetInfo bet = {bet}/>
                    </div>
                ))}</>
                }
                {/* <pre>{JSON.stringify(this.state.fridayList, null, 2)}</pre> */}
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
