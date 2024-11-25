export default function ContactForm() {
    return (
      <section id="contact" className="py-10 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6">Contact Me</h2>
          <form className="max-w-lg mx-auto space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full p-2 border rounded"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 border rounded"
            />
            <textarea
              placeholder="Message"
              className="w-full p-2 border rounded"
              rows="4"
            ></textarea>
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    );
  }
  