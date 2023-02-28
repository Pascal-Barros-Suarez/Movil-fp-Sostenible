import { Link } from "@inertiajs/react"

export default function CallToAction() {
  return (
    <section className="call-to-action text-white text-center" id="signup">
      <div className="container position-relative">
        <div className="row justify-content-center">
          <div className="col-xl-6">
            <h2 className="mb-4">Ready to get started?</h2>
            <form className="form-subscribe" id="contactFormFooter">
              {/* Email address input*/}
              <div className="row">
                <Link href="register" className="btn btn-primary btn-lg" role="button">Sign up now!</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}