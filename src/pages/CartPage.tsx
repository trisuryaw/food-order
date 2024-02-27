import {Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow} from "@/components/ui/table.tsx";
import {MainLayout} from "@/layouts/MainLayout.tsx";
import nasiGorengImg from "@/assets/img/nasi-goreng.jpg";
import {Button} from "@/components/ui/button.tsx";
import {MinusCircle, PlusCircle, Trash2} from "lucide-react";
import {ButtonBack} from "@/components/fragments/ButtonBack.tsx";

const CartPage = () => {
    return <>
        <MainLayout>
            <main className="w-4/5 mx-auto h-screen">
                <ButtonBack text="Keranjang Saya" link="/"/>
                <Table className="mt-3">
                    <TableHeader className="bg-white [&_tr]:border-b-0 rounded-md">
                        <TableRow>
                            <TableHead className="w-[200px]">Makanan</TableHead>
                            <TableHead></TableHead>
                            <TableHead className="text-center">Harga Satuan</TableHead>
                            <TableHead className="text-center">Kuantitas</TableHead>
                            <TableHead className="text-center">Total Harga</TableHead>
                            <TableHead></TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody className="mt-3 before:content-['\200C'] before:leading-4 before:block">
                        <TableRow className="bg-white">
                            <TableCell>
                                <img src={nasiGorengImg} className="w-full object-cover" alt="Nasi Goreng"/>
                            </TableCell>
                            <TableCell className="text-left">Nasi Goreng</TableCell>
                            <TableCell>Rp 12.000</TableCell>
                            <TableCell>
                                <div className="flex justify-center items-center gap-x-1">
                                    <Button variant="ghost" size="sm" className="p-0 hover:bg-transparent">
                                        <MinusCircle className="w-5 h-5"/>
                                    </Button>
                                    <p className="border-b-2 border-b-black w-10 pb-1 text-center">1</p>
                                    <Button variant="ghost" size="sm" className="p-0 text-success hover:bg-transparent">
                                        <PlusCircle className="w-5 h-5"/>
                                    </Button>
                                </div>
                            </TableCell>
                            <TableCell className="text-center text-success">Rp 12.000</TableCell>
                            <TableCell className="text-center text-destructive">
                                <Button variant="ghost">
                                    <Trash2 className="w-5 h-5"/>
                                </Button>
                            </TableCell>
                        </TableRow>
                        <TableRow className="bg-white">
                            <TableCell>
                                <img src={nasiGorengImg} className="w-full object-cover" alt="Nasi Goreng"/>
                            </TableCell>
                            <TableCell className="text-left">Nasi Goreng</TableCell>
                            <TableCell>Rp 12.000</TableCell>
                            <TableCell>
                                <div className="flex justify-center items-center gap-x-1">
                                    <Button variant="ghost" size="sm" className="p-0">
                                        <MinusCircle className="w-5 h-5"/>
                                    </Button>
                                    <p className="border-b-2 border-b-black w-10 pb-1 text-center">1</p>
                                    <Button variant="ghost" size="sm" className="p-0 text-success">
                                        <PlusCircle className="w-5 h-5"/>
                                    </Button>
                                </div>
                            </TableCell>
                            <TableCell className="text-center text-success">Rp 12.000</TableCell>
                            <TableCell className="text-center text-destructive">
                                <Button variant="ghost">
                                    <Trash2 className="w-5 h-5"/>
                                </Button>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                    <TableFooter className="bg-white">
                        <TableRow>
                            <TableCell colSpan={6}>
                                <hr className="border-black"/>
                                <div className="flex justify-end items-center gap-x-4 mt-6">
                                    <p>Total Pesanan: Rp 12.000</p>
                                    <Button variant="outline" size="sm" className="w-32">Kembali</Button>
                                    <Button variant="success" size="sm" className="w-32">Beli</Button>
                                </div>
                            </TableCell>
                        </TableRow>
                    </TableFooter>
                </Table>
            </main>
        </MainLayout>
    </>
}

export default CartPage