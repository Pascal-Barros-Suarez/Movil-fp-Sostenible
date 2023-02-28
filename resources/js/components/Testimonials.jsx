import { Link } from "@inertiajs/react"

export default function Testimonials() {
  return (<section className="testimonials text-center bg-light">
    <div className="container">
      <h2 className="mb-5">What people are saying...</h2>
      <div className="row">
        <div className="col-lg-4">
          <div className="testimonial-item mx-auto mb-5 mb-lg-0">
            <img className="img-fluid rounded-circle mb-3" src="assets/img/testimonials-1.jpg" alt="..." />
            <h5>Margarita E.</h5>
            <p className="font-weight-light mb-0">This is fantastic! Thanks so much guys!"</p>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="testimonial-item mx-auto mb-5 mb-lg-0">
            <img className="img-fluid rounded-circle mb-3" src="assets/img/testimonials-2.jpg" alt="..." />
            <h5>Alfredo S.</h5>
            <p className="font-weight-light mb-0">
              MoviFP is amazing. I\'ve been using it to share my car and it works really well."
            </p>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="testimonial-item mx-auto mb-5 mb-lg-0">
            <img className="img-fluid rounded-circle mb-3" src="assets/img/testimonials-3.jpg" alt="..." />
            <h5>Sara W.</h5>
            <p className="font-weight-light mb-0">
              Thanks so much for making these free resources available to us and for taking care of the environment!"
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
};