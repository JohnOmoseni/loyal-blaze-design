import Swal from "sweetalert2";
import Scribble from "../Svgs/Scribble";
import Star2 from "../Svgs/Star2";
import { MdKeyboardArrowDown } from "react-icons/md";

import Input from "./Input";

function Section2() {
  const handleSubmit = e => {
    e.preventDefault();

    Swal.fire({
      icon: "success",
      titleText: "Congratulations",
      text: "Great move! You're one step closer to getting your hands on the product. Please check your mail for more confirmation",
      showConfirmButton: false,
    });
  };
  return (
    <section className="section-2">
      <Star2 className="star-variant-01" />
      <Star2 className="star-variant-02" />

      <div className="even-column column1">
        <h2>
          What we do
          <Scribble />
        </h2>

        <p className="summary">
          Loyalblaze, empowers businesses to offer digital, mobile-first loyalty programs to their
          customers. With our AI Powered platform, you can easily create and manage custom loyalty
          and rewards programs, track customer enagagement, and gain valuable insights to improve
          your business.
        </p>
      </div>

      <form className="even-column column2" onSubmit={handleSubmit}>
        <h3>Book a Consultation with us</h3>
        <Input name="name" placeholder="Enter your full name" />
        <Input name="email" placeholder="Enter your full email" />
        <Input name="number" placeholder="Mobile Number" />
        <Input name="company" placeholder="Company Name" />

        <div className="form-group">
          <MdKeyboardArrowDown className="icon" size={18} />
          <Input name="country" placeholder="Select Country" />
        </div>
        <textarea rows="4" name="message" type="text" placeholder="Drop a message..."></textarea>

        <button type="submit" className="send-request">
          Send request
        </button>
      </form>
    </section>
  );
}

export default Section2;
