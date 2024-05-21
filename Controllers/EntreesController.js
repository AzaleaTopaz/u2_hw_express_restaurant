const entrees = [
    {
        name: 'khachapuri',
        origin:'Georgia',
        vegan: false

    },
    {
        name: 'sticky and spicy baked cauliflower',
        origin: 'North America',
        vegan: true

    },
    {
        name: 'Russian Vinaigrette',
        origin: 'Russia',
        vegan: true

    }
]

const getEntrees = (req, res) => {
    res.send(entrees)
}


const getEntreeVegan = (req, res) =>{
    res.send(desserts[req.params.id].vegan)
}

module.exports = {
    getEntrees,
    getEntreeVegan
}