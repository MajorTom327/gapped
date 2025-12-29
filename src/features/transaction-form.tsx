import { Field, FieldGroup, FieldLabel } from "~/components/ui/field";
import { Input } from "~/components/ui/input";
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
    <FieldGroup className="flex flex-col items-center gap-4">
      <Field>
        <FieldLabel htmlFor="recipient">Recipient</FieldLabel>
        <Input
          id="recipient"
          placeholder={"Recipient"}
          value={recipient}
          onChange={(e) => setRecipient(e.target.value)}
        />
      </Field>

      <Field>
        <FieldLabel htmlFor="amount">Amount</FieldLabel>
        <Input
          id={"amount"}
          placeholder={"Amount"}
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </Field>
      <Field>
        <FieldLabel htmlFor="label">Label</FieldLabel>
        <Input
          id="label"
          placeholder={"Label"}
          value={label}
          onChange={(e) => setLabel(e.target.value)}
        />
      </Field>

      <Field>
        <FieldLabel htmlFor="message">Message to attach</FieldLabel>
        <Input
          id="message"
          placeholder={"Message"}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </Field>
    </FieldGroup>
  );
};
