interface Props extends React.InputHTMLAttributes<HTMLSelectElement> {
  Label?: string;
  children?: React.ReactNode;
}

export const SelectComponent = ({ Label, children, ...rest }: Props) => {
  return (
    <div className="flex w-full flex-col">
      {Label ? (
        <label className="mb-[3px] text-[18px] leading-[26px] font-medium text-[#0c2d57]">
          {Label}
        </label>
      ) : null}
      <select
        {...rest}
        style={{ transition: "border-color .5s" }}
        className="h-[50px] w-full rounded border-none bg-[#e7eaee] px-3 py-2 align-middle text-[14px] leading-[18px] text-[#5c728e]"
      >
        {children}
      </select>
    </div>
  );
};
