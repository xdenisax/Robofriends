import React  from 'react';
import CardList from '../components/CardList';
import Searchbox from '../components/Searchbox';
import Scroll from '../components/Scroll';
import Header from '../components/Header';
import { setSearchField, requestRobots } from '../actions';
import { connect } from 'react-redux';
import './App.css';

const mapStateToProps = (state) => {
    return {
        searchfield: state.searchRobots.searchField,
        robots: state.requestRobots.robots, 
        isPending: state.requestRobots.isPending, 
        error: state.requestRobots.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)), 
        onRequestRobots: () => requestRobots(dispatch)
    }
}

class App extends React.Component{ 
    componentDidMount() {
        this.props.onRequestRobots();
    }

    render() {
        const { searchfield, onSearchChange, robots, isPending }  = this.props;
        const filteredRobots = robots.filter( robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        });
        return isPending 
        ? <h1>Loading...</h1>
        :
            <div className="tc">
                <Header/>
                <Searchbox searchChange = { onSearchChange }/>
                <Scroll>
                    <CardList robots = { filteredRobots }/>
                </Scroll>
            </div>      
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);