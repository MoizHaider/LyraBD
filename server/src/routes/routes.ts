/* tslint:disable */
/* eslint-disable */
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import type { TsoaRoute } from "@tsoa/runtime";
import { fetchMiddlewares, ExpressTemplateService } from "@tsoa/runtime";
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { TestController } from "./../controllers/test";
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { CampaignController } from "./../controllers/campaign.controller";
import type {
  Request as ExRequest,
  Response as ExResponse,
  RequestHandler,
  Router,
} from "express";

// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

const models: TsoaRoute.Models = {
  "_36_Enums.Platform": {
    dataType: "refAlias",
    type: {
      dataType: "union",
      subSchemas: [
        { dataType: "enum", enums: ["LINKEDIN"] },
        { dataType: "enum", enums: ["TWITTER"] },
        { dataType: "enum", enums: ["REDDIT"] },
        { dataType: "enum", enums: ["INSTAGRAM"] },
        { dataType: "enum", enums: ["FACEBOOK"] },
        { dataType: "enum", enums: ["PRODUCTHUNT"] },
        { dataType: "enum", enums: ["GITHUB"] },
        { dataType: "enum", enums: ["INDIEGOGO"] },
        { dataType: "enum", enums: ["ANGELIST"] },
        { dataType: "enum", enums: ["CUSTOM"] },
      ],
      validators: {},
    },
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  "_36_Enums.CampaignStatus": {
    dataType: "refAlias",
    type: {
      dataType: "union",
      subSchemas: [
        { dataType: "enum", enums: ["ACTIVE"] },
        { dataType: "enum", enums: ["PAUSED"] },
        { dataType: "enum", enums: ["ARCHIVED"] },
      ],
      validators: {},
    },
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  Platform: {
    dataType: "refAlias",
    type: { ref: "_36_Enums.Platform", validators: {} },
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  CampaignPlatformPayload: {
    dataType: "refObject",
    properties: {
      platform: { ref: "Platform", required: true },
      searchQuery: { dataType: "string" },
      searchFilters: { dataType: "string" },
      priority: { dataType: "double" },
    },
    additionalProperties: false,
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  CreateCampaignReq: {
    dataType: "refObject",
    properties: {
      name: { dataType: "string", required: true },
      niche: { dataType: "string", required: true },
      icp: { dataType: "string", required: true },
      goal: { dataType: "string" },
      platforms: {
        dataType: "array",
        array: { dataType: "refObject", ref: "CampaignPlatformPayload" },
        required: true,
      },
    },
    additionalProperties: false,
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  UpdateCampaignReq: {
    dataType: "refObject",
    properties: {
      name: { dataType: "string" },
      niche: { dataType: "string" },
      icp: { dataType: "string" },
      goal: { dataType: "string" },
    },
    additionalProperties: false,
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  UpdatePlatformReq: {
    dataType: "refObject",
    properties: {
      searchQuery: { dataType: "string" },
      searchFilters: { dataType: "string" },
      priority: { dataType: "double" },
      isEnabled: { dataType: "boolean" },
    },
    additionalProperties: false,
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
};
const templateService = new ExpressTemplateService(models, {
  noImplicitAdditionalProperties: "throw-on-extras",
  bodyCoercion: true,
});

// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

export function RegisterRoutes(app: Router) {
  // ###########################################################################################################
  //  NOTE: If you do not see routes for all of your controllers in this file, then you might not have informed tsoa of where to look
  //      Please look into the "controllerPathGlobs" config option described in the readme: https://github.com/lukeautry/tsoa
  // ###########################################################################################################

  const argsTestController_testApi: Record<string, TsoaRoute.ParameterSchema> =
    {};
  app.get(
    "/api/test/api-test",
    ...fetchMiddlewares<RequestHandler>(TestController),
    ...fetchMiddlewares<RequestHandler>(TestController.prototype.testApi),

    async function TestController_testApi(
      request: ExRequest,
      response: ExResponse,
      next: any
    ) {
      // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

      let validatedArgs: any[] = [];
      try {
        validatedArgs = templateService.getValidatedArgs({
          args: argsTestController_testApi,
          request,
          response,
        });

        const controller = new TestController();

        await templateService.apiHandler({
          methodName: "testApi",
          controller,
          response,
          next,
          validatedArgs,
          successStatus: undefined,
        });
      } catch (err) {
        return next(err);
      }
    }
  );
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  const argsCampaignController_createCampaign: Record<
    string,
    TsoaRoute.ParameterSchema
  > = {
    requestBody: {
      in: "body",
      name: "requestBody",
      required: true,
      ref: "CreateCampaignReq",
    },
  };
  app.post(
    "/api/campaigns",
    ...fetchMiddlewares<RequestHandler>(CampaignController),
    ...fetchMiddlewares<RequestHandler>(
      CampaignController.prototype.createCampaign
    ),

    async function CampaignController_createCampaign(
      request: ExRequest,
      response: ExResponse,
      next: any
    ) {
      // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

      let validatedArgs: any[] = [];
      try {
        validatedArgs = templateService.getValidatedArgs({
          args: argsCampaignController_createCampaign,
          request,
          response,
        });

        const controller = new CampaignController();

        await templateService.apiHandler({
          methodName: "createCampaign",
          controller,
          response,
          next,
          validatedArgs,
          successStatus: undefined,
        });
      } catch (err) {
        return next(err);
      }
    }
  );
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  const argsCampaignController_listCampaigns: Record<
    string,
    TsoaRoute.ParameterSchema
  > = {};
  app.get(
    "/api/campaigns",
    ...fetchMiddlewares<RequestHandler>(CampaignController),
    ...fetchMiddlewares<RequestHandler>(
      CampaignController.prototype.listCampaigns
    ),

    async function CampaignController_listCampaigns(
      request: ExRequest,
      response: ExResponse,
      next: any
    ) {
      // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

      let validatedArgs: any[] = [];
      try {
        validatedArgs = templateService.getValidatedArgs({
          args: argsCampaignController_listCampaigns,
          request,
          response,
        });

        const controller = new CampaignController();

        await templateService.apiHandler({
          methodName: "listCampaigns",
          controller,
          response,
          next,
          validatedArgs,
          successStatus: undefined,
        });
      } catch (err) {
        return next(err);
      }
    }
  );
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  const argsCampaignController_getCampaignById: Record<
    string,
    TsoaRoute.ParameterSchema
  > = {
    id: { in: "path", name: "id", required: true, dataType: "string" },
  };
  app.get(
    "/api/campaigns/:id",
    ...fetchMiddlewares<RequestHandler>(CampaignController),
    ...fetchMiddlewares<RequestHandler>(
      CampaignController.prototype.getCampaignById
    ),

    async function CampaignController_getCampaignById(
      request: ExRequest,
      response: ExResponse,
      next: any
    ) {
      // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

      let validatedArgs: any[] = [];
      try {
        validatedArgs = templateService.getValidatedArgs({
          args: argsCampaignController_getCampaignById,
          request,
          response,
        });

        const controller = new CampaignController();

        await templateService.apiHandler({
          methodName: "getCampaignById",
          controller,
          response,
          next,
          validatedArgs,
          successStatus: undefined,
        });
      } catch (err) {
        return next(err);
      }
    }
  );
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  const argsCampaignController_updateCampaign: Record<
    string,
    TsoaRoute.ParameterSchema
  > = {
    id: { in: "path", name: "id", required: true, dataType: "string" },
    requestBody: {
      in: "body",
      name: "requestBody",
      required: true,
      ref: "UpdateCampaignReq",
    },
  };
  app.patch(
    "/api/campaigns/:id",
    ...fetchMiddlewares<RequestHandler>(CampaignController),
    ...fetchMiddlewares<RequestHandler>(
      CampaignController.prototype.updateCampaign
    ),

    async function CampaignController_updateCampaign(
      request: ExRequest,
      response: ExResponse,
      next: any
    ) {
      // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

      let validatedArgs: any[] = [];
      try {
        validatedArgs = templateService.getValidatedArgs({
          args: argsCampaignController_updateCampaign,
          request,
          response,
        });

        const controller = new CampaignController();

        await templateService.apiHandler({
          methodName: "updateCampaign",
          controller,
          response,
          next,
          validatedArgs,
          successStatus: undefined,
        });
      } catch (err) {
        return next(err);
      }
    }
  );
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  const argsCampaignController_archiveCampaign: Record<
    string,
    TsoaRoute.ParameterSchema
  > = {
    id: { in: "path", name: "id", required: true, dataType: "string" },
  };
  app.patch(
    "/api/campaigns/:id/archive",
    ...fetchMiddlewares<RequestHandler>(CampaignController),
    ...fetchMiddlewares<RequestHandler>(
      CampaignController.prototype.archiveCampaign
    ),

    async function CampaignController_archiveCampaign(
      request: ExRequest,
      response: ExResponse,
      next: any
    ) {
      // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

      let validatedArgs: any[] = [];
      try {
        validatedArgs = templateService.getValidatedArgs({
          args: argsCampaignController_archiveCampaign,
          request,
          response,
        });

        const controller = new CampaignController();

        await templateService.apiHandler({
          methodName: "archiveCampaign",
          controller,
          response,
          next,
          validatedArgs,
          successStatus: undefined,
        });
      } catch (err) {
        return next(err);
      }
    }
  );
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  const argsCampaignController_addPlatformToCampaign: Record<
    string,
    TsoaRoute.ParameterSchema
  > = {
    id: { in: "path", name: "id", required: true, dataType: "string" },
    requestBody: {
      in: "body",
      name: "requestBody",
      required: true,
      ref: "CampaignPlatformPayload",
    },
  };
  app.post(
    "/api/campaigns/:id/platforms",
    ...fetchMiddlewares<RequestHandler>(CampaignController),
    ...fetchMiddlewares<RequestHandler>(
      CampaignController.prototype.addPlatformToCampaign
    ),

    async function CampaignController_addPlatformToCampaign(
      request: ExRequest,
      response: ExResponse,
      next: any
    ) {
      // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

      let validatedArgs: any[] = [];
      try {
        validatedArgs = templateService.getValidatedArgs({
          args: argsCampaignController_addPlatformToCampaign,
          request,
          response,
        });

        const controller = new CampaignController();

        await templateService.apiHandler({
          methodName: "addPlatformToCampaign",
          controller,
          response,
          next,
          validatedArgs,
          successStatus: undefined,
        });
      } catch (err) {
        return next(err);
      }
    }
  );
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  const argsCampaignController_updatePlatform: Record<
    string,
    TsoaRoute.ParameterSchema
  > = {
    platformId: {
      in: "path",
      name: "platformId",
      required: true,
      dataType: "string",
    },
    requestBody: {
      in: "body",
      name: "requestBody",
      required: true,
      ref: "UpdatePlatformReq",
    },
  };
  app.patch(
    "/api/campaigns/platforms/:platformId",
    ...fetchMiddlewares<RequestHandler>(CampaignController),
    ...fetchMiddlewares<RequestHandler>(
      CampaignController.prototype.updatePlatform
    ),

    async function CampaignController_updatePlatform(
      request: ExRequest,
      response: ExResponse,
      next: any
    ) {
      // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

      let validatedArgs: any[] = [];
      try {
        validatedArgs = templateService.getValidatedArgs({
          args: argsCampaignController_updatePlatform,
          request,
          response,
        });

        const controller = new CampaignController();

        await templateService.apiHandler({
          methodName: "updatePlatform",
          controller,
          response,
          next,
          validatedArgs,
          successStatus: undefined,
        });
      } catch (err) {
        return next(err);
      }
    }
  );
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  const argsCampaignController_removePlatform: Record<
    string,
    TsoaRoute.ParameterSchema
  > = {
    platformId: {
      in: "path",
      name: "platformId",
      required: true,
      dataType: "string",
    },
  };
  app.delete(
    "/api/campaigns/platforms/:platformId",
    ...fetchMiddlewares<RequestHandler>(CampaignController),
    ...fetchMiddlewares<RequestHandler>(
      CampaignController.prototype.removePlatform
    ),

    async function CampaignController_removePlatform(
      request: ExRequest,
      response: ExResponse,
      next: any
    ) {
      // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

      let validatedArgs: any[] = [];
      try {
        validatedArgs = templateService.getValidatedArgs({
          args: argsCampaignController_removePlatform,
          request,
          response,
        });

        const controller = new CampaignController();

        await templateService.apiHandler({
          methodName: "removePlatform",
          controller,
          response,
          next,
          validatedArgs,
          successStatus: undefined,
        });
      } catch (err) {
        return next(err);
      }
    }
  );
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
}

// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
