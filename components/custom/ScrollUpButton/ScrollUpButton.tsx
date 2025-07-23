import { Button } from "~/components/ui/button";
import "./scroll-up-button.css";
import CarouselArrow from "~/components/icons/CarouselArrow";
function ScrollUpButton() {
  return (
    <Button
      variant="outline"
      // size={}
      className="fixed right-[5vw] bottom-[10vh] size-14 rounded-full border-none opacity-70 heartbeat"
      // onClick={() => {}}
    >
      <CarouselArrow className="size-12 rotate-270" />
      <span className="sr-only">Button up</span>
    </Button>
  );
}

export default ScrollUpButton;
