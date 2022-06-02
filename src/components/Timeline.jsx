import React from "react";
import "../styles/Timeline.css";

function Timeline() {
    return (
        <section id="timeline">
            <h1 className="inshaallaah">Inshaallaah ...</h1>

            <div className="wrapper" data-aos="fade-up" data-aos-delay="100">
                <div className="content">
                    <h1>Engagement Cermony</h1>
                    <p>
                        On Sunday, 05<sup>th</sup> June, 2022,
                        <br />
                        05<sup>th</sup> of Zil-qaidah, 1443,
                        <br />
                        Time: 07:30 PM.
                    </p>
                    <h2>Venue:</h2>
                    <p>
                        Roshan Garden,
                        <br /> Art's College Road,
                        <br /> Adoni.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Timeline;
