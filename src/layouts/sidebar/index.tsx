import React from "react";
import { useTranslation } from 'react-i18next'
import "./index.scss"
import Typography from "../../components/ui/Typography";
import { SidebarClose, X } from "lucide-react";
import { NavLink } from "react-router-dom";

const menuItems = [
    {title: "dashboard", link:"/"},
    {title: "customers", link:"/customers"},
    {title: "projects", link: "/projects"},
    {title: "settings", link: "/settings"},

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
            <div className="flex direction-column gap-16">
                {menuItems.map((p, k) => {
                return(
                    <NavLink to={p.link} key={k}>{t(p.title)}</NavLink>
                )
            })}
            </div>
            
        </ul>
        </>
    )
}

export default SideBar;