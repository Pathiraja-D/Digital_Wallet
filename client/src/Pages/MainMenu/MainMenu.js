import "./MainMenu.css";
import NavbarlogOut from "./NavbarlogOut";

const MainMenu = () => {
  return (
    <div className="HomecontainerMain">
      <NavbarlogOut />
      <div className="box-out1"></div>
      <div className="button-wrapper">
        <div className="button-wrapper1">
          <button>TOP UP</button>
        </div>
        <div className="button-wrapper1">
          <button>TRANSACTIONS</button>
        </div>
        <div className="button-wrapper1">
          <button>ACCOUNT</button>
        </div>
      </div>
    </div>
  );
};
export default MainMenu;
