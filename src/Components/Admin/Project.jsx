import React, { useEffect, useState } from "react";
import { useFirebase } from "../../Context/firebase";
import { Link } from 'react-router-dom'

function Project({ project }) {
  const { getImageURL, deleteProject } = useFirebase();
  const [url, setUrl] = useState(null);
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(false)
    getImageURL(project.imageUrl).then((url) => setUrl(url))
    setLoading(true)
  }, [url]);

  const handleDelete = (id) => {
    if(confirm("Are you sure ?")) {
      deleteProject(id).then(() => alert("Project deleted successfully"))
    }
  }


  return (
    <div className="flex flex-col gap-2 w-[300px] bg-white shadow p-4 rounded-lg">
      {/* image */}
      {url === null ? (
        <div>loading...</div>
      ) : (
        <figure className="w-full">
        <img src={url} alt="" className="w-full" />
      </figure>
      )}
      {/* text */}
      <div className="flex flex-col gap-1">
        <h3 className="text-headingColor font-medium text-xl">
          {project.title}
        </h3>
        <p className="text-sm">{project.description}</p>
        <span className="mt-2">
          Technologies: <p className="text-sm ">{project.technologies}</p>
        </span>
      </div>
      {/* actions */}
      <div className="flex justify-between">
        <Link to={`/Update_Project/${project.id}`} className="text-primaryColor cursor-pointer">
          <i class="ri-edit-2-fill"></i>
        </Link>
        <span onClick={() => handleDelete(project.id)} className="text-[#f00] cursor-pointer">
          <i class="ri-delete-bin-5-fill"></i>
        </span>
      </div>
    </div>
  );
}

export default Project;
