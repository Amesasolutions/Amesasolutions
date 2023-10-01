import React, { useState } from "react";
import { useFirebase } from "../../Context/firebase";
import { useNavigate } from "react-router-dom";

function AddContent() {
  const { createProject } = useFirebase();
  const navigate = useNavigate()

  const [title, setTitle] = useState("")
  const [siteUrl, setSiteUrl] = useState("")
  const [description, setDescription] = useState("")
  const [technologies, setTechnologies] = useState("")
  const [image, setImage] = useState(null)

  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true)

    await createProject(title, siteUrl, description, technologies, image).then(() => {
      alert("Project added successfully")
      navigate('/admin')
    })

    setLoading(false)
  }

  return (
    <div className="w-full h-screen mt-2">
      <form 
      onSubmit={handleSubmit}
      className="bg-white shadow w-1/2 flex flex-col gap-3 p-12">
         <div className="flex flex-col w-full">
          <input
            id="input"
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            placeholder="Title"
            required
            className="w-full bg-gray-100  rounded text-lg p-3 outline-none"
          />
          <label id="line-hover" htmlFor=""></label>
        </div>
        <div className="flex flex-col w-full">
          <input
            id="input"
            type="text"
            onChange={(e) => setSiteUrl(e.target.value)}
            value={siteUrl}
            required
            placeholder="Site Url"
            className="w-full bg-gray-100  rounded text-lg p-3 outline-none"
          />
          <label id="line-hover" htmlFor=""></label>
        </div>

        <div className="flex flex-col w-full">
          <textarea
            className="w-full bg-gray-100 rounded outline-none p-3 resize-none"
            placeholder="Description "
            id="input"
            cols="20"
            rows="5"
            required
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          ></textarea>
          <label id="line-hover" htmlFor=""></label>
        </div>

        <div className="flex flex-col w-full">
          <input
            id="input"
            type="text"
            onChange={(e) => setTechnologies(e.target.value)}
            value={technologies}
            required
            placeholder="Technologies"
            className="w-full bg-gray-100  rounded text-lg p-3 outline-none"
          />
          <label id="line-hover" htmlFor=""></label>
        </div>

        <div className="flex items-center gap-3 w-full cursor-pointer">
          <input
            id="input"
            type="file"
            required
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
            className="w-full bg-gray-100  rounded text-lg p-3 outline-none text-txtSmallColor"
          />
          {/* <span className="bg-primaryColor p-3 text-white rounded-lg">
            Upload Image
          </span>
          <p>No file chosen</p> */}

          <label id="line-hover" htmlFor=""></label>
        </div>

        <button
          type="submit"
          className="w-full bg-primaryColor flex gap-3 items-center justify-center p-3 px-4 border border-solid border-primaryColor
              rounded-[5px] text-white hover:bg-white hover:text-primaryColor ease duration-200"
        >
          {!loading ? "Add Project" : "Loading..."}
        </button>
      </form>
    </div>
  );
}

export default AddContent;
