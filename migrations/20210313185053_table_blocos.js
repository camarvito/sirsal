const uuid = require('uuid').v4

exports.up = function(knex) {
    return knex.schema.createTable('blocos', table => {
        table.uuid('id').primary()
        table.integer('numero').unique()
        table.string('nome')
    }).then(function () {
        return knex('blocos').insert([
            { id: uuid(), numero: 4, nome: 'Bloco 4'},
        ])
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('blocos')
};
