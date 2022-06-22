select * from cidades;

insert into prefeitos
    (nome, cidade_id)
Values
    ('Rodrigo Neves', 2),
    ('Raquel Lyra', 3),
    ('Joazinho das Neves', null);


insert into prefeitos
    (nome, cidade_id)
Values
    ('Zequinha da Resenha', null);

select * from prefeitos