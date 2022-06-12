import {FunctionComponent, useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import Card from './Card';
import getData from '../helpers/getData';



const ListePays:FunctionComponent = () => {

    const [data, setData] = useState<any>([])

    const updateUrl = (id:string) => {
        return (`pays/${id}`);
    }

    useEffect(()=>{
        const getAll = async () => {
            const dat = await getData();
            setData(dat);
        }
        getAll();
    },[])



    return(
        <div className="liste">
            {data.map((e:any) => (
                e.idd.suffixes != null ? (
                    <Link to={updateUrl(e.name.common)} className="lien">
                        <Card name={e.name.common} flag={e.flags.png} capitale={e.capital} cap={true} />
                    </Link>) : (
                        <Card name={e.name.common} flag={e.flags.png} capitale={e.capital} cap={false} />
                    )
            ))}
        </div>
    )

}

export default ListePays;