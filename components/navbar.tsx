'use client';

import IskconLogoIcon from '@/app/icons/iskcon-logo-icon';
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

const Navbar = () => {
  return (
    <nav className="w-full sticky top-0 shadow-md bg-white z-10">
      <div className="container mx-auto md:px-auto flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <Link href="/">
            <IskconLogoIcon className="w-20 h-20" />
          </Link>
        </div>

        <div className="flex gap-4">
          <TempleTimeStatus />

          <div className="hidden md:block">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Iskcon</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="md:w-[200px]">
                      <li>
                        <Link href="/history" legacyBehavior passHref>
                          <NavigationMenuLink
                            className={navigationMenuTriggerStyle()}
                          >
                            History
                          </NavigationMenuLink>
                        </Link>
                      </li>
                      <li>
                        <Link href="/philosophy" legacyBehavior passHref>
                          <NavigationMenuLink
                            className={navigationMenuTriggerStyle()}
                          >
                            Philosophy
                          </NavigationMenuLink>
                        </Link>
                      </li>
                      <li>
                        <Link href="/founder" legacyBehavior passHref>
                          <NavigationMenuLink
                            className={navigationMenuTriggerStyle()}
                          >
                            Founder
                          </NavigationMenuLink>
                        </Link>
                      </li>
                      <li className="">
                        <Link href="/about-us" legacyBehavior passHref>
                          <NavigationMenuLink
                            className={navigationMenuTriggerStyle()}
                          >
                            About Us
                          </NavigationMenuLink>
                        </Link>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/projects" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Projects
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
                      Members
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
