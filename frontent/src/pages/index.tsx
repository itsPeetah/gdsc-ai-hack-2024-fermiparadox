import Chat from "@/components/Chat";
import ConvoHistory from "@/components/ConvoHistory";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="">
      <Chat />
      <ConvoHistory />
    </main>
  );
}
