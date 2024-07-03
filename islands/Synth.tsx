import { useSignal } from "@preact/signals"
import { useEffect } from "preact/hooks"
import { SynthSplash } from "../components/SynthSplash.tsx"
import { SynthScreen } from "../components/SynthScreen.tsx"

let ctx: AudioContext

export default function Synth (props: { enabled: boolean}) {

   const enabled = useSignal (props.enabled)

   useEffect (() => {
      ctx = new AudioContext()
      ctx.suspend ()
   }, [])

   const enable = async () => {
      await ctx.resume ()
      enabled.value = true
      console.log (`Audio Context is`, ctx.state)
   }

   if (enabled.value) return <SynthScreen />
   else return <div onPointerDown={ enable } ><SynthSplash /></div>
}