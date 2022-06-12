import React, {FunctionComponent, useEffect, useState} from 'react';
import { useParams } from 'react-router';
import getData from '../helpers/getData';
import Card from './Card';

const PaysDetail: FunctionComponent = () => {

    let [data, setData] = useState<any>({});

    let { id } = useParams();

    useEffect(()=>{
        const getAll = async () => {
            let dat = await getData();
            dat.forEach((pays:any) => {
                if(pays.name.common == id){
                    setData({name: pays.name.common, flag: pays.flags.png, capitale:pays.capital});
                }
            });
        }
        getAll();
    }, [])


    return (
        <div className="liste">
            <Card name={data.name} flag={data.flag} capitale={data.capitale} cap={true} />
        </div>
    )
}

export default PaysDetail;