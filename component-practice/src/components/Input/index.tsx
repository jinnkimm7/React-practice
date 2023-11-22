export interface InputProps {
  id: string;
  label: string;
  block: boolean;
  invalid: boolean;
  requried: boolean;
  disable: boolean;
  readOnly: boolean;
  formProps: object;
}

export default function Input({
  id,
  label,
  block = false,
  invalid = false,
  requried = false,
  disable = false,
  readOnly = false,
  formProps,
  ...props
}: InputProps) {
  return (
    <form
      className={`${block ? 'block' : 'inline-block'}`}
      {...formProps}
    >
      <label
        className='block text-base'
        htmlFor={id}>{label}</label>
      <input
        id={id}
        aria-invalid={invalid}
        required={requried}
        disabled={disable}
        readOnly={readOnly}
        className={`w-[100%] border box-border rounded ${invalid ? 'border-red-500' : 'border-gray-400'}`}
        {...props}
      />
    </form>
  );
}