"use client";

import React, { Fragment, ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";

interface Link {
  href: string;
  active: boolean;
  className: string;
  title: string;
}

export function Navigation({
  links,
  logo,
}: {
  links?: Link[];
  logo?: ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="mr-4 hidden md:flex">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        {logo}
      </Link>
      <nav className="flex items-center space-x-6 text-sm font-medium">
        {links && links.length
          ? links.map(({ href, className, title }) => {
              return (
                <Link
                  href={href}
                  className={cn(
                    "transition-colors hover:text-foreground/80",
                    className
                    // pathname === "/docs"
                    //   ? "text-foreground"
                    //   : "text-foreground/60"
                  )}
                >
                  {title}
                </Link>
              );
            })
          : null
            // <Fragment>
            //   <Link
            //     href="/docs"
            //     className={cn(
            //       "transition-colors hover:text-foreground/80",
            //       pathname === "/docs" ? "text-foreground" : "text-foreground/60"
            //     )}
            //   >
            //     Documentation
            //   </Link>
            //   <Link
            //     href="/docs/components"
            //     className={cn(
            //       "transition-colors hover:text-foreground/80",
            //       pathname?.startsWith("/docs/components")
            //         ? "text-foreground"
            //         : "text-foreground/60"
            //     )}
            //   >
            //     Components
            //   </Link>
            //   <Link
            //     href="/examples"
            //     className={cn(
            //       "transition-colors hover:text-foreground/80",
            //       pathname?.startsWith("/examples")
            //         ? "text-foreground"
            //         : "text-foreground/60"
            //     )}
            //   >
            //     Examples
            //   </Link>
            //   <Link
            //     href={siteConfig.links.github}
            //     className={cn(
            //       "hidden text-foreground/60 transition-colors hover:text-foreground/80 lg:block"
            //     )}
            //   >
            //     GitHub
            //   </Link>
            // </Fragment>
        }
      </nav>
    </div>
  );
}
