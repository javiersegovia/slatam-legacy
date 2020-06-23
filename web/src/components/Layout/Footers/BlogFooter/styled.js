import styled, { css } from 'styled-components'

// eslint-disable-next-line import/prefer-default-export
export const StyledBlogFooter = styled.footer`
  width: 100%;
  background-color: #f2f2f2;

  display: grid;
  grid-template-columns: 1.5fr 1fr;
  grid-auto-rows: 432px;
`
const CellContainer = css`
  margin: 10px;
`

export const LinkContainer = styled.div`
  margin: 50px 0 0 150px;
  display: grid;
  grid-template-rows: 4fr 2fr 1fr;
  grid-gap: 10px;
`

export const StyledFooterLinks = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
`

export const LinkColumnTitle = styled.li`
  margin-bottom: 10px;
  color: #38383a;
  font-size: 14px;
`
export const StyledLink = styled.li`
  color: #b2b2b2;
  font-size: 12px;
`

export const CopyrightText = styled.p`
  font-size: 11.5px;
`
