import express from 'express'
import response from '../../../util/response/response'
import { admin } from '../../../models/'

const index = async (req, res, next) => {
    await admin.findAndCountAll()
    .then(data => {
        res.json({
            code : '200',
            message:'Success Listing',
            response: data
        })
    }).catch(data => {
            console.log(data)
        }
    )
}
const details = async(req,res,next) => {
    const {id} = req.params
    await admin.findOne({
        where : {
            id :id
        }
    })
    .then(data => {
        res.json({
            code:'200',
            message:'Success Listing',
            response: data
        })
    }).catch(data => {
        console.log(data)
    })
}
export {index,details}
