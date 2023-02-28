import { Link } from "@inertiajs/react"

export default function ShowCase() {
  return (<section className="showcase">
    <div className="container-fluid p-0">
      <div className="row g-0">
        <div className="col-lg-6 order-lg-2 text-white showcase-img" style={{ backgroundImage: 'url("assets/img/bg-showcase-1.jpg")' }} />
        <div className="col-lg-6 order-lg-1 my-auto showcase-text">
          <h2>Environment Benefits</h2>
          <p className="lead mb-0 bi bi-check-circle">
            Control of Greenhouse gas emission
          </p>
          <p className="lead mb-0 bi bi-check-circle">
            Best alternative for public transport
          </p>
          <p className="lead mb-0 bi bi-check-circle">
            Prevent from traffic congestion
          </p>
        </div>
      </div>
      <div className="row g-0">
        <div className="col-lg-6 text-white showcase-img" style={{ backgroundImage: 'url("assets/img/bg-showcase-2.jpg")' }}>
        </div>
        <div className="col-lg-6 my-auto showcase-text">
          <h2>Drivers Benefits</h2>
          <p className="lead mb-0 bi bi-check-circle">
            Save costs
          </p>
          <p className="lead mb-0 bi bi-check-circle">
            Open to any route
          </p>
          <p className="lead mb-0 bi bi-check-circle">
            Comfortable and pleasant trips guaranteed by the rating system
          </p>
        </div>
      </div>
      <div className="row g-0">
        <div className="col-lg-6 order-lg-2 text-white showcase-img" style={{ backgroundImage: 'url("assets/img/bg-showcase-3.jpg")' }} />
        <div className="col-lg-6 order-lg-1 my-auto showcase-text">
          <h2>Passengers Benefits</h2>
          <p className="lead mb-0 bi bi-check-circle">
            Less Travel cost
          </p>
          <p className="lead mb-0 bi bi-check-circle">
            Passengers are insured
          </p>
          <p className="lead mb-0 bi bi-check-circle">
            Choose your trip mates
          </p>
        </div>
      </div>
    </div>
  </section>)
};