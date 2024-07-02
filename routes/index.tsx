import { useSignal } from "@preact/signals";
import { SynthSplash } from "../components/SynthSplash.tsx";
import Synth from "../islands/Synth.tsx";

export default function Home() {
  // const count = useSignal(3);
  return (
    <Synth enabled={false} />
    // <SynthSplash />
  );
}
