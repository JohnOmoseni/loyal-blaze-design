import Swal from "sweetalert2";
import { AiOutlineMail } from "react-icons/ai";
import { HiOutlineUserCircle } from "react-icons/hi";
import Arrow from "../Svgs/Arrow";

function Section1() {
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
    <section className="banner">
      <Arrow />
      <h1 className="banner-title">
        Turn your best customers into <span>Loyal fans</span>
      </h1>

      <p className="subtitle fw-semi-bold">
        Get ready to revolutionalize the way you interact with your customers and drive sales with
        Loyalblaze. Join the waiting list now to be among the first to experience the future of
        customer loyalty.
      </p>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <span className="icon">
            <HiOutlineUserCircle size={18} />
          </span>
          <input type="text" placeholder="Tell us your name" required />
        </div>
        <div className="form-group">
          <span className="icon">
            <AiOutlineMail size={18} />
          </span>
          <input type="text" placeholder="Enter your email addresss" required />
        </div>
        <button type="submit" className="banner-btn">
          Get early access
        </button>
      </form>

      <div className="overlay">
        <span className="letter">G</span>
        <span className="letter">O</span>
        <span className="letter">U</span>
        <span className="letter">M</span>

        <span className="text fs-small"> +57 joined</span>
      </div>
    </section>
  );
}

export default Section1;
