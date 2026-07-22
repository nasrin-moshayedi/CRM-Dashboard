import Typography from "../../components/ui/Typography";
import { useTranslation } from 'react-i18next'
import Card from "../../components/ui/card";
import "./index.scss"
import Button from "../../components/ui/Button";
import { Download, Plus, Upload } from "lucide-react";


const Customers = () => { 
    const { t } = useTranslation();

    return(
        <>
        <div className="flex w-100 gap-16 dahsboad-content direction-column">
            <div className="flex justif-between">
                 <Typography>{t("Customers")}</Typography>
                 <div className="flex gap-16">
                    <Button className="" onClick={() => console.log("df")}><Download/>import</Button>
                    <Button className="" onClick={() => console.log("df")}><Upload/>export</Button>
                    <Button className="" onClick={() => console.log("df")}><Plus/>Add Customer</Button>
                    
                 </div>
            </div>
           
            <div className="grid gap-16 grid-5">
                <Card className="">chart</Card>
                <Card className="">create</Card>
                <Card className="">add</Card>
                <Card className="">new</Card>
                <Card className="">report</Card>
            </div>
        </div>
        
       </>
    )
}

export default Customers;
