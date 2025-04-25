interface Props {
  title: string;
  imageURL: string;
}

const InitiateButton = ({ title, imageURL }: Props) => {
  return (
    <div className="flex flex-col items-center gap-4 w-[320px] h-[440px] rounded-[20px] border-4 border-white bg-gradient-to-br from-[#FF4E4E] via-[#2F0000] to-[#FF4E4E] shadow-xl hover:scale-105 transition-transform duration-300">
      <img
        src={imageURL}
        className="w-[90%] h-[200px] mt-4 object-cover rounded-[10px] shadow-md"
        alt={title}
      />
      <p className="text-white text-[26px] font-semibold tracking-wide text-center drop-shadow-md">{title}</p>
      <button className="w-[240px] h-[70px] rounded-full bg-yellow-400 hover:bg-yellow-300 transition duration-300 shadow-lg">
        <p className="text-white text-[22px] font-bold drop-shadow-sm">Iniciar</p>
      </button>
    </div>
  );
};

export default InitiateButton;
