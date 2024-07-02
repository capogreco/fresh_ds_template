import { useSignal } from "@preact/signals"
import { useEffect } from "preact/hooks"
import { SynthSplash } from "../components/SynthSplash.tsx"

let ctx: AudioContext

export default function Synth (props: { enabled: boolean}) {
   const enabled = useSignal (props.enabled)

   useEffect (() => {
      ctx = new AudioContext()
      ctx.suspend ()
      enabled.value = false
   })

   const enable = async () => {
      await ctx.resume ()
      enabled.value = true
   }

   if (enabled.value) return <div>hello!</div>
   else return <SynthSplash />
}