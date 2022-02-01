import "./Companion.css";
import { Popover } from "@headlessui/react";

export default function Companion({
  isCompanionvisible,
  setIsCompanionvisible,
}) {
  return (
    <div className="companion-frame">
      <Popover className="popover">
        <Popover.Panel className="thought">
          I'm the bubble text Lorum ipsum Lorum ipsum Lorum ipsum Lorum ipsum
        </Popover.Panel>
        <Popover.Button className="turtle"></Popover.Button>
      </Popover>
    </div>
  );
}
