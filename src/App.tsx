import { ChangeEvent } from "react";
import { z } from "zod";
import { Footer } from "~/components/footer.tsx";
import { TransactionQr } from "~/components/transaction-qr.tsx";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "~/components/ui/card.tsx";
import { Input } from "~/components/ui/input.tsx";
import { useParsedSearchParams } from "~/hooks/useParsedSearchParams.tsx";
import { Label } from "./components/ui/label";
import { AmountRegex } from "./const";
import { useRecipient } from "./hooks/use-recipient";
import { useAmount } from "./hooks/use-amount";
import { useMessage } from "./hooks/use-message";
import { useLabel } from "./hooks/use-label";

const searchParamsSchema = z.object({
  recipient: z.string().min(1).default("0xE4a39B45f373FB8ae5D8932AC299Ab5206Cc718D"),
  amount: z
    .string()
    .optional()
    .default("0")
    .transform((val) => (val.length > 0 ? val : "0"))
    .refine((val) => val === "0" || AmountRegex.test(val), {
      message: "Invalid amount format t",
    }),
  label: z.string().optional(),
  message: z.string().optional(),
});

function App() {
  const [recipient, setRecipient] = useRecipient();
  const [amount, setAmount] = useAmount();
  const [label, setLabel] = useLabel();
  const [message, setMessage] = useMessage()
  

  return (
    <>
      <div className="flex flex-col h-full min-h-screen">
        <div className="grow grid sm:grid-cols-2 md:grid-cols-4 gap-2 p-4 ">
          <Card>
            <CardHeader>
              <CardTitle>Configure your QR Code</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center gap-2">
                <div className="grid w-full max-w-sm items-center gap-1.5">
                  <Label htmlFor="recipient">Recipient</Label>
                  <Input
                    id="recipient"
                    placeholder={"Recipient"}
                    value={recipient}
                    onChange={(e) => setRecipient(e.target.value)}
                  />
                </div>

                <div className="grid w-full max-w-sm items-center gap-1.5">
                  <Label htmlFor="amount">Amount</Label>
                  <Input
                    id={"amount"}
                    placeholder={"Amount"}
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                  />
                </div>
                <div className="grid w-full max-w-sm items-center gap-1.5">
                  <Label htmlFor="label">Label</Label>
                  <Input
                    id="label"
                    placeholder={"Label"}
                    value={label}
                    onChange={(e) => setLabel(e.target.value)}
                  />
                </div>

                <div className="grid w-full max-w-sm items-center gap-1.5">
                  <Label htmlFor="message">Message to attach</Label>
                  <Input
                    id="message"
                    placeholder={"Message"}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className={"md:col-span-3 group"}>
            <CardHeader>
              <CardTitle>QR Code</CardTitle>
            </CardHeader>
            <CardContent>
              <TransactionQr amount={amount} recipient={recipient} label={label} message={message} />
            </CardContent>
          </Card>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default App;
