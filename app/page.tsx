import ScrollUpButton from "~/components/custom/ScrollUpButton/ScrollUpButton";
import { About } from "../components/custom/About/About";
import { Achievements } from "../components/custom/Achievements/Achievements";
import { Adv } from "../components/custom/Adv/Adv";
import { Portfolio } from "../components/custom/Portfolio/Portfolio";
import { Price } from "../components/custom/Price/Price";
import { Promo } from "../components/custom/Promo/Promo";
import { SignUp } from "../components/custom/SignUp/SignUp";

export default function Home() {
  return (
    <main className="main">
      <Promo />
      <About />
      <Portfolio />
      <Adv />
      <Achievements />
      <Price />
      <SignUp />
      <ScrollUpButton />
    </main>
  );
}
