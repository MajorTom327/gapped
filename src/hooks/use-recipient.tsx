import { useQueryState } from "nuqs";

export const useRecipient = () => {
    return useQueryState("recipient", { defaultValue: "0xE4a39B45f373FB8ae5D8932AC299Ab5206Cc718D" });
}