import styled, {css} from 'styled-components'

export default styled.ol`
padding: 0;
list-style-type: none;
${props => props.hidden && css`
  display: none;
`}
`
