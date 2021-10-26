/** @format */

import Link from 'next/link';
import styled from 'styled-components';
import Nav from './Nav';

const Logo = styled.h1`
  /* background: red; */
  /* font-size:4rem;
margin-left: 2rem;
position: relative;
z-index: 2;
transform: skew(-7deg); */

  a {
    color: white;
    text-decoration: none;
    text-transform: uppercase;
    padding: 0.5rem 1rem;
  }
`;

const HeaderStyles = styled.header`
  .bar {
    border-bottom: 10px solid var(--black, black);
    display: grid;
    grid-template-columns: auto 1fr;
    justify-content: space-between;
    align-items: stretch;
    height: 100px;
  }

  .sub-bar {
    display: grid;
    grid-template-columns: 1fr auto;
    border-bottom: 1px solid var(--black, black);
  }
`;

export default function Header() {
  return (
    <HeaderStyles>
      <div className="bar">
        {/* <Logo> */}
        <Link href="/">
          <img
            style={{
              width: 250,
              margin: '0 25px',
              height: 80,
            }}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVYx-LLhHzBG6eVv67HXs_yo0YmC2cZ_Gbx5j9YVXgLV5i9WAeWvSUbyVmiCabIZcByQ&usqp=CAU"
          />
        </Link>

        <Nav />
        {/* </Logo> */}
      </div>
      <div className="sub-bar">Search</div>
    </HeaderStyles>
  );
}
