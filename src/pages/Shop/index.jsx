import React, { useContext, useState } from "react";
import { PostContext } from "../../Context/PostContext";
import Banner from "../../component/banner";
import AddtoCart from "../../component/AddtoCart";

function Shop() {
  const { loading, products, category } = useContext(PostContext);

  console.log(category);
  const [perPage, setPerPage] = useState(8);
  const [sort, setSort] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedDiscounts, setSelectedDiscounts] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);

  const sortedProducts = [...products].sort((a, b) => {
    if (sort === "price-low-high") return a.price - b.price;
    if (sort === "price-high-low") return b.price - a.price;
    if (sort === "title-a-z") return a.title.localeCompare(b.title);
    if (sort === "title-z-a") return b.title.localeCompare(a.title);
    return 0;
  });

  const filteredProducts = sortedProducts.filter((product) => {
    const matchesBrand =
      selectedBrands.length === 0 || selectedBrands.includes(product.brand);
    const matchesDiscount =
      selectedDiscounts.length === 0 ||
      selectedDiscounts.includes(product.discount);
    const matchesCategory =
      selectedCategories.length === 0 ||
      selectedCategories.includes(product.category);
    return matchesBrand && matchesDiscount && matchesCategory;
  });

  const totalPages = Math.ceil(filteredProducts.length / perPage);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * perPage,
    currentPage * perPage
  );

  const handleBrandChange = (brand) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );
    setCurrentPage(1);
  };

  const handleDiscountChange = (discount) => {
    setSelectedDiscounts((prev) =>
      prev.includes(discount)
        ? prev.filter((d) => d !== discount)
        : [...prev, discount]
    );
    setCurrentPage(1);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
    setCurrentPage(1);
  };

  return (
    <>
      <div className="container mx-auto px-4 py-10 flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-1/4">
          {/* Brand Filter */}
          <div className="mb-6 ">
            <h3 className="text-lg font-bold text-blue-800 mb-2 border-b">
              Product Brand
            </h3>
            <div className="grid grid-cols-2">
            {[...new Set(products.map((product) => product.brand))].map(
              (brand) => (
                <label key={brand} className="flex items-center mb-2">
                  <input
                    type="checkbox"
                    checked={selectedBrands.includes(brand)}
                    onChange={() => handleBrandChange(brand)}
                    className="mr-2"
                  />
                  <span className="text-gray-700 cursor-pointer hover:underline">{brand}</span>
                </label>
              )
            )}</div>
          </div>

          {/* Discount Filter */}
          <div className="mb-6">
            <h3 className="text-lg font-bold text-blue-800 mb-2 border-b">
              Discount Offer
            </h3>

            <div className="grid grid-cols-2">
            {[...new Set(products.map((product) => product.discount))].map(
              (discount) => (
                <label key={discount} className="flex items-center mb-2">
                  <input
                    type="checkbox"
                    checked={selectedDiscounts.includes(discount)}
                    onChange={() => handleDiscountChange(discount)}
                    className="mr-2"
                  />
                  <span className="text-gray-700 cursor-pointer hover:underline">{discount}</span>
                </label>
              )
            )}</div>
          </div>

          {/* Category Filter */}
          <div className="mb-6">
            <h3 className="text-lg font-bold text-blue-800 mb-2 border-b">
              Categories
            </h3>
            <div className="grid grid-cols-2">
              {category.map((categoryItem) => (
                <label key={categoryItem} className="flex items-center mb-2">
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes(categoryItem)}
                    onChange={() => handleCategoryChange(categoryItem)}
                    className="mr-2"
                  />
                  <span className="text-gray-700 cursor-pointer hover:underline">{categoryItem}</span>
                </label>
              ))}
              </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="w-full md:w-3/4">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
            <h2 className="text-2xl font-bold text-gray-800">
              Ecommerce Accessories & Items
            </h2>

            <div className="flex gap-4 ">
              <div>
                <label className="text-sm font-medium text-gray-700 mr-2">
                  Per Page:
                </label>
                <select
                  value={perPage}
                  onChange={(e) => {
                    setPerPage(Number(e.target.value));
                    setCurrentPage(1);
                  }}
                  className="border px-2 py-1 rounded"
                >
                  <option value={4}>4</option>
                  <option value={8}>8</option>
                  <option value={12}>12</option>
                </select>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700 mr-2">
                  Sort By:
                </label>
                <select
                  value={sort}
                  onChange={(e) => {
                    setSort(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="border px-2 py-1 rounded"
                >
                  <option value="">Default</option>
                  <option value="price-low-high">Price: Low to High</option>
                  <option value="price-high-low">Price: High to Low</option>
                  <option value="title-a-z">Title: A-Z</option>
                  <option value="title-z-a">Title: Z-A</option>
                </select>
              </div>
            </div>
          </div>

          {loading ? (
            <div className="text-center py-10">Loading...</div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-8">
              {paginatedProducts.map((item) => (
                <div key={item.id} className="bg-white p-4 rounded shadow">
                  <div className="h-48 flex justify-center items-center mb-4">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="object-contain max-w-full max-h-full"
                    />
                  </div>
                  <h3 className="text-lg font-semibold line-clamp-1">
                    {item.title}
                  </h3>
                  <div className="flex items-center my-2">
                    <span className="text-gray-700 font-semibold">
                      ${item.price}
                    </span>
                    <span className="text-gray-500 line-through ml-2">
                      ${item.originalPrice || (item.price * 1.2).toFixed(2)}
                    </span>
                  </div>
                  <div className="flex items-center mb-2">
                    <span className="text-yellow-400">★★★★★</span>
                    <span className="ml-2 text-gray-600">(4.5)</span>
                  </div>
                  <p className="text-gray-600 text-sm line-clamp-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <div className="flex justify-between mt-3">
                    <AddtoCart product={item} />
                    <button className="text-gray-500 hover:text-gray-700">
                      ❤️
                    </button>
                    <button className="text-gray-500 hover:text-gray-700">
                      👁️
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Pagination */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i + 1}
                onClick={() => setCurrentPage(i + 1)}
                className={`px-3 py-1 rounded border ${
                  currentPage === i + 1
                    ? "bg-purple-600 text-white"
                    : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </div>
      </div>

      <Banner />
    </>
  );
}

export default Shop;
