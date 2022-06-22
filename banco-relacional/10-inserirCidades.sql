select * from estados where sigla = 'RJ'

insert into cidades (nome, area, estado_id)
values('Campinas', 795, 47)


insert into cidades (nome, area, estado_id)
values('Niteroi', 133.9, 41)

insert into cidades (nome, area, estado_id)
values('Caruaru', 133.9, (select id from estados where sigla = 'PE'))


insert into cidades (nome, area, estado_id)
values('Juazeiro do Norte', 242.2, (select id from estados where sigla = 'CE'))

select * from cidades