export default function Skills() {
    const skills = ["JavaScript", "Python", "React", "TailwindCSS"];
    return (
      <section id="skills" className="py-10">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6">Programming Languages</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="p-4 bg-gray-200 text-center rounded-lg shadow-md"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  