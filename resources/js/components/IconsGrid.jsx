import { Link } from "@inertiajs/react"

export default function IconsGrid() {
    return (<section className="features-icons bg-light text-center">
        <div className="container">
            <div className="row">
                <div className="col-lg-4">
                    <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                        <div className="features-icons-icon d-flex"><i className="bi bi-search m-auto text-primary" /></div>
                        <h3>Search a ride</h3>
                        <p className="lead mb-0">Pick your ride simply saying your heading and leaving points with desired time</p>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                        <div className="features-icons-icon d-flex"><i className="bi bi-calendar2-check m-auto text-primary" /></div>
                        <h3>Book your ride</h3>
                        <p className="lead mb-0">Book your ride at one tap and you can communicate with drivers for detailed info</p>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="features-icons-item mx-auto mb-0 mb-lg-3">
                        <div className="features-icons-icon d-flex"><i className="bi bi-car-front m-auto text-primary" /></div>
                        <h3>Travel together</h3>
                        <p className="lead mb-0">Enjoy your ride and review for your ride experience</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
};