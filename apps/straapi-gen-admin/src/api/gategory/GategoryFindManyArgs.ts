import { GategoryWhereInput } from "./GategoryWhereInput";
import { GategoryOrderByInput } from "./GategoryOrderByInput";

export type GategoryFindManyArgs = {
  where?: GategoryWhereInput;
  orderBy?: Array<GategoryOrderByInput>;
  skip?: number;
  take?: number;
};
