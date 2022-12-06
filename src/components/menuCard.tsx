import { Card, CardContent,  Typography } from "@mui/material";
import { FC } from "react";

import { useNavigate } from "react-router";

interface IProps{
    image: any
    title: string
    redirect: string
}

const MenuCard:FC<IProps> = ({image, title, redirect}) => {
    const navigate = useNavigate()
    return (
        <>
            <Card style={{ width: 500 }} onClick={() => navigate(redirect)}>
                <img
                    src={image}
                    alt={"img"}
                    style={{ width: "100%" }}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" textAlign={'center'}>
                    {title}
                    </Typography>
                </CardContent>
            </Card>
        </>
    );
};

export default MenuCard;
