import '../util/initEnv'

import { debugDB } from '../util/debug'
import { Sequelize } from 'sequelize'
import config from 'config'

export const connection1 = new Sequelize({
  host: '127.0.0.1',
  username: 'postgres',
  password: process.env.DB_PASS,
  database: 'colabs_absensi',
  dialect: 'postgres',
  logging: false,
  timezone: '+07:00'
})

