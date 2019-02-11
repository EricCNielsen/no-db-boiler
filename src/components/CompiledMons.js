import React, { Component } from 'react';

class Compiled extends Component {
    constructor (props) {
        super(props)

        this.state= {
            editing: false
        }
        this.edit=this.edit.bind(this)
        this.updateMon=this.updateMon.bind(this)
    }

    edit() {
        const {sillymon} = this.props
        this.setState({
            editing: true
        })
        this.props.setEdit(sillymon.name, sillymon.type, sillymon.color, sillymon.faveFood)
    }

    updateMon(id) {
        this.props.updateMon(id)

        this.setState({
            editing: false
        })
    }

    render() {
        const {sillymon, deleteSillymon} = this.props
        return (
            <div>
                <h3>{sillymon.name}</h3>
                <p>Type: {sillymon.type}</p>
                <p>Color: {sillymon.color}</p>
                <p>Favorite Food: {sillymon.faveFood}</p>
                {this.state.editing ? (
                    <button onClick={() => this.updateMon(sillymon.id)}>Save</button>
                ) : (
                    <button onClick={this.edit}>Edit</button>
                )}
                <button onClick={() => deleteSillymon(sillymon.id)}>Delete</button>
            </div>
        )
    }
}
export default Compiled;
 