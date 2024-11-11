import {ChangeEvent, useState} from 'react'
import {Card, CardContent, CardHeader, CardTitle} from "~/components/ui/card.tsx";
import {Label} from './components/ui/label';
import {Input} from "~/components/ui/input.tsx";
import {TransactionQr} from "~/components/transaction-qr.tsx";
import {useParsedSearchParams} from "~/hooks/useParsedSearchParams.tsx";
import {z} from "zod";
import {Button} from "~/components/ui/button.tsx";
import {Expand, Shrink} from 'lucide-react';
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

  const [enlarged, setEnlarged] = useState(false);

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
            <CardHeader className={"flex flex-row gap-2 justify-between items-center"}>
              <CardTitle>QR Code</CardTitle>
              <Button size={"icon"} variant={"ghost"} onClick={() => setEnlarged(!enlarged)}
                      className={"transition-opacity opacity-20 group-hover:opacity-100"}>
                {enlarged ? <Shrink/> : <Expand/>}
              </Button>

            </CardHeader>
            <CardContent>
              <TransactionQr {...searchParams} size={enlarged ? 512 : 256}/>
            </CardContent>
          </Card>
        </div>

        <Footer/>
      </div>
    </>
  )
}

export default App
