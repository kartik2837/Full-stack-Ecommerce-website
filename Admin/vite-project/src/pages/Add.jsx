
// import React, { useState } from 'react';
// import { assets } from '../assets/assets';
// import axios from 'axios';
// import { backendUrl } from '../App';
// import { toast } from 'react-toastify';

// const Add = ({ token }) => {
//     const [images, setImages] = useState([null, null, null, null]);
//     const [name, setName] = useState("");
//     const [description, setDescription] = useState("");
//     const [price, setPrice] = useState("");
//     const [category, setCategory] = useState("men");
//     const [subCategory, setSubCategory] = useState("Topwear");
//     const [bestSeller, setBestSeller] = useState(false);
//     const [sizes, setSizes] = useState([]);

//     const handleSizeClick = (size) => {
//         setSizes((prevSizes) => {
//             if (prevSizes.includes(size)) {
//                 return prevSizes.filter((item) => item !== size);
//             } else {
//                 return [...prevSizes, size];
//             }
//         });
//     };

//     const handleImageChange = (index, e) => {
//         const file = e.target.files[0];
//         if (file && file.type.startsWith('image/')) {
//             const newImages = [...images];
//             newImages[index] = file;
//             setImages(newImages);
//         } else {
//             alert('Please upload an image file');
//         }
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const formData = new FormData();
//             formData.append("name", name);
//             formData.append("description", description);
//             formData.append("price", price);
//             formData.append("category", category);
//             formData.append("subCategory", subCategory);
//             formData.append("bestseller", bestSeller);
//             formData.append("sizes", JSON.stringify(sizes));

//             // Append the image files to formData
//             images.forEach((image, index) => {
//                 if (image) {
//                     formData.append(`image${index + 1}`, image);
//                 }
//             });

//             const response = await axios.post(backendUrl + "/api/product/add", formData, { headers: { token } });
//             if (response.data.success) {
//                 toast.success(response.data.message)
//                 setName('')
//                 setDescription('')
//                 setImages(false)
//                 setPrice('')

//             } else {
//                 toast.error(response.data.message)
//             }
//         } catch (error) {
//             console.log(error);

//             toast.error(error.message)
//         }
//     };

//     return (
//         <form className="flex flex-col w-full items-start gap-3" onSubmit={handleSubmit}>
//             <div>
//                 <p className="mb-2">Upload Images</p>
//                 <div className="flex gap-2">
//                     {images.map((image, index) => (
//                         <label key={index} htmlFor={`image${index + 1}`}>
//                             <img className="w-20" src={image ? URL.createObjectURL(image) : assets.upload_area} alt="" />
//                             <input
//                                 onChange={(e) => handleImageChange(index, e)}
//                                 type="file"
//                                 id={`image${index + 1}`}
//                                 hidden
//                             />
//                         </label>
//                     ))}
//                 </div>
//             </div>

//             <div className="w-full">
//                 <p className="mb-2 font-semibold">Product Name</p>
//                 <input
//                     className="w-full max-w-[500px] px-3 py-2"
//                     type="text"
//                     placeholder="Product Added"
//                     required
//                     value={name}
//                     onChange={(e) => setName(e.target.value)}
//                 />
//             </div>

//             <div className="w-full">
//                 <p className="mb-2 font-semibold">Product Description</p>
//                 <textarea
//                     className="w-full max-w-[500px] px-3 py-2"
//                     placeholder="Write Description..."
//                     required
//                     value={description}
//                     onChange={(e) => setDescription(e.target.value)}
//                 />
//             </div>

//             <div className="flex flex-col sm:flex-row gap-2 w-full sm:gap-8">
//                 <div>
//                     <p className="mb-2 font-semibold">Product Category</p>
//                     <select
//                         className="w-full px-3 py-2"
//                         value={category}
//                         onChange={(e) => setCategory(e.target.value)}
//                     >
//                         <option value="men">Men</option>
//                         <option value="women">Women</option>
//                         <option value="kids">Kids</option>
//                     </select>
//                 </div>
//                 <div>
//                     <p className="mb-2 font-semibold">Sub Category</p>
//                     <select
//                         className="w-full px-3 py-2"
//                         value={subCategory}
//                         onChange={(e) => setSubCategory(e.target.value)}
//                     >
//                         <option value="Topwear">Topwear</option>
//                         <option value="Bottomwear">Bottomwear</option>
//                         <option value="Winterwear">Winterwear</option>
//                     </select>
//                 </div>
//                 <div>
//                     <p className="mb-2 font-semibold text-red-600">Product Price</p>
//                     <input
//                         className="w-full px-3 py-2 sm:w-[120px] font-bold"
//                         type="number"
//                         placeholder="Price"
//                         value={price}
//                         onChange={(e) => setPrice(e.target.value)}
//                     />
//                 </div>
//             </div>

//             <div>
//                 <p className="mb-2 font-semibold text-black">Product Sizes</p>
//                 <div className="flex gap-3">
//                     {['S', 'M', 'L', 'XL', 'XXL'].map((size) => (
//                         <div key={size}>
//                             <p
//                                 className={`bg-slate-200 px-3 py-1 cursor-pointer ${sizes.includes(size) ? 'bg-red-600' : ''}`}
//                                 onClick={() => handleSizeClick(size)}
//                             >
//                                 {size}
//                             </p>
//                         </div>
//                     ))}
//                 </div>
//             </div>

