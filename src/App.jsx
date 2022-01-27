import styled from "@emotion/styled";
import Form from "./components/Form";
import ImgCrypto from "./img/imagen-criptos.png"

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  width: 90%;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem; 
  }
`
const Image = styled.img`
  display: block;
  max-width: 400px;
  margin: 100px auto 0 auto;
  width: 80%;
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

  return (
    <Container>
      <Image 
        src={ImgCrypto}
        alt="Crypto Image"
      />
      <div>
        <Heading>Quote your Cryptos in an Instance</Heading>
        <Form />
      </div>
    </Container>
  )
}

export default App
