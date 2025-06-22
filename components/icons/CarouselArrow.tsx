function CarouselArrowLeft({ className }: { className?: string | undefined }) {
  return (
    // biome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      version="1.0"
      width="64.000000pt"
      height="64.000000pt"
      viewBox="0 0 64.000000 64.000000"
      preserveAspectRatio="xMidYMid meet"
    >
      <g
        transform="translate(0.000000,64.000000) scale(0.100000,-0.100000)"
        fill="#b70114"
        stroke="none"
      >
        <path d="M480 422 c0 -11 53 -67 75 -80 19 -10 18 -13 -20 -45 -46 -41 -58 -39 -27 3 12 16 22 32 22 35 0 3 -110 5 -245 5 -157 0 -245 -4 -245 -10 0 -6 82 -10 226 -10 177 0 225 -3 220 -12 -17 -42 -28 -89 -22 -95 3 -4 21 9 39 28 17 19 48 47 67 62 33 26 34 28 15 39 -11 6 -37 28 -57 50 -37 38 -48 45 -48 30z" />
      </g>
    </svg>
  );
}

export default CarouselArrowLeft;
