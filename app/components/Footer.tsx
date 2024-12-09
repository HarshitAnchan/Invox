"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SocialIcon } from "react-social-icons";

export default function Footer() {
  const pathname = usePathname();
  const paths = ["/dashboard", "/profile", "/login", "/signup"];

  return (
    <footer
      id="footer"
      className={`${
        paths.includes(pathname) && "hidden"
      } w-full relative bottom-0 h-[35vh] mt-20 flex flex-col items-center py-5 bg-[#DAF872] md:rounded-t-[350px] rounded-t-[100px]`}
    >
      <div className="w-full text-center">
        <h3 className="text-[#252525] font-bold text-3xl">Invox.</h3>
        <p className="md:text-base text-xs px-10 font-medium py-3">
          Invox makes invoicing simple and efficient. Create, manage, and send
          professional invoices in just a few clicks.
        </p>
      </div>
      <div className="py-2">
        <SocialIcon
          network="github"
          className="mx-2 cursor-pointer"
          href="https://github.com/HarshitAnchan"
          style={{ height: "30px", width: "30px" }}
        />
        <SocialIcon
          network="x"
          className="mx-2 cursor-pointer"
          href="https://x.com/harshit_anchan"
          style={{ height: "30px", width: "30px" }}
        />
      </div>
      <div className="flex md:flex-row flex-col-reverse w-full items-center justify-around absolute bottom-5 text-[#252525] font-medium md:text-sm text-xs py-2">
        <p>© 2024 Invox. All rights reserved.</p>
        <div className="flex items-center md:py-0 py-4">
          <p className="mx-3">
            <Link href={"/terms"}>Terms of Service</Link>
          </p>
          <p className="mx-3">
            <Link href={"/privacy"}>Privacy Policy</Link>
          </p>
          <p className="mx-3">
            <Link href={"/contact"}>Contact Us</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
