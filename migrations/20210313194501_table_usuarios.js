const uuid = require('uuid').v4
const bcrypt = require('bcrypt-nodejs')

const encryptPassword = password => {
    const salt = bcrypt.genSaltSync(10)
    return bcrypt.hashSync(password, salt)
}

exports.up = function(knex) {
    return knex.schema.createTable('usuarios', table => {
        table.uuid('id').primary()
        table.string('nome')
        table.string('matricula').unique()
        table.string('email').unique()
        table.string('senha')
        table.timestamp('data_criacao')
            .defaultTo(knex.fn.now())
    }).then(function () {
        return knex('usuarios').insert([
            {   
                id: '57573731-c38e-4c53-9815-b65eabb5b421', 
                nome: 'Victor Camargo',
                matricula: '471419',
                email: 'vito@alu.ufc.br', 
                senha: encryptPassword('123456') 
            },
            { 
                id: '20cb705d-bcb6-41ed-a054-23f1ef6fc5ce', 
                nome: 'Adriano Gomes', 
                email: 'adriannogs@gmail.ufc.br', 
                senha: encryptPassword('123456') 
            },
            { 
                id: '3b886038-9aba-4b38-86da-5748317b5809', 
                nome: 'Antônio Pecci Filho', 
                matricula: '421115', 
                email: 'toquinho@aluno.com.br',
                senha: encryptPassword('123456')
            },
            { 
                id: 'fec0b021-2a79-4da0-966b-c30511e46384',
                nome: 'Baden Powell de Aquino',
                matricula: '465051',
                email: 'baden@aluno.com.br',
                senha: encryptPassword('123456')
            },
            { 
                id: '3eb42e5e-d58c-4e07-b9ad-fef2caa91536',
                nome: 'João Prado Pereira de Oliveira',
                email: 'jgilberto@aluno.com.br',
                senha: encryptPassword('123456')
            },
            { 
                id: '7280b983-d055-4759-9cf9-c1eb1c1ce2c6',
                nome: 'Marco Pereira',
                matricula: '481733',
                email: 'marcopereira@aluno.com.br',
                senha: encryptPassword('123456')
            },
        ])
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('usuarios')
}; 
