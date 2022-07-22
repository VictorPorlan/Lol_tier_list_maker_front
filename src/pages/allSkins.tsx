import { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import SkinList from "../components/skinList";
import { SkinGateway } from "../gateways/skins.gateway";
import { ISkin } from "../interfaces/skin.interface";


const AllSkins:FC = () => {
    const [skins, setSkins] = useState<ISkin[]>([])
    const skinsGateway = new SkinGateway()
    const navigate = useNavigate();

    useEffect(() => {
        let list = window.sessionStorage.getItem('list')
        async function fetchBase (){
            let tempSkins:ISkin[] = await skinsGateway.getAll(list as string)
            setSkins(tempSkins)
        }
        if('list' !== null){
            fetchBase()
        }
        else{
            navigate('/')
        }    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]) 
    return (
        <>
           <SkinList skins={skins}/>
        </>
    );
};

export default AllSkins