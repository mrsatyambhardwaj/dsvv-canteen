import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Hero() {
  return (
    <main className=" pl-20 md:flex-row flex flex-col relative h-screen">
      <div className="flex flex-col gap-4 py-28 justify-center h-full md:items-start items-center">
        <h1 className=" flex text-4xl font-bold relative ">
          {" "}
          DSVV Canteen
          <hr className="bg-cyan-500 w-64 h-2 absolute bottom-1 -z-20" />
        </h1>
        <p className="text-cyan-500 text-4xl font-bold"> for colleges</p>
        <p className="w-1/2 text-zinc-400 ">
          ScanToEat app is made for ease and better convenience of students,
          teachers as well as the Canteen staff.
        </p>
        <a href="/account">
          <Button className="w-fit "> Create Account</Button>
        </a>
      </div>
      <div className="">
        <Image
          className="h-full   object-cover"
          alt="image-resturant"
          src={"/canteen.jpeg"}
          width={800}
          height={400}
        />
      </div>
    </main>
  );
}
