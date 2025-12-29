import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { useAmount } from "~/hooks/use-amount";
import { useLabel } from "~/hooks/use-label";
import { useMessage } from "~/hooks/use-message";
import { useRecipient } from "~/hooks/use-recipient";

export const TransactionForm = () => {
  const [recipient, setRecipient] = useRecipient();
  const [amount, setAmount] = useAmount();
  const [label, setLabel] = useLabel();
  const [message, setMessage] = useMessage();

  return (
    <div className="flex flex-col items-center gap-4">
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
  );
};
