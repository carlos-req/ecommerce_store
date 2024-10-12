import { useState } from "react";
import {
    LuPlus,
    LuPackage,
    LuUsers,
    LuShoppingCart,
    LuX,
} from "react-icons/lu";

import ButtonOutlined from "../../components/ButtonOutlined";

export default function AdminPortal() {
    const [activeTab, setActiveTab] = useState("new-product");
    const [newProduct, setNewProduct] = useState({
        name: "",
        price: 0,
        imageSrc: "",
        imageAlt: "",
        type: "",
        description: "",
        highlights: [],
        color: "",
        series: "",
        materials: "",
        tags: [],
        group: "both",
        sizes: [],
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewProduct({ ...newProduct, [name]: value });
    };

    const handleArrayInputChange = (e, field) => {
        const values = e.target.value.split(",").map((item) => item.trim());
        setNewProduct({ ...newProduct, [field]: values });
    };

    const handleSizeChange = (index, field, value) => {
        const newSizes = [...newProduct.sizes];
        newSizes[index] = {
            ...newSizes[index],
            [field]: field === "stock" ? parseInt(value) : value,
        };
        setNewProduct({ ...newProduct, sizes: newSizes });
    };

    const addSize = () => {
        setNewProduct({
            ...newProduct,
            sizes: [...newProduct.sizes, { size: "", stock: 0 }],
        });
    };

    const removeSize = (index) => {
        const newSizes = newProduct.sizes.filter((_, i) => i !== index);
        setNewProduct({ ...newProduct, sizes: newSizes });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("New product submitted:", newProduct);
        // Here you would typically send the data to your backend
    };

    const TabButton = ({ value, icon, children }) => (
        <button
            onClick={() => setActiveTab(value)}
            className={`flex items-center justify-center py-2 px-4 rounded-3xl ${
                activeTab === value
                    ? "bg-secondary text-primary"
                    : "text-ctabutton hover:text-primary"
            }`}
        >
            {icon}
            <span className="ml-2">{children}</span>
        </button>
    );

    return (
        <div className="min-h-screen p-8 mt-16 text-primary">
            <h1 className="mb-6 text-3xl font-bold">E-commerce Admin Portal</h1>
            {/* Tabs */}
            <div className="mb-6">
                <div className="flex flex-col justify-center md:flex-row">
                    <TabButton
                        value="new-product"
                        icon={<LuPlus className="w-5 h-5" />}
                    >
                        New Product
                    </TabButton>
                    <TabButton
                        value="all-products"
                        icon={<LuPackage className="w-5 h-5" />}
                    >
                        All Products
                    </TabButton>
                    <TabButton
                        value="view-users"
                        icon={<LuUsers className="w-5 h-5" />}
                    >
                        Manage Users
                    </TabButton>
                    <TabButton
                        value="all-orders"
                        icon={<LuShoppingCart className="w-5 h-5" />}
                    >
                        All Orders
                    </TabButton>
                </div>
            </div>

            {activeTab === "new-product" && (
                <div className="p-6 ">
                    <h2 className="mb-4 text-xl font-semibold">
                        Create New Product
                    </h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <input
                            type="text"
                            placeholder="Product Name"
                            name="name"
                            value={newProduct.name}
                            onChange={handleInputChange}
                            className="w-full p-2 border border-gray-700 rounded bg-[#2a2a2a] text-primary placeholder-slate-100"
                            required
                        />
                        <p>Price:</p>
                        <input
                            type="number"
                            placeholder="Price"
                            name="price"
                            value={newProduct.price}
                            onChange={handleInputChange}
                            className="w-full p-2 border border-gray-700 rounded bg-[#2a2a2a] text-primary placeholder-slate-100"
                            required
                        />
                        <input
                            type="text"
                            placeholder="Image Source URL"
                            name="imageSrc"
                            value={newProduct.imageSrc}
                            onChange={handleInputChange}
                            className="w-full p-2 border border-gray-700 rounded bg-[#2a2a2a] text-primary placeholder-slate-100"
                            required
                        />
                        <input
                            type="text"
                            placeholder="Image Alt Text"
                            name="imageAlt"
                            value={newProduct.imageAlt}
                            onChange={handleInputChange}
                            className="w-full p-2 border border-gray-700 rounded bg-[#2a2a2a] text-primary placeholder-slate-100"
                        />
                        <input
                            type="text"
                            placeholder="Product Type"
                            name="type"
                            value={newProduct.type}
                            onChange={handleInputChange}
                            className="w-full p-2 border border-gray-700 rounded bg-[#2a2a2a] text-primary placeholder-slate-100"
                        />
                        <textarea
                            placeholder="Description"
                            name="description"
                            value={newProduct.description}
                            onChange={handleInputChange}
                            className="w-full p-2 border border-gray-700 rounded bg-[#2a2a2a] text-primary placeholder-slate-100"
                            required
                        />
                        <input
                            type="text"
                            placeholder="Highlights (comma-separated)"
                            name="highlights"
                            value={newProduct.highlights.join(", ")}
                            onChange={(e) =>
                                handleArrayInputChange(e, "highlights")
                            }
                            className="w-full p-2 border border-gray-700 rounded bg-[#2a2a2a] text-primary placeholder-slate-100"
                        />
                        <input
                            type="text"
                            placeholder="Color"
                            name="color"
                            value={newProduct.color}
                            onChange={handleInputChange}
                            className="w-full p-2 border border-gray-700 rounded bg-[#2a2a2a] text-primary placeholder-slate-100"
                        />
                        <input
                            type="text"
                            placeholder="Series"
                            name="series"
                            value={newProduct.series}
                            onChange={handleInputChange}
                            className="w-full p-2 border border-gray-700 rounded bg-[#2a2a2a] text-primary placeholder-slate-100"
                        />
                        <input
                            type="text"
                            placeholder="Materials"
                            name="materials"
                            value={newProduct.materials}
                            onChange={handleInputChange}
                            className="w-full p-2 border border-gray-700 rounded bg-[#2a2a2a] text-primary placeholder-slate-100"
                        />
                        <input
                            type="text"
                            placeholder="Tags (comma-separated)"
                            name="tags"
                            value={newProduct.tags.join(", ")}
                            onChange={(e) => handleArrayInputChange(e, "tags")}
                            className="w-full p-2 border border-gray-700 rounded bg-[#2a2a2a] text-primary placeholder-slate-100"
                        />
                        <p>Group:</p>
                        <select
                            name="group"
                            value={newProduct.group}
                            onChange={handleInputChange}
                            className="w-full p-2 border border-gray-700 rounded bg-[#2a2a2a] text-primary placeholder-slate-100"
                        >
                            <option value="both">Both</option>
                            <option value="men">Men</option>
                            <option value="women">Women</option>
                        </select>
                        <div>
                            <h3 className="mb-2 text-lg font-semibold">
                                Sizes
                            </h3>
                            {newProduct.sizes.map((size, index) => (
                                <div
                                    key={index}
                                    className="flex mb-2 space-x-2"
                                >
                                    <input
                                        type="text"
                                        placeholder="Size"
                                        value={size.size}
                                        onChange={(e) =>
                                            handleSizeChange(
                                                index,
                                                "size",
                                                e.target.value
                                            )
                                        }
                                        className="flex-1 p-2 border border-gray-700 rounded bg-[#2a2a2a] text-primary placeholder-slate-100"
                                    />
                                    <input
                                        type="number"
                                        min="0"
                                        placeholder="Stock"
                                        value={size.stock}
                                        onChange={(e) =>
                                            handleSizeChange(
                                                index,
                                                "stock",
                                                e.target.value
                                            )
                                        }
                                        className="flex-1 p-2 border border-gray-700 rounded bg-[#2a2a2a] text-primary placeholder-slate-100"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => removeSize(index)}
                                        className="p-2 text-white bg-red-600 rounded hover:bg-red-700"
                                    >
                                        <LuX className="w-5 h-5" />
                                    </button>
                                </div>
                            ))}
                            <div className="max-w-full lg:max-w-[12rem]">
                                <button
                                    type="button"
                                    onClick={addSize}
                                    className="w-full px-12 py-2 mt-2 font-black tracking-tight uppercase duration-200 ease-in-out text-md lg:px-4 lg:py-2 lg:rounded-lg bg-primary bg-opacity-80 text-secondary rounded-2xl transation hover:bg-opacity-100 hover:drop-shadow-md"
                                >
                                    Add Size
                                </button>
                            </div>
                        </div>

                        <div className="max-w-full lg:max-w-[13rem]">
                            <button
                                onClick={handleSubmit}
                                className="w-full px-12 py-2 font-black tracking-tight uppercase transition duration-150 ease-in-out border-2 border-solid border-slate-100 text-slate-100 text-md rounded-xl active:translate-y-1 active:scale-90"
                            >
                                Add Product
                            </button>
                        </div>
                    </form>
                </div>
            )}

            {activeTab === "all-products" && (
                <div className="p-6 ">
                    <h2 className="mb-4 text-xl font-semibold">All Products</h2>
                    <table className="w-full">
                        <thead>
                            <tr className="text-left">
                                <th className="py-2">Name</th>
                                <th className="py-2">Price</th>
                                <th className="py-2">Type</th>
                                <th className="py-2">Group</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="py-2">
                                    Amp Performance Leggings
                                </td>
                                <td className="py-2">$49.99</td>
                                <td className="py-2">Bottoms</td>
                                <td className="py-2">Women</td>
                            </tr>
                            <tr>
                                <td className="py-2">
                                    Amp Seamless Sports Bra
                                </td>
                                <td className="py-2">$34.99</td>
                                <td className="py-2">Tops</td>
                                <td className="py-2">Women</td>
                            </tr>
                            <tr>
                                <td className="py-2">Three Pillar Terry Tee</td>
                                <td className="py-2">$38.00</td>
                                <td className="py-2">Tops</td>
                                <td className="py-2">Both</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            )}

            {activeTab === "view-users" && (
                <div className="p-6 ">
                    <h2 className="mb-4 text-xl font-semibold">Manage Users</h2>
                    <table className="w-full">
                        <thead>
                            <tr className="text-left">
                                <th className="py-2">Name</th>
                                <th className="py-2">Email</th>
                                <th className="py-2">Role</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="py-2">John Doe</td>
                                <td className="py-2">john@example.com</td>
                                <td className="py-2">Admin</td>
                            </tr>
                            <tr>
                                <td className="py-2">Jane Smith</td>
                                <td className="py-2">jane@example.com</td>
                                <td className="py-2">Customer</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            )}

            {activeTab === "all-orders" && (
                <div className="p-6 ">
                    <h2 className="mb-4 text-xl font-semibold">All Orders</h2>
                    <table className="w-full">
                        <thead>
                            <tr className="text-left">
                                <th className="py-2">Order ID</th>
                                <th className="py-2">Customer</th>
                                <th className="py-2">Total</th>
                            </tr>
                        </thead>
                        <tbody className="">
                            <tr>
                                <td className="py-2">#1001</td>
                                <td className="py-2">Alice Johnson</td>
                                <td className="py-2">$124.99</td>
                            </tr>
                            <tr>
                                <td className="py-2">#1002</td>
                                <td className="py-2">Bob Williams</td>
                                <td className="py-2">$89.00</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}
