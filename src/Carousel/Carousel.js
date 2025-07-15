import infrastructure from "../images/infrastructure.jpg";
import revolving_door from "../images/revolving_door.jpg";
import digital_door_Lock from "../images/digital_door_lock.jpg";
import Electronic_lock from "../images/Electronic_locks.jpg";
import glass_door from "../images/glass_door.jpg";
import './Carousel.css'
function Carousel() {
  return (
    <div
      id="carouselExampleRide"
      className="carousel slide carousel-fade"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleRide"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleRide"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleRide"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleRide"
          data-bs-slide-to="3"
          aria-label="Slide 3"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleRide"
          data-bs-slide-to="4"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="10000">
          <img
            src={infrastructure}
            className="d-block w-100 carousel-img"
            alt="infrastructure"
          />
          <div className="carousel-caption d-none d-md-block">
            <h5 className="carousel-indicator-heading">Integrated Access Solutions</h5>
            <h2 className="carousel-indicator-heading">Access solutions for healthcare facilities</h2>
            <p className="lead fw-bold indicator-para" >Our portfolio provides healthcare facilities with secure, seamless access solutions that enhance patient safety, streamline operations, and create a welcoming environment.</p>
          </div>
        </div>
        <div className="carousel-item" data-bs-interval="10000">
          <img src={revolving_door} className="d-block w-100 carousel-img" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5 className="carousel-indicator-heading">KTV 3 / KTV 4</h5>
            <h2 className="carousel-indicator-heading">Revolve in style!</h2>
            <p className="lead fw-bold indicator-para" >Transform your entrance with sleek, designer revolving doors that combine elegance and innovation creating a grand impression and ensuring seamless access. Step into...</p>
          </div>
        </div>
        <div className="carousel-item" data-bs-interval="10000">
          <img src={digital_door_Lock} className="d-block w-100 carousel-img" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5 className="carousel-indicator-heading">Door and access systems</h5>
            <h2 className="carousel-indicator-heading">For every place that matters</h2>
            <p className="lead fw-bold indicator-para" >With award-winning access solutions, industry expertise, and easy installation, we’re your complete partner for reliable door and access systems.</p>
          </div>
        </div>
        <div className="carousel-item" data-bs-interval="10000">
          <img src={Electronic_lock} className="d-block w-100 carousel-img" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5 className="carousel-indicator-heading">Integrated Access Solutions</h5>
            <h2 className="carousel-indicator-heading">Access solutions for healthcare facilities</h2>
            <p className="lead fw-bold indicator-para" >Our portfolio provides healthcare facilities with secure, seamless access solutions that enhance patient safety, streamline operations, and create a welcoming environment.</p>
          </div>
        </div>
        <div className="carousel-item" data-bs-interval="10000">
          <img src={glass_door} className="d-block w-100 carousel-img" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5 className="carousel-indicator-heading">Sustainable solutions</h5>
            <h2 className="carousel-indicator-heading">Sustainable solutions for a greener tomorrow</h2>
            <p className="lead fw-bold indicator-para" >Our energy-efficient doors and eco-friendly access control solutions are designed with circularity, durability, and resource efficiency in mind, ensuring a sustainable</p>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleRide"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleRide"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Carousel;
