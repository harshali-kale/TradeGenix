import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row p-3 mt-5 border-top">
        <h1 className="text-center">People</h1>
      </div>

      <div
        className="row p-3 text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-6 p-3 text-center">
          <img
            src="media/images/sanket.jpeg"
            style={{ borderRadius: "100%", width: "50%" }}
            alt="Sanket Kale"
          />
          <h4 className="mt-5">Sanket Kale</h4>
          <h6>Founder, CEO</h6>
        </div>
        <div className="col-6 p-3">
          <p>
            TRADEGENIX Founded by Sanket Kale Empowering the next generation of
            traders with modern, intuitive, and responsive trading platforms.
            TradeGenix is a front-end trading platform clone, inspired by
            industry leaders, crafted to simulate seamless trading experiences
            using cutting-edge web technologies.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>
            Connect on <a href="//www.Homepage.com">Homepage</a> / <a href="//www.TradingQnA.com">TradingQnA</a> /{" "}
            <a href="//www.Twitter.com">Twitter</a>
          </p>
        </div>
      </div>

      <div className="row text-center mb-5">
        {[
          {
            name: "Ashwin Karmarkar",
            role: "Co-founder & CFO",
            img: "media/images/Ashwin.jpg",
          },
          { name: "Venu Madhav", role: "COO", img: "media/images/Venu.jpg" },
          { name: "Ninad Ramteke", role: "CTO", img: "media/images/Ninad.jpg" },
          { name: "Hanan Delvi", role: "CCO", img: "media/images/Hanan.jpg" },
          {
            name: "Vaishnavi Kolhe",
            role: "Director Strategy",
            img: "media/images/Vaishnavi.jpg",
          },
          {
            name: "Seema Patil",
            role: "Director",
            img: "media/images/Seema.jpg",
          },
        ].map((member, index) => (
          <div className="col-md-4 col-sm-6 col-sm-6 mt-4" key={index}>
            <img
              src={member.img}
              alt={member.name}
              style={{
                borderRadius: "100%",
                width: "190px",
                height: "190px",
                objectFit: "cover",
              }}
            />
            <h5 className="mt-3">{member.name}</h5>
            <p className="text-muted">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Team;
