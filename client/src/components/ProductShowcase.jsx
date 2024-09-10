import { Link } from "react-router-dom";
function ProductShowcase({ imageSrc, title, subtitle, buttonTitle, link }) {
    return (
        <div className="relative w-full overflow-hidden shadow-lg rounded-3xl flex-1 min-w-[280px]">
            <img
                src={imageSrc}
                alt={`${title} product showcase`}
                className="w-full h-[900px] object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                <h2 className="mb-1 text-3xl font-bold uppercase text-primary">
                    {title}
                </h2>
                <p className="mb-3 text-sm font-bold text-primary">
                    {subtitle}
                </p>
                <Link to={link}>
                    <button className="px-3 py-1 font-bold transition duration-300 ease-in-out rounded-3xl text-primary bg-ctabutton hover:bg-gray-400 ">
                        {buttonTitle}
                    </button>
                </Link>
            </div>
        </div>
    );
}
export default ProductShowcase;
