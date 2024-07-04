import ControlInterface from "../components/ControlInterface.tsx"

const submit = async (e: SubmitEvent) => {
   e.preventDefault ()
   const form = e.target as HTMLFormElement
   const data = new FormData (form)
   const json = JSON.stringify(Object.fromEntries(data))
   console.log (`submitting`, json)

   const res = await fetch (`/api/update`, {
      method: `POST`,
      headers: {
         'Content-Type': 'application/json'
      },
      body: json
   })
   console.log (`response`, res)

}

export default function Control () {
   return (<ControlInterface submit={ submit }/>)
}