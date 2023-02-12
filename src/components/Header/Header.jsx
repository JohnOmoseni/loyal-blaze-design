import { TiHeartHalfOutline } from "react-icons/ti";

function Header() {
  return (
    <header className="full-width">
      <div className="logo">
        l
        <span>
          <TiHeartHalfOutline className="variant" size={18} />
        </span>
        yalbaze
      </div>
      <div className="request-call">Request a call</div>
    </header>
  );
}

export default Header;
