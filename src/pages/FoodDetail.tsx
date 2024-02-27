import { MainLayout } from "@/layouts/MainLayout.tsx";
import nasiGorengImg from "@/assets/img/nasi-goreng.jpg";
import { Button } from "@/components/ui/button.tsx";
import { ButtonBack } from "@/components/fragments/ButtonBack.tsx";
import { ShoppingCart, Star } from "lucide-react";
import * as React from "react";

const FoodDetail = () => {
  return (
    <>
      <MainLayout>
        <ButtonBack text="Detail Makanan" link="/food" />
        <main className="grid grid-rows-3 lg:grid-cols-4 lg:gap-x-8">
          <img
            src={nasiGorengImg}
            className="w-full object-cover"
            alt="Nasi Goreng"
          />
          <section className="col-span-2 text-left">
            <div className="mt-3 flex justify-between lg:mt-0">
              <div>
                <h4 className="text-lg font-bold">Nasi Goreng</h4>
                <p className="text-sm">
                  <span>Kategori: </span>
                  <span className="font-medium text-success">Dinner</span>
                </p>
              </div>

              <Button
                variant="ghost"
                className="visible text-success lg:invisible"
              >
                <Star />
              </Button>
            </div>
            <p className="my-8 text-2xl font-semibold text-success">
              Rp 12.000
            </p>
            <p className="text-lg font-medium text-success">Bahan Makanan</p>
            <hr className="my-2 border-black" />

            <ul className="ml-5 list-disc">
              <li>Coffee</li>
              <li>Tea</li>
              <li>Milk</li>
            </ul>
          </section>

          <div>
            <Button variant="outline" className="invisible w-full lg:visible">
              <Star size={20} />
              <span className="ml-1.5">Favorite</span>
            </Button>
            <Button variant="success" className="mt-4 w-full">
              <ShoppingCart size={20} />
              <span className="ml-1.5">Tambah ke Keranjang</span>
            </Button>
          </div>
        </main>
      </MainLayout>
    </>
  );
};

export default FoodDetail;
