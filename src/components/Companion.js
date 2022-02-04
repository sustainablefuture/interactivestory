import "./styles/Companion.css";
import { Popover } from "@headlessui/react";

export default function Companion() {
  return (
    <div className="companion-frame">
      <Popover className="popover">
        <Popover.Panel className="thought">
          I'm the bubble text Lorum ipsum Lorum ipsum Lorum ipsum Lorum ipsum
        </Popover.Panel>
        <Popover.Button className="companion"></Popover.Button>
      </Popover>
    </div>
  );
}

// checked
// need to modify behavior when popup appears
// do we want permanent animation?
