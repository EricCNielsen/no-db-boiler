import React, { Component } from 'react';

class Created extends Component {
    constructor (props) {
        super(props)

        this.state= {
            compiledMon:[]
        }
    }

    render () {
        let {name, type, color, faveFood} = this.props
    return (
        <div>
        <input type="text" placeholder="Name" onChange={e => this.props.handleName(e.target.value)} />
        <input type="text" placeholder="Type" onChange={e => this.props.handleType(e.target.value)} />
        <input type="text" placeholder="Color" onChange={e => this.props.handleColor(e.target.value)} />
        <input type="text" placeholder="Favorite Food" onChange={e => this.props.handleFaveFood(e.target.value)} />
        <button onClick={() => this.props.createSillymon(name, type, color, faveFood)}>Create</button>
        </div>
    )
    }
}

export default Created;