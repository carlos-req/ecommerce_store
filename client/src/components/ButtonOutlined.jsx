import PropTypes from "prop-types";
const ButtonOutlined = ({ title, width, textSize }) => {
  return (
    <div
      className={
        width ? `px-0 md:px-20 max-w-[${width}]:` : "px-0 md:px-20 max-w-2xl"
      }
    >
      <button
        className={
          textSize
            ? `px-24 py-2 uppercase border-slate-100 border-solid border-2 text-slate-100 font-black  tracking-tight text-${textSize} w-full rounded-xl  ease-in-out duration-150 active:translate-y-1 active:scale-90 transition `
            : "px-24 py-2 uppercase border-slate-100 border-solid border-2 text-slate-100 font-black  tracking-tight text-md w-full rounded-xl ease-in-out duration-150 active:translate-y-1 active:scale-90 transition"
        }
      >
        {title}
      </button>
    </div>
  );
};
export default ButtonOutlined;

ButtonOutlined.propTypes = {
  title: PropTypes.string.isRequired,
  width: PropTypes.string,
  textSize: PropTypes.string,
};
