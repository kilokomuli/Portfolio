export default function About() {
    return (
      <section id="about" className="py-10 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-gray-700">
            Hi, I'm a passionate developer who loves building solutions. My interests lie in
            <span className="text-blue-500"> {`web development, software engineering, and problem-solving.`}</span>
          </p>
        </div>
      </section>
    );
  }