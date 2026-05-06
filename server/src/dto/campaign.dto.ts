import { Platform, CampaignStatus } from "../generated/prisma";

export interface CampaignPlatformPayload {
  platform: Platform;
  searchQuery?: string;
  searchFilters?: string;
  priority?: number;
}

export interface CreateCampaignReq {
  name: string;
  niche: string;
  icp: string;
  goal?: string;
  platforms: CampaignPlatformPayload[];
}

export interface UpdateCampaignReq {
  name?: string;
  niche?: string;
  icp?: string;
  goal?: string;
}

export interface UpdatePlatformReq {
  searchQuery?: string;
  searchFilters?: string;
  priority?: number;
  isEnabled?: boolean;
}
