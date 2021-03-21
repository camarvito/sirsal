const uuid = require('uuid').v4
const moment = require('moment')

exports.up = function(knex) {
    return knex.schema.raw(`
        CREATE OR REPLACE FUNCTION public.cria_sala_id()
        RETURNS trigger
        LANGUAGE plpgsql
        AS $function$
        BEGIN
            NEW.id = CONCAT('S', NEW.numero, 'BL', NEW.bloco_id);
            RETURN NEW;
        END;
        $function$;

        CREATE TRIGGER sala_cadastro
        BEFORE INSERT
        ON salas
        FOR EACH ROW
        EXECUTE PROCEDURE cria_sala_id();
    `)
    .then(function () {
        return knex('salas').insert([
            { numero: 1, bloco_id: 4 },
            { numero: 2, bloco_id: 4 },
            { numero: 3, bloco_id: 4 },
            { numero: 4, bloco_id: 4 },
            { numero: 5, bloco_id: 4 }
        ])
        .then(function () {
            return knex('reservas').insert([
                {   
                    id: uuid(), 
                    sala_id: 'S1BL4',
                    aluno_matricula: '471419',
                    cadastrador_id: '20cb705d-bcb6-41ed-a054-23f1ef6fc5ce',
                    data_hora_entrada: moment().format(),
                    data_hora_saida: moment().add(1, 'hours').format()
                },
                {   
                    id: uuid(), 
                    sala_id: 'S2BL4',
                    aluno_matricula: '421115',
                    cadastrador_id: '20cb705d-bcb6-41ed-a054-23f1ef6fc5ce',
                    data_hora_entrada: moment().format(),
                    data_hora_saida: moment().add(1, 'hours').format()
                },
                {   
                    id: uuid(), 
                    sala_id: 'S4BL4',
                    aluno_matricula: '465051',
                    cadastrador_id: '20cb705d-bcb6-41ed-a054-23f1ef6fc5ce',
                    data_hora_entrada: moment().format(),
                    data_hora_saida: moment().add(1, 'hours').format()
                },
                {   
                    id: uuid(), 
                    sala_id: 'S5BL4',
                    aluno_matricula: '481733',
                    cadastrador_id: '3eb42e5e-d58c-4e07-b9ad-fef2caa91536',
                    data_hora_entrada: moment().format(),
                    data_hora_saida: moment().add(2, 'hours').format()
                },
                {   
                    id: uuid(), 
                    sala_id: 'S1BL4',
                    aluno_matricula: '471419',
                    cadastrador_id: '20cb705d-bcb6-41ed-a054-23f1ef6fc5ce',
                    data_hora_entrada: moment().add(4, 'hours').format(),
                    data_hora_saida: moment().add(5, 'hours').format()
                },
            ])
        })
    })
};

exports.down = function(knex) {
    return knex.schema.raw(`
        DROP TRIGGER sala_cadastro ON salas;
        DROP FUNCTION public.cria_sala_id();
    `)
};
