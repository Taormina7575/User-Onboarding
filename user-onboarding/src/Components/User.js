import React from "react";
import styled from "styled-components";

const UserContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  width: 50%;
`;
const UserName = styled.h3`
  font-size: 4rem;
  font-weight: bolder;
  border: 1px solid green;
  text-align: center;
`;
const InfoPiece = styled.li`
  font-size: 3rem;
  text-indent: 10%;
  background-color: gray;
`;
export default function User({ userData }) {
  return (
    <UserContainer>
      <UserName>{userData.name}</UserName>
      <ul>
        <InfoPiece>{userData.email}</InfoPiece>
        <InfoPiece>{userData.password}</InfoPiece>
      </ul>
    </UserContainer>
  );
}
