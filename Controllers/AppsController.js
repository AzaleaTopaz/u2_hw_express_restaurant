const apps = [
    {
        name: 'ceviche',
        origin: 'peru',
        vegan: false

    },
    {
        name: 'curry puffs',
        origin:'Thailand',
        vegan: false

    },
    {
        name: 'doubles',
        origin: 'Trinidad',
        vegan: false

    }
]

const getApps = (req, res) => {
    res.send(apps)
}


const getAppsOrigin = (req, res) =>{
    res.send(desserts[req.params.id].origin)
}

module.exports = {
    getApps,
    getAppsOrigin
}