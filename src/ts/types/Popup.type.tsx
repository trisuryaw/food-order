import WarningIcon from "@/assets/svg/warning.svg?react"
import SuccessIcon from "@/assets/svg/monetization_on_24px.svg?react"
import {ReactElement} from "react";

interface PopupType {
    [key: string]: {
        icon: ReactElement; // Tentukan tipe ikon yang digunakan dalam objek popupType
    };
}

const popupType: PopupType = {
    default: {
        icon: <SuccessIcon/>
    },
    warning: {
        icon: <WarningIcon/>
    }
};

export {
    popupType
}