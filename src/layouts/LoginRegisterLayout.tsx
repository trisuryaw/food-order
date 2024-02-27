import { Card, CardContent, CardHeader } from "@/components/ui/card.tsx";
import Logo from "@/assets/svg/logo.svg?react";
import { ReactNode } from "react";

interface LoginRegisterLayoutProps {
  title: string;
  children: ReactNode;
}

const LoginRegisterLayout = ({ title, children }: LoginRegisterLayoutProps) => {
  return (
    <>
      <div className="grid h-screen place-items-center">
        <div className="flex w-full flex-col items-center gap-y-5 px-6 lg:w-fit lg:gap-y-10 lg:px-0 lg:py-16">
          <div className="flex flex-col items-center gap-y-2">
            <h2 className="text-xl font-bold">Food Order 79</h2>
            <Logo />
          </div>

          <Card className="w-full lg:w-[500px]">
            <CardHeader className="bg-secondary p-3 text-center">
              <h2 className="font-semibold text-white">{title}</h2>
            </CardHeader>
            <CardContent className="px-5 py-5 lg:px-16 lg:py-8">
              {children}
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export { LoginRegisterLayout };
