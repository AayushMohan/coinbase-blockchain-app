import btcLogo from "../assets/btc.png";
import maticLogo from "../assets/matic.png";
import dogeLogo from "../assets/doge.png";
import ethLogo from "../assets/eth.png";
import lunaLogo from "../assets/luna.png";
import solLogo from "../assets/sol.png";

export const coins = [
  {
    name: "Bitcoin",
    sign: "BTC",
    logo: btcLogo,
    balanceUsd: "2,517,149",
    balanceCoin: 107,
    priceUsd: "23,524.76",
    change: -4.74,
    allocation: 41.89,
  },
  {
    name: "Solana",
    sign: "CRV",
    logo: solLogo,
    balanceUsd: "4,581.77",
    balanceCoin: 111,
    priceUsd: "41.26",
    change: 4.74,
    allocation: 41.89,
  },
  {
    name: "Polygon",
    sign: "MATIC",
    logo: maticLogo,
    balanceUsd: "80,943",
    balanceCoin: "89,882.22",
    priceUsd: "0.9",
    change: -5.24,
    allocation: 17.89,
  },
  {
    name: "Ethereum",
    sign: "ETH",
    logo: ethLogo,
    balanceUsd: "185,740.05",
    balanceCoin: 100,
    priceUsd: "1,857.4",
    change: 6.24,
    allocation: 17.89,
  },
  {
    name: "Terra",
    sign: "LUNA",
    logo: lunaLogo,
    balanceUsd: "343,242",
    balanceCoin: "179,707.85",
    priceUsd: 1.91,
    change: -5.24,
    allocation: 17.89,
  },
  {
    name: "Dogecoin 🌙",
    sign: "DOGE",
    logo: dogeLogo,
    balanceUsd: "11,245",
    balanceCoin: "139,44",
    priceUsd: 0.08,
    change: 200.24,
    allocation: 17.89,
  },
];
