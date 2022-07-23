import { Button, Card, CardActions, CardContent,  Typography } from "@mui/material";
import { FC, useState } from "react";
import { TierGateway } from "../gateways/tiers.gateway";
import { ISkin } from "../interfaces/skin.interface";

interface IProps{
    skin: ISkin
    isDefault?: boolean;
    handleOpenDialogSkin: (skin: ISkin) => void
}

const SkinCard:FC<IProps> = ({skin, isDefault, handleOpenDialogSkin}) => {
    const [tier, setTier] = useState(skin.tier)
    const tierGateway = new TierGateway()

    const handleTier = (tier:string) => {
        tierGateway.setTier(window.sessionStorage.getItem('list') as string, skin.id, tier)
        setTier(tier)
    }
    return (
        <>
            <Card style={{ width: "500px"}} >
                <img
                    src={skin.splashartUrl}
                    alt={"img"}
                    style={{ width: "100%",cursor: 'pointer' }}
                    onClick={() => handleOpenDialogSkin(skin)}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" textAlign={'center'}>
                    {isDefault? skin.name.replace('default', '') : skin.name}
                    </Typography>
                    <Typography gutterBottom variant="h2" component="div" textAlign={'center'}>
                    {tier}
                    </Typography>
                </CardContent>
                <CardActions style={{ width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        gap: 20,}}>
                    <Button style={{fontSize: 25}} color={'error'} onClick={() => handleTier('S+')}>S+</Button>
                    <Button style={{fontSize: 25}} color={'warning'} onClick={() => handleTier('S')}>S</Button>
                    <Button style={{fontSize: 25}} color={'success'} onClick={() => handleTier('A')}>A</Button>
                    <Button style={{fontSize: 25}} color={'primary'} onClick={() => handleTier('B')}>B</Button>
                    <Button style={{fontSize: 25}} color={'info'} onClick={() => handleTier('C')}>C</Button>
                    <Button style={{fontSize: 25}} color={'secondary'} onClick={() => handleTier('D')}>D</Button>
                    <Button style={{fontSize: 25}} color={'inherit'} onClick={() => handleTier('F')}>F</Button>
                </CardActions>
            </Card>
        </>
    );
};

export default SkinCard;
