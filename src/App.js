import "./App.css";
import Navbar from "./navbar/Navbar";
import FormField from "./formfield/FormField";
import CoolButton from "./coolbutton/CoolButton";
// import Signup from "./Signup";
// 👆 uncomment this for Iteration 4

function App() {
  return (
    <div className="App">
      <Navbar />
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField
        label="Email"
        type="email"
        placeholder="e.g alexsmith@hotmail.com"
      />

      <CoolButton isSmall isDanger className="is-rounded my class">
        Button 1
      </CoolButton>
      <CoolButton isSmall isSuccess className="green-btn my class">
        Button 2
      </CoolButton>
      {/* Iteration 4 needs to be uncommented/commented 👇*/}
      {/* <Signup /> */}
    </div>
  );
}

export default App;
