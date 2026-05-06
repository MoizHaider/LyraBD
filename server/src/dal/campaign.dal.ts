import { prisma } from "../lib/prisma";
import {
  CreateCampaignReq,
  UpdateCampaignReq,
  CampaignPlatformPayload,
  UpdatePlatformReq,
} from "../dto/campaign.dto";

export class CampaignDal {
  public async createCampaign(payload: CreateCampaignReq) {
    // Campaign creation should be a single Prisma transaction
    return await prisma.$transaction(async (tx) => {
      const campaign = await tx.campaign.create({
        data: {
          name: payload.name,
          niche: payload.niche,
          icp: payload.icp,
          goal: payload.goal,
          platforms: {
            create: payload.platforms.map((p) => ({
              platform: p.platform,
              searchQuery: p.searchQuery,
              searchFilters: p.searchFilters,
              priority: p.priority ?? 1,
            })),
          },
        },
        include: {
          platforms: true,
        },
      });
      return campaign;
    });
  }

  public async listCampaigns() {
    return await prisma.campaign.findMany({
      where: {
        status: {
          not: "ARCHIVED",
        },
      },
      include: {
        platforms: true,
        leads: {
          select: { id: true }, // lightweight for counting
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  }

  public async getCampaignById(id: string) {
    return await prisma.campaign.findUnique({
      where: { id },
      include: {
        platforms: true,
      },
    });
  }

  public async updateCampaign(id: string, payload: UpdateCampaignReq) {
    return await prisma.campaign.update({
      where: { id },
      data: payload,
    });
  }

  public async archiveCampaign(id: string) {
    return await prisma.campaign.update({
      where: { id },
      data: { status: "ARCHIVED" },
    });
  }

  public async addPlatformToCampaign(campaignId: string, payload: CampaignPlatformPayload) {
    return await prisma.campaignPlatform.create({
      data: {
        campaignId,
        platform: payload.platform,
        searchQuery: payload.searchQuery,
        searchFilters: payload.searchFilters,
        priority: payload.priority ?? 1,
      },
    });
  }

  public async updatePlatform(platformId: string, payload: UpdatePlatformReq) {
    return await prisma.campaignPlatform.update({
      where: { id: platformId },
      data: payload,
    });
  }

  public async removePlatform(platformId: string) {
    return await prisma.campaignPlatform.delete({
      where: { id: platformId },
    });
  }
}

export const campaignDal = new CampaignDal();
