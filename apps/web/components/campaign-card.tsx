import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import EditCampaignSheet from "@/modules/admin/campaigns/edit-campaign-sheet"
// EACH CAMPAIGN HAS ITS OWN PATTERN
export default function CampaignCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">Lazada PRT</CardTitle>
        <CardDescription>Some description for the campaign.</CardDescription>
      </CardHeader>
      <CardFooter className="flex justify-between">
        <Button size="sm">Select</Button>
        <EditCampaignSheet/>
      </CardFooter>
    </Card>
  )
}
