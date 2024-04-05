import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { MdOutlineFileUpload } from "react-icons/md";
import { ImagetoBase64 } from "../utility/ImagetoBase64";
export const NewProduct = () => {
  const [data, setData] = useState({
    name: "",
    category: "",
    image: "",
    price: "",
    description: "",
  });

  // Function to resize image
  const resizeImage = (file, maxWidth, maxHeight) => {
    return new Promise((resolve, reject) => {
      const image = new Image();
      image.src = URL.createObjectURL(file);

      image.onload = () => {
        const canvas = document.createElement("canvas");
        let width = image.width;
        let height = image.height;

        // Calculate new dimensions while maintaining aspect ratio
        if (width > height) {
          if (width > maxWidth) {
            height *= maxWidth / width;
            width = maxWidth;
          }
        } else {
          if (height > maxHeight) {
            width *= maxHeight / height;
            height = maxHeight;
          }
        }

        canvas.width = width;
        canvas.height = height;

        const ctx = canvas.getContext("2d");
        ctx.drawImage(image, 0, 0, width, height);

        canvas.toBlob((blob) => {
          resolve(blob);
        }, "image/jpeg");
      };

      image.onerror = (error) => {
        reject(error);
      };
    });
  };

  // Usage
  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    const resizedImageBlob = await resizeImage(file, 300, 300);
    // Now you can upload the resized image blob to the server
  };

  const uploadImage = async (e) => {
    const file = e.target.files[0];
    const resizedImageBlob = await resizeImage(file, 300, 300); // Resize image to 300x300
    const imageDataURL = await ImagetoBase64(resizedImageBlob); // Convert resized image to base64
    setData((prevData) => ({
      ...prevData,
      image: imageDataURL,
    }));
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    console.log(data);
    setData((preve) => {
      return {
        ...preve,
        [name]: value,
      };
    });
  };
  //   const uploadImage = async(e)=>{
  //     const data = await ImagetoBase64(e.target.files[0])
  //     // console.log(data)

  //     setData((preve)=>{
  //       return{
  //         ...preve,
  //         image : data
  //       }
  //     })
  // }
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(data);

    const { name, image, category, price, description } = data;

    if (name && image && category && price && description) {
      const fetchData = await fetch(
        `${process.env.REACT_APP_SERVER_DOMAIN}/uploadProduct`,
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      const fetchRes = await fetchData.json();

      console.log(fetchRes);
      toast(fetchRes.message);

      setData(() => {
        return {
          name: "",
          category: "",
          image: "",
          price: "",
          description: "",
        };
      });
    } else {
      toast("Enter required Fields");
    }
  };

  return (
    <div className="p-4">
      <form
        className="m-auto w-full max-w-md shadow flex flex-col p-3 bg-white"
        onSubmit={handleSubmit}
      >
        <label htmlFor="name">Name</label>
        <input
          type={"text"}
          name="name"
          className="bg-slate-200 p-1 my-1"
          onChange={handleOnChange}
          value={data.name}
        />

        <label htmlFor="category">Category</label>
        <select
          className="bg-slate-200 p-1 my-1"
          id="category"
          name="category"
          onChange={handleOnChange}
          value={data.category}
        >
          <option value={"other"}>select category</option>
          <option value={"Science fiction"}>Science fiction</option>
          <option value={"Romance"}>Romance</option>
          <option value={"Horror"}>Horror</option>
          <option value={"Mystery"}>Mystery</option>
          <option value={"History"}>History</option>
          <option value={"Detective fiction"}>Detective fiction</option>
          <option value={"Fantasy"}>Fantasy</option>
          <option value={"adventure"}>Adventure</option>
          <option value={"Thriller"}>Thriller</option>
        </select>

        <label htmlFor="image">
          Image
          <div className="h-40 w-full bg-slate-200  rounded flex items-center justify-center cursor-pointer">
            {data.image ? (
              <img src={data.image} className="h-full" />
            ) : (
              <span className="text-5xl">
                <MdOutlineFileUpload />
              </span>
            )}

            <input
              type={"file"}
              accept="image/*"
              id="image"
              onChange={uploadImage}
              className="hidden"
            />
          </div>
        </label>
        <label htmlFor="price" className="my-1">
          Price
        </label>
        <input
          type={"text"}
          name="price"
          className="bg-slate-200 p-1 my-1"
          onChange={handleOnChange}
          value={data.price}
        />

        <label htmlFor="description" className="my-1">
          Description
        </label>
        <textarea
          rows={2}
          value={data.description}
          className="bg-slate-200 p-1 my-1 resize-none"
          name="description"
          onChange={handleOnChange}
        ></textarea>
        <button className="bg-slate-500 h-10 rounded hover:bg-slate-800 text-white text-lg font-medium my-2 drop-shadow">
          Save
        </button>
      </form>
    </div>
  );
};
