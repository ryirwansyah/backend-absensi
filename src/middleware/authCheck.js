import jwt from 'jsonwebtoken'

import response from '../util/response/response'
import flag from '../util/flag/errorCode'
import { AccountUser } from '../models'

export default async (req, res, next) => {
  let token = req.headers.authorization
  if (token) {
    try {
      token = token.replace('Bearer ', '')
      const decode = jwt.verify(token, process.env.JWT_PRIVATE_KEY)
      
      req.user = decode
      const check = await AccountUser.findByPk(req.user.id)
      if (!check) return response.error(`No user found`, res, flag.jwt_token_notmatch)
      next()
        
    } catch (err) {
      response.unauthorized(`Invalid Token`, res, flag.jwt_token_invalid)
    }
  } else {
    response.unauthorized(`Token Not Found`, res, flag.jwt_token_empty)
  }
}