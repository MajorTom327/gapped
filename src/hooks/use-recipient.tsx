import { useQueryState } from "nuqs";
import { BASE_ADDRESS } from "~/lib/constants";

export const useRecipient = () => {
    return useQueryState("recipient", { defaultValue: BASE_ADDRESS });
}
