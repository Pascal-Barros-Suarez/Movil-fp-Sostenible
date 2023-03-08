import React from "react";
import { useForm } from "@inertiajs/react";
import { dibujaFlash } from '../Helper';


export default function Header() {
  const { data, setData, post, errors } = useForm({
    origin: '',
    destination: '',
    date: '',
  });

  function handleSubmit(e) {
    e.preventDefault();
    post(
      "search",
      {
        onSuccess: () => {
          console.log('success search')
        },
        onError: () => { console.log('errores estos', errors); },
      },
      data
    );
  }
  return (
    <>
      <header className="masthead">
        {dibujaFlash()}
        <div className="container position-relative">
          <div className="row justify-content-center">
            <div className="col-xl-10">
              <div className="text-center text-white">
                {/* Page heading*/}
                <h1 className="mb-5">Where do you want to go?</h1>
                <form className="form-subscribe" id="contactForm" onSubmit={handleSubmit}>
                  <div className="row">
                    {/* Departure */}
                    <div className="col-sm-3 col-6  mt-2" style={{ flex: '1.5 0 0%' }}>
                      <input className="form-control form-control-lg" id="origin" name="origin" type="text" placeholder="Leaving from" onChange={(e) =>
                        setData("origin", e.target.value)
                      } />
                      <div className="invalid-feedback text-white">
                        Origin is required.</div>
                      <div className="invalid-feedback text-white">
                        Origin is not valid.</div>
                    </div>
                    {/* Destination */}
                    <div className="col-sm-3 col-6  mt-2" style={{ flex: '1.5 0 0%' }}>
                      <input className="form-control form-control-lg" id="destination" name="destination" type="text" placeholder="Going to" onChange={(e) =>
                        setData("destination", e.target.value)
                      } />
                      <div className="invalid-feedback text-white">
                        Destination is required.</div>
                      <div className="invalid-feedback text-white">
                        Destination is not valid.</div>
                    </div>
                    {/* Date*/}
                    <div className="col-auto mt-2" style={{ flex: '1 0 0%' }}>
                      <input className="form-control form-control-lg" id="date" name="date" type="date" onChange={(e) =>
                        setData("date", e.target.value)
                      } />
                      <div className="invalid-feedback text-white">
                        Date is required.</div>
                      <div className="invalid-feedback text-white">
                        Date is not valid.</div>
                    </div>
                    <div className="col-auto mt-2"><button className="btn btn-primary btn-lg" id="submitButton" type="submit">Submit</button></div>
                  </div>
                  <div className="row" style={{}}>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
