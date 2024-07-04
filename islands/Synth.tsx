import { useSignal } from "@preact/signals"
import { useEffect } from "preact/hooks"
import { SynthSplash } from "../components/SynthSplash.tsx"
import { SynthScreen } from "../components/SynthScreen.tsx"
import { Program } from "../shared/types.ts"

let ctx: AudioContext

const graph = {}
const program = {
   initialised: false,
}

export default function Synth (props: { 
   enabled: boolean,
   program: Program
}) {

   const enabled = useSignal (props.enabled)

   useEffect (() => {
      ctx = new AudioContext()
      ctx.suspend ()

      const es = new EventSource (`/api/listen`)
      es.onmessage = e => {
         const data = JSON.parse (e.data)
         console.log (data)
      }
   }, [])

   const enable = async () => {
      await ctx.resume ()
      enabled.value = true
      console.log (`Audio Context is`, ctx.state)
   }

   if (enabled.value) return <SynthScreen />
   else return <div onPointerDown={ enable } ><SynthSplash /></div>
}