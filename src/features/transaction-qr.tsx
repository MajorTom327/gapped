import { parseUnits } from "ethers/utils";
import { QRCodeSVG } from "qrcode.react";
import { useState } from "react";
import { z } from "zod";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "~/components/ui/tooltip.tsx";
import { BASE_ADDRESS } from "~/lib/constants";

const transactionQRCodeParamsSchema = z.object({
  recipient: z.string().min(1).default(BASE_ADDRESS),
  amount: z
    .string()
    .optional()
    .default("0")
    .transform((val) => parseUnits(val.length > 0 ? val : "0", "ether")),
  label: z.string().optional(),
  message: z.string().optional(),
});

type TransactionQRCodeParams = Omit<
  z.infer<typeof transactionQRCodeParamsSchema>,
  "amount"
> & {
  amount: string;
};

const useQrValue = (props: TransactionQRCodeParams) => {
  const validated = transactionQRCodeParamsSchema.safeParse(props);

  if (!validated.success) return "";

  const data = validated.data;
  const sp = new URLSearchParams();

  sp.append("value", (data.amount ?? 0).toString());
  if (data.label) sp.append("label", data.label);
  if (data.message) sp.append("message", data.message);

  return `ethereum:${data.recipient}?${sp.toString()}`;
};

export const TransactionQr = (props: TransactionQRCodeParams) => {
  const value = useQrValue(props);
  const [enlarged, setEnlarged] = useState(false);

  const onClick = () => {
    setEnlarged(!enlarged);
  };

  return (
    <>
      {value.length < 1 ? (
        <div className="text-center font-semibold text-muted-foreground text-xl">
          Enter a recipient to generate your QR Code
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center gap-2">
          <Tooltip>
            <TooltipTrigger asChild>
              <button
                type="button"
                className={
                  "flex h-full w-full items-center justify-center rounded-2xl p-2 outline-none ring-primary focus:ring-4"
                }
                onClick={onClick}
              >
                <QRCodeSVG
                  size={enlarged ? 512 : 256}
                  value={value}
                  level={"H"}
                  marginSize={4}
                />
              </button>
            </TooltipTrigger>
            <TooltipContent>
              <p>{value}</p>
            </TooltipContent>
          </Tooltip>
        </div>
      )}
    </>
  );
};
