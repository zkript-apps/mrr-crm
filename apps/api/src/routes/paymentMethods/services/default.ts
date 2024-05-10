import { UNKNOWN_ERROR_OCCURRED } from "@/common/constants";
import { ResponseService } from "@/common/services/response";
import paymentMethods from "@/models/paymentMethods";
import { T_Add_PaymentMethod, T_Update_PaymentMethod, Z_Add_PaymentMethod, Z_Update_PaymentMethod } from "@repo/contract";
import { Request, Response } from "express";
import campaign from "@/models/campaign"
const response = new ResponseService();
export const getAllPaymentMethods = async (req: Request, res: Response) => {
  try {
    const getPaymentMethods = await paymentMethods.find({ deletedAt: null });
    const countPaymentMethods = await paymentMethods
      .find({ deletedAt: null })
      .countDocuments();
    if (countPaymentMethods === 0) {
      return res.json(
        response.success({
          items: getPaymentMethods,
          allItemCount: 0,
          message: "No payment methods instruction found",
        })
      );
    }
    res.json(
      response.success({
        items: getPaymentMethods,
        allItemCount: countPaymentMethods,
      })
    );
  } catch (err: any) {
    return res.json(
      response.error({
        message: err.message ? err.message : UNKNOWN_ERROR_OCCURRED,
      })
    );
  }
};

export const getPaymentMethodByCampaign = async (req: Request,res: Response) => {
  const campaignId = req.params.campaignId;
  try {
    const getPaymnetMethodSteps = await paymentMethods.findOne({campaign:campaignId, deletedAt:null})
    if(!getPaymnetMethodSteps){
        return res.json(response.error({message:"This campaign do not have any payment method instructions"}))
    }
    res.json(response.success({item:getPaymnetMethodSteps}))
  } catch (err:any) {
    return res.json(response.error({message:err.message ? err.message : UNKNOWN_ERROR_OCCURRED}))
  }
};

export const addPaymentMethod = async (req: Request, res: Response) => {
    const {campaignId, steps}:T_Add_PaymentMethod = req.body
    const isValidInput = Z_Add_PaymentMethod.safeParse(req.body)
    if(isValidInput.success){
    try {
      const getCampaign = await campaign.findOne({_id: campaignId, deletedAt:null})
      if(!getCampaign){
        return res.json(response.error({message:"This campaign is not exist on campaigns record"}))
      }
      const newPaymentMethodSteps = new paymentMethods({
        campaign:campaignId,
        steps:steps,
        createdAt:Date.now()
      })
      const createdPaymentMethodSteps = await newPaymentMethodSteps.save()
      res.json(response.success({item:createdPaymentMethodSteps, message:"Payment methods steps successfully created"}))
    } catch (err:any) {
      return res.json(response.error({message: err.message? err.message : UNKNOWN_ERROR_OCCURRED}))
    }
  }else{
    return res.json(response.error({message:JSON.parse(isValidInput.error.message)}))
  }
};

export const updatePaymentMethodByCampaign = async (
  req: Request,
  res: Response
) => {
  const paymentMethodId = req.params.paymentMethodId
  const campaignId = req.params.campaignId
  const {steps}:T_Update_PaymentMethod = req.body
  const isValidInput = Z_Update_PaymentMethod.safeParse(req.body)
  if(isValidInput.success){
    try {
      const getCampaign = await campaign.findOne({_id:campaignId, deletedAt:null})
      if(!getCampaign){
        return res.json(response.error({message:"Campaign not found"}))
      }
      const editPaymentMethod = await paymentMethods.findByIdAndUpdate(
       paymentMethodId,
        {
          $set:{
            campaign:campaignId,
            steps:steps,
            updatedAt: Date.now()
          }
        },{
          new:true
        }
      )
      res.json(response.success({item:editPaymentMethod, message:"Payment method instruction successfully updated"}))
    } catch (err:any) {
      return res.json(response.error({message: err.message? err.message : UNKNOWN_ERROR_OCCURRED}))
    }
  }else{
    return res.json(response.error({message:JSON.parse(isValidInput.error.message)}))
  }
};

export const deletePaymentMethodByCampaign = async (
  req: Request,
  res: Response
) => {
  const paymentMethodId = req.params.paymentMethodId
  const campaignId = req.params.campaignId
  try {
    const getPaymentMethod = await paymentMethods.findOne({_id:paymentMethodId, deletedAt:null})
    if(!getPaymentMethod){
      return res.json(response.error({message:"payment method instruction on this campaign is not found or already deleted"}))
    }
    const getCampaign = await campaign.findOne({_id: campaignId, deletedAt:null})
    if(!getCampaign){
      return res.json(response.error({message:"Campaign not found"}))
    }
    const deletePaymentMethod = await paymentMethods.findByIdAndDelete(
      paymentMethodId
    )
    res.json(response.success({item:deletePaymentMethod, message:"Payment method instruction successfully removed"}))
  } catch (err:any) {
    return res.json(response.error({message: err.message? err.message : UNKNOWN_ERROR_OCCURRED}))
  }
};
