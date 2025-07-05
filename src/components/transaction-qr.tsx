import { QRCodeSVG } from "qrcode.react";
import { isEmpty } from "rambda";
import { useMemo, useState } from "react";
import { z } from "zod";

import { ethers } from "ethers";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "~/components/ui/tooltip.tsx";

const transactionQRCodeParamsSchema = z.object({
  recipient: z.string().min(1).default("0xE4a39B45f373FB8ae5D8932AC299Ab5206Cc718D"),
  amount: z
    .string()
    .optional()
    .default("0")
    .transform((val) =>
      ethers.utils.parseUnits(val.length > 0 ? val : "0", "ether")
    ),
  label: z.string().optional(),
  message: z.string().optional(),
});

type TransactionQRCodeParams = Omit<z.infer<typeof transactionQRCodeParamsSchema>, 'amount'> & {
  amount: string
}

export const TransactionQr: React.FC<TransactionQRCodeParams> = ({
  ...props
}) => {

  const value = useMemo(() => {
    const validated = transactionQRCodeParamsSchema.safeParse(props);

    if (!validated.success) return "";

    const data = validated.data;
    const sp = new URLSearchParams();

    sp.append("value", (data.amount ?? 0).toString());
    if (data.label) sp.append("label", data.label);
    if (data.message) sp.append("message", data.message);

    return `ethereum:${data.recipient}?${sp.toString()}`;
  }, [props]);
  const [enlarged, setEnlarged] = useState(false);

  const onClick = () => {
    setEnlarged(!enlarged);
  };

  return (
    <>
      {isEmpty(value) ? (
        <div className="text-center text-xl font-semibold text-muted-foreground">
          Enter a recipient to generate your QR Code
        </div>
      ) : (
        <>
          <div className="flex flex-col items-center justify-center gap-2">
            <Tooltip>
              <TooltipTrigger asChild>
                <button
                  className={
                    "w-full h-full flex items-center justify-center p-2"
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
        </>
      )}
    </>
  );
};
