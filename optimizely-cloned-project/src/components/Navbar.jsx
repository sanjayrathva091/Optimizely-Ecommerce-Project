const Navbar = () => {
  return (
    <div>
      <div className="main-navbar">
        <div className="menu01">
          <div className="main-logo">
            <img
              src="https://www.optimizely.com/globalassets/02.-global-images/navigation/optimizely_logo_navigation.svg"
              alt="main-logo"
            />
          </div>
          <div>Products</div>
          <div>Plans</div>
          <div>Resources</div>
          <div>Partners</div>
        </div>
        <div className="menu02">
          <div>Support</div>
          <div className="search-style">
            <span>
              <span class="material-symbols-rounded">search</span>Search
            </span>
          </div>
          <div className="login-style">
            <span>
              <span class="material-symbols-rounded">account_circle</span>Login
            </span>
          </div>
          <div>
            <button>Get started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
