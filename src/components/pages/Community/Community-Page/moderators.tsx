import { Icon } from "@iconify/react";
import LightBlueBtn from "../../../buttons/LightBlueBtn";
import YellowBtn from "../../../buttons/YellowBtn";

export default function Moderators() {
  return (
    <section>
      <p className="text-lg font-semibold">Moderators</p>
      <div className="space-y-2">
        {data.map((_) => (
          <p className="text-sm font-medium">{_}</p>
        ))}
      </div>
      <YellowBtn
        className={"my-5 w-full"}
        label={
          <div className="flex items-center gap-1">
            <Icon icon={"ic:outline-email"} />
            Message the mods
          </div>
        }
      />
      <LightBlueBtn label={"View All Moderators"} />
    </section>
  );
}
const data = [
  "u/SeriesOfAdjectives",
  "u/viperfan7",
  "u/ManofTheNightsWatch",
  "u/Kesha_Paul",
  "u/Mr_Quinn",
  "u/brittersbear",
  "u/Stuttero",
  "u/MAGIC_EYE_BOT",
];
