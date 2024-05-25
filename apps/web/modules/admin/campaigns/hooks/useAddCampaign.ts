import { ApiService } from "@/lib/api";
import { API_CAMPAIGNS } from "@/lib/api-routes";
import { useMutation } from "@tanstack/react-query";

export async function addCampaign(props: FormData) {
  const apiService = new ApiService();
  return await apiService.post(API_CAMPAIGNS, props, true, true);
}

function useAddCampaign() {
  const query = useMutation({
    mutationFn: (props: FormData) => addCampaign(props),
  });
  return query;
}

export default useAddCampaign;
