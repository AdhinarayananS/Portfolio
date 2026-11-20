import { PORTRAIT } from "@/lib/images";

export default function Portrait() {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={PORTRAIT} alt="Portrait of Adhi Narayanan P" draggable={false} className="block h-auto w-full select-none object-contain" />
  );
}