//             <div className="flex gap-2 mb-2">
//                 <input
//                     type="checkbox"
//                     id="bestseller"
//                     checked={bestSeller}
//                     onChange={() => setBestSeller(!bestSeller)}
//                 />
//                 <label className="cursor-pointer" htmlFor="bestseller">
//                     Add To Bestseller
//                 </label>
//             </div>

//             <button type="submit" className="w-28 py-3 mt-4 bg-blue-600 text-white cursor-pointer font-semibold">
//                 Submit
//             </button>
//         </form>
//     );
// };

// export default Add;





import React, { useState } from 'react';
import { assets } from '../assets/assets';
import axios from 'axios';
import { backendUrl } from '../App';
import { toast } from 'react-toastify';

const Add = ({ token }) => {
    const [images, setImages] = useState([null, null, null, null]);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("men");
    const [subCategory, setSubCategory] = useState("Topwear");
    const [bestSeller, setBestSeller] = useState(false);
    const [sizes, setSizes] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleSizeClick = (size) => {
        setSizes((prevSizes) => {
            if (prevSizes.includes(size)) {
                return prevSizes.filter((item) => item !== size);
            } else {
                return [...prevSizes, size];
            }
        });
    };

    const handleImageChange = (index, e) => {
        const file = e.target.files[0];
        if (file && file.type.startsWith('image/')) {
            const newImages = [...images];
            newImages[index] = file;
            setImages(newImages);
        } else {
            alert('Please upload an image file');
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (price <= 0) {
            toast.error('Please enter a valid price');
            return;
        }
        if (images.every((image) => !image)) {
            toast.error('Please upload at least one image');
            return;
        }
        setLoading(true);
        try {
            const formData = new FormData();
            formData.append("name", name);
            formData.append("description", description);
            formData.append("price", price);
            formData.append("category", category);
            formData.append("subCategory", subCategory);
            formData.append("bestseller", bestSeller);
            formData.append("sizes", JSON.stringify(sizes));

            // Append the image files to formData
            images.forEach((image, index) => {
                if (image) {
                    formData.append(`image${index + 1}`, image);
                }
            });

            const response = await axios.post(backendUrl + "/api/product/add", formData, { headers: { token } });
            if (response.data.success) {
                toast.success(response.data.message);
                // Reset state after success
                setName('');
                setDescription('');
                setPrice('');
                setImages([null, null, null, null]);
                setCategory('men');
                setSubCategory('Topwear');
                setSizes([]);
                setBestSeller(false);
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <form className="flex flex-col w-full items-start gap-3" onSubmit={handleSubmit}>
            <div>
                <p className="mb-2">Upload Images</p>
                <div className="flex gap-2">
                    {images.map((image, index) => (
                        <label key={index} htmlFor={`image${index + 1}`}>
                            <img className="w-20" src={image ? URL.createObjectURL(image) : assets.upload_area} alt="Product" />
                            <input
                                onChange={(e) => handleImageChange(index, e)}
                                type="file"
                                id={`image${index + 1}`}
                                hidden
                            />
                        </label>
                    ))}
                </div>
            </div>

            <div className="w-full">
                <p className="mb-2 font-semibold">Product Name</p>
                <input
                    className="w-full max-w-[500px] px-3 py-2"
                    type="text"
                    placeholder="Product Name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>

            <div className="w-full">
                <p className="mb-2 font-semibold">Product Description</p>
                <textarea
                    className="w-full max-w-[500px] px-3 py-2"
                    placeholder="Write Description..."
                    required
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </div>

            <div className="flex flex-col sm:flex-row gap-2 w-full sm:gap-8">
                <div>
                    <p className="mb-2 font-semibold">Product Category</p>
                    <select
                        className="w-full px-3 py-2"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    >
                        <option value="men">Men</option>
                        <option value="women">Women</option>
                        <option value="kids">Kids</option>
                    </select>
                </div>
                <div>
                    <p className="mb-2 font-semibold">Sub Category</p>
                    <select
                        className="w-full px-3 py-2"
                        value={subCategory}
                        onChange={(e) => setSubCategory(e.target.value)}
                    >
                        <option value="Topwear">Topwear</option>
                        <option value="Bottomwear">Bottomwear</option>
                        <option value="Winterwear">Winterwear</option>
                    </select>
                </div>
                <div>
                    <p className="mb-2 font-semibold text-red-600">Product Price</p>
                    <input
                        className="w-full px-3 py-2 sm:w-[120px] font-bold"
                        type="number"
                        placeholder="Price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                </div>
            </div>

            <div>
                <p className="mb-2 font-semibold text-black">Product Sizes</p>
                <div className="flex gap-3">
                    {['S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                        <div key={size}>
                            <p
                                className={`bg-slate-200 px-3 py-1 cursor-pointer ${sizes.includes(size) ? 'bg-red-600' : ''}`}
                                onClick={() => handleSizeClick(size)}
                            >
                                {size}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex gap-2 mb-2">
                <input
                    type="checkbox"
                    id="bestseller"
                    checked={bestSeller}
                    onChange={() => setBestSeller(!bestSeller)}
                />
                <label className="cursor-pointer" htmlFor="bestseller">
                    Add To Bestseller
                </label>
            </div>

            <button
                type="submit"
                className="w-28 py-3 mt-4 bg-blue-600 text-white cursor-pointer font-semibold"
                disabled={loading}
            >
                {loading ? 'Submitting...' : 'Submit'}
            </button>
        </form>
    );
};

export default Add;
