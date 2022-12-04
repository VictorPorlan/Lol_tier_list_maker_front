import { makeStyles  } from "@material-ui/core";
import { Button, TextField } from "@mui/material";
import { FC, useEffect, useState } from "react";
import MenuCard from "../components/menuCard";
import { TierGateway } from "../gateways/tiers.gateway";

const useStyles = makeStyles(() => ({
    root: {
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#31313C",
        minHeight: "100vh",
        flexWrap: "wrap",
        gap: 20,
    },
}));

const MainPage: FC = () => {
    const classes = useStyles();
    const [name, setName] = useState("");
    const [isFirstStep, setIsFirstStep] = useState(true)
    const tierGateway = new TierGateway()

    const handleNombre = () => {
        tierGateway.checkList(name)
        window.sessionStorage.setItem("list", name)
        setIsFirstStep(false)
    }
    
    useEffect(() => {
        let list = window.sessionStorage.getItem("list")
        if(list !== null){
            setIsFirstStep(false)
        }
        },[])
    return (
        <>
        {
            isFirstStep 
            ? 
            <>
                <div className={classes.root}>
                    <TextField
                        value={name}
                        onChange={(x) => setName(x.target.value)}
                        variant={"outlined"}
                        placeholder="Nombre lista"
                    ></TextField>
                    <Button onClick={handleNombre}>
                        Seleccionar
                    </Button>
                </div>
            </>
            :
            <>
                <div className={classes.root}>
                    <MenuCard
                        title={"All females"}
                        redirect={"/default/females"}
                        image={require("../assets/akalus.jpg")}
                    />
                    <MenuCard
                        title={"All males"}
                        redirect={"/default/males"}
                        image={require("../assets/diego.jpg")}
                    />
                    <MenuCard
                        title={"All champions"}
                        redirect={"/default"}
                        image={require("../assets/all.jpg")}
                    />
                    <MenuCard
                        title={"All females + skins"}
                        redirect={"/skins/females"}
                        image={require("../assets/queen.jpg")}
                    />
                    <MenuCard
                        title={"All males + skins"}
                        redirect={"/skins/males"}
                        image={require("../assets/jayce.jpg")}
                    />
                    <MenuCard
                        title={"All champions + skins"}
                        redirect={"/skins"}
                        image={require("../assets/aatroxkayle.jpg")}
                    />
                </div>
            </>
        }
        </>
    );
};

export default MainPage;
