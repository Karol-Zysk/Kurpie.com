import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #010606;

  @media screen and (max-width: 1000px) {
    padding: 100px 0;
    height: auto;
  }
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  margin: 0 auto;
  z-index: 1;
  height: 100%;
  width: 100%;
  max-width: 1000px;
  padding: 0 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;
export const Image = styled.img`
  height: 160px;
  width: auto;
  margin-bottom: 10px;
  border-radius: 15px;
  opacity: 0.9;
  transition: ease-in-out 0.2s;
`;

export const Card = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 15px;
  max-height: 340px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
  &:hover ${Image} {
    opacity: 1;
    transition: ease-in-out 0.2s;
  }
`;

export const DiscoverH1 = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 0px;
  margin-top: 140px;

  @media screen and (max-width: 1000px) {
    margin-top: 0px;
    margin-bottom: 50px;
  }
  @media screen and (max-width: 480px) {
    font-size: 2rem;
    color: #fff;
  }
`;

export const DiscoverH2 = styled.h2`
  font-size: 1rem;

  margin-bottom: 10px;
`;

export const DiscoverP = styled.p`
  font-size: 1rem;
  text-align: center;
`;
