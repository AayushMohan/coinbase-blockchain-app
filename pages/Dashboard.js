import styled from "styled-components";
import React from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import Sidebar from "../components/Sidebar";

const Dashboard = ({ address }) => {
  const [sanityTokens, setSanityTokens] = useState([]);
  const [thirdWebTokens, setThirdWebTokens] = useState([]);

  useEffect(() => {
    const getSanityAndThirdWebTokens = async () => {
      const coins = await fetch(
        "https://39o9ys0j.api.sanity.io/v1/data/query/production?query=*%5B_type%3D%3D'coins'%5D%7B%0A%20%20name%2C%0A%20%20usdPrice%2C%0A%20%20contractAddress%2C%0A%20%20symbol%2C%0A%20%20logo%0A%7D"
      );
      const sanityTokens = (await coins.json()).result;
      setSanityTokens(sanityTokens);

      setThirdWebTokens(
        sanityTokens.map((token) => sdk.getTokenModule(token.contractAddress))
      );
    };

    return getSanityAndThirdWebTokens();
  }, []);

  console.log("Sanity", sanityTokens);
  console.log("Thirdweb", thirdWebTokens);

  return (
    <Wrapper>
      <Sidebar />
      <MainContainer>
        <Header walletAddress={address} />
        <Main />
      </MainContainer>
    </Wrapper>
  );
};

export default Dashboard;

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  background-color: #0a0b0d;
  color: white;
`;
// overflow: hidden;

const MainContainer = styled.div`
  flex: 1;
`;
