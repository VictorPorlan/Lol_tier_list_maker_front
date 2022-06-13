import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { FC } from "react";
import { ISkin } from "../interfaces/skin.interface";

interface IProps{
    skin: ISkin
    isDefault?: boolean;
}

const SkinCard:FC<IProps> = ({skin, isDefault}) => {
    return (
        <>
            <Card style={{ width: "500px"}} >
                <img
                    src={skin.splashartUrl}
                    alt={"img"}
                    style={{ width: "100%" }}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" textAlign={'center'}>
                    {isDefault? skin.name.replace('default', '') : skin.name}
                    </Typography>
                </CardContent>
            </Card>
        </>
    );
};

export default SkinCard;
