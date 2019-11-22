import express from 'express'
import response from '../../../util/response/response'


export const index = async (req, res, next) => {
    response.success('Success to get index',res, 200)
}