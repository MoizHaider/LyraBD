import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Route,
  Tags,
  Body,
  Path,
  Response,
} from "tsoa";
import {
  CreateCampaignReq,
  UpdateCampaignReq,
  CampaignPlatformPayload,
  UpdatePlatformReq,
} from "../dto/campaign.dto";
import { campaignDal } from "../dal/campaign.dal";

@Route("api/campaigns")
@Tags("Campaigns")
export class CampaignController extends Controller {
  @Post("/")
  @Response(400, "Validation Failed")
  public async createCampaign(@Body() requestBody: CreateCampaignReq) {
    if (!requestBody.name || !requestBody.niche || !requestBody.icp) {
      this.setStatus(400);
      return { message: "Name, niche, and icp are required." };
    }
    if (!requestBody.platforms || requestBody.platforms.length === 0) {
      this.setStatus(400);
      return { message: "At least one platform is required." };
    }
    
    // Check for duplicate platforms
    const platformTypes = requestBody.platforms.map((p) => p.platform);
    if (new Set(platformTypes).size !== platformTypes.length) {
      this.setStatus(400);
      return { message: "Duplicate platforms are not allowed." };
    }

    try {
      return await campaignDal.createCampaign(requestBody);
    } catch (error: any) {
      this.setStatus(500);
      return { message: error.message };
    }
  }

  @Get("/")
  public async listCampaigns() {
    return await campaignDal.listCampaigns();
  }

  @Get("/{id}")
  @Response(404, "Not Found")
  public async getCampaignById(@Path() id: string) {
    const campaign = await campaignDal.getCampaignById(id);
    if (!campaign) {
      this.setStatus(404);
      return { message: "Campaign not found" };
    }
    return campaign;
  }

  @Patch("/{id}")
  public async updateCampaign(
    @Path() id: string,
    @Body() requestBody: UpdateCampaignReq
  ) {
    return await campaignDal.updateCampaign(id, requestBody);
  }

  @Patch("/{id}/archive")
  public async archiveCampaign(@Path() id: string) {
    return await campaignDal.archiveCampaign(id);
  }

  @Post("/{id}/platforms")
  public async addPlatformToCampaign(
    @Path() id: string,
    @Body() requestBody: CampaignPlatformPayload
  ) {
    return await campaignDal.addPlatformToCampaign(id, requestBody);
  }

  @Patch("/platforms/{platformId}")
  public async updatePlatform(
    @Path() platformId: string,
    @Body() requestBody: UpdatePlatformReq
  ) {
    return await campaignDal.updatePlatform(platformId, requestBody);
  }

  @Delete("/platforms/{platformId}")
  public async removePlatform(@Path() platformId: string) {
    return await campaignDal.removePlatform(platformId);
  }
}
