import '../util/initEnv'

import Sequelize from 'sequelize'
import { connection1 } from '../util/database'
import JWT from 'jsonwebtoken'
import _ from 'lodash'

const AccountUser = connection1.define(
  'admin',
  {
    username : {
      type : Sequelize.STRING(255),
      allowNull : false
    },
    password : {
      type : Sequelize.STRING(255),
      allowNull : false
    },
    role : {
      type : Sequelize.STRING(20),
      allowNull : false
    }
  },
  {
    tableName: 'admin',
    timestamps: true,
    underscored: true,
    paranoid: true
  }
)

AccountUser.prototype.generateJWT = function() {
  const { id, username, role } = this
  const credentials = { id, username, role }
  const token = JWT.sign(credentials, process.env.JWT_PRIVATE_KEY, {
    expiresIn: '24h'
  }) // Expiration Date For One Month
  return token
}

export default AccountUser
