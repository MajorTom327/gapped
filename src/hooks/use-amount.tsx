import { parseAsString, useQueryState } from "nuqs";

export const useAmount = () => {
  return useQueryState("amount", parseAsString.withDefault("0.001"));
};
