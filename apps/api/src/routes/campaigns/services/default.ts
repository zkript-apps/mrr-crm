import { UNKNOWN_ERROR_OCCURRED } from "@/common/constants";
import { ResponseService } from "@/common/services/response";
import campaign from "@/models/campaign";
import {
  T_Add_Campaign,
  T_Payments,
  T_Update_Campaign,
  T_Update_Lead,
  Z_Add_Campaign,
  Z_Leads,
  Z_Update_Campaign,
} from "@repo/contract";
import { Request, Response } from "express";

const response = new ResponseService();
export const getAllCampaigns = async (req: Request, res: Response) => {
  try {
    const getAllcampains = await campaign.find({ deletedAt: null });
    const countAllCampaigns = await campaign
      .find({ deletedAt: null })
      .countDocuments();
    if (!getAllCampaigns) {
      return res.json(response.success({ message: "No campaign found" }));
    }
    res.json(
      response.success({
        items: getAllcampains,
        allItemCount: countAllCampaigns,
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

export const getCampaign = async (req: Request, res: Response) => {
  const campaignId = req.params.campaignId;
  try {
    const getCampaignById = await campaign.findOne({
      _id: campaignId,
      deletedAt: null,
    });
    res.json(response.success({ item: getCampaignById }));
  } catch (err: any) {
    return res.json(
      response.error({
        message: err.message ? err.message : UNKNOWN_ERROR_OCCURRED,
      })
    );
  }
};

export const addCampain = async (req: Request, res: Response) => {
  const { title, description, leadUniqueKey, patterns, leads }: T_Add_Campaign =
    req.body;
  const isValidInput = Z_Add_Campaign.safeParse(req.body);
  if (isValidInput.success) {
    try {
      const newCampaign = new campaign({
        title: title,
        description: description,
        leadUniqueKey: leadUniqueKey,
        patterns: patterns,
        leads: leads,
        createdAt: Date.now(),
        updatedAt: null,
        deletedAt: null,
      });

      const createCampaign = await newCampaign.save();
      res.json(
        response.success({
          item: createCampaign,
          message: "Campaign successfully added",
        })
      );
    } catch (err: any) {
      return res.json(
        response.error({
          message: err.message ? err.message : UNKNOWN_ERROR_OCCURRED,
        })
      );
    }
  } else {
    return res.json(
      response.error({ message: JSON.parse(isValidInput.error.message) })
    );
  }
};

export const updateCampaign = async (req: Request, res: Response) => {
  const campaignId = req.params.campaignId;
  const { title, description }: T_Update_Campaign = req.body;
  const isValidInput = Z_Update_Campaign.safeParse(req.body);
  if (isValidInput.success) {
    try {
      const getCampaign = campaign.findOne({
        _id: campaignId,
        deletedAt: null,
      });
      if (!getCampaign) {
        return res.json(
          response.error({ message: "This campain not exists on our system" })
        );
      }
      const editCampaign = await campaign.findByIdAndUpdate(
        campaignId,
        {
          $set: req.body,
          updatedAt: Date.now(),
        },
        {
          new: true,
        }
      );
      res.json(
        response.success({
          item: editCampaign,
          message: "Campaign successfully updated",
        })
      );
    } catch (err: any) {
      return res.json(
        response.error({
          message: err.message ? err.message : UNKNOWN_ERROR_OCCURRED,
        })
      );
    }
  } else {
    return res.json(
      response.error({ message: JSON.parse(isValidInput.error.message) })
    );
  }
};

export const deleteCampaign = async (req: Request, res: Response) => {
  const campaignId = req.params.campaignId;
  try {
    const getCampaign = await campaign.findOne({
      _id: campaignId,
      deletedAt: null,
    });
    if (!getCampaign) {
      return res.json(
        response.error({ message: "Campaign not exist or already deleted" })
      );
    }
    const deleteCampaignById = await campaign.findByIdAndUpdate(campaignId, {
      $set: {
        deletedAt: Date.now(),
      },
    });
    res.json(
      response.success({
        item: deleteCampaignById,
        message: "Campaign successfully deleted",
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

export const getCampaignNameDesc = async (req: Request, res: Response) => {
  const campaignId = req.params.campaignId;
  try {
    const getNameAndDesc = await campaign.findOne({
      _id: campaignId,
      deletedAt: null,
    });
    if (!getNameAndDesc) {
      res.json(response.error({ message: "No campaign data found" }));
    }
    const nameAndDesciption = {
      title: getNameAndDesc?.title,
      description: getNameAndDesc?.description,
    };
    res.json(response.success({ item: nameAndDesciption }));
  } catch (err: any) {
    return res.json(
      response.error({
        message: err.message ? err.message : UNKNOWN_ERROR_OCCURRED,
      })
    );
  }
};

export const getCampaignPattern = async (req: Request, res: Response) => {
  const campaignId = req.params.campaignId;
  try {
    const getCampain = await campaign.findOne({
      _id: campaignId,
      deletedAt: null,
    });
    if (!getCampain) {
      res.json(response.error({ message: "No campaign data found" }));
    }
    const pattern = getCampain?.patterns;
    res.json(
      response.success({ items: pattern, allItemCount: pattern?.length })
    );
  } catch (err: any) {
    return res.json(
      response.error({
        message: err.message ? err.message : UNKNOWN_ERROR_OCCURRED,
      })
    );
  }
};

export const getCampaignLeadById = async (req: Request, res: Response) => {
  const campaignId = req.params.campaignId;
  const uniqueId = req.params.uniqueId;
  try {
    const getCampain = await campaign.findOne({
      _id: campaignId,
      deletedAt: null,
    });
    if (!getCampain) {
      res.json(response.error({ message: "No campaign data found" }));
    }
    const leadUniqueId = getCampain?.leadUniqueKey;
    const leads = getCampain?.leads;
    const result = leads?.find(
      (lead) => lead.values[leadUniqueId as string] === uniqueId
    );
    if (!result) {
      return res.json(response.error({ message: "No records found" }));
    }
    res.json(response.success({ item: result }));
  } catch (err: any) {
    return res.json(
      response.error({
        message: err.message ? err.message : UNKNOWN_ERROR_OCCURRED,
      })
    );
  }
};

export const updateCampaignLeadById = async (req: Request, res: Response) => {
  const files = req.files
  const campaignId = req.params.campaignId;
  const uniqueId = req.params.uniqueId;
  const { values, payments, remarks }: T_Update_Lead = req.body;
  const isValidInput = Z_Leads.safeParse(req.body);
  if (isValidInput.success) {
    try {
      const getCampaign = await campaign.findOne({ _id: campaignId });
      if (!getCampaign) {
        return res.json(response.error({ message: "Campaign not found" }));
      }
      const leadUniqueId = getCampaign.leadUniqueKey;
      const leads = getCampaign.leads;
      const leadIndex = leads.findIndex(
        (lead) => lead.values[leadUniqueId as string] === uniqueId
      );
      if (leadIndex === -1) {
        return res.json(response.error({ message: "Record not found" }));
      }
      const lead = leads[leadIndex] as any;
      lead.values = values as any;
      lead.payments = payments as any;
      lead.remarks = remarks as any;

      // Save the updated lead back to the database
      getCampaign.leads[leadIndex] = lead;
      await getCampaign.save();
      res.json(
        response.success({
          item: {
            values: lead.values,
            payments: lead.payments,
            remarks: lead.remarks,
            files:files
          },
          message: "Record successfully updated",
        })
      );
    } catch (err: any) {
      return res.json(
        response.error({
          message: err.message ? err.message : UNKNOWN_ERROR_OCCURRED,
        })
      );
    }
  } else {
    return res.json(response.error(JSON.parse(isValidInput.error.message)));
  }
};
