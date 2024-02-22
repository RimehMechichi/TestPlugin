import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { GategoryServiceBase } from "./base/gategory.service.base";

@Injectable()
export class GategoryService extends GategoryServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
