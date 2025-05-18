interface Props {
  title: string;
  imageURL: string;
}

export const InitiateButtonComponent = ({ title, imageURL }: Props) => {
  return (
    <div className="flex h-[440px] w-[320px] flex-col items-center gap-4 rounded-[20px] border-4 border-white bg-gradient-to-br from-[#FF4E4E] via-[#2F0000] to-[#FF4E4E] shadow-xl transition-transform duration-300 hover:scale-105">
      <img
        src={imageURL}
        className="mt-4 h-[200px] w-[90%] rounded-[10px] object-cover shadow-md"
        alt={title}
      />
      <p className="text-center text-[26px] font-semibold tracking-wide text-white drop-shadow-md">
        {title}
      </p>
      <button className="h-[70px] w-[240px] rounded-full bg-yellow-400 shadow-lg transition duration-300 hover:bg-yellow-300">
        <p className="text-[22px] font-bold text-white drop-shadow-sm">
          Iniciar
        </p>
      </button>
    </div>
  );
};
