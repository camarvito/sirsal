const uuid = require('uuid').v4

exports.up = function(knex) {
    return knex.schema.createTable('reservas', table => {
        table.uuid('id').primary()
        table.string('sala_id')
            .references('id')
            .inTable('salas')
        table.string('aluno_matricula')
            .references('matricula')
            .inTable('usuarios')
        table.uuid('cadastrador_id')
            .references('id')
            .inTable('usuarios')
        table.timestamp('data_hora_entrada')
        table.timestamp('data_hora_saida')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('reservas')
};
