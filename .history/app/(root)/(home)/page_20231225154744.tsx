import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="flex w- items-center justify-center">
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}
