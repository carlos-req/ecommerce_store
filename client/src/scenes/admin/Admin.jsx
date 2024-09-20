import React, { useState } from 'react'
import { PlusIcon, PackageIcon, UsersIcon, ShoppingCartIcon, XIcon } from 'lucide-react'

export default function AdminPortal() {
  const [activeTab, setActiveTab] = useState('new-product')
  const [newProduct, setNewProduct] = useState<Product>({
    name: '',
    price: 0,
    imageSrc: '',
    imageAlt: '',
    type: '',
    description: '',
    highlights: [],
    color: '',
    series: '',
    materials: '',
    tags: [],
    group: 'both',
    sizes: []
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setNewProduct({ ...newProduct, [name]: value })
  }

  const handleArrayInputChange = (e ,field) => {
    const values = e.target.value.split(',').map(item => item.trim())
    setNewProduct({ ...newProduct, [field]: values })
  }

  const handleSizeChange = (index, field, value) => {
    const newSizes = [...newProduct.sizes]
    newSizes[index] = { ...newSizes[index], [field]: field === 'stock' ? parseInt(value) : value }
    setNewProduct({ ...newProduct, sizes: newSizes })
  }

  const addSize = () => {
    setNewProduct({ ...newProduct, sizes: [...newProduct.sizes, { size: '', stock: 0 }] })
  }

  const removeSize = (index: number) => {
    const newSizes = newProduct.sizes.filter((_, i) => i !== index)
    setNewProduct({ ...newProduct, sizes: newSizes })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('New product submitted:', newProduct)
    // Here you would typically send the data to your backend
  }

  const TabButton = ({ value, icon, children }: { value: string; icon: React.ReactNode; children: React.ReactNode }) => (
    <button
      onClick={() => setActiveTab(value)}
      className={`flex items-center justify-center py-2 px-4 ${
        activeTab === value ? 'bg-gray-800 text-white' : 'text-gray-400 hover:text-white'
      }`}
    >
      {icon}
      <span className="ml-2">{children}</span>
    </button>
  )

  return (
    <div className="min-h-screen p-8 text-white bg-black">
      <h1 className="mb-6 text-3xl font-bold">E-commerce Admin Portal</h1>
      <div className="mb-6">
        <div className="flex bg-gray-900">
          <TabButton value="new-product" icon={<PlusIcon className="w-5 h-5" />}>New Product</TabButton>
          <TabButton value="all-products" icon={<PackageIcon className="w-5 h-5" />}>All Products</TabButton>
          <TabButton value="manage-users" icon={<UsersIcon className="w-5 h-5" />}>Manage Users</TabButton>
          <TabButton value="all-orders" icon={<ShoppingCartIcon className="w-5 h-5" />}>All Orders</TabButton>
        </div>
      </div>

      {activeTab === 'new-product' && (
        <div className="p-6 bg-gray-900 rounded-lg">
          <h2 className="mb-4 text-xl font-semibold">Create New Product</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Product Name"
              name="name"
              value={newProduct.name}
              onChange={handleInputChange}
              className="w-full p-2 text-white bg-gray-800 border border-gray-700 rounded"
              required
            />
            <input
              type="number"
              placeholder="Price"
              name="price"
              value={newProduct.price}
              onChange={handleInputChange}
              className="w-full p-2 text-white bg-gray-800 border border-gray-700 rounded"
              required
            />
            <input
              type="text"
              placeholder="Image Source URL"
              name="imageSrc"
              value={newProduct.imageSrc}
              onChange={handleInputChange}
              className="w-full p-2 text-white bg-gray-800 border border-gray-700 rounded"
              required
            />
            <input
              type="text"
              placeholder="Image Alt Text"
              name="imageAlt"
              value={newProduct.imageAlt}
              onChange={handleInputChange}
              className="w-full p-2 text-white bg-gray-800 border border-gray-700 rounded"
            />
            <input
              type="text"
              placeholder="Product Type"
              name="type"
              value={newProduct.type}
              onChange={handleInputChange}
              className="w-full p-2 text-white bg-gray-800 border border-gray-700 rounded"
            />
            <textarea
              placeholder="Description"
              name="description"
              value={newProduct.description}
              onChange={handleInputChange}
              className="w-full p-2 text-white bg-gray-800 border border-gray-700 rounded"
              required
            />
            <input
              type="text"
              placeholder="Highlights (comma-separated)"
              name="highlights"
              value={newProduct.highlights.join(', ')}
              onChange={(e) => handleArrayInputChange(e, 'highlights')}
              className="w-full p-2 text-white bg-gray-800 border border-gray-700 rounded"
            />
            <input
              type="text"
              placeholder="Color"
              name="color"
              value={newProduct.color}
              onChange={handleInputChange}
              className="w-full p-2 text-white bg-gray-800 border border-gray-700 rounded"
            />
            <input
              type="text"
              placeholder="Series"
              name="series"
              value={newProduct.series}
              onChange={handleInputChange}
              className="w-full p-2 text-white bg-gray-800 border border-gray-700 rounded"
            />
            <input
              type="text"
              placeholder="Materials"
              name="materials"
              value={newProduct.materials}
              onChange={handleInputChange}
              className="w-full p-2 text-white bg-gray-800 border border-gray-700 rounded"
            />
            <input
              type="text"
              placeholder="Tags (comma-separated)"
              name="tags"
              value={newProduct.tags.join(', ')}
              onChange={(e) => handleArrayInputChange(e, 'tags')}
              className="w-full p-2 text-white bg-gray-800 border border-gray-700 rounded"
            />
            <select
              name="group"
              value={newProduct.group}
              onChange={handleInputChange}
              className="w-full p-2 text-white bg-gray-800 border border-gray-700 rounded"
            >
              <option value="both">Both</option>
              <option value="men">Men</option>
              <option value="women">Women</option>
            </select>
            <div>
              <h3 className="mb-2 text-lg font-semibold">Sizes</h3>
              {newProduct.sizes.map((size, index) => (
                <div key={index} className="flex mb-2 space-x-2">
                  <input
                    type="text"
                    placeholder="Size"
                    value={size.size}
                    onChange={(e) => handleSizeChange(index, 'size', e.target.value)}
                    className="flex-1 p-2 text-white bg-gray-800 border border-gray-700 rounded"
                  />
                  <input
                    type="number"
                    placeholder="Stock"
                    value={size.stock}
                    onChange={(e) => handleSizeChange(index, 'stock', e.target.value)}
                    className="flex-1 p-2 text-white bg-gray-800 border border-gray-700 rounded"
                  />
                  <button
                    type="button"
                    onClick={() => removeSize(index)}
                    className="p-2 text-white bg-red-600 rounded hover:bg-red-700"
                  >
                    <XIcon className="w-5 h-5" />
                  </button>
                </div>
              ))}
              <button
                type="button"
                onClick={addSize}
                className="p-2 mt-2 text-white bg-blue-600 rounded hover:bg-blue-700"
              >
                Add Size
              </button>
            </div>
            <button type="submit" className="w-full px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700">
              Add Product
            </button>
          </form>
        </div>
      )}

      {activeTab === 'all-products' && (
        <div className="p-6 bg-gray-900 rounded-lg">
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
                <td className="py-2">Amp Performance Leggings</td>
                <td className="py-2">$49.99</td>
                <td className="py-2">Bottoms</td>
                <td className="py-2">Women</td>
              </tr>
              <tr>
                <td className="py-2">Amp Seamless Sports Bra</td>
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

      {activeTab === 'manage-users' && (
        <div className="p-6 bg-gray-900 rounded-lg">
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

      {activeTab === 'all-orders' && (
        <div className="p-6 bg-gray-900 rounded-lg">
          <h2 className="mb-4 text-xl font-semibold">All Orders</h2>
          <table className="w-full">
            <thead>
              <tr className="text-left">
                <th className="py-2">Order ID</th>
                <th className="py-2">Customer</th>
                <th className="py-2">Total</th>
                <th className="py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2">#1001</td>
                <td className="py-2">Alice Johnson</td>
                <td className="py-2">$124.99</td>
                <td className="py-2">Shipped</td>
              </tr>
              <tr>
                <td className="py-2">#1002</td>
                <td className="py-2">Bob Williams</td>
                <td className="py-2">$89.00</td>
                <td className="py-2">Processing</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
