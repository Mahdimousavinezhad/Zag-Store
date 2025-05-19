import Image from "next/image";
import Link from "next/link";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  Button,
  useDisclosure,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@heroui/react";

import Cart from "../icons/Cart";
import Menu from "../icons/Menu";
import Search from "../icons/Search";
import User from "../icons/User";
import { useGetCategoriesNavbar } from "@/hooks/queries";
import Telegram from "../icons/Telegram";
import Instageram from "../icons/Instageram";
import Whatsapp from "../icons/Whatsapp";
import Email from "../icons/Email";

function Header() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { data } = useGetCategoriesNavbar();

  return (
    <header className="sm:bg-background-low-gray sm:px-20 lg:px-60">
      <div className="bg-background-low-gray h-8 max-sm:hidden"></div>
      {/* for small screen */}
      <nav className="lg:hidden container mx-auto py-2 px-4 ">
        <div className="flex items-center justify-between">
          <div>
            <Button onPress={onOpen} className="!px-0 bg-transparent">
              <Menu />
            </Button>
            <Drawer
              isOpen={isOpen}
              onOpenChange={onOpenChange}
              className="w-72"
              placement="left"
            >
              <DrawerContent>
                {(onClose) => (
                  <>
                    <DrawerHeader className="flex flex-col gap-1">
                      Sidebar
                    </DrawerHeader>
                    <DrawerBody className="flex flex-col justify-between">
                      <div>
                        <Image
                          src="/images/Logo.png"
                          alt="Logo"
                          width={300}
                          height={300}
                          className="w-30"
                        />

                        <hr className="border-violet-600 my-4" />
                        <ul className="divide-y *:py-4">
                          <li>
                            <Link href="/">Home</Link>
                          </li>
                          <li>
                            <Link href="/products">Products</Link>
                          </li>
                          <li>
                            <Link href="/contact-us">Contact us</Link>
                          </li>
                          <li>
                            <Link href="/about-us">About us</Link>
                          </li>
                        </ul>
                      </div>
                      <div className="mb-4">
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
                    </DrawerBody>
                  </>
                )}
              </DrawerContent>
            </Drawer>
          </div>
          <div className="flex items-center gap-4">
            <User color={"black"} />
            <Cart color={"black"} />
          </div>
        </div>
        <div>
          <div className="border border-gray-300 rounded-xl py-2 px-4 flex items-center gap-4 ">
            <Search />
            <input
              type="text"
              placeholder="Search products..."
              className="outline-0 w-full bg-inherit"
            />
          </div>
        </div>
      </nav>
      {/* for large screen */}
      <nav className="max-lg:hidden container mx-auto h-20 px-10 max-xl:px-2 bg-white rounded-xl flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link href="/">
            <Image
              src="/images/Logo2.png"
              alt="Logo"
              className="w-28"
              width={1000}
              height={1000}
              priority
            />
          </Link>
          <div>
            <Dropdown>
              <DropdownTrigger>
                <div className="bg-yellow-500 py-2 px-4 rounded-lg flex items-center gap-2 max-xl:hidden cursor-pointer">
                  <Menu />
                  <h3 className="font-semibold">Categories</h3>
                </div>
              </DropdownTrigger>
              <DropdownMenu
                aria-label="Static Actions"
                className="h-80 overflow-auto"
              >
                {data?.map((item) => (
                  <DropdownItem key={item.id}>
                    <Link href={item.slug} className="flex items-center gap-2">
                      {/* <Image
                        src={item.image}
                        alt="Category"
                        width={1000}
                        height={1000}
                      /> */}
                      <img
                        src={item.image}
                        alt="Category"
                        className="w-5 rounded"
                      />
                      <h4>{item.name}</h4>
                    </Link>
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
          </div>
          <ul className="flex items-center gap-4 *:text-lg">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/products">Products</Link>
            </li>
            <li className="max-2xl:hidden">
              <Link href="/about-us">About us</Link>
            </li>
            <li className="max-2xl:hidden">
              <Link href="/contact-us">Contact us</Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-3">
          <div className="cursor-pointer">
            <Search />
          </div>
          <div className="bg-blue-700 text-white rounded-lg py-2 px-4">
            <Link href="/auth" className="flex items-center gap-2">
              <User color={"white"} />
              Login / Register
            </Link>
          </div>
          <div className="bg-yellow-500 rounded-lg p-3">
            <Link href="/cart">
              <Cart color={"white"} />
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
