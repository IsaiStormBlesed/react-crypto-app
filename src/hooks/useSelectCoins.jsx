import { useState } from "react";
import styled from "@emotion/styled";

const Label = styled.label`
  color: #fff;
  display: block;
  font-family: 'Lato', sans-serif;
  font-size: 24px;
  font-weight: 700;
  margin: 15px 0;
`
const Select = styled.select`
  border-radius: 5px;
  font-size: 18px;
  padding: 14px;
  width: 100%
`

function useSelectCoins(label, options) {

  const [state, setState] = useState('')

  function SelectCoins() {
    return (
      <>
        <Label>{label}</Label>
        <Select
          value={state}
          onChange={(e) => setState(e.target.value)}
        >
          <option>-- Select --</option>

          {
            options.map((coin) => {
              return (
                <option
                  key={coin.id}
                  value={coin.id}
                >
                  -- {coin.name} --
                </option>
              )
            })
          }
        </Select>
      </>
    )
  }

  return [state, SelectCoins]
};

export default useSelectCoins;