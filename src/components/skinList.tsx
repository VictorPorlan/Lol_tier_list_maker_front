import { makeStyles } from "@material-ui/core";
import { FC, useState } from "react";
import { ISkin } from "../interfaces/skin.interface";
import SkinCard from "./skinCard";
import SpashartDialog from "./spashartDIalog";

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
    const [selectedSkin, setSelectedSkin] = useState<ISkin>()
    const [open, setOpen] = useState<boolean>(false)

    const classes = useStyles();
    const handleOpenDialogSkin = (skin: ISkin) =>{
        setSelectedSkin(skin)
        setOpen(true)
        console.log('eqweqwew')
    }

    const handleOnClose = (event: object, reason: string) => {
        setOpen(false)
    }
    return (
        <>
            <div className={classes.root}>
                {(skins || []).map((x) => {
                    return <SkinCard skin={x} key={x.id} isDefault={isDefault} handleOpenDialogSkin={handleOpenDialogSkin}/>;
                })}
                <SpashartDialog skin={selectedSkin} open={open} handleOnClose={handleOnClose}/>
            </div>
        </>
    );
};

export default SkinList;
