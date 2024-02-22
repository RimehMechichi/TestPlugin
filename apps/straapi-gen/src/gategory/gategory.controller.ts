import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { GategoryService } from "./gategory.service";
import { GategoryControllerBase } from "./base/gategory.controller.base";

@swagger.ApiTags("gategories")
@common.Controller("gategories")
export class GategoryController extends GategoryControllerBase {
  constructor(protected readonly service: GategoryService) {
    super(service);
  }
}
