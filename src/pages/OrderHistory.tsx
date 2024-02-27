import {MainLayout} from "@/layouts/MainLayout.tsx";
import {ButtonBack} from "@/components/fragments/ButtonBack.tsx";
import {Collapsible, CollapsibleContent, CollapsibleTrigger} from "@/components/ui/collapsible.tsx";
import {ShoppingBag} from "lucide-react";
import {useState} from "react";
import nasiGorengImg from "@/assets/img/nasi-goreng.jpg";

const OrderHistory = () => {
    const [open, setOpen] = useState<boolean>(true)

    return <>
        <MainLayout>
            <main className="lg:w-2/3 w-full mx-auto">
                <ButtonBack text="History Pesanan" link="/food"/>

                <Collapsible onOpenChange={setOpen}>
                    <CollapsibleTrigger className="bg-white rounded-tl-md rounded-tr-md p-4 w-full">
                        <div className="flex justify-between text-sm">
                            <div className="flex gap-x-4">
                                <span>Pesanan: 12 Jan 2022</span>
                                <div className="flex items-center">
                                    <ShoppingBag color="white" fill="black" className="w-4 h-4"/>
                                    <span>ORD123</span>
                                </div>
                                <span className="lg:visible invisible"> QTY: 2</span>
                            </div>
                            <p className="text-success data-[state=open]:">
                                {open ? ("Sembunyikan") : ("Tampilkan")}
                            </p>
                        </div>
                        <hr className="border-black mt-3"/>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="bg-white w-full p-4">
                        <div className="flex gap-x-6 items-stretch">
                            <div className="lg:w-1/3 w-2/5">
                                <img src={nasiGorengImg} className="object-cover" alt="Nasi Goreng"/>
                            </div>
                            <div className="lg:w-5/12 w-3/5 text-left">
                                <p className="text-xl font-semibold">Nasi goreng</p>
                                <p>Jumlah: 1 x 12.000</p>
                                <p>Total Harga: Rp 12.000</p>
                            </div>
                            <div
                                className="lg:block hidden self-center flex-auto text-right border-l-2 border-l-black p-5">
                                <p>Total Harga</p>
                                <p>Rp 12.000</p>
                            </div>
                        </div>
                    </CollapsibleContent>
                    <div
                        className="flex lg:justify-end justify-between items-center rounded-bl-md rounded-br-md w-full bg-white text-sm p-3">
                        <span className="lg:hidden block">QTY: 2</span>
                        <div>
                            <span>Total Pesanan:</span>
                            <span className="font-medium"> Rp 32.000</span>
                        </div>
                    </div>
                </Collapsible>
            </main>
        </MainLayout>
    </>
}

export {
    OrderHistory
}