import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Account() {
  return (
    <main className=" pl-20 md:flex-row flex flex-col relative h-screen">
      <div className="flex flex-col gap-4 py-28 justify-center h-full md:items-start items-center">
        <h1 className=" flex text-4xl font-bold relative ">
          {" "}
          Sign in to ScanToEat account
        </h1>
        <p className="w-1/2 text-zinc-400 text-base">
        Use your SIES google account to login here!
        </p>
        <a href="/menu">
          <Button className="w-fit "> Sign in</Button>
        </a>
      </div>
      <div className="">
        <Image
          className="h-full   object-cover"
          alt="image-resturant"
          src={"/signin.avif"}
          width={800}
          height={400}
        />
      </div>
    </main>
  );
}
