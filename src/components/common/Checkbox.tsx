interface Props {
  id: string;
  label: string | React.ReactNode;
}

const Checkbox = ({ label, id }: Props) => {
  return (
    <div className="flex items-center justify-between gap-4">
      <div className="flex items-center">
        <input
          type="checkbox"
          id={id}
          name="A3-confirmation"
          value="yes"
          className="hidden"
        />
        <label htmlFor={id} className="flex gap-1">
          <div className="checkbox bg-transparent border-2 rounded-sm w-5 h-5 flex flex-shrink-0 justify-center items-center mr-2 transition-colors">
            <img src="/assets/vectors/common/tick.svg" alt="tick" />
          </div>
          <div>{label}</div>
        </label>
      </div>
      <div className="text-[#66C600] flex gap-2 items-center">
        DONE <img src="/assets/vectors/checkout/tick.svg" alt="tick" />
      </div>
    </div>
  );
};

export default Checkbox;
