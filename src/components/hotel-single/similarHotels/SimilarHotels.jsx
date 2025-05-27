import React from "react";
import "./similarHotel.css";

const SimilarHotels = () => {
  return (
    <div
      className="bg-white"
      style={{
        border: ".5px solid rgba(143, 140, 140, 0.4)",
        marginTop: "1em",
        borderRadius: "10px",
      }}
    >
      <div>
        <div className="similar-wrapper ">
          <div className="similar-tags p-3">
            <div className="similar-tag">Best Package</div>
            <div className="similar-tag">Free Cancelation</div>
            <div className="similar-tag">Book with ₹0 Payment</div>
          </div>
          <div style={{ border: "1px solid gray", borderRadius: "20px" }}>
            <div className="similar-green-banner pt-5">
              Similar to in near by
              <br />
              <p className="w-500 text-14 text-light">
                Enjoy benefits worth{" "}
                <strong style={{ color: "#000" }}>classic</strong> &{" "}
                <strong strong style={{ color: "#000" }}>
                  Executive{" "}
                </strong>
                …
              </p>
            </div>
          </div>
        </div>

        <div style={{ margin: "20px", marginTop: "0px" }}>
          <div className="similar-container">
            {/* Left Section  */}
            <div className="similar-left">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
                alt="Room Image"
              />
              <p className="similar-image-caption">
                {" "}
                <span style={{ color: "#fff" }}>
                  {" "}
                  <i className="icon-arrow-right  text-15 mr-10" />
                </span>
                View all images
              </p>
              <div className="similar-hotel-name">Hablis</div>
              <div className="similar-details">
                (323 sq.ft)(30 sq.mt) City View 1 king bed or 2 TWIN bed (S)
              </div>
              <div className="similar-features">
                <div>• Iron / Ironing Board</div>
                <div>• Daily Housekeeping</div>
                <div>• Bathroom</div>
                <div>• In-room Dining</div>
                <div>• Air Conditioning</div>
                <div>• Free Wi-Fi</div>
              </div>
              <a
                href="#"
                className="similar-more-details"
                data-bs-toggle="modal"
                data-bs-target="#detailsModal"
              >
                More Details
              </a>
            </div>
            {/* Right Section  */}
            <div className="similar-right">
              <div className="similar-badge">Best package</div>
              <div className="d-flex justify-content-between ">
                <div>
                  <div className="similar-title">
                    Room With free Cancelation
                  </div>
                  <div className="similar-booking-info">
                    <p>Book @ 0 available </p>
                    <p>Risk Free Booking!</p>
                  </div>
                  <div className="similar-rate-info">
                    Best rate
                    <br />
                    Free Cancelation before 16 May 10:59 PM
                  </div>
                </div>
                <div>
                  <div className="similar-price-section">
                    <div className="similar-price">
                      classNameic <br />{" "}
                      <span style={{ color: "#000" }}>₹2,499</span>
                    </div>
                    <button className="similar-select-button">
                      SELECT ROOM
                    </button>

                    <div className="similar-offer-note">
                      Axis Bank Credit Card Offer - Get INR 4098 OFF!
                      <br />
                      <a href="#">SELECT TO AVAIL</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="similar-amenities">
                <h3>Amenities</h3>
                <ul>
                  <li>Guaranteed Early check-in & Late check-out</li>
                  <li>Complimentary Two-way Airport Transfer</li>
                  <li>Signature Activities & Experiences</li>
                  <li>Breakfast included (you’re saving ₹1337)</li>
                </ul>
                <a
                  href="#"
                  className="similar-more-details"
                  data-bs-toggle="modal"
                  data-bs-target="#propertyRulesModal"
                >
                  More Details
                </a>
              </div>
            </div>
          </div>
        </div>

        <div style={{ margin: "20px", marginTop: "0px" }}>
          <div className="similar-container">
            {/* Left Section  */}
            <div className="similar-left">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
                alt="Room Image"
              />
              <p className="similar-image-caption">
                {" "}
                <span style={{ color: "#fff" }}>
                  {" "}
                  <i className="icon-arrow-right  text-15 mr-10" />
                </span>
                View all images
              </p>
              <div className="similar-hotel-name">Hablis</div>
              <div className="similar-details">
                (323 sq.ft)(30 sq.mt) City View 1 king bed or 2 TWIN bed (S)
              </div>
              <div className="similar-features">
                <div>• Iron / Ironing Board</div>
                <div>• Daily Housekeeping</div>
                <div>• Bathroom</div>
                <div>• In-room Dining</div>
                <div>• Air Conditioning</div>
                <div>• Free Wi-Fi</div>
              </div>
              <a
                href="#"
                className="similar-more-details"
                data-bs-toggle="modal"
                data-bs-target="#detailsModal"
              >
                More Details
              </a>
            </div>
            {/* Right Section  */}
            <div className="similar-right">
              <div className="similar-badge">Best package</div>
              <div className="d-flex justify-content-between ">
                <div>
                  <div className="similar-title">
                    Room With free Cancelation
                  </div>
                  <div className="similar-booking-info">
                    Book @ 0 available
                    <strong>Risk Free Booking!</strong>
                  </div>
                  <div className="similar-rate-info">
                    Best rate
                    <br />
                    Free Cancelation before 16 May 10:59 PM
                  </div>
                </div>
                <div>
                  <div className="similar-price-section">
                    <div className="similar-price">
                      classNameic <br />{" "}
                      <span style={{ color: "#000" }}>₹2,499</span>
                    </div>
                    <button className="similar-select-button">
                      SELECT ROOM
                    </button>

                    <div className="similar-offer-note">
                      Axis Bank Credit Card Offer - Get INR 4098 OFF!
                      <br />
                      <a href="#">SELECT TO AVAIL</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="similar-amenities">
                <h3>Amenities</h3>
                <ul>
                  <li>Guaranteed Early check-in & Late check-out</li>
                  <li>Complimentary Two-way Airport Transfer</li>
                  <li>Signature Activities & Experiences</li>
                  <li>Breakfast included (you’re saving ₹1337)</li>
                </ul>
                <a
                  href="#"
                  className="similar-more-details"
                  data-bs-toggle="modal"
                  data-bs-target="#propertyRulesModal"
                >
                  More Details
                </a>
              </div>
            </div>
          </div>
        </div>

        <div style={{ margin: "20px", marginTop: "0px" }}>
          <div className="similar-container">
            {/* Left Section  */}
            <div className="similar-left">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
                alt="Room Image"
              />
              <p className="similar-image-caption">
                {" "}
                <span style={{ color: "#fff" }}>
                  {" "}
                  <i className="icon-arrow-right  text-15 mr-10" />
                </span>
                View all images
              </p>
              <div className="similar-hotel-name">Hablis</div>
              <div className="similar-details">
                (323 sq.ft)(30 sq.mt) City View 1 king bed or 2 TWIN bed (S)
              </div>
              <div className="similar-features">
                <div>• Iron / Ironing Board</div>
                <div>• Daily Housekeeping</div>
                <div>• Bathroom</div>
                <div>• In-room Dining</div>
                <div>• Air Conditioning</div>
                <div>• Free Wi-Fi</div>
              </div>
              <a
                href="#"
                className="similar-more-details"
                data-bs-toggle="modal"
                data-bs-target="#detailsModal"
              >
                More Details
              </a>
            </div>
            {/* Right Section  */}
            <div className="similar-right">
              <div className="similar-badge">Best package</div>
              <div className="d-flex justify-content-between ">
                <div>
                  <div className="similar-title">
                    Room With free Cancelation
                  </div>
                  <div className="similar-booking-info">
                    Book @ 0 available
                    <strong>Risk Free Booking!</strong>
                  </div>
                  <div className="similar-rate-info">
                    Best rate
                    <br />
                    Free Cancelation before 16 May 10:59 PM
                  </div>
                </div>
                <div>
                  <div className="similar-price-section">
                    <div className="similar-price">
                      classNameic <br />{" "}
                      <span style={{ color: "#000" }}>₹2,499</span>
                    </div>
                    <button className="similar-select-button">
                      SELECT ROOM
                    </button>

                    <div className="similar-offer-note">
                      Axis Bank Credit Card Offer - Get INR 4098 OFF!
                      <br />
                      <a href="#">SELECT TO AVAIL</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="similar-amenities">
                <h3>Amenities</h3>
                <ul>
                  <li>Guaranteed Early check-in & Late check-out</li>
                  <li>Complimentary Two-way Airport Transfer</li>
                  <li>Signature Activities & Experiences</li>
                  <li>Breakfast included (you’re saving ₹1337)</li>
                </ul>
                <a
                  href="#"
                  className="similar-more-details"
                  data-bs-toggle="modal"
                  data-bs-target="#propertyRulesModal"
                >
                  More Details
                </a>
              </div>
            </div>
          </div>
        </div>

        <div style={{ margin: "20px", marginTop: "0px" }}>
          <div className="similar-container">
            {/* Left Section  */}
            <div className="similar-left">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
                alt="Room Image"
              />
              <p className="similar-image-caption">
                {" "}
                <span style={{ color: "#fff" }}>
                  {" "}
                  <i className="icon-arrow-right  text-15 mr-10" />
                </span>
                View all images
              </p>
              <div className="similar-hotel-name">Hablis</div>
              <div className="similar-details">
                (323 sq.ft)(30 sq.mt) City View 1 king bed or 2 TWIN bed (S)
              </div>
              <div className="similar-features">
                <div>• Iron / Ironing Board</div>
                <div>• Daily Housekeeping</div>
                <div>• Bathroom</div>
                <div>• In-room Dining</div>
                <div>• Air Conditioning</div>
                <div>• Free Wi-Fi</div>
              </div>
              <a
                href="#"
                className="similar-more-details"
                data-bs-toggle="modal"
                data-bs-target="#detailsModal"
              >
                More Details
              </a>
            </div>
            {/* Right Section  */}
            <div className="similar-right">
              <div className="similar-badge">Best package</div>
              <div className="d-flex justify-content-between ">
                <div>
                  <div className="similar-title">
                    Room With free Cancelation
                  </div>
                  <div className="similar-booking-info">
                    Book @ 0 available
                    <strong>Risk Free Booking!</strong>
                  </div>
                  <div className="similar-rate-info">
                    Best rate
                    <br />
                    Free Cancelation before 16 May 10:59 PM
                  </div>
                </div>
                <div>
                  <div className="similar-price-section">
                    <div className="similar-price">
                      classNameic <br />{" "}
                      <span style={{ color: "#000" }}>₹2,499</span>
                    </div>
                    <button className="similar-select-button">
                      SELECT ROOM
                    </button>

                    <div className="similar-offer-note">
                      Axis Bank Credit Card Offer - Get INR 4098 OFF!
                      <br />
                      <a href="#">SELECT TO AVAIL</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="similar-amenities">
                <h3>Amenities</h3>
                <ul>
                  <li>Guaranteed Early check-in & Late check-out</li>
                  <li>Complimentary Two-way Airport Transfer</li>
                  <li>Signature Activities & Experiences</li>
                  <li>Breakfast included (you’re saving ₹1337)</li>
                </ul>
                <a
                  href="#"
                  className="similar-more-details"
                  data-bs-toggle="modal"
                  data-bs-target="#propertyRulesModal"
                >
                  More Details
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default SimilarHotels;
