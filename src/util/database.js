import { Sequelize } from 'sequelize'

export default connection = new Sequelize({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    dialect: process.env.DB_DIALECT,
    logging: false,
    timezone: '+07:00'
})
