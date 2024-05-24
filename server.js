import app from './src/app'

const PORT= 3055
const server = app.list(PORT, () => {
    console.log(`MSV eCommerce start with ${PORT}  `)
})

process.on('SIGINT', () => {
    server.close(() => console.log("Exit server Express"))
   // notify.send(ping...)
})