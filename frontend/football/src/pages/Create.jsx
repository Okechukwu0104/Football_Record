import { React, useState, useEffect } from "react";
import Navbar from "../components/navbar";
import Axiosinstance from "../components/axios";

const Create = () => {
    const [country, setCountry] = useState([]);
    const [league, setLeague] = useState('');
    const [characteristics, setCharacteristics] = useState('');

    console.log(country);
    console.log(league);
    console.log(characteristics);


    const GetData = () => {
        Axiosinstance.get('countries/')  // Add trailing slash to match Django's URL pattern
            .then((response) => {
                setCountry(response.data);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });

        Axiosinstance.get('leagues/')
            .then((response) => {
                setLeague(response.data);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });

        Axiosinstance.get('characteristics/')
            .then((response) => {
                setCharacteristics(response.data);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }

    useEffect(() => {
        GetData();
    }, [])
    return (
        <>
            <div> ths is the create record page</div>
        </>


    )
}
export default Create;