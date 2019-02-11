import React, { Component } from 'react';


 const Created = (props) => {

 


        let {name, type, color, faveFood} = props
    return (
        <div>
        <input type="text" placeholder="Name" onChange={e => props.handleName(e.target.value)} value={name} />
        <input type="text" placeholder="Type" onChange={e => props.handleType(e.target.value)} value={type}/>
        <input type="text" placeholder="Color" onChange={e => props.handleColor(e.target.value)} value={color}/>
        <input type="text" placeholder="Favorite Food" onChange={e => props.handleFaveFood(e.target.value)} value={faveFood}/>
        <button onClick={() => props.createSillymon(name, type, color, faveFood)}>Create</button>
        <h1 style={{textAlign:"center"}}>Let's see what you created!</h1>
        <h3>{props.name}</h3>
        <p>Type: {props.type}</p>
        <p>Color: {props.color}</p>
        <p>Favorite Food: {props.faveFood}</p>
        </div>
    )
    
}

export default Created;