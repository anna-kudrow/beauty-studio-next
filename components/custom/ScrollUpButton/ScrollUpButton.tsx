"use client";
import { Button } from "~/components/ui/button";
import "./scroll-up-button.css";
import { useEffect, useState } from "react";
import CarouselArrow from "~/components/icons/CarouselArrow";
import { cn } from "~/lib/utils";

function ScrollUpButton({
  className,
  showAfterPx,
}: { className?: string; showAfterPx?: number }) {
  const [isVisible, setIsVisible] = useState(false);

  const defaultShowAfterPx = showAfterPx || 400;

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > defaultShowAfterPx);
    };
    toggleVisibility();

    let timeoutId: NodeJS.Timeout;
    const handleScroll = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(toggleVisibility, 16);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [defaultShowAfterPx]);

  return (
    <Button
      onClick={() => window.scrollTo({ top: 0 })}
      variant="outline"
      className={cn(
        !isVisible && "hidden",
        "heartbeat fixed right-[5vw] bottom-[15vh] size-14 rounded-full border-none opacity-70 cursor-pointer",
        className,
      )}
    >
      <CarouselArrow className="size-12 rotate-270" />
      <span className="sr-only">Button to scroll up</span>
    </Button>
  );
}

export default ScrollUpButton;
