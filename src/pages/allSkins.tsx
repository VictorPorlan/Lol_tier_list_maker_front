import { FC, useEffect, useState } from "react";
import SkinList from "../components/skinList";
import { SkinGateway } from "../gateways/skins.gateway";
import { ISkin } from "../interfaces/skin.interface";


const AllSkins:FC = () => {
    const [skins, setSkins] = useState<ISkin[]>([])
    const skinsGateway = new SkinGateway()
    useEffect(() => {
        async function fetchBase (){
            let tempSkins:ISkin[] = await skinsGateway.getAll()
            setSkins(tempSkins)
        }
        fetchBase()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]) 
    return (
        <>
           <SkinList skins={skins}/>
        </>
    );
};

export default AllSkins