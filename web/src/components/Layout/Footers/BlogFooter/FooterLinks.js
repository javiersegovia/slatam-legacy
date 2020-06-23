import React from 'react'
import { StyledFooterLinks, LinkColumnTitle, StyledLink } from './styled'

const FooterLinks = () => {
  return (
    <StyledFooterLinks>
      <ul>
        <LinkColumnTitle>Company</LinkColumnTitle>
        <StyledLink>Home</StyledLink>
        <StyledLink>About</StyledLink>
        <StyledLink>Partners</StyledLink>
        <StyledLink>Blog</StyledLink>
      </ul>
      <ul>
        <LinkColumnTitle>Product</LinkColumnTitle>
        <StyledLink>Pricing</StyledLink>
      </ul>
      <ul>
        <LinkColumnTitle>Education</LinkColumnTitle>
        <StyledLink>Documentation</StyledLink>
        <StyledLink>Knowledge</StyledLink>
        <StyledLink>Guides</StyledLink>
        <StyledLink>API References</StyledLink>
      </ul>
      <ul>
        <LinkColumnTitle>Legal</LinkColumnTitle>
        <StyledLink>Documentation</StyledLink>
        <StyledLink>Knowledge</StyledLink>
        <StyledLink>Guides</StyledLink>
        <StyledLink>API References</StyledLink>
      </ul>
    </StyledFooterLinks>
  )
}

export default FooterLinks
