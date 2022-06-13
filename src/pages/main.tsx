import { makeStyles } from "@material-ui/core";
import { FC } from "react";
import MenuCard from "../components/menuCard";

const useStyles = makeStyles(() => ({
    root: {
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#31313C",
        minHeight: "100vh",
        flexWrap: "wrap",
        gap: 20
    },
}));

const MainPage: FC = () => {
    const classes = useStyles();

    return (
        <>
            <div className={classes.root}>
                <MenuCard
                    title={"All females"}
                    redirect={"/noSkins/females"}
                    image={require("../assets/akalus.jpg")}
                />
                <MenuCard
                    title={"All males"}
                    redirect={"/noSkins/males"}
                    image={require("../assets/diego.jpg")}
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
                    title={"All champions"}
                    redirect={"/noSkins"}
                    image={require("../assets/all.jpg")}
                />
                 <MenuCard
                    title={"All champions + skins"}
                    redirect={"/skins"}
                    image={require("../assets/aatroxkayle.jpg")}
                />
            </div>
        </>
    );
};

export default MainPage;
