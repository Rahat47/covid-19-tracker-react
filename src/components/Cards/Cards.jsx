import React from "react";
import {
    Card,
    CardContent,
    Typography,
    Grid,
    CardHeader,
} from "@material-ui/core";
import styles from "./Cards.module.css";
import CountUp from "react-countup";
import cx from "classnames";
const Cards = ({ data, country }) => {
    const { confirmed, recovered, deaths, lastUpdate } = data;
    if (!confirmed) {
        return "Loading...";
    }
    const allData = [
        {
            id: 1,
            name: "Infected",
            value: confirmed.value,
            date: new Date(lastUpdate).toDateString(),
            string: "Number of active cases of Covid-19",
            class: styles.infected,
        },
        {
            id: 2,
            name: "Recovered",
            value: recovered.value,
            date: new Date(lastUpdate).toDateString(),
            string: "Number of recoveries from Covid-19",
            class: styles.recovered,
        },
        {
            id: 3,
            name: "Deaths",
            value: deaths.value,
            date: new Date(lastUpdate).toDateString(),
            string: "Number of deaths caused by Covid-19",
            class: styles.deaths,
        },
    ];

    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                {allData.map(data => (
                    <Grid
                        item
                        component={Card}
                        xs={12}
                        md={3}
                        className={cx(styles.card, data.class)}
                    >
                        {" "}
                        <CardHeader
                            color="textPrimary"
                            title={data.name}
                            subheader={country ? `In ${country}` : "Globally"}
                        />
                        <CardContent>
                            <Typography variant="h5" component="h2">
                                <CountUp
                                    start={0}
                                    end={data.value}
                                    duration={2.5}
                                    separator=","
                                />
                            </Typography>
                            <br />
                            <Typography color="textSecondary">
                                {data.date}
                            </Typography>
                            <Typography variant="body2">
                                {data.string}
                            </Typography>
                        </CardContent>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default Cards;
