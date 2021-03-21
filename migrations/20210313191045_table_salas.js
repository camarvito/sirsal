exports.up = function(knex) {
    return knex.schema.createTable('salas', table => {
        table.integer('numero')
        table.integer('bloco_id')
            .references('numero')
            .inTable('blocos')
        table.string('id').primary()
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('salas')
}; 
