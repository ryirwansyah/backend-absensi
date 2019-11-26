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
const create = async(req,res,next) => {
    try {
        const body = {
            username: req.body.username,
            password: req.body.password,
            role: req.body.role
        }
        await admin.create(body)
        .then(data => {
            res.json({
                code:'200',
                message:'Success Created',
                response: data
            })
        }).catch(data => {
            console.log(data)
        })
    } catch (error) {
        // console.log(error)
    }
}
const update = async(req,res,next) => {
    try {
        const body = {
            username: req.body.username,
            password:req.body.password,
            role:req.body.role
        }

        const where  = {
            where : {
                id: req.params.id 
            }
        }

        await admin.update(body,where)
        .then(data => {
            res.json({
                code:'200',
                message:'Success Updated',
                response: data
            })
        }).catch(data => {
            console.log(data)
        })
    } catch (error) {
        console.log(error)
    }
}
const destroy = async(req,res,next) => {
    try {
        const where  = {
            where : {
                id: req.params.id 
            }
        }
        await admin.destroy(where)
        .then(data => {
            res.json({
                code:'200',
                message:'Success Deleted',
                response: data
            })
        }).catch(data => {
            console.log(data)
        })
    } catch (error) {
        console.log(error)
    }
}
export { index,details,create,update,destroy }
