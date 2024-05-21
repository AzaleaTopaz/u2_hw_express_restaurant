const desserts = [
    {name: 'Panna Cotta',
     origin: 'Italy',
     ingredients: ['cream', 'sugar', 'gelatin'],
     vegan: false,
     dairy: true
       },
    {
        name: 'Baklava',
        origin: 'Turkey',
        ingredients: ['filo dough', 'pistachio', 'simple syrup'],
        vegan: false,
        dairy: true
    },
    {
        name: 'Vegan Apple Crumble',
        origin: 'Britain',
        ingredients: ['apples', 'sugar', 'cinnamon', 'flour', 'vegan butter', 'brown sugar'],
        vegan: true,
        dairy: false
    },
    {
        name: 'Raspberry Sorbet',
        origin: 'Persia',
        ingredients: ['water', 'frozen raspberries', 'sugar', 'lemon'],
        vegan: true,
        dairy: false
    },
    {
        name: 'Banana Bread',
        origin: 'North America',
        ingredients: ['butter', 'sugar', 'eggs', 'bananas', 'all purpose flour', 'baking soda', 'salt', 'vanilla'],
        vegan: false,
        dairy: true
    }

];

const getDesserts = (req, res) => {
    res.send(desserts)
}


const getDessertOrigin = (req, res) =>{
    res.send(desserts[req.params.id].origin)
}

module.exports = {
    getDesserts,
    getDessertOrigin
}