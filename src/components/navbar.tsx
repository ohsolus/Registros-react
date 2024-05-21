import { Link, NavLink } from "react-router-dom";

import { cn } from "../lib/utils";

import { Drawer, DrawerItem } from "./drawer";

const routes: Array<{
  title: string;
  to: string;
  isProtected: boolean;
}> = [
  {
    title: "Registro",
    to: "/signUp",
    isProtected: false,
  },
  {
    title: "Inicio de Sesión",
    to: "/login",
    isProtected: false,
  },
  {
    title: "Ofertas",
    to: "/offert",
    isProtected: true,
  },
];

export function NavBar() {
  return (
    <nav className="w-full">
      <div
        className={cn(
          "container flex items-center justify-between",
          "md:grid md:grid-cols-3"
        )}
      >
        <p className="font-medium">Registros con validaciones</p>

        <ul className="hidden md:flex md:justify-center md:gap-2">
          {routes.map((route) => (
            <NavLink
              key={route.to}
              to={route.to}
              className="font-medium text-muted-foreground transition-colors hover:text-primary aria-[current=page]:text-primary mr-8"
            >
              {route.title}
            </NavLink>
          ))}
        </ul>

        <div className="block md:hidden">
          <Drawer>
            {routes.map((route) => (
              <DrawerItem key={route.to} title={route.title} to={route.to} />
            ))}
          </Drawer>
        </div>
      </div>
    </nav>
  );
}
