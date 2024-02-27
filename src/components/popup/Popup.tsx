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
import {popupType} from "@/ts/types/Popup.type.tsx";

interface PopupProps {
    variant: string
    message: string
    action: () => void
}

const Popup: React.FC<PopupProps> = ({variant, message, action}: PopupProps) => {
    const {icon} = popupType[variant] || popupType.default
    console.info(icon)

    return <>
        <Dialog>
            <DialogTrigger>Open</DialogTrigger>
            <DialogContent className="flex flex-col gap-y-10 pt-14">
                <div className="mx-auto">
                    {icon}
                </div>
                <DialogHeader>
                    <DialogDescription>
                        {message}
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter className="justify-between">
                    <DialogClose asChild>
                        <Button type="button" variant="outline" className="w-1/3">
                            Tidak
                        </Button>
                    </DialogClose>
                    <Button type="submit" variant="success" className="w-1/3" onClick={action}>
                        Ya
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    </>
}

export default Popup