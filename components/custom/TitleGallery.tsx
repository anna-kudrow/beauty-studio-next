function TitleGallery({ children }: { children: React.ReactNode }) {
  return (
    <h1 className="p-4 lg:p-10 text-[15px] text-[var(--main-text)] lg:text-[24px]">
      {children}
    </h1>
  );
}

export default TitleGallery;
