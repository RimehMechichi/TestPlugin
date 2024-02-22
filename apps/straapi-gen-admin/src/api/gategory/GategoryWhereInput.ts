import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type GategoryWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
};
