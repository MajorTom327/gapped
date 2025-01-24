import { URLSearchParamsInit, useSearchParams } from "react-router-dom";
import { ZodSchema } from "zod";

export const useParsedSearchParams = (
  schema: ZodSchema,
  defaultValues?: URLSearchParamsInit
) => {
  const [params, setParams] = useSearchParams(defaultValues);

  const input = Object.fromEntries(params.entries());
  const parsedValue = schema.safeParse(input);
  if (!parsedValue.success) {
    console.warn(`Invalid search params: ${parsedValue.error}`);
  }

  const value = parsedValue?.data ?? defaultValues;

  const setValue = (key: string, value: string) => {
    setParams(
      (params) => {
        params.set(key, value);
        return params;
      },
      {
        replace: true,
        flushSync: true,
        preventScrollReset: true,
      }
    );
  };

  return [value, setValue] as const;
};
