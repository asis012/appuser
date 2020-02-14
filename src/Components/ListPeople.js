import React, { Component } from 'react';

class ListPeople extends Component {
    
   
  render() {
    return (
      <div>
        <ul>
          {this.props.people.persons.map(person => (
            <li key={person['id']} onClick={this.props.clickHandler.bind(this,person['id'])}>
              <img id="peopleimage" alt="" src={person['profileImage']}></img>
              {person['firstName']} {person['lastName']}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ListPeople;
