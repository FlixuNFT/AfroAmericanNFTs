import React, { useEffect, useState } from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import { decode } from "html-entities";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "./redux/blockchain/blockchainActions";
import { fetchData } from "./redux/data/dataActions";
import "./styles/output.css";
import * as s from "./styles/globalStyles";
import styled from "styled-components";
import i1 from "./assets/images/10.jpg";
import svgSmile from "./assets/graphics/smile.svg";
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
    border-radius: 18px;
    border: none;
    background-color: var(--primary);
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
    border-radius: 18px;
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
            <BottomShapeDivider />
            <Informational />
            <Footer />
        </>
    );
}

const HeroSection = (props) => {
    return (
        <section className='bg-secondaryDark flex justify-center items-center hero-section__wrapper reltive'>
            <div className='max-w-4xl relative'>
                <div className='text-center'>
                    <div className='heading'>Mint Afro American NFTs</div>
                    <div className='heading__description'>
                        <p>This NFT is an expression of the independence of the Afro-American community.</p>
                        <p>
                            No more depending on the system of discrimination and lack of financial possibilities due to color and race and the possibility to deal with each other via the NFT system
                            independent of the current systems.
                        </p>
                    </div>
                </div>

                <div className='absolute  -bottom-24 right-1/2 m-auto animate-bounce'>
                    <a href='#hsd'>
                        <svg width='30' height='30' viewBox='0 0 48 48' fill='none' xmlns='http://www.w3.org/2000/svg'>
                            <path
                                d='M48 24C48 37.2581 37.2581 48 24 48C10.7419 48 0 37.2581 0 24C0 10.7419 10.7419 0 24 0C37.2581 0 48 10.7419 48 24ZM34.1032 21.2032L27.0968 28.5097V10.8387C27.0968 9.55161 26.0613 8.51613 24.7742 8.51613H23.2258C21.9387 8.51613 20.9032 9.55161 20.9032 10.8387V28.5097L13.8968 21.2032C12.9968 20.2645 11.4968 20.2452 10.5774 21.1645L9.52258 22.229C8.6129 23.1387 8.6129 24.6097 9.52258 25.5097L22.3548 38.3516C23.2645 39.2613 24.7355 39.2613 25.6355 38.3516L38.4774 25.5097C39.3871 24.6 39.3871 23.129 38.4774 22.229L37.4226 21.1645C36.5032 20.2452 35.0032 20.2645 34.1032 21.2032V21.2032Z'
                                fill='white'
                            />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
};

const ShapeDivider = (props) => {
    return (
        <div className='shape__divider' id='hsd'>
            <svg dataname='Layer 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 120' preserveAspectRatio='none'>
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

const ArrowIcon = (props) => {
    return (
        <svg width='11' height='16' viewBox='0 0 11 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path
                id='Vector'
                d='M10.2437 8.83008L3.60303 15.4707C3.14404 15.9297 2.40186 15.9297 1.94775 15.4707L0.844238 14.3672C0.385254 13.9082 0.385254 13.166 0.844238 12.7119L5.55127 8.00488L0.844238 3.29785C0.385254 2.83887 0.385254 2.09668 0.844238 1.64258L1.94287 0.529297C2.40186 0.0703125 3.14404 0.0703125 3.59814 0.529297L10.2388 7.16992C10.7026 7.62891 10.7026 8.37109 10.2437 8.83008Z'
                fill='white'
            />
        </svg>
    );
};

const LoadingIcon = (props) => {
    return (
        <svg fill='none' className='w-6 h-6 animate-spin' viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'>
            <path clip-rule='evenodd' d='M15.165 8.53a.5.5 0 01-.404.58A7 7 0 1023 16a.5.5 0 011 0 8 8 0 11-9.416-7.874.5.5 0 01.58.404z' fill='white' fill-rule='evenodd' />
        </svg>
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
        <section className='m-16 bg-dark max-w-8xl flex-wrap flex justify-center items-center ' id='cards'>
            <div className='flex-wrap flex gap-12 justify-evenly items-center'>
                <div className='max-w-md'>
                    <div className='bg-card border-card-border border-solid border relative shadow-lg hover:shadow-xl transition duration-500 rounded-2xl'>
                        {Number(data.totalSupply) === 100000 ? (
                            <>
                                <img className='rounded-2xl' src={i1} alt='' />
                                <div className='py-6 px-8  bg-card rounded-b-2xl'>
                                    <p className='text-lg text-white font-semibold regular-title'>The sale has ended.</p>
                                    <p className='text-lg text-normalText mt-4 font-semibold'>
                                        You can still find Afro American for sale on{" "}
                                        <a target={"_blank"} className='text-gray-200' href={"https://opensea.io/collection/afroamerican"}>
                                            Opensea.io
                                        </a>
                                    </p>
                                </div>
                            </>
                        ) : (
                            <>
                                <img className='rounded-2xl' src={i1} alt='' />
                                <div className='py-6 px-8  bg-card rounded-b-2xl text-normalTextg '>
                                    <h1 className='text-white font-bold text-2xl mb-3 hover:text-gray-50 hover:cursor-pointer regular-title'>0.0034 ETH PER $10 NFT</h1>
                                    <div className='tracking-wide mt-8'>
                                        <p>{feedback}</p>
                                    </div>

                                    {blockchain.account === "" || blockchain.smartContract === null ? (
                                        <div className='space-y-8'>
                                            <p>Connect to the Ethereum network</p>
                                            <div className='flex justify-end items-center'>
                                                <button
                                                    className='btn-primary flex gap-2 justify-end items-center'
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        dispatch(connect());
                                                        getData();
                                                    }}
                                                >
                                                    CONNECT
                                                    <ArrowIcon />
                                                </button>
                                            </div>
                                            {blockchain.errorMsg !== "" ? (
                                                <>
                                                    <p>{blockchain.errorMsg}</p>
                                                </>
                                            ) : null}
                                        </div>
                                    ) : (
                                        <div className='flex gap-2 justify-end items-center'>
                                            <div className='text-white flex gap-2 justify-center items-center'>
                                                <button
                                                    className='btn-secondary quantity'
                                                    disabled={claimingNft ? 1 : 0}
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        decrementMintAmount();
                                                    }}
                                                >
                                                    -
                                                </button>
                                                <span className='text-xl px-2'>{mintAmount}</span>
                                                <button
                                                    className='btn-secondary quantity'
                                                    disabled={claimingNft ? 1 : 0}
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        incrementMintAmount();
                                                    }}
                                                >
                                                    +
                                                </button>
                                            </div>

                                            <button
                                                className='btn-primary px-12 busy-buy-now-btn'
                                                disabled={claimingNft ? 1 : 0}
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    claimNFTs1(mintAmount);
                                                    getData();
                                                }}
                                            >
                                                {claimingNft ? "BUSY" : "BUY "}
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </>
                        )}
                    </div>
                </div>

                <div className='max-w-md'>
                    <div className='bg-card border-card-border border-solid border relative shadow-lg hover:shadow-xl transition duration-500 rounded-2xl'>
                        {Number(data.totalSupply) === 50000 ? (
                            <>
                                <img className='rounded-2xl' src={i2} alt='' />
                                <div className='py-6 px-8  bg-card rounded-b-2xl'>
                                    <p className='text-lg text-white font-semibold regular-title'>The sale has ended.</p>
                                    <p className='text-lg text-normalText mt-4 font-semibold'>
                                        You can still find Afro American for sale on{" "}
                                        <a target={"_blank"} className='text-gray-200' href={"https://opensea.io/collection/afroamerican"}>
                                            Opensea.io
                                        </a>
                                    </p>
                                </div>
                            </>
                        ) : (
                            <>
                                <img className='rounded-2xl' src={i2} alt='' />
                                <div className='py-6 px-8  bg-card rounded-b-2xl text-normalTextg '>
                                    <h1 className='text-white font-bold text-2xl mb-3 hover:text-gray-50 hover:cursor-pointer regular-title'>0.0085 ETH PER $25 NFT</h1>
                                    <div className='tracking-wide mt-8'>
                                        <p>{feedback}</p>
                                    </div>

                                    {blockchain.account === "" || blockchain.smartContract === null ? (
                                        <div className='space-y-8'>
                                            <p>Connect to the Ethereum network</p>
                                            <div className='flex justify-end items-center'>
                                                <button
                                                    className='btn-primary flex gap-2 justify-end items-center'
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        dispatch(connect());
                                                        getData();
                                                    }}
                                                >
                                                    CONNECT
                                                    <ArrowIcon />
                                                </button>
                                            </div>
                                            {blockchain.errorMsg !== "" ? (
                                                <>
                                                    <p>{blockchain.errorMsg}</p>
                                                </>
                                            ) : null}
                                        </div>
                                    ) : (
                                        <div className='flex gap-2 justify-end items-center'>
                                            <div className='text-white flex gap-2 justify-center items-center'>
                                                <button
                                                    className='btn-secondary quantity'
                                                    disabled={claimingNft ? 1 : 0}
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        decrementMintAmount();
                                                    }}
                                                >
                                                    -
                                                </button>
                                                <span className='text-xl px-2'>{mintAmount}</span>
                                                <button
                                                    className='btn-secondary quantity'
                                                    disabled={claimingNft ? 1 : 0}
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        incrementMintAmount();
                                                    }}
                                                >
                                                    +
                                                </button>
                                            </div>

                                            <button
                                                className='btn-primary px-12 busy-buy-now-btn'
                                                disabled={claimingNft ? 1 : 0}
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    claimNFTs2(mintAmount);
                                                    getData();
                                                }}
                                            >
                                                {claimingNft ? "BUSY" : "BUY "}
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </>
                        )}
                    </div>
                </div>

                <div className='max-w-md'>
                    <div className='bg-card border-card-border border-solid border relative shadow-lg hover:shadow-xl transition duration-500 rounded-2xl'>
                        {Number(data.totalSupply) === 50000 ? (
                            <>
                                <img className='rounded-2xl' src={i3} alt='' />
                                <div className='py-6 px-8  bg-card rounded-b-2xl'>
                                    <p className='text-lg text-white font-semibold regular-title'>The sale has ended.</p>
                                    <p className='text-lg text-normalText mt-4 font-semibold'>
                                        You can still find Afro American for sale on{" "}
                                        <a target={"_blank"} className='text-gray-200' href={"https://opensea.io/collection/afroamerican"}>
                                            Opensea.io
                                        </a>
                                    </p>
                                </div>
                            </>
                        ) : (
                            <>
                                <img className='rounded-2xl' src={i3} alt='' />
                                <div className='py-6 px-8  bg-card rounded-b-2xl text-normalTextg '>
                                    <h1 className='text-white font-bold text-2xl mb-3 hover:text-gray-50 hover:cursor-pointer regular-title'>0.034 ETH PER $100 NFT</h1>
                                    <div className='tracking-wide mt-8'>
                                        <p>{feedback}</p>
                                    </div>

                                    {blockchain.account === "" || blockchain.smartContract === null ? (
                                        <div className='space-y-8'>
                                            <p>Connect to the Ethereum network</p>
                                            <div className='flex justify-end items-center'>
                                                <button
                                                    className='btn-primary flex gap-2 justify-end items-center'
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        dispatch(connect());
                                                        getData();
                                                    }}
                                                >
                                                    CONNECT
                                                    <ArrowIcon />
                                                </button>
                                            </div>
                                            {blockchain.errorMsg !== "" ? (
                                                <>
                                                    <p>{blockchain.errorMsg}</p>
                                                </>
                                            ) : null}
                                        </div>
                                    ) : (
                                        <div className='flex gap-2 justify-end items-center'>
                                            <div className='text-white flex gap-2 justify-center items-center'>
                                                <button
                                                    className='btn-secondary quantity'
                                                    disabled={claimingNft ? 1 : 0}
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        decrementMintAmount();
                                                    }}
                                                >
                                                    -
                                                </button>
                                                <span className='text-xl px-2'>{mintAmount}</span>
                                                <button
                                                    className='btn-secondary quantity'
                                                    disabled={claimingNft ? 1 : 0}
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        incrementMintAmount();
                                                    }}
                                                >
                                                    +
                                                </button>
                                            </div>

                                            <button
                                                className='btn-primary px-12 busy-buy-now-btn'
                                                disabled={claimingNft ? 1 : 0}
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    claimNFTs3(mintAmount);
                                                    getData();
                                                }}
                                            >
                                                {claimingNft ? "BUSY" : "BUY "}
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </>
                        )}
                    </div>
                </div>

                <div className='max-w-md'>
                    <div className='bg-card border-card-border border-solid border relative shadow-lg hover:shadow-xl transition duration-500 rounded-2xl'>
                        {Number(data.totalSupply) === 50000 ? (
                            <>
                                <img className='rounded-2xl' src={i4} alt='' />
                                <div className='py-6 px-8  bg-card rounded-b-2xl'>
                                    <p className='text-lg text-white font-semibold regular-title'>The sale has ended.</p>
                                    <p className='text-lg text-normalText mt-4 font-semibold'>
                                        You can still find Afro American for sale on{" "}
                                        <a target={"_blank"} className='text-gray-200' href={"https://opensea.io/collection/afroamerican"}>
                                            Opensea.io
                                        </a>
                                    </p>
                                </div>
                            </>
                        ) : (
                            <>
                                <img className='rounded-2xl' src={i4} alt='' />
                                <div className='py-6 px-8  bg-card rounded-b-2xl text-normalTextg '>
                                    <h1 className='text-white font-bold text-2xl mb-3 hover:text-gray-50 hover:cursor-pointer regular-title'>0.17 ETH PER $500 NFT</h1>
                                    <div className='tracking-wide mt-8'>
                                        <p>{feedback}</p>
                                    </div>

                                    {blockchain.account === "" || blockchain.smartContract === null ? (
                                        <div className='space-y-8'>
                                            <p>Connect to the Ethereum network</p>
                                            <div className='flex justify-end items-center'>
                                                <button
                                                    className='btn-primary flex gap-2 justify-end items-center'
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        dispatch(connect());
                                                        getData();
                                                    }}
                                                >
                                                    CONNECT
                                                    <ArrowIcon />
                                                </button>
                                            </div>
                                            {blockchain.errorMsg !== "" ? (
                                                <>
                                                    <p>{blockchain.errorMsg}</p>
                                                </>
                                            ) : null}
                                        </div>
                                    ) : (
                                        <div className='flex gap-2 justify-end items-center'>
                                            <div className='text-white flex gap-2 justify-center items-center'>
                                                <button
                                                    className='btn-secondary quantity'
                                                    disabled={claimingNft ? 1 : 0}
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        decrementMintAmount();
                                                    }}
                                                >
                                                    -
                                                </button>
                                                <span className='text-xl px-2'>{mintAmount}</span>
                                                <button
                                                    className='btn-secondary quantity'
                                                    disabled={claimingNft ? 1 : 0}
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        incrementMintAmount();
                                                    }}
                                                >
                                                    +
                                                </button>
                                            </div>

                                            <button
                                                className='btn-primary px-12 busy-buy-now-btn'
                                                disabled={claimingNft ? 1 : 0}
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    claimNFTs4(mintAmount);
                                                    getData();
                                                }}
                                            >
                                                {claimingNft ? "BUSY" : "BUY "}
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </>
                        )}
                    </div>
                </div>

                <div className='max-w-md'>
                    <div className='bg-card border-card-border border-solid border relative shadow-lg hover:shadow-xl transition duration-500 rounded-2xl'>
                        {Number(data.totalSupply) === 50000 ? (
                            <>
                                <img className='rounded-2xl' src={i4} alt='' />
                                <div className='py-6 px-8  bg-card rounded-b-2xl'>
                                    <p className='text-lg text-white font-semibold regular-title'>The sale has ended.</p>
                                    <p className='text-lg text-normalText mt-4 font-semibold'>
                                        You can still find Afro American for sale on{" "}
                                        <a target={"_blank"} className='text-gray-200' href={"https://opensea.io/collection/afroamerican"}>
                                            Opensea.io
                                        </a>
                                    </p>
                                </div>
                            </>
                        ) : (
                            <>
                                <img className='rounded-2xl ' src={i4} alt='' />
                                <div className='py-6 px-8  bg-card rounded-b-2xl text-normalTextg '>
                                    <h1 className='text-white font-bold text-2xl mb-3 hover:text-gray-50 hover:cursor-pointer regular-title'>0.34 ETH PER $1000 NFT</h1>
                                    <div className='tracking-wide mt-8'>
                                        <p>{feedback}</p>
                                    </div>

                                    {blockchain.account === "" || blockchain.smartContract === null ? (
                                        <div className='space-y-8'>
                                            <p>Connect to the Ethereum network</p>
                                            <div className='flex justify-end items-center'>
                                                <button
                                                    className='btn-primary flex gap-2 justify-end items-center'
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        dispatch(connect());
                                                        getData();
                                                    }}
                                                >
                                                    CONNECT
                                                    <ArrowIcon />
                                                </button>
                                            </div>
                                            {blockchain.errorMsg !== "" ? (
                                                <>
                                                    <p>{blockchain.errorMsg}</p>
                                                </>
                                            ) : null}
                                        </div>
                                    ) : (
                                        <div className='flex gap-2 justify-end items-center'>
                                            <div className='text-white flex gap-2 justify-center items-center'>
                                                <button
                                                    className='btn-secondary quantity'
                                                    disabled={claimingNft ? 1 : 0}
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        decrementMintAmount();
                                                    }}
                                                >
                                                    -
                                                </button>
                                                <span className='text-xl px-2'>{mintAmount}</span>
                                                <button
                                                    className='btn-secondary quantity'
                                                    disabled={claimingNft ? 1 : 0}
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        incrementMintAmount();
                                                    }}
                                                >
                                                    +
                                                </button>
                                            </div>

                                            <button
                                                className='btn-primary px-12 busy-buy-now-btn'
                                                disabled={claimingNft ? 1 : 0}
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    claimNFTs5(mintAmount);
                                                    getData();
                                                }}
                                            >
                                                {claimingNft ? "BUSY" : "BUY "}
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

