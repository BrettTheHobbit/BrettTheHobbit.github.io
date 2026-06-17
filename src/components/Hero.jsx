const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen text-center px-6">
      <p className="text-sm uppercase tracking-widest text-gray-400 mb-3">Hi, I'm</p>
      <h1 className="text-5xl font-medium text-white mb-4">Brett Hobbs</h1>
      <p className="text-xl text-gray-400 mb-4">TITLE</p>
      <p className="text-gray-400 max-w-md mb-8">
        DESCRIBER
      </p>
      <div className="flex gap-4">
        <a href="#projects" className="px-6 py-3 bg-white text-black rounded-lg text-sm font-medium">
          View my work
        </a>
        <a href="#contact" className="px-6 py-3 border border-gray-600 text-white rounded-lg text-sm font-medium">
          Get in touch
        </a>
      </div>
    </section>
  )
}

export default Hero