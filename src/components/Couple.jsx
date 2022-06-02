import React from "react";
import "../styles/Couple.css";

function Couple() {
    return (
        <section id="couple">
            <h1 className="title-quote">Happy Couple Going To Be Engage</h1>

            <div className="row">
                <div className="col-lg-5" data-aos="fade-up">
                    <div className="img-wrapper">
                        <img
                            className="couple-img"
                            src="../assets/images/lateef.png"
                            alt="Groom_img"
                        />
                    </div>
                    <div className="info">
                        <h3>G. Mohammed Lateef Ashrafi</h3>
                        <p>Grand S/O Janab G. Mehboob Sahab (Late)</p>
                    </div>
                </div>
                <div
                    className="col-lg-2"
                    data-aos="zoom-out "
                    data-aos-delay="300"
                >
                    <img
                        className=" heart-mid"
                        src="../assets/images/heart.png"
                        alt="heart_img"
                    />
                </div>
                <div className="col-lg-5" data-aos="fade-up">
                    <div className="img-wrapper">
                        <img
                            className="couple-img"
                            src="../assets/images/hijaab-girl.png"
                            alt="Bride_img"
                        />
                    </div>

                    <div className="info">
                        <h3>
                            Noor-e-Cheshmi
                        </h3>
                        <p>
                            D/O Janab S. Mohammed Alam Basha Sahab,
                            <br /> Siruguppa, Bellary Dist.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Couple;
