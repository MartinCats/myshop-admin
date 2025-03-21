import React, { useState } from "react";
import upload_icon from "../assets/upload_icon.png";
import axios from "axios";
import { toast } from "react-toastify";
import { backend_url } from "../App";

function Add({ token }) {
  const [image1, setImage1] = useState(false);
  const [image2, setImage2] = useState(false);
  const [image3, setImage3] = useState(false);
  const [image4, setImage4] = useState(false);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("Men");
  const [subcategory, setSubCategory] = useState("Topwear");
  const [popular, setPopular] = useState(false);
  const [sizes, setSizes] = useState([]);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("category", category);
      formData.append("subCategory", subcategory);
      formData.append("popular", popular);
      formData.append("sizes", JSON.stringify(sizes));

      image1 && formData.append("image1", image1);
      image2 && formData.append("image2", image2);
      image3 && formData.append("image3", image3);
      image4 && formData.append("image4", image4);

      const response = await axios.post(
        backend_url + "/api/product/add",
        formData,
        { headers: { token } }
      );
      if(response.data.success) {
        toast.success(response.data.message)
        setName("")
        setDescription("")
        setImage1(false)
        setImage2(false)
        setImage3(false)
        setImage4(false)
        setPrice("")

      } else {
        toast.error(response.data.message)
      }
      // console.log(response.data);
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <form onSubmit={submitHandler} className="pl-8">
      <div className="flex flex-col gap-y-2 font-medium text-[15px]">
        <h3 className="h3">Upload Image</h3>
        <div className="flex gap-2 pt-2">
          <label htmlFor="image1" className="cursor-pointer">
            <img
              src={image1 ? URL.createObjectURL(image1) : upload_icon}
              className="size-16 aspect-square object-cover ring-1 ring-slate-900/10 rounded-lg"
            />
            <input
              onChange={(e) => setImage1(e.target.files[0])}
              type="file"
              name="image"
              id="image1"
              hidden
            />
          </label>
          <label htmlFor="image2" className="cursor-pointer">
            <img
              src={image2 ? URL.createObjectURL(image2) : upload_icon}
              className="size-16 aspect-square object-cover ring-1 ring-slate-900/10 rounded-lg"
            />
            <input
              onChange={(e) => setImage2(e.target.files[0])}
              type="file"
              name="image"
              id="image2"
              hidden
            />
          </label>
          <label htmlFor="image3" className="cursor-pointer">
            <img
              src={image3 ? URL.createObjectURL(image3) : upload_icon}
              className="size-16 aspect-square object-cover ring-1 ring-slate-900/10 rounded-lg"
            />
            <input
              onChange={(e) => setImage3(e.target.files[0])}
              type="file"
              name="image"
              id="image3"
              hidden
            />
          </label>
          <label htmlFor="image4" className="cursor-pointer">
            <img
              src={image4 ? URL.createObjectURL(image4) : upload_icon}
              className="size-16 aspect-square object-cover ring-1 ring-slate-900/10 rounded-lg"
            />
            <input
              onChange={(e) => setImage4(e.target.files[0])}
              type="file"
              name="image"
              id="image4"
              hidden
            />
          </label>
        </div>
        <div className="">
          <h5 className="h5">Product Name</h5>
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            type="text"
            placeholder="Type here.."
            className="px-3 py-2 ring-1 ring-slate-900/10 rounded bg-white mt-1 w-[333px] sm:w-full"
          />
        </div>
        <div>
          <h5 className="h5">Product Description</h5>
          <textarea
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            type="text"
            placeholder="Type here.."
            className="px-3 py-2 ring-1 ring-slate-900/10 rounded bg-white mt-1 w-[333px] sm:w-full"
            rows={5}
          />
        </div>
        <div>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex flex-row gap-4">
              <div>
                <h5 className="h5">Category</h5>
                <select
                  onChange={(e) => setCategory(e.target.value)}
                  className="max-w-22 px-3 py-2 text-gray-500 ring-1 ring-slate-900/10 bg-white rounded"
                >
                  <option value="Men">Men</option>
                  <option value="Women">Women</option>
                  <option value="Kids">Kids</option>
                </select>
              </div>
              <div>
                <h5 className="h5">Sub Category</h5>
                <select
                  onChange={(e) => setSubCategory(e.target.value)}
                  className="max-w-28 px-3 py-2 text-gray-500 ring-1 ring-slate-900/10 bg-white rounded"
                >
                  <option value="Topwear">Topwear</option>
                  <option value="Bottomwear">Bottomwear</option>
                  <option value="Winterwear">Winterwear</option>
                </select>
              </div>
            </div>
            <div>
              <h5 className="h5">Product Price</h5>
              <input
                onChange={(e) => setPrice(e.target.value)}
                value={price}
                type="number"
                placeholder="100"
                className="px-3 py-2 bg-white rounded max-w-24 ring-1 ring-slate-900/10"
              />
            </div>
          </div>
        </div>
        <div>
          <h5 className="h5">Product Sizes</h5>
          <div className="flex gap-3 mt-2">
            <div
              onClick={() =>
                setSizes((prev) =>
                  prev.includes("S")
                    ? prev.filter((item) => item !== "S")
                    : [...prev, "S"]
                )
              }
            >
              <span
                className={`${
                  sizes.includes("S") ? "bg-gray-600 text-white" : "bg-white"
                } text-gray-400 rounded ring-1 ring-slate-900/10 px-3 py-1 cursor-pointer`}
              >
                S
              </span>
            </div>
            <div
              onClick={() =>
                setSizes((prev) =>
                  prev.includes("M")
                    ? prev.filter((item) => item !== "M")
                    : [...prev, "M"]
                )
              }
            >
              <span
                className={`${
                  sizes.includes("M") ? "bg-gray-600 text-white" : "bg-white"
                } text-gray-400 rounded ring-1 ring-slate-900/10 px-3 py-1 cursor-pointer`}
              >
                M
              </span>
            </div>
            <div
              onClick={() =>
                setSizes((prev) =>
                  prev.includes("L")
                    ? prev.filter((item) => item !== "L")
                    : [...prev, "L"]
                )
              }
            >
              <span
                className={`${
                  sizes.includes("L") ? "bg-gray-600 text-white" : "bg-white"
                } text-gray-400 rounded ring-1 ring-slate-900/10 px-3 py-1 cursor-pointer`}
              >
                L
              </span>
            </div>
            <div
              onClick={() =>
                setSizes((prev) =>
                  prev.includes("XL")
                    ? prev.filter((item) => item !== "XL")
                    : [...prev, "XL"]
                )
              }
            >
              <span
                className={`${
                  sizes.includes("XL") ? "bg-gray-600 text-white" : "bg-white"
                } text-gray-400 rounded ring-1 ring-slate-900/10 px-3 py-1 cursor-pointer`}
              >
                XL
              </span>
            </div>
            <div
              onClick={() =>
                setSizes((prev) =>
                  prev.includes("XXL")
                    ? prev.filter((item) => item !== "XXL")
                    : [...prev, "XXL"]
                )
              }
            >
              <span
                className={`${
                  sizes.includes("XXL") ? "bg-gray-600 text-white" : "bg-white"
                } text-gray-400 rounded ring-1 ring-slate-900/10 px-3 py-1 cursor-pointer`}
              >
                XXL
              </span>
            </div>
          </div>
        </div>
        <div className="flex-start gap-2 my-2">
          <input
            onChange={() => setPopular((prev) => !prev)}
            type="checkbox"
            checked={popular}
            id="popular"
          />
          <label htmlFor="popular" className="cursor-pointer">
            Add to Popular 🔥
          </label>
        </div>
        <button type="submit" className="btn-dark mt-3 max-w-44 sm:w-full">
          Add Product
        </button>
      </div>
    </form>
  );
}

export default Add;
