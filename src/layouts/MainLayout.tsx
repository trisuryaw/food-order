import {Link} from "react-router-dom";
import * as React from "react";
import {ReactNode} from "react";
import Logo from "@/assets/svg/logo.svg";
import Cart from "@/assets/svg/cart.svg?react";
import Account from "@/assets/svg/account_circle.svg?react";

const MainLayout = ({children}: {children: ReactNode}) => {
    return <>
        <header className="bg-secondary py-2.5">
            <nav className="lg:w-3/4 w-full lg:px-0 px-4 mx-auto flex justify-between items-center">
                <div className="flex items-center gap-x-8">
                    <Link to="/food" className="flex items-center gap-x-2">
                        <img src={Logo} width={42}/>
                        <span className="font-semibold text-secondary-foreground">Food Order 79</span>
                    </Link>
                    <span className="text-secondary-foreground lg:inline-block hidden">Daftar Makanan</span>
                </div>
                <div className="flex gap-x-6">
                    <Cart/>
                    <Account/>
                </div>
            </nav>
        </header>
        <div className="content lg:w-3/4 lg:px-0 px-3 mx-auto py-14">
            {children}
        </div>
    </>
}

export {
    MainLayout
}