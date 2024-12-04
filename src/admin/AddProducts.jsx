import React, { useState, useEffect } from "react";
import axios from "axios";

const AddProductForm = () => {
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    image: null,
  });

  // Fetch all products
  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/products');
      setProducts(response.data);
    } catch (error) {
      console.error('Failed to fetch products:', error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/api/products', formData);
      fetchProducts(); // Refresh product list
      setFormData({
        title: "",
        description: "",
        category: "",
        image: null,
      });
    } catch (error) {
      console.error('Failed to add product:', error);
    }
  };

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
                src={product.Image}
                alt={product.Title}
                className="w-20 h-20 object-cover rounded mb-4"
              />
              <h3 className="text-xl font-semibold">{product.Title}</h3>
              <p className="text-gray-600">{product.Description}</p>
              <p>
                <strong>Category:</strong> {product.Category}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AddProductForm;
