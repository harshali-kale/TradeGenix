import React from "react";

function Footer() {
  return (
    <footer style={{ backgroundColor: "rgb(250, 250, 250)" }}>
      <div className="container border-top mt-5 pt-5">
        <div className="row mb-4">
          <div className="col-md-3">
            <img src="media/images/TradeGenix-logo.jpg" style={{ width: "50%" }} alt="Logo" />
            <p className="text-muted mt-2" style={{ fontSize: "14px" }}>
              &copy; 2010 - 2025, TradeGenix Broking Ltd. All rights reserved.
            </p>
            <div className="d-flex gap-3 mt-2">
             <a href="//www.facebook.com" className="text-muted"><i className="fa fa-facebook" style={{fontSize:"20px"}}></i></a>
             <a href="//www.instagram.com" className="text-muted"><i className="fa fa-instagram" style={{fontSize:"20px"}}></i></a>
             <a href="//www.twitter.com" className="text-muted"><i className="fa fa-twitter" style={{fontSize:"20px"}}></i></a>
             <a href="//www.linkedin.com" className="text-muted"><i className="fa fa-linkedin" style={{fontSize:"20px"}}></i></a>
            </div>
          </div>

          <div className="col-md-3">
            <h6 className="fw-bold">Company</h6>
            <ul className="list-unstyled">
              <li><a className="text-decoration-none text-muted" href="//www.about.com">About</a></li>
              <li><a className="text-decoration-none text-muted" href="//www.product.com">Products</a></li>
              <li><a className="text-decoration-none text-muted" href="//www.Pricing.com">Pricing</a></li>
              <li><a className="text-decoration-none text-muted" href="//www.Referralprogramme.com">Referral programme</a></li>
              <li><a className="text-decoration-none text-muted" href="//www.Careers.com">Careers</a></li>
              <li><a className="text-decoration-none text-muted" href="//www.TradeGenix.tech.com">TradeGenix.tech</a></li>
              <li><a className="text-decoration-none text-muted" href="//www.Opensource.com">Open source</a></li>
              <li><a className="text-decoration-none text-muted" href="//www.Press&media.com">Press & media</a></li>
              <li><a className="text-decoration-none text-muted" href="//www.TradeGenixCares.com">TradeGenix Cares (CSR)</a></li>
            </ul>
          </div>

          <div className="col-md-3">
            <h6 className="fw-bold">Support</h6>
            <ul className="list-unstyled">
              <li><a className="text-decoration-none text-muted" href="//www.Contactus.com">Contact us</a></li>
              <li><a className="text-decoration-none text-muted" href="//www.Supportportal.com">Support portal</a></li>
              <li><a className="text-decoration-none text-muted" href="//www.Z-Connectblog.com">Z-Connect blog</a></li>
              <li><a className="text-decoration-none text-muted" href="//www.Listofcharges.com">List of charges</a></li>
              <li><a className="text-decoration-none text-muted" href="//www.Downloads&resources.com">Downloads & resources</a></li>
              <li><a className="text-decoration-none text-muted" href="//www.Videos.com">Videos</a></li>
              <li><a className="text-decoration-none text-muted" href="//www.Marketoverview.com">Market overview</a></li>
              <li><a className="text-decoration-none text-muted" href="//www fileacomplaint.com">How to file a complaint?</a></li>
              <li><a className="text-decoration-none text-muted" href="//www.Statusofyourcomplaintss.com">Status of your complaints</a></li>
            </ul>
          </div>

          <div className="col-md-3"> 
            <h6 className="fw-bold">Account</h6>
            <ul className="list-unstyled">
              <li><a className="text-decoration-none text-muted" href="//www.Openanaccount.com">Open an account</a></li>
              <li><a className="text-decoration-none text-muted" href="//www.Fundtransfer.com">Fund transfer</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-5 text-muted" style={{ fontSize: "14px"}}>
          <p>
            TradeGenix Broking Ltd.: Member of NSE​ &​ BSE – SEBI Registration no.:
            INZ000031633 CDSL: Depository services through TradeGenix Securities
            Pvt. Ltd. – SEBI Registration no.: IN-DP-100-2015 Commodity Trading
            through TradeGenix Commodities Pvt. Ltd. MCX: 46025 – SEBI Registration
            no.: INZ000038238 Registered Address: TradeGenix Broking Ltd.,
            #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School,
            J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any
            complaints pertaining to securities broking please write to
            complaints@TradeGenix.com, for DP related to dp@TradeGenix.com. Please
            ensure you carefully read the Risk Disclosure Document as prescribed
            by SEBI | ICF
          </p>

          <p>
            Procedure to file a complaint on SEBI SCORES: Register on SCORES
            portal. Mandatory details for filing complaints on SCORES: Name,
            PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
            Communication, Speedy redressal of the grievances
          </p>

          <p>
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>

          <p>
            "Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers. Receive
            information of your transactions directly from Exchange on your
            mobile/email at the end of the day. Issued in the interest of
            investors. KYC is one time exercise while dealing in securities
            markets - once KYC is done through a SEBI registered intermediary
            (broker, DP, Mutual Fund etc.), you need not undergo the same
            process again when you approach another intermediary." Dear
            Investor, if you are subscribing to an IPO, there is no need to
            issue a cheque. Please write the Bank account number and sign the
            IPO application form to authorize your bank to make payment in case
            of allotment. In case of non allotment the funds will remain in your
            bank account. As a business we don't give stock tips, and have not
            authorized anyone to trade on behalf of others. If you find anyone
            claiming to be part of TradeGenix and offering such services, please
            create a ticket here.
          </p>

          <div className="mt-3 d-flex flex-wrap justify-content-center gap-3 text-muted text-center" style={{ fontSize: "14px" }}>
                   <a href="//www.NSE.com" style={{ textDecoration: "none", color: "inherit" }}>NSE</a>
                   <a href="//www.BSE.com" style={{ textDecoration: "none", color: "inherit" }}>BSE</a>
                   <a href="//www.MCX.com" style={{ textDecoration: "none", color: "inherit" }}>MCX</a>
                   <a href="//www.Terms&conditions.com" style={{ textDecoration: "none", color: "inherit" }}>Terms & conditions</a>
                   <a href="//www.Policies&procedures.com" style={{ textDecoration: "none", color: "inherit" }}>Policies & procedures</a>
                   <a href="//www.Privacypolicy.com" style={{ textDecoration: "none", color: "inherit" }}>Privacy policy</a>
                   <a href="//www.Disclosure.com" style={{ textDecoration: "none", color: "inherit" }}>Disclosure</a>
                   <a href="//www.investor'sattention.com" style={{ textDecoration: "none", color: "inherit" }}>For investor's attention</a>
                   <a href="//www.Investorcharter.com" style={{ textDecoration: "none", color: "inherit" }}>Investor charter</a>
         </div>
         </div>
        </div>
    </footer>
  );
}

export default Footer;
        