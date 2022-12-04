import { makeStyles } from "@material-ui/core";
import { Pagination } from "@mui/material";
import { FC, useEffect, useState } from "react";
import { ISkin } from "../interfaces/skin.interface";
import SkinCard from "./skinCard";
import SpashartDialog from "./spashartDIalog";

interface IProps {
    skins: ISkin[];
    isDefault?: boolean;
}

const useStyles = makeStyles(() => ({
    fondoGrid: {
        backgroundColor: "#31313C",
        padding: "20px",
    },
    pagination: {
        display: "flex",
        backgroundColor: "#31313C",
        justifyContent: "center",
        padding: "50px 50px 0px 50px",
    },
    root: {
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        flexWrap: "wrap",
        gap: 20,
    },
}));

const SkinList: FC<IProps> = ({ skins, isDefault }) => {
    const [shownSkins, setShownSkins] = useState<ISkin[]>([]);
    const [selectedSkin, setSelectedSkin] = useState<ISkin>();
    const [open, setOpen] = useState<boolean>(false);
    const [page, setPage] = useState<number>(1);
    const classes = useStyles();

    useEffect(() => {
        setShownSkins(skins.slice(0, 20))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[skins])

    const handleChangePage = (
        event: React.ChangeEvent<unknown>,
        pageTemp: number
    ) => {
        setPage(pageTemp);
        setShownSkins(skins.slice(pageTemp * 20 - 20, pageTemp * 20))
    };

    const handleOpenDialogSkin = (skin: ISkin) => {
        setSelectedSkin(skin);
        setOpen(true);
    };

    const handleOnClose = (event: object, reason: string) => {
        setOpen(false);
    };
    return (
        <>
            <div className={classes.fondoGrid}>
                <div className={classes.root}>
                    {(shownSkins || []).map((x) => {
                        return (
                            <SkinCard
                                skin={x}
                                key={x.id}
                                isDefault={isDefault}
                                handleOpenDialogSkin={handleOpenDialogSkin}
                            />
                        );
                    })}
                    <SpashartDialog
                        skin={selectedSkin}
                        open={open}
                        handleOnClose={handleOnClose}
                    />
                </div>
                <div className={classes.pagination}>
                    <Pagination
                        count={Math.round(skins.length / 20)}
                        color="primary"
                        size="large"
                        showFirstButton
                        showLastButton
                        page={page}
                        onChange={handleChangePage}
                    />
                </div>
            </div>
        </>
    );
};

export default SkinList;
