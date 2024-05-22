import React, { useState, useEffect } from "react";
import Axios from "axios";
import { styled } from "@mui/material/styles";
import { Paper } from "@mui/material";
import { Box } from "@mui/system";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';



//Image Style
const Img = styled("img")({
    width: 200,
    height: "100%",
    objectFit: "cover",
    objectPosition: "center",
});

//Component for show the hero information
function HeroCard({ hero }) {
    return (
        <Paper
            sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                overflow: "hidden",
                mt: 5,
            }}
            key={hero.id}
        >
            <Img src={hero.image} alt="random" />
            <Box sx={{ flexGrow: 1 }}>
                <h2>{hero.name}</h2>
                <p>{hero.alias}</p>
                <p>{hero.powers}</p>
            </Box>
            <Box component="p" sx={{ mr: 2 }}>
                <div style={{ width: 150, height: 150 }}>
                    <CircularProgressbar value={hero.rate_power} text={`${hero.rate_power}%`} />;
                </div> 
            </Box>
        </Paper>
    );
}

export default function Heroes() {
    const [heroes, setHeroes] = useState([]);
    const [loading, setLoading] = useState(true);
    //Fetching the heroes data
    useEffect(() => {
        async function fetchHeroes() {
            try {
                const response = await Axios.get("https://joseenriquedev.pythonanywhere.com/api/v1/heroes/");
                setHeroes(response.data);
                setLoading(false);
                console.log("Correctly receiving data")
            } catch (error) {
                console.error("Error fetching heroes:", error);
                setLoading(false);
            }
        }

        fetchHeroes();
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <>
            {heroes.map((hero) => (
                <HeroCard key={hero.id} hero={hero} />
            ))}
        </>
    );
}