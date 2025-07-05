import { Footer } from "~/components/footer.tsx";
import { TransactionQr } from "~/components/transaction-qr.tsx";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "~/components/ui/card.tsx";
import { Input } from "~/components/ui/input.tsx";
import { Label } from "./components/ui/label";
import { useRecipient } from "./hooks/use-recipient";
import { useAmount } from "./hooks/use-amount";
import { useMessage } from "./hooks/use-message";
import { useLabel } from "./hooks/use-label";

function App() {
  const [recipient, setRecipient] = useRecipient();
  const [amount, setAmount] = useAmount();
  const [label, setLabel] = useLabel();
  const [message, setMessage] = useMessage()
  

  return (
    <>
      <div className="flex flex-col h-full min-h-screen">
        <div className="grow flex sm:flex-row flex-col-reverse justify-end gap-2 p-4 ">
          <Card className="w-full sm:w-1/2 md:w-1/4">
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

          <Card className={"w-full sm:w-1/2 md:w-3/4 group"}>
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
