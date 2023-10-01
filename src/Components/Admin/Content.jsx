import React, { useEffect, useState } from "react";
import { useFirebase } from "../../Context/firebase";
import Project from "./Project";

function Content() {
  const { projects } = useFirebase();

  return (
    <div className="w-full flex flex-wrap gap-4 mt-2">
      {/* projects box */}
      {projects.map(project => (
        <Project key={project.id} project={project} />
      ))}
    </div>
  );
}

export default Content;
