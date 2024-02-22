import { Gategory as TGategory } from "../api/gategory/Gategory";

export const GATEGORY_TITLE_FIELD = "name";

export const GategoryTitle = (record: TGategory): string => {
  return record.name?.toString() || String(record.id);
};
