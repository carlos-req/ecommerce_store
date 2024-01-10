export const FormField = ({ label, type, name, value, onChange }) => (
  <div className="flex flex-col w-full px-20 form-item">
    <label htmlFor={name} className="text-xs font-black text-slate-200">
      {label}
    </label>
    <input
      className="w-full px-6 py-3 my-4 text-xs duration-200 ease-in-out bg-transparent border-2 border-solid outline-none border-slate-400 rounded-2xl caret-slate-100 text-slate-100 focus:border-slate-50"
      type={type}
      required
      placeholder={label}
      name={name}
      onChange={onChange}
      value={value}
    />
  </div>
);
