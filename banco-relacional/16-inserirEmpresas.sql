alter table empresas modify cnpj varchar(14);


insert into empresas 
    (nome, cnpj)
values
    ('Bradesco',05414225000108),
    ('Vale',68402691000193),
    ('Cielo',15898245000155);

desc empresas;
desc prefeitos;

select * from empresas;
select * from cidades;

insert into empresas_unidades
    (empresa_id, cidade_id, sede)
values
    (1,1,1),
    (1,2,0),
    (2,1,0),
    (2,2,1);

