import { create } from "zustand"

type T_Campaign_Data = {
  campaignData: {
    campaignId: string | null,
    name: string | null,
    date: string | null,
  } | null
}

type T_Campaign_Data_Action = {
  update: (session: T_Campaign_Data) => void
}

const useCampaignDataStore = create<T_Campaign_Data & T_Campaign_Data_Action>((set) => ({
  campaignData: null,
  update: (session: T_Campaign_Data) => set(() => ({ ...session })),
}))

export default useCampaignDataStore
