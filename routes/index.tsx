import { useSignal } from "@preact/signals";
import { SynthSplash } from "../components/SynthSplash.tsx";

export default function Home() {
  const count = useSignal(3);
  return (
    <SynthSplash />
  );
}
