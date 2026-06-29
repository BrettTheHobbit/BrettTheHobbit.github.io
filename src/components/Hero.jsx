const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen text-center px-6">
      <p className="text-sm uppercase tracking-widest text-gray-400 mb-3">Hi, I'm</p>
      <h1 className="text-5xl font-medium text-white mb-4">Brett Hobbs</h1>
      <p className="text-xl text-gray-400 mb-4">Computer Science Graduate</p>
      <p className="text-gray-400 max-w-md mb-8">
        I'm Brett Hobbs, a Computer Science graduate from Queen's University specialising in Artificial Intelligence. I'm passionate about exploring as many areas of CS as I can — from building web apps to researching how AI can be made more trustworthy in high-stakes settings like healthcare.
During my degree I've been involved in QMind, Queen's AI consulting team, and completed an undergraduate thesis evaluating Explainable AI frameworks for clinical epilepsy diagnosis. Outside of academics I've taken on freelance web development work and enjoy building personal projects to keep learning.
I'm currently looking for opportunities where I can contribute, grow, and keep building things.
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