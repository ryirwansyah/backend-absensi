import '../util/initEnv'

import { Infobip } from 'infobip'
import config from 'config'
import { validateAndConvertPhoneNumber } from '../util/validateAndConvertPN'

const client = new Infobip(config.get('infobip.username'), config.get('infobip.password'))

export const sendSms = (text, to) => {
  to = validateAndConvertPhoneNumber.getInternationalFormat(to)
  return new Promise((res, rej) => {
    client.SMS.send({ from: 'HALOJASA', to, text })
      .then(data => {
        const status = data.messages[0].status
        if (status.groupName === 'REJECTED') rej({ message: [status.description].join(' ') })
        res({ success: true })
      })
      .catch(err => {
        rej({ success: err.message })
      })
  })
}