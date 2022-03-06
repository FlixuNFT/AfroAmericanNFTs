import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "./redux/blockchain/blockchainActions";
import { fetchData } from "./redux/data/dataActions";
import * as s from "./styles/globalStyles";
import styled from "styled-components";
import i1 from "./assets/images/10.jpg";
import i2 from "./assets/images/25.jpg";
import i3 from "./assets/images/100.jpg";
import i4 from "./assets/images/500.jpg";
import i5 from "./assets/images/1000.jpg";
import Web3 from "web3";

var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split("&"),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split("=");

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
    return false;
};

export const StyledButton = styled.button`
    padding: 10px;
    border-radius: 50px;
    border: none;
    background-color: #000000;
    padding: 10px;
    font-weight: bold;
    color: #ffffff;
    width: 90px;
    cursor: pointer;
    box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);
    -webkit-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);
    -moz-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);
    :active {
        box-shadow: none;
        -webkit-box-shadow: none;
        -moz-box-shadow: none;
    }
`;

export const StyledRoundButton = styled.button`
    padding: 10px;
    border-radius: 100%;
    border: none;
    background-color: var(--primary);
    padding: 10px;
    font-weight: bold;
    font-size: 15px;
    color: var(--primary-text);
    width: 30px;
    height: 30px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);
    -webkit-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);
    -moz-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);
    :active {
        box-shadow: none;
        -webkit-box-shadow: none;
        -moz-box-shadow: none;
    }
`;

export const ResponsiveWrapper = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: stretched;
    align-items: stretched;
    width: 100%;
    @media (min-width: 660px) {
        flex-direction: row;
    }
`;

export const StyledImg = styled.img`
    width: 336px;
    height: 462px;
    @media (min-width: 660px) {
        width: 480px;
        height: 660px;
    }
    transition: width 0.5s;
    transition: height 0.5s;
`;

export const StyledLogo = styled.img`
    width: 300px;
    height: 213px;
    @media (min-width: 213px) {
        width: 300px;
        height: 213px;
    }
    transition: width 0.5s;
    transition: height 0.5s;
