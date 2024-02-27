import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTrigger
} from "@/components/ui/dialog.tsx";
import {Button} from "@/components/ui/button.tsx";
import SuccessIcon from "@/assets/svg/monetization_on_24px.svg?react";

const Popup = () => {
    return <>
        <Dialog>
            <DialogTrigger>Open</DialogTrigger>
            <DialogContent className="flex flex-col gap-y-10 pt-14">
                <div className="mx-auto">
                    <SuccessIcon />
                </div>
                <DialogHeader>
                    <DialogDescription>
                        This action cannot be undone. This will permanently delete your account
                        and remove your data from our servers.
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter className="justify-between">
                    <DialogClose asChild>
                        <Button type="button" variant="outline" className="w-1/3">
                            Tidak
                        </Button>
                    </DialogClose>
                    <Button type="submit" variant="success" className="w-1/3">
                        Ya
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    </>
}

export default Popup