import { Controller, Get, Tags, Route } from "tsoa"


@Route('api/test')
@Tags('Test')
export class TestController extends Controller {
    @Get("api-test")
    public async testApi():Promise<{message:string}>{
        return {
            message: "Yes baby"
        }
    }
}