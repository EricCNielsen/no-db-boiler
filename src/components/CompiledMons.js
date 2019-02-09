import React, { Component } from 'react';

class Compiled extends Component {
    constructor (props) {
        super(props)

        this.state= {
            editing: false
        }

    }

    deleteSillymon = () => {
        //do axios stuff
        this.props.getSillymons()
    }

    render() {
        const {sillymon} = this.props
        return (
            <div>
                <h3>{sillymon.name}</h3>
                <p>Type: {sillymon.type}</p>
                <p>Color: {sillymon.color}</p>
                <p>Favorite Food: {sillymon.faveFood}</p>
                <button>Edit</button>
                <button>Delete</button>
            </div>
        )
    }
}
export default Compiled;
 