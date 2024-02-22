import { Module } from "@nestjs/common";
import { GategoryModuleBase } from "./base/gategory.module.base";
import { GategoryService } from "./gategory.service";
import { GategoryController } from "./gategory.controller";
import { GategoryResolver } from "./gategory.resolver";

@Module({
  imports: [GategoryModuleBase],
  controllers: [GategoryController],
  providers: [GategoryService, GategoryResolver],
  exports: [GategoryService],
})
export class GategoryModule {}
