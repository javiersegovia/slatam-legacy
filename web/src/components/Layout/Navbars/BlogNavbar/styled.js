import styled, { css } from 'styled-components'
import { rgba } from 'polished'

// eslint-disable-next-line import/prefer-default-export
export const BlogStyledNavBar = styled.div`
  width: 100%;
  background: ${props => props.theme.palette.gray.extralight};
  /*position: absolute;*/
  /* margin: 0;
  padding: 0; */
  box-shadow: 0px 6px 6px ${props => props.theme.palette.gray.light};
  z-index: ${props => props.theme.zIndex.appBar};
  text-align: center;

  display: grid;
  grid-template-columns: 1fr 4fr 2fr 1fr;
  grid-auto-rows: 62px;
`

const CellContainer = css`
  ${'' /* border: 1px dashed black; */}
  ${'' /* width: 100%;
  height: 100%; */}
  align-self: center;
  justify-self: center;
`
export const Logo = styled.div`
  ${CellContainer}
  color: #fff;
  padding-left: 10px;
`
export const StyledPrimaryLinks = styled.div`
  ${CellContainer}

  display: grid;
  grid-template-columns: repeat(5, auto);
  grid-gap: 20px;
  align-items: center;
  justify-items: center;
  padding-left: 15px;
  height: 100%;
  width: 100%;

  & a {
    font-size: 0.9em;
    height: 100%;
    width: 100%;
    border: 2px solid transparent;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  & a:hover {
    border-bottom: 2px solid #012d78;
  }
`

export const SearchBar = styled.div`
  ${CellContainer}
`

export const StyledSecundaryLinks = styled.div`
  ${CellContainer}
  padding-right: 10px;

  display: grid;
  grid-template-columns: repeat(4, auto);
  grid-gap: 20px;
  align-items: center;
  justify-items: center;
  1.33333px solid #B2B2B2;
`
