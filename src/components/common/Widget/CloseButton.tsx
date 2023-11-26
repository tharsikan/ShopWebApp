import { Popover } from "@headlessui/react";
import { X } from "phosphor-react";

export function CloseButton() {
  return (
    <Popover.Button
      className="top-3 right-3 absolute text-zinc-400 hover:text-zinc-100"
      title="Close feedback form"
    >
      <X weight="bold" className="w-5 h-5" />
    </Popover.Button>
  );
}
