import fatec from "../assets/fatec.png";
import logo from "../assets/logo.png";
import userImage from "../assets/user.svg";

const Header = () => {
  return (
    <div className="mb-4 flex h-20 w-full flex-row items-center justify-around bg-white px-6 shadow-md">
      <div className="flex items-center">
        <img src={fatec} alt="Logo Fatec" className="h-14" />
      </div>
      <div className="flex items-center">
        <img src={logo} alt="logo Fatecando" className="h-18" />
      </div>
      <img
        src={userImage}
        alt="Usuário"
        className="h-12 w-12 rounded-full border-2 border-blue-500 shadow-sm"
      />
    </div>
  );
};

export default Header;
