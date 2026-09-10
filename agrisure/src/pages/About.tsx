function About() {

    return (
        <main className="page">

            <section className="detail-header">

                <p>ABOUT AGRISURE</p>

                <h1>Making Agricultural Information Easier</h1>

                <p>
                    Agrisure is an agriculture information platform
                    designed to make useful farming information
                    easier to access and understand.
                </p>

            </section>


            <section className="about-grid">

                <article className="about-card">

                    <h2>Our Goal</h2>

                    <p>
                        Agrisure aims to help farmers make more
                        informed decisions by bringing important
                        agricultural information together.
                    </p>

                </article>


                <article className="about-card">

                    <h2>What We Provide</h2>

                    <p>
                        Crop information, varieties, fertilizers,
                        irrigation information, diseases and
                        comparison tools.
                    </p>

                </article>


                <article className="about-card">

                    <h2>Technology</h2>

                    <p>
                        The platform is built using React,
                        TypeScript, Node.js, Express and MySQL.
                    </p>

                </article>

            </section>

        </main>
    );
}

export default About;