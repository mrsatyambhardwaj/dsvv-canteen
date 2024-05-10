import { Button } from "@/components/ui/button";
import MenuNav from "../menu/components/MenuNav";

export default function page() {
  return (
    <main className=" ">
      <MenuNav/>
     <div className="py-40 px-20 flex justify-between  items-center ">
      <div  className="flex flex-col gap-4 ">
         <p className="font-semibold text-2xl ">Order Id</p>
         <p>Your order has been successfully placed.</p>
         <table className="table-auto">
           <thead>
             <tr className="flex gap-4">
               <th>Item description</th>
               <th>Quantity</th>
               <th>Item Total</th>
             </tr>
           </thead>
           <tbody>
             <tr className="flex justify-between">
               <td>Gulab Jamun</td>
               <td>2</td>
               <td>₹50.00</td>
             </tr>
           </tbody>
         </table>
         <p className="text-xl">Sub Total: ₹50</p>
         <Button>Print Invoice</Button>
       </div>
       <div className="flex flex-col gap-2 items-center">
        <div className="w-64 rounded-lg overflow-hidden">
          <img src="gulab.jpg" alt="Gulab Jamun" />
        </div>
        <p className="text-xl">Gulab Jamun</p>
       </div>
     </div>
    </main>
  );
}
