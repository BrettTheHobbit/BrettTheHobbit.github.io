const Contact = () => {
  return (
    <section id="contact" className="flex flex-col items-center px-6 py-24 text-center">
      <h2 className="text-3xl font-medium text-white mb-4">Get in Touch</h2>
      <p className="text-gray-400 mb-8 max-w-md">
        Whether you want to discuss an opportunity, collaborate on a project, or just say hi — feel free to reach out.
      </p>
      <div className="flex gap-6">
        <a href="bretthhobbs@gmail.com:your@email.com" className="text-white underline">Email</a>
        <a href="https://github.com/BrettTheHobbit" target="_blank" rel="noreferrer" className="text-white underline">GitHub</a>
        <a href="https://linkedin.com/in/BrettHHobbs" target="_blank" rel="noreferrer" className="text-white underline">LinkedIn</a>
      </div>
    </section>
  )
}

export default Contact