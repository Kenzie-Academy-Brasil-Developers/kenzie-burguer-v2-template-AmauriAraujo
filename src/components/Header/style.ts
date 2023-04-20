import styled from 'styled-components';

export const StyledHeader = styled.header`
  background: ${({ theme }) => theme.colors.gray0};
  .flexGrid {
    display: flex;
    align-items: center;
    justify-content: space-between;

    gap: 20px;

    .logo {
      max-width: 160px;
    }
    .nav {
      display: flex;
      align-items: center;
      gap: 20px;

      .buttons {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 15px;

        button {
          background: transparent;
          color: ${({ theme }) => theme.colors.gray150};
          transition: 0.3s;

          :hover {
            color: ${({ theme }) => theme.colors.gray300};
          }
        }
      }
    }

    @media (max-width: 600px) {
      flex-direction: column;
    }

    @media (max-width: 450px) {
      .nav {
        flex-direction: column;
      }
    }
  }
#cart-btn{
  position:relative;


  p{background-Color: #27AE60;
  width:20px;
height:24px;
border-radius:7px;
display:flex;
align-items:center;
justify-content:center;
color:#ffffff;
font-weight:900;
font-size:14px;
position:absolute;
top:-10px;
right:-12px;
}
}
`;
