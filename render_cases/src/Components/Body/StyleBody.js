import styled from "styled-components";
import { ReactComponent as BasicChair } from "../../Assets/Chairs/basicchair.svg";
import { ReactComponent as ChairGray } from "../../Assets/Chairs/chairG.svg";
import { ReactComponent as ChairYel } from "../../Assets/Chairs/chairYel.svg";
import { ReactComponent as EarPhone } from "../../Assets/Items/earphone.svg";
import { ReactCompnt as Present } from "../../Assets/Items/Present.svg";
import { ReactComponent as Wallet } from "../../Assets/Items/wallet.svg";
export const B = styled.div`
  width: 899px;
  height: 439px;
  display: flex;
  background: linear-gradient(
    103.4deg,
    rgba(241, 250, 255, 0.88) 0.89%,
    #f1faff 101.61%
  );
  backdrop-filter: blur(155px);
  border-radius: 1px;
  margin-left: 11px;
  padding: 36px 39px 20px 47px;
`;
B.Container = styled.div``;

B.Title = styled.h1`
  font-style: normal;
  font-weight: normal;
  font-size: 22px;
  line-height: 26px;
  letter-spacing: 0.05em;
  color: #7ac751;
  margin-top: 37px;
`;

B.Heading = styled.h1`
  width: 318px;
  font-style: normal;
  font-weight: 500;
  font-size: 40px;
  line-height: 47px;
  margin-top: 6px;
  color: #2f2f2f;
`;
B.Text = styled.h1`
  font-style: normal;
  font-weight: 600;
  font-size: 27px;
  line-height: 26px;
  color: rgba(81, 81, 81, 0.71);
  margin-top: 27px;
`;
B.ShopBtn = styled.button`
  width: 129px;
  height: 40px;
  background-color: #7ac751;
  margin-top: 35px;
  color: #fff;
  border-radius: 5px;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  outline: none;
  border: none;
  :hover {
    background-color: lawngreen;
  }
`;
B.BasicChair = styled(BasicChair)`

`;
B.WrapChairs = styled.div`
  width: 99px;
  height: 300px;
  display: flex;
  flex-direction: column;
  margin-top: 22px;
`;
B.ContChair = styled.div`
  width: 98px;
  height: 92px;
  margin-bottom: 25.5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.6) 0%,
    rgba(255, 255, 255, 0.56) 100%
  );
  border: 2px solid #ffffff;
  box-sizing: border-box;
  border-radius: 8px;
`;
B.Price = styled.h5`
  font-weight: 500;
  font-size: 11px;
  line-height: 26px;
  display: flex;
  align-items: center;
  color: #7ac751;
  margin: 0;
`;
B.$ = styled.p`
  font-weight: 500;
  font-size: 7px;
  line-height: 26px;
  color: #7ac751;
  margin: 0;
`;
B.ChairG = styled.img`
  width: 49px;
  height: 53px;
`;
B.ChairMal = styled.img`
  width: 71px;
  height: 53px;
`;
B.ChairYel = styled.img`
  width: 51px;
  height: 53px;
`;
B.Name = styled.h3`
  font-weight: 500;
  font-size: 7px;
  line-height: 26px;
  display: flex;
  align-items: center;
  color: #555555;
  margin: 0;
`;
