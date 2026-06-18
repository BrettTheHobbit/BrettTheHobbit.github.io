const About = () => {
  return (
    <section id="about" className="flex flex-col items-center px-6 py-24 max-w-3xl mx-auto text-center">
      <h2 className="text-3xl font-medium text-white mb-6">About Me</h2>
      <p className="text-gray-400 mb-4">
        I'm Brett Hobbs, a computer science student at Queen's University specialising in artificial intelligence, 
        with a passion for exploring as many areas of CS as I can.
      </p>
      <p className="text-gray-400 mb-4">
        During my degree I've been involved in extracurriculars like <a href="https://qmind.ca" className="text-white underline">QMind</a> to 
        deepen my learning beyond the classroom.
      </p>
      <p className="text-gray-400">
        I've built projects using Python, JavaScript, and C#, working with frameworks like React and Pandas.
      </p>
    </section>
  )
}

export default About