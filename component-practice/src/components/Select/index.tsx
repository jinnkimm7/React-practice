export interface SelectProps {
  data: string[] | { optionName: string, optionValue: string }[];
  id: string;
  label: string;
  placeholder: string;
  block: boolean;
  invalid: boolean;
  requried: boolean;
  disable: boolean;
  formProps: object;
}

export default function Select({
  data,
  id,
  label,
  placeholder,
  block = false,
  invalid,
  requried,
  disable,
  formProps,
  ...props
}: SelectProps) {
  const formattedData = data
    .map(item => typeof item === 'string' ? { optionName: item, optionValue: item } : item);

  const options = formattedData.map(item => (
    <option
      key={item.optionValue}
      value={item.optionValue}
    >
      {item.optionName}</option>
  ));

  if (placeholder) {
    options.unshift(
      <option key={placeholder} value='' hidden>{placeholder}</option>
    )
  }

  return (
    <form
      className={`${block ? 'block' : 'inline-block'}`}
      {...formProps}
    >
      <label
        className='block text-base'
        htmlFor={id}>{label}</label>
      <select
        id={id}
        aria-invalid={invalid}
        required={requried}
        disabled={disable}
        className={`w-[100%] px-1 py-1 border box-border rounded ${invalid ? 'border-red-500' : 'border-gray-400'}`}
        {...props}
      >
        {options}
      </select>
    </form>
  );
}