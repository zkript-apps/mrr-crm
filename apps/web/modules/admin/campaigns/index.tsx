import React from 'react';
import { Separator } from "@/components/ui/separator";
import CampaignCard from '@/components/campaign-card';
import EditCampaignSheet from './edit-campaign-sheet';
import AddCampaignSheet from './add-campaign-sheet';
import { MasterPasswordDialog } from '@/components/master-password-dialog';

const AdminCampaigns = () => {
  const isAdmin = true; 

  return (
    <div className="space-y-6 p-10 pb-16">
      <div className="space-y-0.5 flex w-full">
        <div>
        <h2 className="text-2xl font-bold tracking-tight">Campaigns</h2>
        <p className="text-muted-foreground">
          Select your current campaign to retrieve the right data.
        </p>
        </div>
        <div className='flex items-center flex-grow justify-end space-x-4'>
        <MasterPasswordDialog/>  <AddCampaignSheet/>
        </div>
      </div>
      <Separator className="my-6" />
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
        <CampaignCard isAdmin={isAdmin} />
        <CampaignCard isAdmin={isAdmin} />
        <CampaignCard isAdmin={isAdmin} />
        <CampaignCard isAdmin={isAdmin} />
        <CampaignCard isAdmin={isAdmin} />
        <CampaignCard isAdmin={isAdmin} />
        <CampaignCard isAdmin={isAdmin} />
        <CampaignCard isAdmin={isAdmin} />
      </div>
    </div>
  )
}

export default AdminCampaigns;
