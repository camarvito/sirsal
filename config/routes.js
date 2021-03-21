module.exports = app => {
    app.route('/signin')
         .post(app.api.auth.signin)

    app.route('/users')
        .get(app.api.users.get)

    app.route('/users/:matricula')
        .get(app.api.users.getByMatricula)

    app.route('/users/:matricula/reservations')
        .get(app.api.reservations.getUserReservations)

    app.route('/reservations')
        .post(app.api.reservations.create)

    app.route('/rooms/:id')
        .get(app.api.reservations.getRoomReservations)
}