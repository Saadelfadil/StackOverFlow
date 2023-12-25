import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="flex w-96 h- items-center justify-center">
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}
