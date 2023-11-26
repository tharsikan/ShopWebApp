import { cn } from "../../../helpers/utils";

export default function CardContainer() {
  return (
    <section>
      <p className="text-[18px] md:text-2xl font-semibold ml-1  mt-1">
        Shop Top Brands
      </p>
      <div className="mt-2 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
        {brands.map((record) => (
          <Card title={record.title} img={record.img} />
        ))}
      </div>
    </section>
  );
}

const Card = ({ img, title }: (typeof brands)[number]) => {
  return (
    <div className="bg-white border rounded-lg border-slate-400/20 p-1.5 ">
      <div className="bg-neutral-100 rounded-lg overflow-hidden">
        <img
          className="object-cover aspect-square object-bottom w-full  "
          src={img}
          alt=""
        />
      </div>
      <p className={cn("mt-1 text-sm text-center font-semibold")}>{title}</p>
    </div>
  );
};

const brands = [
  { title: "Fender", img: "assets/imgs/brands/fender.png" },
  { title: "Spector", img: "assets/imgs/brands/spector.png" },
  { title: "Fodera", img: "assets/imgs/brands/fodera.png" },
  { title: "Ibanez", img: "assets/imgs/brands/pearl.png" },
  { title: "Yahama", img: "assets/imgs/brands/yahama.png" },
  { title: "Jackson", img: "assets/imgs/brands/korg.png" },
  { title: "Squire", img: "assets/imgs/brands/squire.png" },
  { title: "Schecter", img: "assets/imgs/brands/schecter.png" },
];
