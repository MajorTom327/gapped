import {ChangeEvent} from 'react'
import {Card, CardContent, CardHeader, CardTitle} from "~/components/ui/card.tsx";
import {Label} from './components/ui/label';
import {Input} from "~/components/ui/input.tsx";
import {TransactionQr} from "~/components/transaction-qr.tsx";
import {useParsedSearchParams} from "~/hooks/useParsedSearchParams.tsx";
import {z} from "zod";
import {Footer} from "~/components/footer.tsx";

export const searchParamsSchema = z.object({
  recipient: z.string().min(1).default(""),
  amount: z.string().regex(/^[0-9]+(.[0-9]+)?$/).default("1"),
  label: z.string().optional(),
  message: z.string().optional()
})


function App() {
  const [searchParams, setSearchParams] = useParsedSearchParams(searchParamsSchema, {
    recipient: "",
    amount: "0",
    label: "",
    message: ""
  });


  const onUpdate = (key: string) => (e: ChangeEvent<HTMLInputElement>) => {
    setSearchParams(key, e.target.value)
  }


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
                  <Input id="recipient" placeholder={"Recipient"} value={searchParams.recipient}
                         onChange={onUpdate('recipient')}/>
                </div>

                <div className="grid w-full max-w-sm items-center gap-1.5">
                  <Label htmlFor="amount">Amount</Label>
                  <Input id={"amount"} placeholder={"Amount"} value={searchParams.amount}
                         onChange={onUpdate("amount")}/>
                </div>
                <div className="grid w-full max-w-sm items-center gap-1.5">
                  <Label htmlFor="label">Label</Label>
                  <Input id="label" placeholder={"Label"} value={searchParams.label}
                         onChange={onUpdate('label')}/>
                </div>

                <div className="grid w-full max-w-sm items-center gap-1.5">
                  <Label htmlFor="message">Message to attach</Label>
                  <Input id="message" placeholder={"Message"} value={searchParams.message}
                         onChange={onUpdate('message')}/>
                </div>
              </div>

            </CardContent>
          </Card>


          <Card className={"md:col-span-3 group"}>
            <CardHeader>
              <CardTitle>QR Code</CardTitle>

            </CardHeader>
            <CardContent>
              <TransactionQr {...searchParams}/>
            </CardContent>
          </Card>
        </div>

        <Footer/>
      </div>
    </>
  )
}

export default App
