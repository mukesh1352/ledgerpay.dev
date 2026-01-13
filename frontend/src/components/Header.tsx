import { useEffect, useState } from "react"
import { useNavigate, useLocation } from "react-router-dom"

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
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { isLoggedIn, logout } from "../lib/auth"

export default function Header() {
  const [loggedIn, setLoggedIn] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  // 🔁 Re-check auth on route change
  useEffect(() => {
    setLoggedIn(isLoggedIn())
  }, [location.pathname])

  // 🚪 Proper logout
  const handleLogout = () => {
    logout()
    setLoggedIn(false)
    navigate("/login")
  }

  return (
    <header className="border-b bg-white">
      <div className="mx-auto flex h-14 max-w-7xl items-center px-6">
        {/* Brand */}
        <span
          onClick={() => navigate("/")}
          className="cursor-pointer text-lg font-semibold text-gray-900"
        >
          LedgerPay
        </span>

        {/* Navigation (only when logged in) */}
        {loggedIn && (
          <NavigationMenu className="ml-8">
            <NavigationMenuList className="flex gap-6">
              <NavigationMenuItem>
                <NavigationMenuLink
                  onClick={() => navigate("/dashboard")}
                  className="cursor-pointer text-sm font-medium text-gray-700 hover:text-gray-900"
                >
                  Dashboard
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink
                  onClick={() => navigate("/groups")}
                  className="cursor-pointer text-sm font-medium text-gray-700 hover:text-gray-900"
                >
                  Groups
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        )}

        {/* Right Actions */}
        <div className="ml-auto flex items-center gap-4">
          {!loggedIn ? (
            <>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => navigate("/login")}
              >
                Login
              </Button>
              <Button
                size="sm"
                onClick={() => navigate("/signup")}
              >
                Sign up
              </Button>
            </>
          ) : (
            <DropdownMenu>
              <DropdownMenuTrigger className="outline-none">
                <Avatar className="h-8 w-8">
                  <AvatarFallback className="text-xs font-medium">
                    MN
                  </AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>

              <DropdownMenuContent align="end" className="w-40">
                <DropdownMenuItem
                  className="cursor-pointer"
                  onClick={() => navigate("/profile")}
                >
                  Profile
                </DropdownMenuItem>

                <DropdownMenuSeparator />

                <DropdownMenuItem
                  className="cursor-pointer text-red-600"
                  onClick={handleLogout}
                >
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </div>
      </div>
    </header>
  )
}
