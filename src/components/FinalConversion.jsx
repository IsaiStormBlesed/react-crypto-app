import styled from "@emotion/styled";

const Container = styled.div`
  border-radius: 5px;
  align-items: center;
  color: #fff;
  gap: 20px;
  font-family: 'Lato', sans-serif;
  padding-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
`

const Txt = styled.p`
  font-size: 17px;
`

const Price = styled.p`
  font-size: 25px;
  span {
    font-weight: 700;
  }
`

const Img = styled.div`
  margin: 0 auto;
  width: 150px;
`

const FinalConversion = ({ finalConversion }) => {

  const { PRICE, HIGHDAY, LOWDAY, LASTUPDATE, CHANGEPCT24HOUR, IMAGEURL } = finalConversion

  return (
    <Container>
      <Img>
        <img style={{width: '100%'}} src={`http://cryptocompare.com/${IMAGEURL}`} alt="crypto img" />
      </Img>

      <div>
        <Price>Price is: <span>{PRICE}</span></Price>
        <Txt>Highest Price Today is: <span>{HIGHDAY}</span></Txt>
        <Txt>Lowest Price Today is: <span>{LOWDAY}</span></Txt>
        <Txt>Last Update: <span>{LASTUPDATE}</span></Txt>
        <Txt>Last 24 Hours: <span>{CHANGEPCT24HOUR}</span></Txt>
      </div>
    </Container>
  )
};

export default FinalConversion;
