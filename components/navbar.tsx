'use client';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import Link from 'next/link';
import TempleTimeStatus from './temple-time-status';
import Image from 'next/image';
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarShortcut,
} from '@/components/ui/menubar';
import TranslateIcon from './icons/translate-icon';

const Navbar = () => {
  return (
    <nav className="w-full sticky top-0 shadow-md bg-white z-10 py-2">
      <div className="container mx-auto md:px-auto flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <Link href="/">
            <Image
              src="/images/logo/iskcon-asansol-logo.svg"
              width={60}
              height={60}
              alt="logo"
            />
          </Link>
        </div>

        <div className="flex gap-4">
          <TempleTimeStatus className='cursor-pointer hover:bg-slate-100'/>
          <div className="hidden lg:block">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Iskcon</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="md:w-[200px]">
                      <li>
                        <Link href="/iskcon/history" legacyBehavior passHref>
                          <NavigationMenuLink
                            className={navigationMenuTriggerStyle()}
                          >
                            History
                          </NavigationMenuLink>
                        </Link>
                      </li>
                      <li>
                        <Link href="/iskcon/philosophy" legacyBehavior passHref>
                          <NavigationMenuLink
                            className={navigationMenuTriggerStyle()}
                          >
                            Philosophy
                          </NavigationMenuLink>
                        </Link>
                      </li>
                      <li>
                        <Link href="/iskcon/founder" legacyBehavior passHref>
                          <NavigationMenuLink
                            className={navigationMenuTriggerStyle()}
                          >
                            Founder
                          </NavigationMenuLink>
                        </Link>
                      </li>
                      <li className="">
                        <Link href="/iskcon/vaishnava-calendar" legacyBehavior passHref>
                          <NavigationMenuLink
                            className={navigationMenuTriggerStyle()}
                          >
                            Vaishnava Calendar
                          </NavigationMenuLink>
                        </Link>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/donation" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Donation
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/activities" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Activities
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/festivals" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Festivals
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/members" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Membership
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className='hidden'>
            <Menubar>
              <MenubarMenu>
                <MenubarTrigger>
                  <TranslateIcon />
                </MenubarTrigger>
                <MenubarContent>
                  <MenubarItem>English</MenubarItem>
                  <MenubarItem>Bengali</MenubarItem>
                </MenubarContent>
              </MenubarMenu>
            </Menubar>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
