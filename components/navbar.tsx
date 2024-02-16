import Image from "next/image";

import Logo from "@/public/logo.svg";

export default function Navbar() {
  return (
    <div className="fixed w-full">
      <div className="backdrop-blur-sm">
        <div className="border-b border-rose-100">
          <div className="p-4">
            <Image src={Logo} alt="Aion Solutions" className="scale-50" />
          </div>
        </div>
      </div>
    </div>
  );
}
