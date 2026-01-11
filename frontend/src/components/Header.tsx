// src/components/AppHeader.tsx

import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export default function Header() {
  return (
    <header className="border-b bg-white">
      <div className="mx-auto flex h-14 max-w-7xl items-center px-6">
        {/* Logo / Brand */}
        <span className="text-lg font-bold text-gray-900">
          LedgerPay
        </span>

        {/* Navigation */}
        <NavigationMenu className="ml-8">
          <NavigationMenuList className="flex gap-4">
            <NavigationMenuItem>
              <NavigationMenuLink className="cursor-pointer text-sm font-medium text-gray-700 hover:text-gray-900">
                Dashboard
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink className="cursor-pointer text-sm font-medium text-gray-700 hover:text-gray-900">
                Groups
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Actions */}
        <div className="ml-auto flex items-center gap-4">
          {/* <Button size="sm" variant="outline">
            New Group
          </Button> */}

          <DropdownMenu>
            <DropdownMenuTrigger className="outline-none">
              <Avatar className="h-8 w-8">
                <AvatarFallback className="text-xs font-medium">
                  MN
                </AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end" className="w-40">
              <DropdownMenuItem className="cursor-pointer">
                Sign-up
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer text-red-600">
                Login
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}
