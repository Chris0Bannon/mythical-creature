import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {

state = {
  newCreature: {
  name: '',
  origin: ''},
  creatureList: [{name: 'unicorn',
                  origin: 'scotland'},
                  {name: 'minotaur',
                  origin: 'creete'},
                  {name:'abominable snowman',
                  origin: 'arctic'},
                  {name: 'chupacabre',
                  origin: 'Mexico'}]
}

input1Handler = (event) => {
this.setState({newCreature: {
 ...this.state.newCreature,
 name: event.target.value}})
}

input2Handler = (event) => {
  this.setState({newCreature: {
    ...this.state.newCreature,
    origin: event.target.value}})
}

newCritter = (event) => {
console.log('you did click');
this.setState({
  creatureList: [
    ...this.state.creatureList,
    this.state.newCreature
  ]
})
}

  render() {

    //  let listItemHtml = [];
    //  for(let i = 0; i < this.state.creatureList.length; i ++){
    //    listItemHtml.push(<li>{this.state.creatureList[i]}</li>)
    //  }
// this.state.creatureList.forEach(function(creature) {

// })

console.log(this.state);


let listItemHtml = this.state.creatureList.map(function(creature){
  return <li key = {creature.name}> the creature is named {creature.name} and it is from {creature.origin}</li>
})

    return (
      <div className="App">
        <code>
        {JSON.stringify(this.state.creatureList)}
        </code>
        <div>
        <input onChange = {this.input1Handler} placeholder ="add your creature here"/>
        <input onChange = {this.input2Handler} placeholder = "add your creatires location here"/>
        <button onClick = {this.newCritter}>submit your critter</button>
        </div>       
        <p>
          getting one creature looks like this 
          {this.state.creatureList[2].name}

          newCreature name is:{this.state.newCreature.name}
          new creature origin is: {this.state.newCreature.origin}
        </p>
        <ul>
          {listItemHtml}
        </ul>
      </div>
    );
  }
}

export default App;
