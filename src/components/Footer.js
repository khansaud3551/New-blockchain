import React, { useEffect } from "react";

function Footer() {
  return (
    <div className="container-fluid p-0 footer ">
      <div className="col-12 bg_footer text-center d-flex justify-content-center flex-column py-lg-2  flex-lg-row gap-lg-4">
        <div className="d-flex mobilr_res2 py-3 justify-content-center">
          <div className="">@ Mint Tools | All rights reserved.</div>
          <div className="">
            – Powered by{"   "}
            <a href className="footer_text2">
              Upper Echelon Studios
            </a>
          </div>
        </div>

        <div className="d-flex mobile_res2 py-3 justify-content-center">
          <div className="">Smart Contract - </div>
          <div className="">
            – Powered by{"   "}
            <a href className="footer_text2">
              0x01026Be6178FCa278FC81A0F5Abc9bD150110687
            </a>
          </div>
        </div>

        <div className="d-flex mobilr_res2 py-3 justify-content-center gap-3 py-3">
          <a href="" className="footer_text3">
            Privacy Policy
          </a>
          <a href="" className="footer_text3">
            Terms of Service
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
