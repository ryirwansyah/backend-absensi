import '../util/initEnv'

import { debugDB } from '../util/debug'
import { Sequelize } from 'sequelize'
import config from 'config'

export const connection1 = new Sequelize({
  host: '127.0.0.1',
  username: 'root',
  password: 'root',
  database: 'backend_absensi',
  dialect: 'mysql',
  logging: false,
  timezone: '+07:00'
})

