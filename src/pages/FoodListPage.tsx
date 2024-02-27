import {Card, CardContent, CardFooter, CardHeader,} from "@/components/ui/card.tsx";
import nasiGorengImg from "@/assets/img/nasi-goreng.jpg";
import {Button} from "@/components/ui/button.tsx";
import {AspectRatio} from "@/components/ui/aspect-ratio.tsx";
import {Popover, PopoverContent, PopoverTrigger,} from "@/components/ui/popover.tsx";
import {ChevronDown, ListFilter, Search, ShoppingCart, Star,} from "lucide-react";
import {Input} from "@/components/ui/input.tsx";
import {Label} from "@/components/ui/label.tsx";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue,} from "@/components/ui/select.tsx";
import {MainLayout} from "@/layouts/MainLayout.tsx";
import {ShowEntries} from "@/components/fragments/ShowEntries.tsx";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination.tsx";

const FoodListPage = () => {
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
              className="h-fit p-0 text-success hover:bg-transparent"
            >
              <Star size={20} />
            </Button>
            <Button
              type="button"
              variant="success"
              className="h-fit rounded px-2 py-1.5"
            >
              <ShoppingCart size={20} />
              <span className="ml-1">Tambah</span>
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
          <section className="flex flex-col items-center gap-y-3 lg:flex-row lg:justify-center lg:gap-x-10 lg:gap-y-0">
            <label className="relative w-full lg:w-2/5">
              <Search className="absolute left-2 top-1/2 h-5 w-5 -translate-y-1/2 transform text-muted-foreground" />
              <Input type="text" placeholder="Cari Resep" className="pl-10" />
            </label>
            <div className="flex w-full lg:w-fit">
              <Popover>
                <PopoverTrigger className="mr-3 w-full grow-0 rounded-sm border bg-white px-3 py-2 data-[state=open]:border-success data-[state=open]:text-success lg:w-36">
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
                <PopoverTrigger className="w-full rounded-sm border bg-white px-3 py-2 data-[state=open]:border-success data-[state=open]:text-success lg:w-36">
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
            </div>
          </section>

          <section className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-8">
            {renderCards()}
          </section>

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

export { FoodListPage };
