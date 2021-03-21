const uuid = require('uuid').v4

exports.up = function(knex, Promise) {
    return knex.schema.createTable('perfis', table => {
        table.uuid('id').primary()
        table.string('nome').notNull().unique()
        table.string('rotulo').notNull()
    }).then(function () {
        return knex('perfis').insert([
            { id: 'b5c285e2-8e8b-4305-9721-048de649eac4', nome: 'cadastrador', rotulo: 'Cadastrador' },
            { id: '2060aa29-f5af-4588-855f-911d0a09e816', nome: 'aluno', rotulo: 'Aluno' },
        ])
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('perfis')
  };
  