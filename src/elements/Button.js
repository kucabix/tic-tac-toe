import styled, {css} from 'styled-components'

export default styled.button`
  margin: 2px;
  padding: 5px;
  background-color: #89b584;
  border: 1px solid #98b295;;
  border-radius: 5px;
  text-decoration: none;
  width: 100%;
  ${props => props.active && css`
    font-weight: bold;
  `};
  &:hover{
    background-color: #799376;
  };
  &:focus{
    outline: none;
  }
`
