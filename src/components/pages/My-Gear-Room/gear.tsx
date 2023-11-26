import React, { useEffect, useState } from 'react'
import { HTMLAttributes } from "react";

interface GearProps extends HTMLAttributes<HTMLDivElement> {
  type?: string;
}

const Gear = ({ type }: GearProps) => {
    const [gearData, setGearData] = useState(currentGear);
    useEffect(() => {
    switch (type) {
      case "current":
        setGearData(currentGear);
        break;
      case "past":
        setGearData(pastGear);
        break;
      case "want":
        setGearData(wantedGear);
        break;
      case "tested":
        setGearData(testedGear);
        break;
      default:
        setGearData(currentGear);
    }
          
}, []);

  return (
    <div className="grid grid-cols-4 gap-3 my-4  md:grid-cols-5 lg:grid-cols-10">
      {gearData.map((_,x) => {
        const verified = Math.round(Math.random() * 10) % 2 === 0;
        return (
          <div className="justify-center">
            <div
              key={x}
              className=" relative bg-gradient-to-r w-fit rounded-full p-1.5 from-[#FBBC05] to-[#FF6F00]"
            >
              <img
                className="w-16  rounded-full aspect-square ring-4 ring-white"
                src={_.img}
                alt={_.name}
              />
              {_.verified ? (
                <img
                  className="absolute bottom-0 w-6 drop-shadow aspect-square right-0"
                  src="/assets/vectors/common/blue-tick.svg"
                  alt=""
                />
              ) : (
                <img
                  className="absolute bottom-0 right-0"
                  src="/assets/vectors/common/record.svg"
                  alt=""
                />
              )}
            </div>
            <p className="text-[9px] mt-1 text-center">{_.name}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Gear


const pastGear = [
  {
    img: "/assets/imgs/gear/bass/fender/mods.png",
    name: "BassMods K24",
    verified: false,
  },
  {
    img: "/assets/imgs/gear/bass/fender/super5.png",
    name: "Kingston Super-5",
    verified: true,
  },
  {
    img: "/assets/imgs/gear/bass/fender/squier.png",
    name: "Squire Bass",
    verified: false,
  },
  {
    img: "/assets/imgs/gear/pedals/gk212.png",
    name: "GK MB-212",
    verified: true,
  },
  {
    img: "/assets/imgs/gear/pedals/gk210.png",
    name: "GK MB-210",
    verified: true,
  },
  {
    img: "/assets/imgs/gear/pedals/acoustic.png",
    name: "Acoustic B300C",
    verified: true,
  },
  {
    img: "/assets/imgs/gear/pedals/scar.png",
    name: "Scarlett interface 2i2",
    verified: true,
  },
  {
    img: "/assets/imgs/gear/pedals/umc.png",
    name: "Behringer UMC204HD",
    verified: true,
  },
  {
    img: "/assets/imgs/gear/pedals/plex.png",
    name: "GK Plex",
    verified: true,
  },
];

const currentGear = [
  {
    img: "/assets/imgs/gear/bass/fender/mtd.png",
    name: "MTD Super 5",
    verified: false,
  },
  {
    img: "/assets/imgs/gear/bass/fender/amdeluxe.png",
    name: "Fender Jazz Bass",
    verified: true,
  },
  {
    img: "/assets/imgs/gear/bass/fender/pbass70.png",
    name: "Fender P-Bass 70s",
    verified: true,
  },
  {
    img: "/assets/imgs/gear/pedals/ch1.png",
    name: "Boss CH-1",
    verified: true,
  },
  {
    img: "/assets/imgs/gear/pedals/bd2.png",
    name: "Boss BD-2",
    verified: true,
  },
  {
    img: "/assets/imgs/gear/pedals/mb212.png",
    name: "MarkBass 212",
    verified: true,
  },
  {
    img: "/assets/imgs/gear/pedals/mb210.png",
    name: "MarkBass 210",
    verified: true,
  },
  {
    img: "/assets/imgs/gear/pedals/carbon.png",
    name: "MXR Carbon",
    verified: true,
  },
  {
    img: "/assets/imgs/gear/pedals/monitor.png",
    name: "KRK Scott Storch",
    verified: true,
  },
  {
    img: "/assets/imgs/gear/pedals/volt.png",
    name: "UA Volt 276",
    verified: true,
  },
  {
    img: "/assets/imgs/gear/pedals/fusion.png",
    name: "GK Fusion 800s",
    verified: true,
  },
  {
    img: "/assets/imgs/gear/pedals/gk412.png",
    name: "GK NEO 412",
    verified: true,
  },
  {
    img: "/assets/imgs/gear/pedals/tu3.png",
    name: "Boss TU-3",
    verified: true,
  },
  {
    img: "/assets/imgs/gear/pedals/canyon.png",
    name: "Harmoniks Canyon",
    verified: true,
  },
  {
    img: "/assets/imgs/gear/pedals/oceans.png",
    name: "EH Oceans 11 ",
    verified: true,
  },

];

const testedGear = [
  {
    img: "/assets/imgs/gear/bass/fender/mtd.png",
    name: "MTD Super 5",
    verified: false,
  },
  {
    img: "/assets/imgs/gear/bass/fender/amdeluxe.png",
    name: "Fender Jazz Bass",
    verified: true,
  },
  {
    img: "/assets/imgs/gear/bass/fender/pbass70.png",
    name: "Fender P-Bass 70s",
    verified: true,
  },
  {
    img: "/assets/imgs/gear/pedals/ch1.png",
    name: "Boss CH-1",
    verified: true,
  },
  {
    img: "/assets/imgs/gear/pedals/bd2.png",
    name: "Boss BD-2",
    verified: true,
  },
  {
    img: "/assets/imgs/gear/pedals/mb212.png",
    name: "MarkBass 212",
    verified: false,
  },
  {
    img: "/assets/imgs/gear/pedals/mb210.png",
    name: "MarkBass 210",
    verified: false,
  },
  {
    img: "/assets/imgs/gear/pedals/carbon.png",
    name: "MXR Carbon",
    verified: true,
  },
  {
    img: "/assets/imgs/gear/pedals/monitor.png",
    name: "KRK Scott Storch",
    verified: false,
  },
  {
    img: "/assets/imgs/gear/pedals/volt.png",
    name: "UA Volt 276",
    verified: false,
  },
  {
    img: "/assets/imgs/gear/pedals/fusion.png",
    name: "GK Fusion 800s",
    verified: true,
  },
  {
    img: "/assets/imgs/gear/pedals/gk412.png",
    name: "GK NEO 412",
    verified: true,
  },
  {
    img: "/assets/imgs/gear/pedals/m81.png",
    name: "MXR Preamp",
    verified: true,
  },
  {
    img: "/assets/imgs/gear/pedals/plex.png",
    name: "GK Plex",
    verified: false,
  },
  {
    img: "/assets/imgs/gear/pedals/tu3.png",
    name: "Boss TU-3",
    verified: true,
  },
  {
    img: "/assets/imgs/gear/bass/fender/mods.png",
    name: "BassMods K24",
    verified: false,
  },
  {
    img: "/assets/imgs/gear/bass/fender/super5.png",
    name: "Kingston Super-5",
    verified: false,
  },
  {
    img: "/assets/imgs/gear/pedals/canyon.png",
    name: "Harmoniks Canyon",
    verified: true,
  },
  {
    img: "/assets/imgs/gear/pedals/oceans.png",
    name: "EH Oceans 11 ",
    verified: true,
  },
  {
    img: "/assets/imgs/gear/bass/fender/squier.png",
    name: "Squire Bass",
    verified: false,
  },
];
const wantedGear = [
  {
    img: "/assets/imgs/gear/bass/fender/mtd.png",
    name: "MTD Super 5",
    verified: false,
  },
  {
    img: "/assets/imgs/gear/bass/fender/amdeluxe.png",
    name: "Fender Jazz Bass",
    verified: true,
  },
  {
    img: "/assets/imgs/gear/bass/fender/pbass70.png",
    name: "Fender P-Bass 70s",
    verified: true,
  },
  {
    img: "/assets/imgs/gear/pedals/ch1.png",
    name: "Boss CH-1",
    verified: true,
  },
  {
    img: "/assets/imgs/gear/pedals/bd2.png",
    name: "Boss BD-2",
    verified: true,
  },
  {
    img: "/assets/imgs/gear/pedals/mb212.png",
    name: "MarkBass 212",
    verified: false,
  },
  {
    img: "/assets/imgs/gear/pedals/mb210.png",
    name: "MarkBass 210",
    verified: false,
  },
  {
    img: "/assets/imgs/gear/pedals/carbon.png",
    name: "MXR Carbon",
    verified: true,
  },
  {
    img: "/assets/imgs/gear/pedals/monitor.png",
    name: "KRK Scott Storch",
    verified: false,
  },
  {
    img: "/assets/imgs/gear/pedals/volt.png",
    name: "UA Volt 276",
    verified: false,
  },
  {
    img: "/assets/imgs/gear/pedals/fusion.png",
    name: "GK Fusion 800s",
    verified: true,
  },
  {
    img: "/assets/imgs/gear/pedals/gk412.png",
    name: "GK NEO 412",
    verified: true,
  },
  {
    img: "/assets/imgs/gear/pedals/m81.png",
    name: "MXR Preamp",
    verified: true,
  },
  {
    img: "/assets/imgs/gear/pedals/plex.png",
    name: "GK Plex",
    verified: false,
  },
  {
    img: "/assets/imgs/gear/pedals/tu3.png",
    name: "Boss TU-3",
    verified: true,
  },
  {
    img: "/assets/imgs/gear/bass/fender/mods.png",
    name: "BassMods K24",
    verified: false,
  },
  {
    img: "/assets/imgs/gear/bass/fender/super5.png",
    name: "Kingston Super-5",
    verified: false,
  },
  {
    img: "/assets/imgs/gear/pedals/canyon.png",
    name: "Harmoniks Canyon",
    verified: true,
  },
  {
    img: "/assets/imgs/gear/pedals/oceans.png",
    name: "EH Oceans 11 ",
    verified: true,
  },
  {
    img: "/assets/imgs/gear/bass/fender/squier.png",
    name: "Squire Bass",
    verified: false,
  },
];