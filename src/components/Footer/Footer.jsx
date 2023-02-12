import { IoMdHome } from "react-icons/io";
import { CgPhone } from "react-icons/cg";

function Footer() {
  return (
    <footer>
      <div className="column">
        <span className="icon home-icon">
          <IoMdHome size={18} />
        </span>
        <span className="address">
          2nd floor, The Garner Building, KM/14 Lekki Epe Expressway, Lagos, Nigeria.
        </span>
      </div>

      <div className="column">Loyalbaze is almost here.</div>

      <div className="column">
        <div className="mobile-no">
          <span className="icon">
            <CgPhone size={18} />
          </span>
          <span> +234 903 618 9486</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
