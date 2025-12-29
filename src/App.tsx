import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "~/components/ui/card.tsx";
import { Footer } from "~/features/footer";
import { TransactionQr } from "~/features/transaction-qr";
import { TransactionForm } from "./features/transaction-form";
import { useAmount } from "./hooks/use-amount";
import { useLabel } from "./hooks/use-label";
import { useMessage } from "./hooks/use-message";
import { useRecipient } from "./hooks/use-recipient";

function App() {
  const [recipient, _setRecipient] = useRecipient();
  const [amount, _setAmount] = useAmount();
  const [label, _setLabel] = useLabel();
  const [message, _setMessage] = useMessage();

  return (
    <div className="flex h-full min-h-screen flex-col">
      <div className="flex grow flex-col-reverse justify-end gap-2 p-4 sm:flex-row">
        <Card className="w-full sm:w-1/2 md:w-1/4">
          <CardHeader>
            <CardTitle>Configure your QR Code</CardTitle>
          </CardHeader>
          <CardContent>
            <TransactionForm />
          </CardContent>
        </Card>

        <Card className={"group w-full sm:w-1/2 md:w-3/4"}>
          <CardHeader>
            <CardTitle>QR Code</CardTitle>
          </CardHeader>
          <CardContent>
            <TransactionQr
              amount={amount}
              recipient={recipient}
              label={label}
              message={message}
            />
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
}

export default App;
