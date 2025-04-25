interface CardProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

const Card = ({ title, description, image, link }: CardProps) => {
  return (
    <div className="flex flex-col w-full h-fit gap-[1.5rem] bg-white rounded-2xl shadow-lg items-center justify-center text-center hover:scale-105 transition-transform duration-300">
        <img src={image} alt={title} className="w-24 h-24 mt-4" />
        <h2 className="text-xl font-bold text-gray-700">{title}</h2>
        <p className="text-gray-600 text-sm">{description}</p>
        <a
          href={link}
          className="flex w-[100px] h-[30px] mb-4 items-center px-8 justify-center rounded-full bg-blue-500 text-white font-semibold hover:bg-blue-600 transition"
        >
          Iniciar
        </a>
    </div>
  );
};

export default Card;
