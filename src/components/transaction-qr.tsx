import {QRCodeSVG} from "qrcode.react";
import {useMemo} from "react";
import {z} from "zod";
import {isEmpty} from "rambda";

import {ethers} from "ethers"

export const transactionQRCodeParamsSchema = z.object({
  recipient: z.string().min(1),
  amount: z.string().regex(/^[0-9]+(.[0-9]+)?$/).transform((v) => ethers.utils.parseUnits(v, "ether")),
  label: z.string().min(1),
  message: z.string().optional()
})

type TransactionQRCodeParams = z.infer<typeof transactionQRCodeParamsSchema>

export const TransactionQr: React.FC<TransactionQRCodeParams> = (props) => {
  const value = useMemo(() => {
    const validated = transactionQRCodeParamsSchema.safeParse(props);
    if (!validated.success) return '';

    const data = validated.data;
    const sp = new URLSearchParams();

    sp.append("value", data.amount.toString());
    sp.append("label", data.label);
    if (data.message) sp.append("message", data.message);

    return `ethereum:${data.recipient}?${sp.toString()}`;
  }, [props]);


  return (<>
    {/*{value}*/}
    {isEmpty(value) ? <>Enter valid data to generate your QR Code</> :
      <>
        <div className="flex flex-col items-center justify-center gap-2">

          <QRCodeSVG
            size={256}
            value={value}
            level={"H"}
            marginSize={4}
          />
        </div>
      </>
    }
  </>)
}