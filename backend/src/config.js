require('dotenv').config();
const basePath = process.cwd();
const fs = require("fs");
const { MODE } = require(`${basePath}/constants/blend_mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);

const network = NETWORK.eth;

// General metadata for Ethereum
const namePrefix = "Zodiac Gems (Feminine)";
const description = "NFT collection of 9,999 generative art of women that epitomize the 12 zodiac signs";
const baseUri = "ipfs://NewUriToReplace"; // This will be replaced automatically

// If you have selected Solana then the collection starts from 0 automatically
const layerConfigurations = [
  {
    growEditionSizeTo: 833,
    layersOrder: [
      { name: "Background Aquarius" },
      { name: "Base" },
      { name: "Zodiac Sign Aquarius" },
      { name: "Eyes" },
      { name: "Lips" },
      { name: "Dress" },
      { name: "Hair" },
      { name: "Accessories" },
    ],
  },
  {
    growEditionSizeTo: 1669,
    layersOrder: [
      { name: "Background Aries" },
      { name: "Base" },
      { name: "Zodiac Sign Aries" },
      { name: "Eyes" },
      { name: "Lips" },
      { name: "Dress" },
      { name: "Hair" },
      { name: "Accessories" },
    ],
  },
  {
    growEditionSizeTo: 2502,
    layersOrder: [
      { name: "Background Cancer" },
      { name: "Base" },
      { name: "Zodiac Sign Cancer" },
      { name: "Eyes" },
      { name: "Lips" },
      { name: "Dress" },
      { name: "Hair" },
      { name: "Accessories" },
    ],
  },
  {
    growEditionSizeTo: 3335,
    layersOrder: [
      { name: "Background Capricorn" },
      { name: "Base" },
      { name: "Zodiac Sign Capricorn" },
      { name: "Eyes" },
      { name: "Lips" },
      { name: "Dress" },
      { name: "Hair" },
      { name: "Accessories" },
    ],
  },
  {
    growEditionSizeTo: 4168,
    layersOrder: [
      { name: "Background Gemini" },
      { name: "Base" },
      { name: "Zodiac Sign Gemini" },
      { name: "Eyes" },
      { name: "Lips" },
      { name: "Dress" },
      { name: "Hair" },
      { name: "Accessories" },
    ],
  },
  {
    growEditionSizeTo: 5001,
    layersOrder: [
      { name: "Background Leo" },
      { name: "Base" },
      { name: "Zodiac Sign Leo" },
      { name: "Eyes" },
      { name: "Lips" },
      { name: "Dress" },
      { name: "Hair" },
      { name: "Accessories" },
    ],
  },
  {
    growEditionSizeTo: 5834,
    layersOrder: [
      { name: "Background Libra" },
      { name: "Base" },
      { name: "Zodiac Sign Libra" },
      { name: "Eyes" },
      { name: "Lips" },
      { name: "Dress" },
      { name: "Hair" },
      { name: "Accessories" },
    ],
  },
  {
    growEditionSizeTo: 6667,
    layersOrder: [
      { name: "Background Pisces" },
      { name: "Base" },
      { name: "Zodiac Sign Pisces" },
      { name: "Eyes" },
      { name: "Lips" },
      { name: "Dress" },
      { name: "Hair" },
      { name: "Accessories" },
    ],
  },
  {
    growEditionSizeTo: 7500,
    layersOrder: [
      { name: "Background Sagittarius" },
      { name: "Base" },
      { name: "Zodiac Sign Sagittarius" },
      { name: "Eyes" },
      { name: "Lips" },
      { name: "Dress" },
      { name: "Hair" },
      { name: "Accessories" },
    ],
  },
  {
    growEditionSizeTo: 8333,
    layersOrder: [
      { name: "Background Scorpio" },
      { name: "Base" },
      { name: "Zodiac Sign Scorpio" },
      { name: "Eyes" },
      { name: "Lips" },
      { name: "Dress" },
      { name: "Hair" },
      { name: "Accessories" },
    ],
  },
  {
    growEditionSizeTo: 9166,
    layersOrder: [
      { name: "Background Taurus" },
      { name: "Base" },
      { name: "Zodiac Sign Taurus" },
      { name: "Eyes" },
      { name: "Lips" },
      { name: "Dress" },
      { name: "Hair" },
      { name: "Accessories" },
    ],
  },
  {
    growEditionSizeTo: 9999,
    layersOrder: [
      { name: "Background Virgo" },
      { name: "Base" },
      { name: "Zodiac Sign Virgo" },
      { name: "Eyes" },
      { name: "Lips" },
      { name: "Dress" },
      { name: "Hair" },
      { name: "Accessories" },
    ],
  },  
];

const shuffleLayerConfigurations = true;

const debugLogs = false;

const format = {
  width: 1000,
  height: 1000,
  smoothing: false,
};

const extraMetadata = {
// external_url: "https://codecats.xyz", // Replace with your website or remove this line if you do not have one.
};

// NFTPort Info

// ** REQUIRED **
const AUTH = process.env.NFTPORT_API_KEY; // Set this in the .env file to prevent exposing your API key when pushing to Github
const LIMIT = 10; // Your API key rate limit
const CHAIN = 'polygon'; // only rinkeby or polygon

// REQUIRED CONTRACT DETAILS THAT CANNOT BE UPDATED LATER!
const CONTRACT_NAME = 'Zodiac Gems (Feminine)';
const CONTRACT_SYMBOL = 'ZGF';
const MINT_TO_ADDRESS = '0x2Cfd2d7B39752bcFBC6Aa1b1DD01ccf33a0093B7';
const METADATA_UPDATABLE = true; // set to false if you don't want to allow metadata updates after minting
const OWNER_ADDRESS = '0x2Cfd2d7B39752bcFBC6Aa1b1DD01ccf33a0093B7';
const TREASURY_ADDRESS = '0x2Cfd2d7B39752bcFBC6Aa1b1DD01ccf33a0093B7';
const MAX_SUPPLY = 9999; // The maximum number of NFTs that can be minted. CANNOT BE UPDATED!
const MINT_PRICE = 18; // Minting price per NFT. Rinkeby = ETH, Polygon = MATIC. CANNOT BE UPDATED!
const TOKENS_PER_MINT = 33; // maximum number of NFTs a user can mint in a single transaction. CANNOT BE UPDATED!

// REQUIRED CONTRACT DETAILS THAT CAN BE UPDATED LATER.
const PUBLIC_MINT_START_DATE = "2022-04-23T09:00:00+00:00"; // This is required. Eg: 2022-02-08T11:30:48+00:00

// OPTIONAL CONTRACT DETAILS THAT CAN BE UPDATED LATER.
const PRESALE_MINT_START_DATE = null; // Optional. Eg: 2022-02-08T11:30:48+00:00
const ROYALTY_SHARE = 1000; // Percentage of the token price that goes to the royalty address. 100 bps = 1%
const ROYALTY_ADDRESS = "0x2Cfd2d7B39752bcFBC6Aa1b1DD01ccf33a0093B7"; // Address that will receive the royalty
const BASE_URI = null; // only update if you want to manually set the base uri
const PREREVEAL_TOKEN_URI = null; // only update if you want to manually set the prereveal token uri
const PRESALE_WHITELISTED_ADDRESSES = []; // only update if you want to manually set the whitelisted addresses

// ** OPTIONAL **
let CONTRACT_ADDRESS = "YOUR CONTRACT ADDRESS"; // If you want to manually include it

// Generic Metadata is optional if you want to reveal your NFTs
const GENERIC = true; // Set to true if you want to upload generic metas and reveal the real NFTs in the future
const GENERIC_TITLE = CONTRACT_NAME; // Replace with what you want the generic titles to say if you want it to be different from the contract name.
const GENERIC_DESCRIPTION = "Which Zodiac Gem will you get?"; // Replace with what you want the generic descriptions to say.
const GENERIC_IMAGE = "https://ipfs.io/ipfs/bafybeibzy6h35a6cfbzdbjiv5qzit2puswk4ufmvzcwtk552z5of6vnpva"; // Replace with your generic image that will display for all NFTs pre-reveal.

// Automatically set contract address if deployed using the deployContract.js script
try {
  const rawContractData = fs.readFileSync(
    `${basePath}/build/contract/_contract.json`
  );
  const contractData = JSON.parse(rawContractData);
  if (contractData.response === "OK" && contractData.error === null) {
    CONTRACT_ADDRESS = contractData.contract_address;
  }
} catch (error) {
  // Do nothing, falling back to manual contract address
}
// END NFTPort Info

const solanaMetadata = {
  symbol: "YC",
  seller_fee_basis_points: 1000, // Define how much % you want from secondary market sales 1000 = 10%
  external_url: "https://www.youtube.com/c/hashlipsnft",
  creators: [
    {
      address: "7fXNuer5sbZtaTEPhtJ5g5gNtuyRoKkvxdjEjEnPN4mC",
      share: 100,
    },
  ],
};

const gif = {
  export: false,
  repeat: 0,
  quality: 100,
  delay: 500,
};

const text = {
  only: false,
  color: "#ffffff",
  size: 20,
  xGap: 40,
  yGap: 40,
  align: "left",
  baseline: "top",
  weight: "regular",
  family: "Courier",
  spacer: " => ",
};

const pixelFormat = {
  ratio: 2 / 128,
};

const background = {
  generate: true,
  brightness: "80%",
  static: false,
  default: "#000000",
};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.height / format.width,
  imageName: "preview.png",
};

const preview_gif = {
  numberOfImages: 5,
  order: "ASC", // ASC, DESC, MIXED
  repeat: 0,
  quality: 100,
  delay: 500,
  imageName: "preview.gif",
};

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
  pixelFormat,
  text,
  namePrefix,
  network,
  solanaMetadata,
  gif,
  preview_gif,
  AUTH,
  LIMIT,
  CONTRACT_ADDRESS,
  OWNER_ADDRESS,
  TREASURY_ADDRESS,
  CHAIN,
  GENERIC,
  GENERIC_TITLE,
  GENERIC_DESCRIPTION,
  GENERIC_IMAGE,
  CONTRACT_NAME,
  CONTRACT_SYMBOL,
  METADATA_UPDATABLE,
  ROYALTY_SHARE,
  ROYALTY_ADDRESS,
  MAX_SUPPLY,
  MINT_PRICE,
  TOKENS_PER_MINT,
  PRESALE_MINT_START_DATE,
  PUBLIC_MINT_START_DATE,
  BASE_URI,
  PREREVEAL_TOKEN_URI,
  PRESALE_WHITELISTED_ADDRESSES
};
