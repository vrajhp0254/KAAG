import { useState, useEffect } from "react";
import axios from "axios";

const AddProductForm = () => {
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    image: "", // Now stores an image URL
  });
  const [loading, setLoading] = useState(false);
  const [isEditing, setIsEditing] = useState(false); // New state to handle editing

  const categories = [
    { key: "agricultural", value: "Agricultural" },
    { key: "industrial", value: "Industrial" },
    { key: "electronics", value: "Electronics" },
    { key: "chemicals", value: "Chemicals" },
    { key: "textiles", value: "Textiles" },
    { key: "jewellery", value: "Jewellery" },
    { key: "tc", value: "Tiles" },
    { key: "food", value: "Food" },
    { key: "others", value: "Others" }, // Added "others" category
  ];

  // Fetch all products from MongoDB
  const fetchProducts = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "https://kaag-server.vercel.app/api/products"
      );
      setProducts(response.data);
    } catch (error) {
      console.error("Failed to fetch products:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (isEditing) {
        // Update product if we're editing an existing one
        await axios.put(
          `https://kaag-server.vercel.app/api/products/${formData._id}`,
          formData
        );
      } else {
        // Add a new product if we're not editing
        await axios.post(
          "https://kaag-server.vercel.app/api/products",
          formData
        );
      }
      fetchProducts(); // Refresh product list
      setFormData({
        title: "",
        description: "",
        category: "",
        image: "",
      });
      setIsEditing(false); // Reset editing state after submission
    } catch (error) {
      console.error("Failed to save product:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (product) => {
    setFormData(product); // Set the form data to the product being edited
    setIsEditing(true); // Set editing state to true
  };

  const handleDelete = async (productId) => {
    setLoading(true);
    try {
      await axios.delete(
        `https://kaag-server.vercel.app/api/products/${productId}`
      );
      fetchProducts(); // Refresh product list
    } catch (error) {
      console.error("Failed to delete product:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6 text-center">
        {isEditing ? "Edit Product" : "Add New Product"}
      </h2>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md p-6 rounded space-y-4 max-w-4xl mx-auto"
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
            required
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
            required
          ></textarea>
        </div>
        <div>
          <label className="block font-semibold mb-2">Category</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          >
            <option value="">Select a category</option>
            {categories.map((category) => (
              <option key={category.key} value={category.key}>
                {category.value}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block font-semibold mb-2">Image URL</label>
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            placeholder="Enter image URL"
            required
          />
          {formData.image && (
            <img
              src={formData.image}
              alt="Product Preview"
              className="mt-4 w-32 h-32 object-cover rounded mx-auto"
            />
          )}
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 w-full sm:w-auto mx-auto"
        >
          {loading
            ? isEditing
              ? "Updating..."
              : "Adding..."
            : isEditing
            ? "Update Product"
            : "Add Product"}
        </button>
      </form>

      <div className="mt-10">
        <h2 className="text-3xl font-bold mb-6 text-center">Product List</h2>
        {loading ? (
          <p>Loading products...</p>
        ) : (
          <ul className="space-y-4">
            {products.map((product) => (
              <li
                key={product._id}
                className="bg-gray-100 p-4 rounded shadow-md flex items-center flex-wrap"
              >
                {product.image && (
                  <img
                    src={product.image} // Display image from URL
                    alt={product.title}
                    className="w-20 h-20 object-cover rounded mr-4"
                  />
                )}
                <div className="flex-1">
                  <h3 className="text-xl font-semibold">{product.title}</h3>
                  <p className="text-gray-600">{product.description}</p>
                  <p>
                    <strong>Category:</strong> {product.category}
                  </p>
                </div>
                <div className="mt-4 sm:mt-0 flex space-x-4">
                  <button
                    onClick={() => handleEdit(product)}
                    className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(product._id)}
                    className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default AddProductForm;
