import {ChevronLeft} from "lucide-react";
import {Link} from "react-router-dom";

const ButtonBack = ({text, link}: {
    text: string,
    link: string
}) => {
    return <>
        <Link to={link} className="w-fit flex items-center gap-x-2 mb-4 font-medium">
            <ChevronLeft />
            <span className="text-2xl">{text}</span>
        </Link>
    </>
}

export {
    ButtonBack
}