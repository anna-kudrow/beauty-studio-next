import "./TitlePrice.css";

type props = {
  subtitle: string;
  title: string;
};

export const TitlePrice = ({ title, subtitle }: props) => {
  return (
    <>
      <h1 className="title-price">{title}</h1>
      <h2 className="subtitle-price">{subtitle}</h2>
    </>
  );
};
