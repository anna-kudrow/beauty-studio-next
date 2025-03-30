import { About } from "./components/About/About";
import { Achievments } from "./components/Achievments/Achievments";
import { Adv } from "./components/Adv/Adv";
import { Portfolio } from "./components/Portfolio/Portfolio";
import { Price } from "./components/Price/Price";
import { Promo } from "./components/Promo/Promo";
import { SignUp } from "./components/SignUp/SignUp";

export default function Home() {
  return (
    <main className="main">
      <Promo />
      <About />
      <Portfolio />
      <Adv />
      <Achievments />
      <Price />
      <SignUp />
    </main>
  );
}
