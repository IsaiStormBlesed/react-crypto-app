import useSelectCoins from "../hooks/useSelectCoins";
import { currencies } from "../data/helperData";
import styled from "@emotion/styled";

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

  const [currency, SelectCoins] = useSelectCoins('Choose your currency', currencies)
  console.log(currency);
  return (
    <form>
      <SelectCoins 

      />
      <InputSubmit 
        type="submit" 
        value="Quote" 
      />
    </form>
  )
};

export default Form;