const BottomShapeDivider = (props) => {
    return (
        <div className='rotate-180 mt-24'>
            <svg data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 120' preserveAspectRatio='none'>
                <path
                    d='M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z'
                    opacity='.25'
                    className='shape-fill'
                    fill='#3F1800'
                    fill-opacity='1'
                ></path>
                <path
                    d='M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z'
                    opacity='.5'
                    className='shape-fill'
                    fill='#3F1800'
                    fill-opacity='1'
                ></path>
                <path
                    d='M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z'
                    className='shape-fill'
                    fill='#3F1800'
                    fill-opacity='1'
                ></path>
            </svg>
        </div>
    );
};

const MailChimpSusbcribe = (props) => {
    const MAILCHIMP_URL = "https://Flixu.us6.list-manage.com/subscribe/post?u=0655a15d9854b7fdbc0dafe46&amp;id=d852f8be2e";

    return (
        <MailchimpSubscribe
            url={MAILCHIMP_URL}
            render={(props) => {
                const { subscribe, status, message } = props || {};
                return <Newsletter status={status} message={message} onValidated={(formData) => subscribe(formData)} />;
            }}
        />
    );
};

const Newsletter = ({ status, message, onValidated }) => {
    const [error, setError] = useState(null);
    const [email, setEmail] = useState(null);

    /**
     * Handle form submit.
     *
     * @return {{value}|*|boolean|null}
     */
    const handleFormSubmit = () => {
        setError(null);

        if (!email) {
            setError("Please enter a valid email address");
            return null;
        }

        const isFormValidated = onValidated({ EMAIL: email });

        // On success return true
        return email && email.indexOf("@") > -1 && isFormValidated;
    };

    /**
     * Handle Input Key Event.
     *
     * @param event
     */
    const handleInputKeyEvent = (event) => {
        setError(null);
        // Number 13 is the "Enter" key on the keyboard
        if (event.keyCode === 13) {
            // Cancel the default action, if needed
            event.preventDefault();
            // Trigger the button element with a click
            handleFormSubmit();
        }
    };

    /**
     * Extract message from string.
     *
     * @param {String} message
     * @return {null|*}
     */
    const getMessage = (message) => {
        if (!message) {
            return null;
        }
        const result = message?.split("-") ?? null;
        if ("0" !== result?.[0]?.trim()) {
            return decode(message);
        }
        const formattedMessage = result?.[1]?.trim() ?? null;
        return formattedMessage ? decode(formattedMessage) : null;
    };

    return (
        <>
            <div className='max-w-4xl flex items-center flex-wrap gap-12'>
                <label className='text-xl font-medium leading-5 text-gray-200 '>Get updates</label>

                <div className='flex items-center justify-center border border-gray-200 rounded-lg '>
                    <input
                        onChange={(event) => setEmail(event?.target?.value ?? "")}
                        onKeyUp={(event) => handleInputKeyEvent(event)}
                        type='email'
                        className='text-base  leading-4 p-4 relative z-0  border-primary border-2 focus:outline-none text-gray-800 placeholder-gray-500  rounded-l-lg'
                        placeholder='Enter your email'
                    />
                    <button
                        onClick={handleFormSubmit}
                        aria-label='send'
                        className='focus:outline-none focus:ring-2 focus:ring-offset-2 hover:bg-primaryDark rounded-r-lg focus:bg-primaryDark cursor-pointer relative z-20 bg-primary'
                        style={{ padding: "1.1rem" }}
                    >
                        <svg className='fill-current text-white' width='16' height='17' viewBox='0 0 16 17' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>
                            <path
                                d='M14.8934 7.39673L14.8884 7.39457L1.54219 1.9166C1.42993 1.87011 1.30778 1.85187 1.18666 1.86353C1.06554 1.87519 0.949225 1.91637 0.848125 1.9834C0.741311 2.05266 0.653573 2.14711 0.592805 2.25826C0.532037 2.36941 0.500145 2.49376 0.5 2.62013V6.12357C0.50006 6.29633 0.561019 6.46366 0.67237 6.59671C0.783722 6.72976 0.938491 6.82021 1.11 6.85246L8.38906 8.18438C8.41767 8.18974 8.44348 8.20482 8.46205 8.22701C8.48062 8.2492 8.49078 8.2771 8.49078 8.30591C8.49078 8.33472 8.48062 8.36263 8.46205 8.38481C8.44348 8.407 8.41767 8.42208 8.38906 8.42744L1.11031 9.75936C0.938851 9.79153 0.784092 9.88185 0.67269 10.0148C0.561288 10.1477 0.500219 10.3149 0.5 10.4876V13.9917C0.499917 14.1124 0.530111 14.2312 0.587871 14.3374C0.645632 14.4437 0.729152 14.5341 0.830938 14.6006C0.953375 14.6811 1.09706 14.7241 1.24406 14.7243C1.34626 14.7242 1.4474 14.7039 1.54156 14.6646L14.8875 9.21787L14.8934 9.21509C15.0731 9.13869 15.2262 9.01185 15.3337 8.85025C15.4413 8.68866 15.4986 8.49941 15.4986 8.30591C15.4986 8.11241 15.4413 7.92316 15.3337 7.76157C15.2262 7.59997 15.0731 7.47313 14.8934 7.39673Z'
                                fill='currentColor'
                            />
                        </svg>
                    </button>
                </div>
            </div>

            <div className='newsletter-form-info'>
                {status === "sending" && <div>Sending...</div>}
                {status === "error" || error ? <div className='newsletter-form-error' dangerouslySetInnerHTML={{ __html: error || getMessage(message) }} /> : null}
                {status === "success" && status !== "error" && !error && <div dangerouslySetInnerHTML={{ __html: decode(message) }} />}
            </div>
        </>
    );
};

