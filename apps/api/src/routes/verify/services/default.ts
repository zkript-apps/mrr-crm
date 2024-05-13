import { ResponseService } from "@/common/services/response";
import { Request, Response } from "express";

const response = new ResponseService()
const defaultCode = "11222333344444"
export const verifyPassCode  = async(req:Request, res:Response)=>{
const passCode = req.body.passCode
if(passCode!==defaultCode){
    return res.json(response.error({message:"Incorrect passcode"}))
}
res.json(true)
}