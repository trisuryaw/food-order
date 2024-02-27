import {Label} from "@/components/ui/label.tsx";
import {Input} from "@/components/ui/input.tsx";
import {Button} from "@/components/ui/button.tsx";
import ShowPassword from "@/assets/svg/eye-open.svg?react";
import HidePassword from "@/assets/svg/eye-closed.svg?react";
import {Toggle} from "@/components/ui/toggle.tsx";
import {useState} from "react";

interface InputProps {
    label: string
    placeholder?: string
}

const InputWithLabel = ({label, placeholder}: InputProps) => {
    return <>
        <div className="flex flex-col gap-y-3 text-left">
            <Label htmlFor={label}>{label}</Label>
            <Input type="text" id={label} placeholder={placeholder ?? ''}/>
        </div>
    </>
}

const InputPasswordWithLabel = ({label, placeholder}: InputProps) => {
    const [show, setShow] = useState<boolean>(false)
    const toggleShowPassword = (value: boolean) => {
        setShow(value)
    }
    return <>
        <div className="flex flex-col gap-y-3 text-left">
            <Label htmlFor={label}>{label}</Label>
            <div className="relative">
                <Input type={show ? "text" : "password"} id={label} placeholder={placeholder ?? ''}/>
                <Toggle defaultPressed={show}
                        className="absolute right-3 top-2 hover:bg-transparent p-1 h-fit"
                        onPressedChange={toggleShowPassword}>
                    {show ? (<ShowPassword />): (<HidePassword/>)}
                </Toggle>
            </div>
        </div>
    </>
}

export {
    InputWithLabel,
    InputPasswordWithLabel,
}