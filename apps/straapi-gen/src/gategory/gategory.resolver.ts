import * as graphql from "@nestjs/graphql";
import { GategoryResolverBase } from "./base/gategory.resolver.base";
import { Gategory } from "./base/Gategory";
import { GategoryService } from "./gategory.service";

@graphql.Resolver(() => Gategory)
export class GategoryResolver extends GategoryResolverBase {
  constructor(protected readonly service: GategoryService) {
    super(service);
  }
}
