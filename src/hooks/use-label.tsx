import { useQueryState } from "nuqs";

export const useLabel = () => {
    return useQueryState("label", { defaultValue: "" });
}