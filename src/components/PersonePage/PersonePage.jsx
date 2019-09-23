import React, { Component } from 'react';
import './PersonePage.css';
import ItemDetails from '../ItemDetails/ItemDetails';
import ItemList from '../ItemList/ItemList';
import SwapiService from '../../services/swapi-service';
import ErrorBoundry from '../ErrorBoundry/ErrorBoundry';

export default class PersonePage extends Component {
    swapiService= new SwapiService();
    state = {
        selectedPerson: 21,
    }
    
    onItemSelected = (id) => {
        this.setState({
            selectedPerson: id,
        })
    };
    render(){
        return(
            <ErrorBoundry>
                <div className = 'boxItem'>
                    <ItemList onItemSelected = {this.onItemSelected}
                            getData = {this.swapiService.getAllPeople}
                            renderData = {({name, gender}) => `${name} (${gender})`}/>
                    <ItemDetails id = {this.state.selectedPerson}/>
                </div>
            </ErrorBoundry>
        );
    }
}
