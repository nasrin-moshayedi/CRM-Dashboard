import React from "react";
import { useTranslation } from 'react-i18next'
import "./index.scss"
import Typography from "../../components/ui/Typography";
import { SidebarClose, X } from "lucide-react";

const menuItems = [
    {title: "dashboard"},
    {title: "customers"},
    {title: "projects"},
]

type SideProps = {
      setMenu: React.Dispatch<React.SetStateAction<boolean>>;
      menu: boolean;
};

const SideBar = ({menu, setMenu}: SideProps) => {
      const { t } = useTranslation();
      const showCard = !menu ? "not-show-menu" : "show-menu";
    //   const showIcon = menu ? "not-show-menu" : "show-menu";


    return(
        <>
        <ul className={"sidebar " + showCard}>
            <div className="flex">
                 <X className={"showIcon"} onClick={() => setMenu((prev) => !prev)}/>
            <Typography className="h1">
                N.
            </Typography>
            </div>
            {menuItems.map((p, k) => {
                return(
                    <li key={k}>{t(p.title)}</li>
                )
            })}
        </ul>
        </>
    )
}

export default SideBar;