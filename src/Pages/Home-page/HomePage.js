import "./HomePage.css";
import Navbar from "../../components/Navbar/Navbar";
import { Link } from "react-router-dom";


const HomePage = () => {
  return (
    <div className="Homecontainer">
      <Navbar />
      <Link to="/Login">
        <button className="homebutton">
          Get Started
        </button>
      </Link>
    </div>
  );
};
export default HomePage;



