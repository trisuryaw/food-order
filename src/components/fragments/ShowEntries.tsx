import {Tabs, TabsList, TabsTrigger} from "@/components/ui/tabs.tsx";
import * as React from "react";

const ShowEntries = () => {
    return <>
        <div className="flex lg:flex-row flex-col lg:items-center gap-x-3">
            <span>Entries</span>
            <Tabs defaultValue="8">
                <TabsList className="grid w-full grid-cols-3 gap-x-3">
                    <TabsTrigger value="8">8</TabsTrigger>
                    <TabsTrigger value="16">16</TabsTrigger>
                    <TabsTrigger value="48">48</TabsTrigger>
                </TabsList>
            </Tabs>
        </div>
    </>
}

export {
    ShowEntries
}