import Image from "next/image";
import Link from "next/link";
import Telegram from "../icons/Telegram";
import Instageram from "../icons/Instageram";
import Whatsapp from "../icons/Whatsapp";
import Email from "../icons/Email";

function Footer() {
  return (
    <>
      <div className="container mx-auto px-10 py-12 lg:px-50 flex items-center justify-between flex-wrap gap-4">
        <div>
          <Image
            src="/images/Logo.png"
            alt="Logo"
            width={300}
            height={300}
            className="w-30"
          />
        </div>
        <div>
          <ul className="*:text-lg *:text-gray-600 *:my-3">
            <li className="font-bold text-gray-700 !text-xl">Quick Access</li>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link href="/contact-us">Contact us</Link>
            </li>
          </ul>
        </div>
        <div>
          <ul className="*:text-lg *:text-gray-600 *:my-3 ">
            <li className="font-bold text-gray-700 !text-xl">FAQ</li>
            <li>
              <Link href="/contact-us">How to connect supporter</Link>
            </li>
            <li>
              <Link href="/about-us">About us</Link>
            </li>
            <li>
              <Link href="/">How you can trust us</Link>
            </li>
          </ul>
        </div>
        <div className="*:my-5">
          <h3 className="font-bold text-gray-700 !text-xl">The Announcement</h3>
          <div className="flex items-center border border-gray-400 rounded-lg">
            <button className="bg-violet-500 text-white rounded-lg py-2 px-4">
              Send
            </button>
            <input
              type="text"
              placeholder="Enter your phone number"
              className="py-1 px-3 outline-0 w-full rounded-lg"
            />
          </div>
          <div>
            <ul className="flex items-center gap-3">
              <li className="bg-gray-300 px-2 py-2.5 rounded-xl cursor-pointer">
                <Telegram />
              </li>
              <li className="bg-gray-300 p-2 rounded-xl cursor-pointer">
                <Instageram />
              </li>
              <li className="bg-gray-300 p-2 rounded-xl cursor-pointer">
                <Whatsapp />
              </li>
              <li className="bg-gray-300 p-2 rounded-xl cursor-pointer">
                <Email />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-gray-200 text-center py-4">
        <h3 className="text-gray-700 font-bold">
          All material and intellectual property rights of the courses belong to
          this website.
        </h3>
      </div>
    </>
  );
}

export default Footer;
