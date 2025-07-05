import { useQueryState } from "nuqs";

export const useMessage = () => {
    return useQueryState("message", { defaultValue: "" });
}