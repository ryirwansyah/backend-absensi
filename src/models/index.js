import * as dbs from '../util/database'
import { SequelizeHelper } from 'sequelize-utility'
import { Sequelize } from 'sequelize'
const dbHelper = new SequelizeHelper(dbs, Sequelize)

import admin from './adminModel'

// dbHelper.sync()
export {
  admin
}

export default dbHelper
