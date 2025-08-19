"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";

const Preloader = dynamic(() => import("./Preloader"), {
  ssr: false,
  loading: () => <div />,
});

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(pathname === "/");

  useEffect(() => {
    if (pathname === "/") {
      const timeout = setTimeout(() => {
        setIsLoading(false);
      }, 4600); // Same as your Preloader duration

      return () => clearTimeout(timeout);
    } else {
      setIsLoading(false); // Immediately disable for other pages
    }
  }, [pathname]);

  if (isLoading && pathname === "/") {
    return <Preloader />;
  }

  return <>{children}</>;
}
