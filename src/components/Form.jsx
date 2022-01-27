import useSelectCoins from "../hooks/useSelectCoins";
import { currencies } from "../data/helperData";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import Error from "./Error";

const InputSubmit = styled.input`
  background-color: #9497ff;
  border: none;
  border-radius: 5px;
  color: #fff;
  font-size: 20px;
  font-weight: 700;
  margin-top: 20px;
  padding: 10px;
  text-transform: uppercase;
  transition: background-color .3s ease;
  width: 100%;
  
  &:hover {
    background-color: #7a7dfe;
    cursor: pointer;
  }
`

const Form = () => {

  const [error, setError] = useState(false);
  const [cryptos, setCryptos] = useState([]);
  const [currency, SelectCoins] = useSelectCoins('Choose your currency', currencies)
  const [crypto, SelectCrypto] = useSelectCoins('Choose your Crypto Coin', cryptos)

  
  useEffect(() => {
    const fetchAPI = async () => {
      const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
      const response = await fetch(url)
      const data = await response.json()

      const cryptoArray = data.Data.map((crypto) => {
        const cryptoObject = {
          id: crypto.CoinInfo.Name,
          name: crypto.CoinInfo.FullName
        }

        return cryptoObject
      })
      
      setCryptos(cryptoArray)
    }

    fetchAPI()
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault()

    if ([currency, crypto].includes('')) {
      setError(true)
      return
    }

    setError(false)
  }
  

  return (
    <>
      { error && <Error >All fields are necessary</Error> }

      <form onSubmit={handleSubmit}>
        <SelectCoins />
        <SelectCrypto />

        <InputSubmit 
          type="submit" 
          value="Quote" 
        />
      </form>
    </>
  )
};

export default Form;