`;

function App() {
    return (
        <>
            <HeroSection />
            <ShapeDivider />
            <Cards />
        </>
    );
}

const HeroSection = (props) => {
    return (
        <section className='hero-section__wrapper'>
            <div className='hero-section__text'>
                <div className='heading'>Mint Afro American NFTs</div>
                <div className='heading__description'>
                    <p>This NFT is an expression of the independence of the Afro-American community.</p>
                    <p>
                        No more depending on the system of discrimination and lack of financial possibilities due to color and race and the possibility to deal with each other via the NFT system
                        independent of the current systems.
                    </p>
                </div>
            </div>
        </section>
    );
};

const ShapeDivider = (props) => {
    return (
        <div className='shape__divider'>
            <svg dataName='Layer 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 120' preserveAspectRatio='none'>
                <path
                    d='M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z'
                    opacity='.25'
                    className='shape-fill'
                ></path>
                <path
                    d='M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z'
                    opacity='.5'
                    className='shape-fill'
                ></path>
                <path
                    d='M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z'
                    className='shape-fill'
                ></path>
            </svg>
        </div>
    );
};

const Cards = (props) => {
    const dispatch = useDispatch();
    const blockchain = useSelector((state) => state.blockchain);
    const data = useSelector((state) => state.data);
    const [feedback, setFeedback] = useState("Ready to mint.");
    const [claimingNft, setClaimingNft] = useState(false);
    const [mintAmount, setMintAmount] = useState(1);

    const claimNFTs1 = () => {
        let cost = 3400000000000000;
        let gasLimit = 428000; //0.0004275
        let totalCostWei = String(cost * mintAmount);
        let totalGasLimit = String(gasLimit * mintAmount);
        let affiliate = getUrlParameter("a");

        if (Web3.utils.isAddress(affiliate) === false) {
            affiliate = "0x1380c8aa439AAFf8CEf5186350ce6b08a6062E90";
        }
        setFeedback("Minting your Afro American...");
        setClaimingNft(true);
        blockchain.smartContract.methods
            .mint(mintAmount, 0, affiliate)
            .send({
                gasLimit: String(totalGasLimit),
                to: "0x3AB77805A86C5c17BDFc67DEac75BFB961Eb23dF",
                from: blockchain.account,
                value: totalCostWei,
            })
            .once("error", (err) => {
                console.log(err);
                setFeedback("Sorry, something went wrong please try again later.");
                setClaimingNft(false);
            })
            .then((receipt) => {
                setFeedback("WOW, you now own a Black Coin. Go visit Opensea.io to view it.");
                setClaimingNft(false);
                dispatch(fetchData(blockchain.account));
            });
    };

    const claimNFTs2 = () => {
        let cost = 8500000000000000;
        let gasLimit = 428000; //0.0004275
        let totalCostWei = String(cost * mintAmount);
        let totalGasLimit = String(gasLimit * mintAmount);
        let affiliate = getUrlParameter("a");

        if (Web3.utils.isAddress(affiliate) === false) {
            affiliate = "0x1380c8aa439AAFf8CEf5186350ce6b08a6062E90";
        }
        setFeedback("Minting your Afro American...");
        setClaimingNft(true);
        blockchain.smartContract.methods
            .mint(mintAmount, 1, affiliate)
            .send({
                gasLimit: String(totalGasLimit),
                to: "0x3AB77805A86C5c17BDFc67DEac75BFB961Eb23dF",
                from: blockchain.account,
                value: totalCostWei,
            })
            .once("error", (err) => {
                console.log(err);
                setFeedback("Sorry, something went wrong please try again later.");
                setClaimingNft(false);
            })
            .then((receipt) => {
                setFeedback("WOW, you now own a Black Coin. Go visit Opensea.io to view it.");
                setClaimingNft(false);
                dispatch(fetchData(blockchain.account));
            });
    };

    const claimNFTs3 = () => {
        let cost = 34000000000000000;
        let gasLimit = 428000; //0.0004275
        let totalCostWei = String(cost * mintAmount);
        let totalGasLimit = String(gasLimit * mintAmount);
        let affiliate = getUrlParameter("a");

        if (Web3.utils.isAddress(affiliate) === false) {
            affiliate = "0x1380c8aa439AAFf8CEf5186350ce6b08a6062E90";
        }
        setFeedback("Minting your Afro American...");
        setClaimingNft(true);
        blockchain.smartContract.methods
            .mint(mintAmount, 2, affiliate)
            .send({
                gasLimit: String(totalGasLimit),
                to: "0x3AB77805A86C5c17BDFc67DEac75BFB961Eb23dF",
                from: blockchain.account,
                value: totalCostWei,
            })
            .once("error", (err) => {
                console.log(err);
                setFeedback("Sorry, something went wrong please try again later.");
                setClaimingNft(false);
            })
            .then((receipt) => {
                setFeedback("WOW, you now own a Black Coin. Go visit Opensea.io to view it.");
                setClaimingNft(false);
                dispatch(fetchData(blockchain.account));
            });
    };

    const claimNFTs4 = () => {
        let cost = 170000000000000000;
        let gasLimit = 428000; //0.0004275
        let totalCostWei = String(cost * mintAmount);
        let totalGasLimit = String(gasLimit * mintAmount);
        let affiliate = getUrlParameter("a");

        if (Web3.utils.isAddress(affiliate) === false) {
            affiliate = "0x1380c8aa439AAFf8CEf5186350ce6b08a6062E90";
        }
        setFeedback("Minting your Afro American...");
        setClaimingNft(true);
        blockchain.smartContract.methods
            .mint(mintAmount, 3, affiliate)
            .send({
                gasLimit: String(totalGasLimit),
                to: "0x3AB77805A86C5c17BDFc67DEac75BFB961Eb23dF",
                from: blockchain.account,
                value: totalCostWei,
            })
            .once("error", (err) => {
                console.log(err);
                setFeedback("Sorry, something went wrong please try again later.");
                setClaimingNft(false);
            })
            .then((receipt) => {
                setFeedback("WOW, you now own a Black Coin. Go visit Opensea.io to view it.");
                setClaimingNft(false);
                dispatch(fetchData(blockchain.account));
            });
    };

    const claimNFTs5 = () => {
        let cost = 340000000000000000;
        let gasLimit = 428000; //0.0004275
        let totalCostWei = String(cost * mintAmount);
        let totalGasLimit = String(gasLimit * mintAmount);
        let affiliate = getUrlParameter("a");

        if (Web3.utils.isAddress(affiliate) === false) {
            affiliate = "0x1380c8aa439AAFf8CEf5186350ce6b08a6062E90";
        }
        setFeedback("Minting your Afro American...");
        setClaimingNft(true);
        blockchain.smartContract.methods
            .mint(mintAmount, 4, affiliate)
            .send({
                gasLimit: String(totalGasLimit),
                to: "0x3AB77805A86C5c17BDFc67DEac75BFB961Eb23dF",
                from: blockchain.account,
                value: totalCostWei,
            })
            .once("error", (err) => {
                console.log(err);
                setFeedback("Sorry, something went wrong please try again later.");
                setClaimingNft(false);
            })
            .then((receipt) => {
                setFeedback("WOW, you now own a Black Coin. Go visit Opensea.io to view it.");
                setClaimingNft(false);
                dispatch(fetchData(blockchain.account));
            });
    };

    const useData = React.useRef();

    const decrementMintAmount = () => {
        let newMintAmount = mintAmount - 1;
        if (newMintAmount < 1) {
            newMintAmount = 1;
        }
        setMintAmount(newMintAmount);
    };

    const incrementMintAmount = () => {
        let newMintAmount = mintAmount + 1;
        if (newMintAmount > 20) {
            newMintAmount = 20;
        }
        setMintAmount(newMintAmount);
    };

    const getData = () => {
        if (blockchain.account !== "" && blockchain.smartContract !== null) {
            dispatch(fetchData(blockchain.account));
        }
    };

    useData.current = getData;

    useEffect(() => {
        return useData.current();
    }, [blockchain.account]);

    return (
        <section className='cards__wrapper'>
            <div className='card__wrapper'>
                <div className='card-image__wrapper'>
                    <img alt={"example"} src={i1} />
                </div>
                {Number(data.totalSupply) === 100000 ? (
                    <>
                        <p>The sale has ended.</p>
                        <p>
                            You can still find Afro American for sale on{" "}
                            <a target={"_blank"} href={"https://opensea.io/collection/afroamerican"} rel='noreferrer'>
                                Opensea.io
                            </a>
                        </p>
                    </>
                ) : (
                    <>
                        <p>0.0034 ETH PER $10 NFT</p>
                        <p>{feedback}</p>
                        {blockchain.account === "" || blockchain.smartContract === null ? (
                            <div>
                                <p>Connect to the Ethereum network</p>
                                <StyledButton
                                    onClick={(e) => {
                                        e.preventDefault();
                                        dispatch(connect());
                                        getData();
                                    }}
                                >
                                    CONNECT
                                </StyledButton>
                                {blockchain.errorMsg !== "" ? (
                                    <>
                                        <p>{blockchain.errorMsg}</p>
                                    </>
                                ) : null}
                            </div>
                        ) : (
                            <div>
                                <StyledButton
                                    disabled={claimingNft ? 1 : 0}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        claimNFTs1(mintAmount);
                                        getData();
                                    }}
                                >
                                    {claimingNft ? "BUSY" : "BUY "}
                                </StyledButton>
                                <StyledRoundButton
                                    style={{ lineHeight: 0.4 }}
                                    disabled={claimingNft ? 1 : 0}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        decrementMintAmount();
                                    }}
                                >
                                    -
                                </StyledRoundButton>
                                <s.TextDescription
                                    style={{
                                        textAlign: "center",
                                        color: "var(--accent-text)",
                                    }}
                                >
                                    {mintAmount}
                                </s.TextDescription>
                                <s.SpacerMedium />
                                <StyledRoundButton
                                    disabled={claimingNft ? 1 : 0}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        incrementMintAmount();
                                    }}
                                >
                                    +
                                </StyledRoundButton>
                            </div>
                        )}
                    </>
                )}
            </div>
        </section>
    );
};
export default App;
