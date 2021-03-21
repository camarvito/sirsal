exports.up = function(knex) {
    return knex.schema.createTable('usuarios_perfis', table => {
        table.uuid('usuario_id').unsigned()
        table.uuid('perfil_id').unsigned()
        table.foreign('usuario_id').references('usuarios.id')
        table.foreign('perfil_id').references('perfis.id')
        table.primary(['usuario_id', 'perfil_id'])
    }).then(function () {
        return knex('usuarios_perfis').insert([
            { usuario_id: '57573731-c38e-4c53-9815-b65eabb5b421', perfil_id: '2060aa29-f5af-4588-855f-911d0a09e816' },
            { usuario_id: '20cb705d-bcb6-41ed-a054-23f1ef6fc5ce', perfil_id: 'b5c285e2-8e8b-4305-9721-048de649eac4' },
            { usuario_id: '3b886038-9aba-4b38-86da-5748317b5809', perfil_id: '2060aa29-f5af-4588-855f-911d0a09e816' },
            { usuario_id: 'fec0b021-2a79-4da0-966b-c30511e46384', perfil_id: '2060aa29-f5af-4588-855f-911d0a09e816' },
            { usuario_id: '3eb42e5e-d58c-4e07-b9ad-fef2caa91536', perfil_id: 'b5c285e2-8e8b-4305-9721-048de649eac4' },
            { usuario_id: '7280b983-d055-4759-9cf9-c1eb1c1ce2c6', perfil_id: '2060aa29-f5af-4588-855f-911d0a09e816' }
        ])
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('usuarios_perfis')
};
