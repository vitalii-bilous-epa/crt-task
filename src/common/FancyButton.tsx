interface FancyButtonPRops {
  title: string;
  onClick: () => void;
}

export const FancyButton = ({ title, onClick }: FancyButtonPRops) => {
  return (
    <button
      type="button"
      className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      onClick={onClick}
    >
      {title}
    </button>
  );
};
