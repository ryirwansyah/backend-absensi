import express from 'express'
import response from '../../../util/response/response'
import { admin } from '../../../models'

export const index = async (req, res, next) => {
    await admin.findOne()
        .then(data => {
            res.json({
                status: true,
                message: 'success to list admin',
                flag: 200,
                result: data
            })
        }).catch(err => {
            res.json({
                status: false,
                message: 'error to list',
                flag: 400
            })
        })
}