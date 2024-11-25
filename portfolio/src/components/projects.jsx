export default function Projects() {
    const projects = [
      { name: "Project One", description: "A cool project.", link: "#" },
      { name: "Project Two", description: "Another awesome project.", link: "#" },
    ];
  
    return (
      <section id="projects" className="py-10">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div key={index} className="p-4 border rounded-lg shadow-md">
                <h3 className="text-xl font-bold">{project.name}</h3>
                <p>{project.description}</p>
                <a
                  href={project.link}
                  className="text-blue-500 hover:underline mt-2 block"
                >
                  View Project
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  