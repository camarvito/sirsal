module.exports = app => {
    const get = (req, res) => {
        app.db('usuarios')
            .select('id', 'nome', 'matricula', 'email')
            .then(users => res.json(users))
            .catch(err => res.status(500).send(err))
    }

    const getByMatricula = (req, res) => {
        app.db('usuarios')
            .select('id', 'nome', 'matricula', 'email')
            .where({ matricula: req.params.matricula })
            .first()
            .then(user => res.json(user))
            .catch(err => res.status(500).send(err))
    }

    return { get, getByMatricula }
}