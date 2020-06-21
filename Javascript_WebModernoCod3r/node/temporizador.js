/// *** opções sem o uso de pacote externo
// Fica executando a callback com o intervalo de tempo definido
setInterval((...args) => { console.log('setInterval', args) }, 5000, 'a', 'b', 'c')

// Executa uma unica vez, mas apos passar o tempo definido
setTimeout((...args) => { console.log('setTimeout', args) }, 3000, 'a', 'b', 'c')


// *** usando o pacote node-schedule, utiliza padrao cron para definir o tempo
const schedule = require('node-schedule')

const tarefa1 = schedule.scheduleJob('*/5 * * * * *', () => {
    console.log('Tarefa 1', new Date().getSeconds())
})

tarefa1.cancel() // parar tarefa1

// ou
const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(0, 7)]
regra.hour = 11
regra.second = [new schedule.Range(5, 55, 10)]

const tarefa2 = schedule.scheduleJob(regra, () => {
    console.log('Tarefa 2', new Date().getSeconds())
})