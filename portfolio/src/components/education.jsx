export default function Education() {
    return (
      <section id="education" className="py-10 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Education</h2>
          <p>Bachelor of Science in Computer Science - XYZ University</p>
          <a
            href="/cv.pdf"
            download
            className="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded"
          >
            Download CV
          </a>
        </div>
      </section>
    );
  }
  