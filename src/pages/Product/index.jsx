import React, { useContext, useEffect, useState } from 'react';
import { PostContext } from '../../Context/PostContext';
import Banner from '../../component/banner';

function Product() {
  const { loading, products } = useContext(PostContext);

  const [perPage, setPerPage] = useState(8);
  const [sort, setSort] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const sortedProducts = [...products].sort((a, b) => {
    if (sort === 'price-low-high') return a.price - b.price;
    if (sort === 'price-high-low') return b.price - a.price;
    if (sort === 'title-a-z') return a.title.localeCompare(b.title);
    if (sort === 'title-z-a') return b.title.localeCompare(a.title);
    return 0;
  });

  const totalPages = Math.ceil(sortedProducts.length / perPage);

  const paginatedProducts = sortedProducts.slice(
    (currentPage - 1) * perPage,
    currentPage * perPage
  );

  return (
    <>
      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
          <h2 className="text-2xl font-bold text-gray-800">
            Ecommerce Accessories & Fashion Item
          </h2>

          <div className="flex gap-4">
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
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {paginatedProducts.map((item) => (
              <div key={item.id} className="bg-white p-4 rounded ">
                <div className="h-48 flex  mb-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="object-contain max-w-full"
                  />
                </div>
                <h3 className="text-lg font-semibold line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-gray-700 mt-1">${item.price}</p>
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
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>

      <Banner />
    </>
  );
}

export default Product;
