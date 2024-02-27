import { MainLayout } from "@/layouts/MainLayout.tsx";
import { ButtonBack } from "@/components/fragments/ButtonBack.tsx";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible.tsx";
import { ShoppingBag } from "lucide-react";
import { useState } from "react";
import nasiGorengImg from "@/assets/img/nasi-goreng.jpg";

const OrderHistory = () => {
  const [open, setOpen] = useState<boolean>(true);

  return (
    <>
      <MainLayout>
        <main className="mx-auto w-full lg:w-2/3">
          <ButtonBack text="History Pesanan" link="/food" />

          <Collapsible onOpenChange={setOpen}>
            <CollapsibleTrigger className="w-full rounded-tl-md rounded-tr-md bg-white p-4">
              <div className="flex justify-between text-sm">
                <div className="flex gap-x-4">
                  <span>Pesanan: 12 Jan 2022</span>
                  <div className="flex items-center">
                    <ShoppingBag
                      color="white"
                      fill="black"
                      className="h-4 w-4"
                    />
                    <span>ORD123</span>
                  </div>
                  <span className="invisible lg:visible"> QTY: 2</span>
                </div>
                <p className="data-[state=open]: text-success">
                  {open ? "Sembunyikan" : "Tampilkan"}
                </p>
              </div>
              <hr className="mt-3 border-black" />
            </CollapsibleTrigger>
            <CollapsibleContent className="w-full bg-white p-4">
              <div className="flex items-stretch gap-x-6">
                <div className="w-2/5 lg:w-1/3">
                  <img
                    src={nasiGorengImg}
                    className="object-cover"
                    alt="Nasi Goreng"
                  />
                </div>
                <div className="w-3/5 text-left lg:w-5/12">
                  <p className="text-xl font-semibold">Nasi goreng</p>
                  <p>Jumlah: 1 x 12.000</p>
                  <p>Total Harga: Rp 12.000</p>
                </div>
                <div className="hidden flex-auto self-center border-l-2 border-l-black p-5 text-right lg:block">
                  <p>Total Harga</p>
                  <p>Rp 12.000</p>
                </div>
              </div>
            </CollapsibleContent>
            <div className="flex w-full items-center justify-between rounded-bl-md rounded-br-md bg-white p-3 text-sm lg:justify-end">
              <span className="block lg:hidden">QTY: 2</span>
              <div>
                <span>Total Pesanan:</span>
                <span className="font-medium"> Rp 32.000</span>
              </div>
            </div>
          </Collapsible>
        </main>
      </MainLayout>
    </>
  );
};

export { OrderHistory };
