import userImage from "../../assets/user.svg";
import fatec from "../../assets/fatec.png";
import logo from "../../assets/logo.png"

interface Props { }

const Header = ({ }: Props) => {
  return (
    <div className="flex flex-row w-full h-20 bg-white shadow-md px-6 items-center justify-around mb-4">
      <div className="flex items-center">
        <img src={fatec} alt="Logo Fatec" className="h-14" />
      </div>
      <div className="flex items-center">
        <img src={logo} alt="logo Fatecando" className="h-18" />
      </div>
      <img src={userImage} alt="Usuário" className="h-12 w-12 rounded-full border-2 border-blue-500 shadow-sm" />
    </div>

  );
};

export default Header;
