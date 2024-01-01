import React from "react";

const LeftNavbar = () => {
  return (
    <section className="background-light900_dark200 light-border custom-scrollbar sticky left-0 top-0 flex h-screen flex-col justify-between overflow-y-auto border-r p-6 pt-36 shadow-light-300 max-sm:hidden lg:w-[266px] dark:shadow-none">
      <Sheet>
        <SheetTrigger asChild>
          <Image
            src="/assets/icons/hamburger.svg"
            alt="Menu"
            width={36}
            height={36}
            className="invert-colors sm:hidden"
          />
        </SheetTrigger>
        <SheetContent
          side="left"
          className="background-light900_dark200 border-none"
        >
          <Link href="/" className="flex items-center gap-1">
            <Image
              src="/assets/images/site-logo.svg"
              width={23}
              height={23}
              alt="StackOverFlow"
            />
            <p className="h2-bold text-dark100_light900  font-spaceGrotesk">
              Dev <span className="text-primary-500">Overflow</span>
            </p>
          </Link>
          <div>
            <SheetClose asChild>
              <NavContent />
            </SheetClose>
            <SignedOut>
              <div className="flex flex-col gap-3">
                <SheetClose asChild>
                  <Link href="/sign-in">
                    <Button className="small-medium btn-secondary min-h-[41px] w-full rounded-lg px-4  py-3 shadow-none">
                      <span className="primary-text-gradient">Log In</span>
                    </Button>
                  </Link>
                </SheetClose>

                <SheetClose asChild>
                  <Link href="/sign-up">
                    <Button className="small-medium text-dark400_light900 light-border-2 btn-tertiary min-h-[41px] w-full rounded-lg px-4  py-3 shadow-none">
                      Sign Up
                    </Button>
                  </Link>
                </SheetClose>
              </div>
            </SignedOut>
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default LeftNavbar;
