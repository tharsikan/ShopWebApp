export default function Gallery() {
  return (
    <div className='grid grid-cols-2 gap-2 mt-3 sm:grid-cols-6 sm:flex-nowrap'>
      {imgs?.map((el) => {
        return (
          <div className="relative flex-grow">
            <img
              className="object-cover w-full h-20 shadow-md aspect-square brightness-50 rounded-xl "
              src={el.img}
              alt="product"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-white img-overlay">
              <p className=" text-[20px] text-stone-50">{el.value}</p>
              <p className="text-md text-yellow-400">{el.label}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
const imgs = [
  {
    img: "/assets/imgs/home/basses.png",
    label: "Basses",
    value: 3,
  },
  {
    img: "/assets/imgs/home/pedals.png",
    label: "Pedals",
    value: 8,
  },
  {
    img: "/assets/imgs/home/amps.png",
    label: "Amps",
    value: 2,
  },
  {
    img: "/assets/imgs/home/ae.png",
    label: "Audio Equipment",
    value: 10,
  },
  {
    img: "/assets/imgs/home/guis.png",
    label: "Guitars",
    value: 1,
  },
  {
    img: "/assets/imgs/home/acs.png",
    label: "Accessaries",
    value: 19,
  },
];
