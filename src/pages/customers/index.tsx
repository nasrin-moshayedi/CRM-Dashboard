import Typography from "../../components/ui/Typography";
import { useTranslation } from 'react-i18next'
import Card from "../../components/ui/card";
import "./index.scss"
import Button from "../../components/ui/Button";
import { Download, Ellipse, EllipseIcon, Ellipsis, Plus, Upload } from "lucide-react";
import Table from "../../components/ui/Table";


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
        <Table className={"w-100"}>
            <Table.Header>
                <Table.Row>
                    <Table.Cell>Name</Table.Cell>
                    <Table.Cell>Email</Table.Cell>
                    <Table.Cell>Plan</Table.Cell>
                    <Table.Cell>Status</Table.Cell>
                    <Table.Cell>Total Spend</Table.Cell>
                    <Table.Cell>Last Activity</Table.Cell>
                    <Table.Cell>Tags</Table.Cell>
                    <Table.Cell>Actions</Table.Cell>
                </Table.Row>
            </Table.Header>

            <Table.Body>
                <Table.Row>
                <Table.Cell>Nasrin</Table.Cell>
                <Table.Cell>nasrin@example.com</Table.Cell>
                <Table.Cell>Pro</Table.Cell>
                <Table.Cell>Active</Table.Cell>
                <Table.Cell>$1200</Table.Cell>
                <Table.Cell>2m ago</Table.Cell>
                <Table.Cell>VIP</Table.Cell>
                <Table.Cell><Ellipsis/></Table.Cell>
                </Table.Row>
            </Table.Body>
        </Table>
        
       </>
    )
}

export default Customers;
