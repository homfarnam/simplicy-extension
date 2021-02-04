import styled from "styled-components"

const MyButton = styled.button`
  background: #213445;
  color: white;
  width: 220px;
  height: 55px;
  border-radius: 1.3rem;
`

interface ButtonProps {
  text: string
  className?: string
  onclick?: () => void
}

export const Button: React.FC<ButtonProps> = ({ text, className, onclick }) => {
  return (
    <MyButton className={className} onClick={onclick}>
      {text}
    </MyButton>
  )
}
