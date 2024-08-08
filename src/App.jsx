//import ButtonGradient from './assets/svg/ButtonGradient';
//import Button from "./components/Button";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {

  return (//only displays bottom most element???????
    <>
      <h1>Testing Function</h1>
      <Header/>
        <div style={{ height: '200vh' }}>
          <p>Body Text</p>
        </div>
      <Footer/>
    </>
  )
  
}

export default App
