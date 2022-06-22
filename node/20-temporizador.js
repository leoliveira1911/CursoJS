const schedule = require('node-schedule')
const tarefa1 = schedule.scheduleJob('*/5 * 14 * * 4' , function() {  //  ver como escrever no temporizador do node-schedule
        console.log('Executando tarefa 1', new Date().getSeconds())
})

setTimeout(function () {
    tarefa1.cancel()
    console.log('Cancelando tarefa!')
}, 20000);

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1,5)]
regra.hour = 14
regra.second = 30

const tarefa2 = schedule.scheduleJob(regra, function() {
    console.log('Executando a Tarefa 2', new Date().getSeconds())
})