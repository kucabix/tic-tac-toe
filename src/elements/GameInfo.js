import styled, {css} from 'styled-components'

export default styled.div`
  font-family: 'Lucida Console';
  text-align: center;
  width: 100%;
  margin: 40px 20px;
  ${props => props.result && css`
    font-weight: bold;
    font-size: 30px;
    color: green;
  `};
`
