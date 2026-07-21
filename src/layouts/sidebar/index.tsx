import React from "react";
import { useTranslation } from 'react-i18next'
import "./index.scss"
import Typography from "../../components/ui/Typography";

const menuItems = [
    {title: "dashboard"},
    {title: "customers"},
    {title: "projects"},
]


const SideBar = () => {
      const { t } = useTranslation();
    
    return(
        <>
        <ul className="sidebar">
            <Typography className="h1">
                N.
            </Typography>
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