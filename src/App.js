import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import Compiled from './components/CompiledMons'
import Created from './components/CreatedMons'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      sillymons: [],
      name: '',
      type: '',
      color: '',
      faveFood: '',
      singleComp: true,
    }
    this.handleName=this.handleName.bind(this)
    this.handleType=this.handleType.bind(this)
    this.handleColor=this.handleColor.bind(this)
    this.handleFaveFood=this.handleFaveFood.bind(this)
    this.createSillymon=this.createSillymon.bind(this)
    this.deleteSillymon=this.deleteSillymon.bind(this)
    this.updateMon=this.updateMon.bind(this)
    this.setEdit=this.setEdit.bind(this)
  }

  componentDidMount() {
    axios.get('api/sillymons').then(res => {
      this.setState({
        sillymons: res.data
      })
    })
  }

  handleName(val) {
    this.setState({
      name: val
    })
  }
  handleType(val) {
    this.setState({
      type: val
    })
  }
  handleColor(val) {
    this.setState({
      color: val
    })
  }
  handleFaveFood(val) {
    this.setState({
      faveFood: val
    })
  }
  createSillymon(name, type, color, faveFood) {
    axios.post(`/api/sillymon`, {name, type, color, faveFood}).then(res =>{
      this.setState({
        sillymons: res.data,
        name: '',
        type: '',
        color: '',
        faveFood: ''
      })
    })
  }
  deleteSillymon(id) {
    axios.delete(`/api/sillymon/${id}`).then(res => {
      this.setState({
        sillymons: res.data
      })
    })
  }
  setEdit(name, type, color, faveFood) {
    this.setState({
      name,
      type,
      color,
      faveFood
    })
  }
  updateMon(id) {
    const {name, type, color, faveFood} = this.state
    axios.put(`/api/sillymon/${id}`, {name, type, color, faveFood}).then(res => {
        this.setState({
          sillymons: res.data,
          name: '',
          type: '',
          color: '',
          faveFood: ''

        })
    })
  }



  render() {
    const {name, type, color, faveFood} = this.state

    const mappedMons= this.state.sillymons.map(sillymon => {
      return (
        <Compiled
          key={sillymon.id}
          sillymon={sillymon}
          getSillymons={this.getSillymons}
          deleteSillymon={this.deleteSillymon}
          updateMon={this.updateMon}
          setEdit={this.setEdit}
        />
      )
    })
    return (
      <div className="App">
        <h1 className="generatorBG">Sillymón Generator</h1>
        <Created 
          name={this.state.name} 
          type={this.state.type} 
          color={this.state.color} 
          faveFood={this.state.faveFood} 
          handleName={this.handleName} 
          handleColor={this.handleColor} 
          handleType={this.handleType} 
          handleFaveFood={this.handleFaveFood} 
          createSillymon={this.createSillymon}
        />
        {/* body here */}
        
        {/* input info goes here */}
        
        <h1 className="generatorBG">Check Out all the others!</h1>
        <div className="compiledBG">

          {mappedMons}
        
        </div>
      
      </div>
    );
  }
}

export default App;
