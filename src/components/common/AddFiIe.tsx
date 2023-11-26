interface Props extends React.InputHTMLAttributes<HTMLInputElement> {}

const AddFile = ({ id, name, ...rest }: Props) => {
  return (
    <div className="bg-[#fffcf5] min-h-[200px] rounded-md border border-dashed border-accentYellow flex justify-center items-center px-4 cursor-pointer">
      <label
        className="flex flex-col justify-center items-center text-center"
        htmlFor={id}
      >
        <img src="/assets/vectors/common/add-file.svg" alt="add file" />
        <div className="text-accentYellow font-semibold mt-2">
          Drag and Drop or Upload Avatar Image
        </div>
      </label>
      <input className="hidden" type="file" name={name} id={id} {...rest} />
    </div>
  );
};

export default AddFile;
