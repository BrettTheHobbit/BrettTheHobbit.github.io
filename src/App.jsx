import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header/>
      <style>
        {`
          .columns-1, .columns-2 {
            width: 50%;
            float: left;
          }
        `}
      </style>
      <div style={{ height: '100vh' }}>
        <div className="columns-1" align="center">
          <h2><u>About Me:</u></h2>
          <p>Welcome to my page, I'm Brett Hobbs, a passionate computer science student specializing in artificial intelligence. With a knack for learning about as many different areas of computer science that I can.</p>

          <p>Currently I'm pursuing my Bachelor's Degree in Computer Science from Queen's University, where I participated in many extracuriclars to enhance my learning such as <a href="https://qmind.ca">QMind</a>. </p>

          <p>I have made projects using languages such as Python, JavaScript and C#, while also working with modern frameworks such as React and Pandas</p>

          <p>I am constantly seeking to update my knowledge on the best coding practices and I really enjoy working on a wide variety of projects to enforce that learning.</p>

          <p>Feel free to <a href="/contact">contact me</a> or explore my page to see some of my <a href="/portfolio">recent work</a>. Feel free to reach out to me if you want to discuss new opportunities and projects!</p>
        </div>
        <div className="columns-2" align="center">
          <p>Insert image of self here</p>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default App;
