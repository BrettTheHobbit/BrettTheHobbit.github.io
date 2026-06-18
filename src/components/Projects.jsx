const projects = [
  {
    name: "Project One",
    description: "A short description of what this project does.",
    url: "https://github.com/BrettTheHobbit/your-repo-name",
    tags: ["React", "JavaScript"],
  },
  {
    name: "Project Two",
    description: "A short description of what this project does.",
    url: "https://github.com/BrettTheHobbit/your-repo-name",
    tags: ["Python", "Pandas"],
  },
]

const Projects = () => {
  return (
    <section id="projects" className="px-6 py-24 max-w-5xl mx-auto">
      <h2 className="text-3xl font-medium text-white text-center mb-12">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <a
            key={project.name}
            href={project.url}
            target="_blank"
            rel="noreferrer"
            className="border border-gray-800 rounded-xl p-6 hover:border-gray-600 transition-colors"
          >
            <h3 className="text-white font-medium text-lg mb-2">{project.name}</h3>
            <p className="text-gray-400 text-sm mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="text-xs px-2 py-1 bg-gray-800 text-gray-300 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}

export default Projects