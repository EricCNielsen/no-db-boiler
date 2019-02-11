const sillymons= [
  {
    id: 0,
    name: 'Candy',
    type: 'Electric',
    color: 'Pink, Purple',
    faveFood: 'Pokeberries'

  } 
  
]

let id = 1;

module.exports = {
  getSillymons: (req, res) => {
    res.status(200).send(sillymons)
  },
  createSillymon: (req, res) => {
    const {name, type, color, faveFood} = req.body;
    sillymons.push({
      id,
      name,
      type,
      color,
      faveFood
    })
    id++;
    res.status(200).send(sillymons)
  },
  deleteSillymon: (req, res) => {
    const {id} = req.params;

    const index = sillymons.findIndex(sillymon => sillymon.id == id);

    sillymons.splice (index, 1)
    res.status(200).send(sillymons)
  },
  editSillymon: (req, res) => {
    const {id} = req.params;
    const {name, type, color, faveFood} = req.body;

    let index = sillymons.findIndex(sillymon => sillymon.id == id);

    sillymons[index] = {
      id: sillymons[index].id,
      name: name || sillymons[index].name,
      type: type || sillymons[index].type,
      color: color || sillymons[index].color,
      faveFood: faveFood || sillymons[index].faveFood
    }

    res.status(200).send(sillymons)
  }

}
