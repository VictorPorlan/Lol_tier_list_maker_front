import { makeStyles } from "@material-ui/core";
import { FC } from "react";
import { ISkin } from "../interfaces/skin.interface";
import SkinCard from "./skinCard";

interface IProps {
    skins: ISkin[];
    isDefault?: boolean;
}

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

const SkinList: FC<IProps> = ({ skins, isDefault }) => {
    const classes = useStyles();
    return (
        <>
            <div className={classes.root}>
                {(skins || []).map((x) => {
                    return <SkinCard skin={x} key={x.id} isDefault={isDefault}/>;
                })}
            </div>
        </>
    );
};

export default SkinList;
