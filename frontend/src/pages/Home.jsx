import Hero from "../components/Hero";
import NavBar from "../components/NavBar";
import TopBar from "../components/TopBar";
import TopFooter from "../components/TopFooter";


export default function Home() {
  return (
    <>
      <header>
        <TopBar />
        <NavBar />
        <Hero />
      </header>

      <main>
        <section className="container py-3">
          <h2 className="text-center">OUR DOCTORS</h2>
          <p className="text-center">We provide Exceptional Medical Care For Our Patients</p>
          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <img src="https://via.placeholder.com/300" alt="Doctor" className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">Dr. John Doe</h5>
                  <p className="card-text">Cardiologist</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img src="https://via.placeholder.com/300" alt="Doctor" className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">Dr. Jane Doe</h5>
                  <p className="card-text">Neurologist</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img src="https://via.placeholder.com/300" alt="Doctor" className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">Dr. Richard Roe</h5>
                  <p className="card-text">Pediatrician</p>
                </div>
              </div>
            </div>
          </div>


          {/* <h2 className="text-center mt-5">OUR SERVICES</h2>
          <p className="text-center">We provide Exceptional Medical Care For Our Patients</p>
          <li className="mix green">
            <img src="https://abdurraahimm.github.io/capstone/img/doctor_4.jpg" alt="" />
              <div className="overlay"></div>
              <div className="project_title">
                <a href="#" data-lightbox="roadtrip"><i className="fa-brands fa-facebook-f"></i></a>
                <a href="#" data-lightbox="roadtrip"><i className="fa-brands fa-instagram"></i></a>
              <a href="#" data-lightbox="roadtrip"><i className="fa-brands fa-twitter"></i></a>
              <a href="#" data-lightbox="roadtrip"><i className="fa-brands fa-linkedin-in"></i></a>
              <h4>Dr. Michel Jhonson </h4>
              <p>Orthopedic</p>
            </div>
          </li> */}
        </section>
      </main>

      <footer>
        <TopFooter />
      </footer>
    </>
  )
}
