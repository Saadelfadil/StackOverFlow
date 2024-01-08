import React from "react";

const LeftNavbar = () => {
  return (
    <section className="background-light900_dark200 light-border custom-scrollbar sticky left-0 top-0 flex h-screen flex-col justify-between overflow-y-auto border-r p-6 pt-36 shadow-light-300 max-sm:hidden lg:w-[266px] dark:shadow-none">
      <div className="flex h-full flex-col gap-6 pt-16">
        {sidebarLinks.map((item) => {
          const isActive =
            (pathname.includes(item.route) && item.route.lenght > 1) ||
            pathname === item.route;
          return (
            <SheetClose asChild key={item.route}>
              <Link
                href={item.route}
                className={`${
                  isActive
                    ? "primary-gradient rounded-lg text-light-900"
                    : "text-dark300_light900"
                } flex items-center justify-start gap-4 bg-transparent p-4`}
              >
                <Image
                  src={item.imgURL}
                  alt={item.label}
                  width={20}
                  height={20}
                  className={`${isActive ? "" : "invert-colors"}`}
                />
                <p className={`${isActive ? "base-bold" : "base-medium"}`}>
                  {item.label}
                </p>
              </Link>
            </SheetClose>
          );
        })}
      </div>
    </section>
  );
};

export default LeftNavbar;