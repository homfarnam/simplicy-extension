import React from "react"
import styled from "styled-components"

const MyTitle = styled.h3`
  display: flex;
  font-style: normal;
  font-weight: bold;
  line-height: 59px;
  color: #213445;
  box-sizing: border-box;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

interface TitleProps {
  text: string
  className?: string
}

export const Title: React.FC<TitleProps> = ({ text, className }) => {
  return <MyTitle className={className}>{text}</MyTitle>
}
