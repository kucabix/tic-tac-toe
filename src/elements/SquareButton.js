import styled, {css} from 'styled-components'

export default styled.button`
background: #fff;
border: 1px solid #999;
float: left;
font-size: 24px;
font-weight: bold;
line-height: 34px;
height: 34px;
margin-right: -1px;
margin-top: -1px;
padding: 0;
text-align: center;
width: 34px;
${props => props.win === 'win' && css`
  background-color:#89b584;
`};
&:focus{
  outline: none;
};
`
