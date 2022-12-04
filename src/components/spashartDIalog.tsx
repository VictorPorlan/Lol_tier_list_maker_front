import { Dialog } from "@mui/material";
import { FC } from "react";
import { ISkin } from "../interfaces/skin.interface";

interface IProps {
    skin?: ISkin;
    open: boolean;
    handleOnClose: (event: object, reason: string) => void;
}

const SpashartDialog: FC<IProps> = ({ skin, open, handleOnClose }) => {
    return (
        <>
            <Dialog open={open} maxWidth={"xl"} onClose={handleOnClose}>
                <img
                    src={skin?.splashartUrl}
                    alt={"img"}
                    style={{ width: "100%" }}
                />
            </Dialog>
        </>
    );
};

export default SpashartDialog;
