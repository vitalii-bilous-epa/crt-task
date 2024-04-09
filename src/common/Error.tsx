import { FancyButton } from "./FancyButton";

export const Error = ({
  text,
  cta,
  ctaText = "Try again",
}: {
  text: string;
  cta?: () => void;
  ctaText?: string;
}) => {
  return (
    <div className="w-full bg-red-400 rounded-md text-center p-2 text-white">
      <p className="mb-2">{text}</p>
      {cta && <FancyButton onClick={cta} title={ctaText} />}
    </div>
  );
};
