import React, { useState, createContext, useEffect } from "react";

// Create a context to share products between pages
export const ProductContext = createContext();

const AddProductForm = () => {
  const [products, setProducts] = useState(() => {
    const savedProducts = localStorage.getItem("products");
    return savedProducts ? JSON.parse(savedProducts) : [];
  });

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    price: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      formData.title &&
      formData.description &&
      formData.category &&
      formData.price &&
      formData.image
    ) {
      setProducts((prevProducts) => {
        const updatedProducts = [...prevProducts, formData];
        localStorage.setItem("products", JSON.stringify(updatedProducts));
        return updatedProducts;
      });

      setFormData({
        title: "",
        description: "",
        category: "",
        price: "",
        image: null,
      });
    } else {
      alert("Please fill in all fields!");
    }
  };
  useEffect(() => {
    const handleUnload = () => {
      localStorage.removeItem("isAdmin");
    };

    window.addEventListener("beforeunload", handleUnload);

    return () => {
      window.removeEventListener("beforeunload", handleUnload);
    };
  }, []);
  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6">Add New Product</h2>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md p-6 rounded space-y-4"
      >
        <div>
          <label className="block font-semibold mb-2">Product Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            placeholder="Enter product title"
          />
        </div>
        <div>
          <label className="block font-semibold mb-2">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            rows="4"
            placeholder="Enter product description"
          ></textarea>
        </div>
        <div>
          <label className="block font-semibold mb-2">Category</label>
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            placeholder="Enter product category"
          />
        </div>
        <div>
          <label className="block font-semibold mb-2">Price ($)</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            placeholder="Enter product price"
          />
        </div>
        <div>
          <label className="block font-semibold mb-2">Upload Image</label>
          <input type="file" accept="image/*" onChange={handleImageUpload} />
          {formData.image && (
            <img
              src={formData.image}
              alt="Product Preview"
              className="mt-4 w-32 h-32 object-cover rounded"
            />
          )}
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Add Product
        </button>
      </form>

      <div className="mt-10">
        <h2 className="text-3xl font-bold mb-6">Product List</h2>
        <ul className="space-y-4">
          {products.map((product, index) => (
            <li key={index} className="bg-gray-100 p-4 rounded shadow-md">
              <img
                src={product.image}
                alt={product.title}
                className="w-20 h-20 object-cover rounded mb-4"
              />
              <h3 className="text-xl font-semibold">{product.title}</h3>
              <p className="text-gray-600">{product.description}</p>
              <p>
                <strong>Category:</strong> {product.category}
              </p>
              <p>
                <strong>Price:</strong> ${product.price}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AddProductForm;
