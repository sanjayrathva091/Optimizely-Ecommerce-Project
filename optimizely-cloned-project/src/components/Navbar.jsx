import { useEffect, useState } from "react";

const Navbar = () => {
  const [drop, setDrop] = useState(false);

  const handleLoginStyle = () => {
    setDrop(!drop);
  };

  useEffect(() => {
    if (drop) {
      document.querySelector(".login-style ul").style.display = "flex";
    } else {
      document.querySelector(".login-style ul").style.display = "none";
    }
  }, [drop]);

  return (
    <div>
      <div className="main-navbar">
        <ul className="menu01">
          <li className="main-logo">
            <img
              src="https://www.optimizely.com/globalassets/02.-global-images/navigation/optimizely_logo_navigation.svg"
              alt="main-logo"
            />
          </li>
          <li>Products</li>
          <li>Plans</li>
          <li>Resources</li>
          <li>Partners</li>
        </ul>
        <ul className="menu02">
          <li>Support</li>
          <li className="search-style">
            <span>
              <span className="material-symbols-rounded">search</span>Search
            </span>
          </li>
          <li className="login-style" onClick={handleLoginStyle}>
            <span>
              <span className="material-symbols-rounded">account_circle</span>
              Login
            </span>
            <ul>
              <li>Where to?</li>
              <li>
                Experimentation{" "}
                <span className="material-symbols-rounded">east</span>
              </li>
              <li>
                Welcome<span className="material-symbols-rounded">east</span>
              </li>
              <li>
                Email Campaign<span className="material-symbols-rounded">east</span>
              </li>
              <li>
                Data Problem<span className="material-symbols-rounded">east</span>
              </li>
              <li>
                Partners<span className="material-symbols-rounded">east</span>
              </li>
            </ul>
          </li>
          <li>
            <button>Get started</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
