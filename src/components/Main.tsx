import { WALLET_ADAPTERS } from "@web3auth/base";
import { useWeb3Auth } from "../services/web3auth";
import styles from "../styles/Home.module.css";
import { Form, Button } from "react-bootstrap";
import AutoComplete from "react-google-autocomplete";
import { useState, useEffect } from "react";
import loginFunction from "./../lens/authenticate/login-user.js";

const Main = () => {
  const {
    provider,
    login,
    logout,
    getUserInfo,
    getAccounts,
    getBalance,
    signMessage,
    signTransaction,
    signAndSendTransaction,
    web3Auth,
    chain,
  } = useWeb3Auth();
  const [page, setPage] = useState("leave");
  useEffect(() => {
    loginFunction("0xC6204532A1fF2059b33C574d22A3F5a745217aAE", signMessage);
  }, []);

  const authenticate = async (address: string) => {
    await signAndSendTransaction();
  };

  let reviewsTemp = [
    {
      location: "Beurs van Berlage",
      from: "0xC6204532A1fF2059b33C574d22A3F5a745217aAE",
      upvotes: "100",
      review:
        "Located opposite Amsterdam Centraal, this place is easy to get to!",
      img: "https://www.ampco-flashlight.com/wp-content/uploads/2019/02/ampco-flashight-beurs-van-berlage1.jpg"
      },
    {
      location: "Beurs van Berlage",
      from: "0xC6204532A1fF2059b33C574d22A3F5a745217aAE",
      upvotes: "20",
      review:
        "Amazing venue! Great people and that too at the heart of amsterdam!",
      img: "https://lh5.googleusercontent.com/p/AF1QipN-zGbBz1JlSGbIO9VG-TiwJ7p4fbz7mISSemBH=s622-k-no"
      },
  ];
  const [reviews, setReviews] = useState(reviewsTemp);
  const [viewReview, setViewReview] = useState(false);

  const loggedInView = (
    <>
      <ul className="navbar">
        <li className="nav">
          <a href="#" onClick={() => { setPage("leave"); setViewReview(false); }}>
            Leave a Review!
          </a>
        </li>
        <li className="nav">
          <a href="#" onClick={() => setPage("search")}>
            Search Review
          </a>
        </li>
        <li className="nav">
          <a href="#" onClick={logout}>
            Logout
          </a>
        </li>
      </ul>
      {/* <button onClick={logout}>
        Log Out
      </button> */}
      {page === "leave" && (
        <>
          <br />
          <Form
            style={{
              backgroundColor: "white",
              padding: "20px",
              borderRadius: "10px",
              width: "100%",
            }}
          >
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Location</Form.Label>

              <AutoComplete
                className="name"
                apiKey="AIzaSyCqqnrOe4Y3XVJ-YuwC3HgRd3DaIsY6Vus"
                onPlaceSelected={(place) => console.log(place)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Review</Form.Label>
              <Form.Control as="textarea" placeholder="Review" />
            </Form.Group>
            <Button
              variant="primary"
              onClick={async () =>
                await authenticate("0xC6204532A1fF2059b33C574d22A3F5a745217aAE")
              }
            >
              Submit
            </Button>
          </Form>
        </>
      )}

      {page === "search" && (
        <>
        <br/>
          <Form style={{
              backgroundColor: "white",
              padding: "20px",
              borderRadius: "10px",
              width: "100%",
            }}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Location</Form.Label>

              <AutoComplete
                className="name"
                apiKey="AIzaSyCqqnrOe4Y3XVJ-YuwC3HgRd3DaIsY6Vus"
                onPlaceSelected={(place) => console.log(place)}
              />
            </Form.Group>

            <Button variant="primary" onClick={() => setViewReview(true)}>
              Search
            </Button>
          </Form>
        </>
      )}
      {viewReview === true && (
        <>
        <br/>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "20px" }}
          >
            {reviewsTemp.map((review) => <>
              <div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "10px",
                  color: "#8247E5",
                  padding: "15px",
                  borderRadius: "10px",
                  backgroundColor: "white",
                  justifyContent: "space-between",
                }}
              >
                <p>
                  <img
                    src={review.img}
                    width="90px"
                  ></img>
                </p>
                <p>
                 {review.review}
                </p> <br/>
                <b>{review.upvotes}  🔥 </b>
              </div>
            </div>
            </> )}
            
            
          </div>
        </>
      )}

      {/* <button onClick={getUserInfo} className={styles.card}>
        Get User Info
      </button>
      <button onClick={getAccounts} className={styles.card}>
        Get Accounts
      </button>
      <button onClick={getBalance} className={styles.card}>
        Get Balance
      </button>
      <button onClick={signMessage} className={styles.card}>
        Sign Message
      </button>
      {(web3Auth?.connectedAdapterName === WALLET_ADAPTERS.OPENLOGIN ||
        chain === "solana") && (
        <button onClick={signTransaction} className={styles.card}>
          Sign Transaction
        </button>
      )}
      <button onClick={signAndSendTransaction} className={styles.card}>
        Sign and Send Transaction
      </button> 
      <div className={styles.console} id="console">
        <p className={styles.code}></p>
      </div>
      */}
    </>
  );

  const unloggedInView = (
    <>
      <button className={styles.card} onClick={login}>
        Login
      </button>
      <br />
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "10px",
              color: "#8247E5",
              padding: "15px",
              borderRadius: "10px",
              backgroundColor: "white",
              justifyContent: "space-between",
            }}
          >
            <p>
              <img
                src="https://www.svgrepo.com/show/27384/ideas-to-earn-money.svg"
                width="90px"
              ></img>
            </p>
            <p>
              Earn money while you leave reviews! Review Protocol gives you
              tokens to leave review and share your experiences{" "}
            </p>
          </div>
        </div>
        <div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "10px",
              color: "#8247E5",
              padding: "15px",
              borderRadius: "10px",
              backgroundColor: "white",
              justifyContent: "space-between",
            }}
          >
            <p>
              Check reviews of your friends. Learn from their mistakes and see
              what they are doing right!
            </p>
            <p>
              <img
                src="https://toppng.com/uploads/preview/friend-svg-icon-free-friends-icon-free-11553386232l5paezhctd.png"
                width="90px"
              />
            </p>
          </div>
        </div>
      </div>
    </>
  );

  return (
    <div className={styles.grid}>
      {provider ? loggedInView : unloggedInView}
    </div>
  );
};

export default Main;
