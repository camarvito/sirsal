const uuid = require('uuid').v4

module.exports = app => {
    const create = (req, res) => {
        const reservation = { id: uuid(), ...req.body }

        app.db('reservas')
            .insert(reservation)
            .then(_ => res.status(201).send())
            .catch(err => res.status(500).send(err))
    }

    const getRoomReservations = (req, res) => {
        app.db('reservas')
            .select(
                'reservas.id AS reserva_id', 
                'sala_id',
                'data_hora_entrada',
                'data_hora_saida',
                'y.nome AS cadastrador_nome',
                'y.id AS cadastrador_id',
                'u.matricula AS matricula', 
                'u.nome AS aluno_nome', 
                'u.id AS aluno_id'
            )
            .innerJoin('usuarios AS u', { 'reservas.aluno_matricula': 'u.matricula'})
            .innerJoin('usuarios AS y', { 'reservas.cadastrador_id': 'y.id' })
            .where({ 'reservas.sala_id': req.params.id })
            .then(reservations => res.json(reservations))
            .catch(err => res.status(500).send(err))
    }

    const getUserReservations = (req, res) => {
        app.db('reservas')
            .select(
                'reservas.id AS reserva_id',
                'sala_id',
                'data_hora_entrada',
                'data_hora_saida',
                'y.nome AS cadastrador_nome',
                'y.id AS cadastrador_id',
                'u.matricula AS matricula', 
                'u.nome AS aluno_nome', 
                'u.id AS aluno_id'
            )
            .innerJoin('usuarios AS u', { 'reservas.aluno_matricula': 'u.matricula'})
            .innerJoin('usuarios AS y', { 'reservas.cadastrador_id': 'y.id' })
            .where({ aluno_matricula: req.params.matricula })
            .then(reservations => res.json(reservations))
            .catch(err => res.status(500).send(err))
    }

    return { create, getUserReservations, getRoomReservations }
}