import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card.tsx";
import nasiGorengImg from "@/assets/img/nasi-goreng.jpg";
import { Button } from "@/components/ui/button.tsx";
import { AspectRatio } from "@/components/ui/aspect-ratio.tsx";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination.tsx";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover.tsx";
import { ChevronDown, ListFilter, Search } from "lucide-react";
import * as React from "react";
import { Input } from "@/components/ui/input.tsx";
import { Label } from "@/components/ui/label.tsx";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select.tsx";
import { MainLayout } from "@/layouts/MainLayout.tsx";
import { ShowEntries } from "@/components/fragments/ShowEntries.tsx";

const FoodFavorite = () => {
  const renderCards = () => {
    const cards = [];
    for (let i = 1; i <= 10; i++) {
      cards.push(
        <Card key={i} className="w-full">
          <CardHeader>
            <AspectRatio ratio={16 / 9}>
              <img
                src={nasiGorengImg}
                className="h-full w-full"
                alt="Nasi Goreng"
              />
            </AspectRatio>
          </CardHeader>
          <CardContent className="text-left">
            <p className="text-sm text-success">Breakfast</p>
            <p className="mt-2 font-semibold">Nasi Goreng</p>
            <p>Rp 12.000</p>
          </CardContent>
          <CardFooter className="flex items-center justify-between">
            <Button
              type="button"
              variant="ghost"
              className="h-fit p-0 hover:bg-transparent"
            >
              Icon
            </Button>
            <Button type="button" variant="success" className="h-fit px-2 py-1">
              Tambah
            </Button>
          </CardFooter>
        </Card>,
      );
    }
    return cards;
  };

  return (
    <>
      <MainLayout>
        <main className="flex flex-col gap-y-10">
          <section className="flex justify-center gap-x-10">
            <label className="relative w-2/5">
              <Search className="absolute left-2 top-1/2 h-5 w-5 -translate-y-1/2 transform text-muted-foreground" />
              <Input type="text" placeholder="Cari Resep" className="pl-10" />
            </label>
            <Popover>
              <PopoverTrigger className="w-36 rounded-sm border bg-white px-3 py-2 data-[state=open]:border-success data-[state=open]:text-success">
                <p className="flex items-center justify-between">
                  <span>Filter</span>
                  <ListFilter className="h-4 w-4" />
                </p>
              </PopoverTrigger>
              <PopoverContent align="end" className="p-4">
                <Label>Kategori</Label>
                <Select>
                  <SelectTrigger className="mt-2 w-[180px]">
                    <SelectValue placeholder="Pilih" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Breakfast</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                  </SelectContent>
                </Select>
                <Button
                  variant="ghost"
                  className="mt-4 h-fit p-0 font-normal text-destructive hover:bg-transparent hover:text-destructive"
                >
                  Bersihkan filter
                </Button>
                <div className="mt-2 flex gap-x-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    Batal
                  </Button>
                  <Button variant="success" size="sm" className="flex-1">
                    Terapkan
                  </Button>
                </div>
              </PopoverContent>
            </Popover>

            <Popover>
              <PopoverTrigger className="w-36 rounded-sm border bg-white px-3 py-2 data-[state=open]:border-success data-[state=open]:text-success">
                <p className="flex items-center justify-between">
                  <span>Sort by</span>
                  <ChevronDown className="h-4 w-4" />
                </p>
              </PopoverTrigger>
              <PopoverContent align="end">
                <div className="flex flex-col items-start">
                  <Button variant="ghost">Nama Makanan A - Z</Button>
                  <Button variant="ghost">Nama Makanan Z - A</Button>
                  <Button variant="ghost">Harga (Tinggi - Rendah)</Button>
                  <Button variant="ghost">Harga (Rendah - Tinggi)</Button>
                </div>
              </PopoverContent>
            </Popover>
          </section>

          <section className="grid grid-cols-4 gap-8">{renderCards()}</section>

          <section className="flex justify-between">
            <ShowEntries />

            <div>
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious href="#" />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#" isActive>
                      1
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">2</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">3</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">4</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">5</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">12</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext href="#" />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          </section>
        </main>
      </MainLayout>
    </>
  );
};

export { FoodFavorite };
