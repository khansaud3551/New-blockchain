import { useEffect, useState } from "react";
import "./App.css";
import SVG from "./components/SVG";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer";
import { AnimatePresence, motion } from "framer-motion/dist/framer-motion";
import Wallet from "./components/Wallet";

function App() {
  // const [randomWallet, setRandomWallet] = useState(null);

  // useEffect(() => {
  //   //generate random wallet address after every 5 seconds
  //   const generateWallet = () => {
  //     setRandomWallet("0x" + Math.random().toString(36).substr(-40));
  //     const wallet = "0x" + Math.random().toString(36).substr(-40);
  //     console.log(wallet);
  //   };

  //   toast.success(randomWallet, {
  //     position: "bottom-left",
  //     autoClose: 5000,

  //     hideProgressBar: false,
  //     closeOnClick: true,
  //     pauseOnHover: true,
  //     draggable: true,
  //     progress: undefined,
  //   });

  //   //after 5 seconds call function again
  //   generateWallet();
  // }, []);

  const [randomWallet, setRandomWallet] = useState(null);

  useEffect(() => {
    const randomnumbers = Math.random().toString(36).substr(-40);
    console.log(randomnumbers);
    //generate random wallet address with dots after every 7 seconds
    const interval = setInterval(() => {
      //  setRandomWallet("0x" + Math.random().toString(36).substr(-40));
      setRandomWallet(
        "0x" +
          Math.random().toString(35).substr(-5) +
          "..." +
          Math.random().toString(18).substr(-4)
      );
    }, 6000);

    console.log(randomWallet);

    if (randomWallet === null) {
      return;
    } else {
      toast.success(`${randomWallet} mint new nft`, {
        position: "bottom-left",
        autoClose: 4000,

        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }

    return () => clearInterval(interval);
  }, [randomWallet]);

  // generate random bloackchain address after every 5 seconds

  return (
    <>
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <div className="ether_div w-100">
        <img
          className="ether_img mx-auto d-flex"
          src="https://modernpokerclub-mint.com/images/eth.gif"
          alt=""
        />
      </div>

      <div className="App container-fluid">
        <div className="w_set index0  mint-card__container">
          {/* svg */}
          <SVG />

          {/* svg */}

          <div className="row justify-content-between">
            {/*  left div start */}
            <motion.div
              initial={{ x: -1000 }}
              animate={{ x: 0 }}
              transition={{ delay: 0.8, type: "spring", stiffness: 130 }}
              className="col-md-6 mint-card__container feed-post"
            >
              <div className="col-12 px-2 inner_div">
                <div className=" d-flex flex-column align-items-center pading_9 ">
                  <p className="primary_color font-600">Limited Mint</p>

                  <img
                    className="img2 mx-auto"
                    src="https://modernpokerclub-mint.com/images/nft.gif"
                    alt=""
                  />

                  <h2 className="cus_style1 margin_78 mt-4 font_custom">
                    Mint Yours Now
                  </h2>

                  {/*component wallet */}
                  <Wallet />
                  {/*component wallet */}

                  <h5 className="font_custom">Fair Distribution</h5>
                </div>
              </div>
            </motion.div>
            {/*  left div end */}

            {/* right div start */}

            <motion.div
              initial={{ x: 1000 }}
              animate={{ x: 30 }}
              transition={{ delay: 1.3, type: "spring", stiffness: 30 }}
              className="col-md-5 w_cus90 ps-md-3 d-flex flex-column align-md-items-center justify-content-center"
            >
              <div className="div">
                <h2 className="font-900 font_custom minus_marg">
                  Limited Mint
                </h2>
                <div>
                  <p className="text3f "> MARCH 3</p>
                  <h4 className="m-0 font_21">Limited Mint</h4>
                  <h5 className="mb-3 font_18">
                    March <span>3</span>-<span>9am EST</span>
                  </h5>
                </div>

                <div>
                  <h5 className="m-0 font_21">Supply</h5>
                  <p className="p-0 font_18">111</p>
                </div>

                <div>
                  <h5 className="m-0 font_21">Price</h5>
                  <p className="p-0 font_18">0.15 ETH</p>
                </div>

                <div>
                  <h5 className="m-0 font_21">Max</h5>
                  <p className="p-0 font_18">5 per Wallet</p>
                </div>

                <a
                  id="discordLink"
                  className="button outline1 w-inline-block"
                  style={{ marginTop: 32 }}
                  href="#"
                >
                  <div>Join our Discord</div>
                  <div className="button--icon w-embed">
                    <svg
                      style={{ marginLeft: 4, marginTop: -4 }}
                      width="24"
                      height="24"
                      viewBox="0 0 48 48"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M38.1863 13.7599C35.5913 11.5656 32.4773 10.4685 29.1902 10.2856L28.6712 10.8342C31.6123 11.5656 34.2073 13.0285 36.6293 15.0399C33.6883 13.3942 30.4013 12.2971 26.9412 11.9314C25.9032 11.7485 25.0382 11.7485 24.0002 11.7485C22.9622 11.7485 22.0972 11.7485 21.0592 11.9314C17.5992 12.2971 14.3121 13.3942 11.3711 15.0399C13.7931 13.0285 16.3882 11.5656 19.3292 10.8342L18.8102 10.2856C15.5231 10.4685 12.4091 11.5656 9.8141 13.7599C6.87308 19.6114 5.31607 26.1942 5.14307 32.9599C7.73809 35.8856 11.3711 37.7142 15.1771 37.7142C15.1771 37.7142 16.3882 36.2514 17.2532 34.9714C15.0041 34.4228 12.9281 33.1428 11.5441 31.1314C12.7551 31.8628 13.9661 32.5942 15.1771 33.1428C16.7342 33.8742 18.2912 34.2399 19.8482 34.6056C21.2322 34.7885 22.6162 34.9714 24.0002 34.9714C25.3842 34.9714 26.7682 34.7885 28.1522 34.6056C29.7093 34.2399 31.2663 33.8742 32.8233 33.1428C34.0343 32.5942 35.2453 31.8628 36.4563 31.1314C35.0723 33.1428 32.9963 34.4228 30.7473 34.9714C31.6123 36.2514 32.8233 37.7142 32.8233 37.7142C36.6293 37.7142 40.2623 35.8856 42.8573 32.9599C42.6843 26.1942 41.1273 19.6114 38.1863 13.7599ZM18.2912 29.6685C16.5612 29.6685 15.0041 28.0228 15.0041 26.0114C15.0041 23.9999 16.5612 22.3542 18.2912 22.3542C20.0212 22.3542 21.5782 23.9999 21.5782 26.0114C21.5782 28.0228 20.0212 29.6685 18.2912 29.6685ZM29.7093 29.6685C27.9792 29.6685 26.4222 28.0228 26.4222 26.0114C26.4222 23.9999 27.9792 22.3542 29.7093 22.3542C31.4393 22.3542 32.9963 23.9999 32.9963 26.0114C32.9963 28.0228 31.4393 29.6685 29.7093 29.6685Z" />
                    </svg>
                  </div>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default App;
