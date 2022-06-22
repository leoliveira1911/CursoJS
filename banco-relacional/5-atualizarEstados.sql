--SEMPRE USAR WHERE, OU ENTAO FAZ A MODIFICACAO EM TODAS AS LINHAAAAS!!!!!

update estados
set nome = 'Maranhão'
where sigla = 'MA'

select nome from estados where sigla = 'MA'

update estados
set nome = 'Paraná', populacao = 11.32
where sigla = "PR"

select 
    est.nome, 
    populacao,
    sigla
from estados est 
where sigla = 'PR'

