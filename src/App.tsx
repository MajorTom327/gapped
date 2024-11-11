import {useState} from 'react'
import {Card, CardContent, CardHeader, CardTitle} from "~/components/ui/card.tsx";
import {Label} from './components/ui/label';
import {Input} from "~/components/ui/input.tsx";
import {assoc} from "rambda";
import {TransactionQr} from "~/components/transaction-qr.tsx";

function App() {
  const [formData, setFormData] = useState({
    recipient: "",
    amount: "0",
    label: "",
    message: ""
  });
  return (
    <>

      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-2 p-4">
        <Card>
          <CardHeader>
            <CardTitle>Configure your QR Code</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center gap-2">

              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="recipient">Recipient</Label>
                <Input id="recipient" placeholder={"Recipient"} value={formData.recipient}
                       onChange={(e) => setFormData(assoc('recipient', e.target.value))}/>
              </div>

              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="amount">Amount</Label>
                <Input id={"amount"} placeholder={"Amount"} value={formData.amount}
                       onChange={(e) => setFormData(assoc('amount', e.target.value))}/>
              </div>
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="label">Label</Label>
                <Input id="label" placeholder={"Label"} value={formData.label}
                       onChange={(e) => setFormData(assoc('label', e.target.value))}/>
              </div>

              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="message">Message to attach</Label>
                <Input id="message" placeholder={"Message"} value={formData.message}
                       onChange={(e) => setFormData(assoc('message', e.target.value))}/>
              </div>
            </div>

          </CardContent>
        </Card>


        <Card className={"md:col-span-3"}>
          <CardHeader>
            <CardTitle>QR Code</CardTitle>
          </CardHeader>
          <CardContent>
            {/* @ts-expect-error don't mind the types for now */}
            <TransactionQr {...formData}/>

          </CardContent>
        </Card>
      </div>
    </>
  )
}

export default App
