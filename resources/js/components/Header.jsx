import { Link } from "@inertiajs/react"

export default function Header() {
  return (
    <header className="masthead">
      <div className="container position-relative">
        <div className="row justify-content-center">
          <div className="col-xl-10">
            <div className="text-center text-white">
              {/* Page heading*/}
              <h1 className="mb-5">Where do you want to go?</h1>
              <form className="form-subscribe" id="contactForm">
                <div className="row">
                  {/* Departure */}
                  <div className="col" style={{ flex: '1.5 0 0%' }}>
                    <input className="form-control form-control-lg" id="departure" name="departure" type="text" placeholder="Leaving from" />
                    <div className="invalid-feedback text-white">
                      Departure is required.</div>
                    <div className="invalid-feedback text-white">
                      Departure is not valid.</div>
                  </div>
                  {/* Destination */}
                  <div className="col" style={{ flex: '1.5 0 0%' }}>
                    <input className="form-control form-control-lg" id="destination" name="destination" type="text" placeholder="Going to" />
                    <div className="invalid-feedback text-white">
                      Destination is required.</div>
                    <div className="invalid-feedback text-white">
                      Destination is not valid.</div>
                  </div>
                  {/* Date*/}
                  <div className="col" style={{ flex: '1 0 0%' }}>
                    <input className="form-control form-control-lg" id="date" name="date" type="date" />
                    <div className="invalid-feedback text-white">
                      Date is required.</div>
                    <div className="invalid-feedback text-white">
                      Date is not valid.</div>
                  </div>
                  <div className="col-auto"><button className="btn btn-primary btn-lg disabled" id="submitButton" type="submit">Submit</button></div>
                </div>
                <div className="row" style={{}}>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </header>

  )
}
