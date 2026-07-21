import Typography from "../../components/ui/Typography";
import LanguageSwitcher from "../../components/commen/local";
import Button from "../../components/ui/Button";
import { useTheme } from "../../theme/ThemeProvider";
import Card from "../../components/ui/card";
import "./index.scss"
import Input from "../../components/ui/Input";
import { Bell, HelpCircle, Moon, Sun, TextAlignJustify } from 'lucide-react';
import Avator from "../../components/ui/Avator";

type HeaderProps = {
  setMenu: React.Dispatch<React.SetStateAction<boolean>>;
  menu: boolean;
};

const Header = ({setMenu, menu}: HeaderProps) => {
    
    const { theme, toggleTheme } = useTheme();
    const lng = localStorage.getItem("language") || "en";
    const classCrad = () => {
        if(lng === "fa") {
            return "left"
        } else {
            return "right";
        }
    }
    const showCard = menu ? "not-show" : "show";
    return(
        <>
        <div className="topbar">
            <div className={"hamberger-menu " + showCard}>
                <Typography className="h1">
                    N.
                </Typography>
                <TextAlignJustify onClick={() => setMenu((prev) => !prev)}/>
            </div>  
           <Input className={"searchInput " + classCrad}>
                Search
            </Input>
              
            <div>
            <Card>
                <Bell />
            </Card>
            <Card>
                <HelpCircle/>
            </Card>
            
            <Card>
                <Button onClick={toggleTheme} >
                   {theme === "light" ? <Moon/> : <Sun/>}
                </Button>  
            </Card>
            <Card>
                <LanguageSwitcher />
            </Card>
            <Avator >NM</Avator>
            </div>
        </div>
        </>
    )
}

export default Header;