const Informational = (props) => {
    return (
        <section className='bg-thirdDark  p-12 '>
            <div className='max-w-8xl mt-12'>
                <div className=' text-white bg-thirdDarkCard px-12 py-8 rounded-xl leading-relaxed shadow-xl '>
                    <p>
                        You can buy any of them or a combination. Next time you want to pay or trade you can offer the NFTs for now, depending on the Price of ETH which at this time is almost half
                        what it as a short time ago. So you have a built in mechanism of keeping your value or it may appreciate based on the ETH current situation.
                    </p>

                    <p>
                        You can also trade with your Afro-American brothers against other items based on the NFT so if you need to get something from a “Brother” store you may offer him NFT in full or
                        partial payment.
                    </p>

                    <p>Support black Enterprise!</p>

                    <p>Get on the Afro American independence of current systems!</p>

                    <p>There may be a possibility to trade with NFTs like other items in an exchange (Sushi Swap).</p>

                    <p>
                        This offer of NFT is not an offer for investment or promise of any kind, it's just a flag introduced in Black History month of 2022, to show that We all can have our privacy
                        and independence.
                    </p>

                    <p>No promises are made.</p>

                    <p>
                        There may be possibilities down the line of getting a collateralized or non collateralized loan against these NFTs (it's called defi). No one will qualify you based on the
                        credit history or color of your skin because it's all private to you! Sooner or later due to the NFT revolution no one will be able to count you out because you are Black!
                    </p>

                    <p>Blockchain has no color or race!</p>

                    <p>What you do with your NFT is your private business! No one will know what you are doing unless you tell them.</p>

                    <p>You can also register with us to be on our mailing list for any future development.</p>

                    <p>If you have any questions the please ask in our support channel of our Discord or email afroamericannft@protonmail.com</p>
                    <div className=' pt-8'>
                        <MailChimpSusbcribe></MailChimpSusbcribe>
                    </div>
                </div>

                {/* <div className=' text-white bg-thirdDarkCard px-12 py-8 mt-12 rounded-xl leading-relaxed shadow-xl '></div> */}
            </div>
        </section>
    );
};

const Footer = (props) => {
    return (
        <footer className='bg-dark p-12  rounded-lg md:px-6 md:py-8 divide-y divide-secondaryDark    '>
            <div className='flex items-center justify-center gap-4 flex-col pb-6'>
                <a href='https://flowbite.com' target='_blank' className='flex items-center mb-4 sm:mb-0'>
                    <span className='self-center text-xl font-semibold whitespace-nowrap text-white'>AFRO AMERICAN NFTS</span>
                </a>
                <ul className='flex flex-wrap items-center mb-6 sm:mb-0  space-x-8 '>
                    <li>
                        <a href='#' className=''>
                            Privacy Policy
                        </a>
                    </li>
                    <li>
                        <a href='#' className=' '>
                            Terms of service
                        </a>
                    </li>
                    <li>
                        <a href='#' className='text-sm  hover:underline '>
                            DMCA
                        </a>
                    </li>
                </ul>
            </div>
            <div className='block text-sm text-gray-100 sm:text-center pt-6'>
                <p className='text-gray-100'>
                    For any inquiries: <a href='mailto:afroamericannft@protonmail.com'>afroamericannft@protonmail.com</a>
                </p>
                © 2022{" "}
                <a href='https://afroamericannft.com' target='_blank'>
                    Afro American NFT
                </a>
                . All Rights Reserved.
            </div>
        </footer>
    );
};

export default App;
