import { Link } from "@inertiajs/react"

export default function Footer() {
  return (
    <footer className="footer bg-light">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 h-100 text-center text-lg-start my-auto">
            <ul className="list-inline mb-2">
              <li className="list-inline-item"><Link href="#!">About</Link></li>
              <li className="list-inline-item">⋅</li>
              <li className="list-inline-item"><Link href="#!">Contact</Link></li>
              <li className="list-inline-item">⋅</li>
              <li className="list-inline-item"><Link href="#!">Terms of Use</Link></li>
              <li className="list-inline-item">⋅</li>
              <li className="list-inline-item"><Link href="#!">Privacy Policy</Link></li>
            </ul>
            <div className=" col-lg-3 col-12">
              <div className="d-flex justify-content-around">
                <p className="text-muted small mb-4 mb-lg-0">© MoviFP 2023.</p>
                <img width="30em" height='30em' src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/License_icon-mit-2.svg/768px-License_icon-mit-2.svg.png' alt="Mit License" />
                {/* All rights reserved */}
              </div>
            </div>
          </div>
          <div className="col-lg-6 h-100 text-center text-lg-end my-auto">
            <ul className="list-inline mb-0">
              <li className="list-inline-item me-4">
                <a href="#!"><i className="bi-facebook fs-3" /></a>
              </li>
              <li className="list-inline-item me-4">
                <a href="#!"><i className="bi-twitter fs-3" /></a>
              </li>
              <li className="list-inline-item">
                <a href="#!"><i className="bi-instagram fs-3" /></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}