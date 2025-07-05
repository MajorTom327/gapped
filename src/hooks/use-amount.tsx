import { useQueryState } from "nuqs";

import { createParser } from 'nuqs'
import { AmountRegex } from "~/const";
 
const bigNumberParser = createParser({
  parse(queryValue) {
    const isValid = AmountRegex.test(queryValue)
    
    if (!isValid) return null
    return queryValue
  },
  serialize(value) {
    return value
  }
})

export const useAmount = () => {
    return useQueryState(
    "amount",
    bigNumberParser.withDefault("0.0001"),
  );
}