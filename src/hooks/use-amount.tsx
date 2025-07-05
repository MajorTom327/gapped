
import { useQueryState, parseAsString } from "nuqs";

export const useAmount = () => {

  return useQueryState(
    "amount",
    parseAsString.withDefault("0.001"),
  );
}