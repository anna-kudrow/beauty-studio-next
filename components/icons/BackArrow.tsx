function BackArrow({ className }: { className?: string | undefined }) {
  return (
    // biome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
    <svg
      width="40"
      height="37"
      viewBox="0 0 63 37"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M5.28331 18.2563C5.12781 18.4132 5.12895 18.6665 5.28586 18.822L7.84287 21.3561C7.99978 21.5116 8.25305 21.5104 8.40855 21.3535C8.56406 21.1966 8.56292 20.9433 8.40601 20.7878L6.13311 18.5353L8.38565 16.2624C8.54115 16.1055 8.54001 15.8522 8.3831 15.6967C8.22619 15.5412 7.97293 15.5424 7.81742 15.6993L5.28331 18.2563ZM54.1459 17.9193L5.56563 18.1379L5.56923 18.9378L54.1495 18.7193L54.1459 17.9193Z"
        fill="#583939"
      />
    </svg>
  );
}
export default BackArrow;
