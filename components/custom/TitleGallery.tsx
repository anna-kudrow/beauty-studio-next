function TitleGallery({ children }: { children: React.ReactNode }) {
  return (
    <h1 className="p-4 text-[15px] text-[var(--main-text)] lg:p-10 lg:text-[24px]">
      {children}
    </h1>
  );
}

export default TitleGallery;
