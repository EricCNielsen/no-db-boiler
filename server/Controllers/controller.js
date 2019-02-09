const sillymons= [
  
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
  
}
