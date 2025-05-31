import React from "react";

function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h1 className="fs-1">The TradeGenix Universe</h1>
        <p className="fs-5">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="col-4 p-3 mt-5">
          <img
            src="media/images/TradeGenix Fund House.jpg"
            alt="TradeGenix Fund House"
            className="img-fluid mb-3"
            style={{ height: "50px", objectFit: "contain" }}
          />
          <p className="text-muted fs-6">
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img
            src="media/images/sensibullLogo.svg"
            alt="sesibullLogo"
            className="img-fluid mb-3"
            style={{ height: "40px", objectFit: "contain" }}
          />
          <p className="text-muted fs-6">
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img
            src="media/images/tijori-logo.png"
            alt="tijori"
            className="img-fluid mb-3"
            style={{ height: "50px", objectFit: "contain" }}
          />
          <p className="text-muted fs-6">
            Investment research platform that offers detailed insights on
            stocks, sectors, supply chains, and more.
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img
            src="media/images/streakLogo.png"
            alt="streakLogo"
            className="img-fluid mb-3"
            style={{ height: "50px", objectFit: "contain" }}
          />
          <p className="text-muted fs-6">
            Systematic trading platform that allows you to create and backtest
            strategies without coding.
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img
            src="media/images/smallcaseLogo.png"
            alt="smallcaseLogo"
            className="img-fluid mb-3"
            style={{ height: "50px", objectFit: "contain" }}
          />
          <p className="text-muted fs-6">
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img
            src="media/images/dittoLogo.png"
            alt="dittoLogo"
            className="img-fluid mb-3"
            style={{ height: "50px", objectFit: "contain" }}
          />
          <p className="text-muted fs-6">
            Personalized advice on life and health insurance. No spam and no
            mis-selling. Sign up for free
          </p>
        </div>
        <button
          className="p-2 btn btn-primary fs-5 mb-5"
          style={{
            width: "20%",
            margin: "0 auto",
            backgroundColor: "#1565C0",
            color: "white",
            border: "none",
            borderRadius: "4px",
          }}
        >
          Signup Now
        </button>
      </div>
    </div>
  );
}

export default Universe;
