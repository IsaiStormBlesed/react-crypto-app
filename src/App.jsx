import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import FinalConversion from "./components/FinalConversion";
import Form from "./components/Form";
import Spinner from "./components/Spinner";
import ImgCrypto from "./img/imagen-criptos.png"

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  width: 90%;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 2rem; 
  }
`
const Image = styled.img`
  display: block;
  max-width: 400px;
  margin: 100px auto 0 auto;
  width: 80%;
`
const SpinnerContainer = styled.div`
  max-width: 400px;
  margin: 100px auto 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Heading = styled.h1`
  color: #fff;
  font-family: 'Lato', sans-serif;
  font-size: 30px;
  font-weight: 700;
  margin-top: 80px;
  margin-bottom: 50px;
  text-align: center;

  &::after {
    background-color: #66a2fe;
    content: '';
    display: block;
    height: 6px;
    margin: 10px auto 0 auto;
    width: 100px;
  }
`

function App() {

  const [selectedCurrency, setSelectedCurrency] = useState({});
  const [finalConversion, setFinalConversion] = useState({});
  const [showFinalConversion, setShowFinalConversion] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (Object.keys(selectedCurrency).length > 0) {
      const coinConversion = async () => {
        setShowFinalConversion(false)
        setLoading(true)

        const { currency, crypto } = selectedCurrency
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${crypto}&tsyms=${currency}`
        const response = await fetch(url)
        const data = await response.json()

        setFinalConversion(data.DISPLAY[crypto][currency]);
        setShowFinalConversion(true)
        setLoading(false)
      }
      coinConversion()
    }
  }, [selectedCurrency]);
  

  return (
    <Container>
      <Image 
        src={ImgCrypto}
        alt="Crypto Image"
      />
      <div>
        <Heading>Quote your Cryptos in an Instance</Heading>
        <Form setSelectedCurrency={setSelectedCurrency}/>
      </div>
        {loading === true 
          ? 
          <SpinnerContainer>
            <Spinner /> 
          </SpinnerContainer>
          : 
          null
        }
        {
          showFinalConversion 
          ?
          <FinalConversion 
            finalConversion={finalConversion}
          />
          :
          null
        }
    </Container>
  )
}

export default App
