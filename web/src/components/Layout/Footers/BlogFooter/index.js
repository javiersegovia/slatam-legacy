import React from 'react'
import { StyledBlogFooter, LinkContainer, CopyrightText } from './styled'
import FooterLinks from './FooterLinks'

const BlogFooter = () => {
  return (
    <>
      <StyledBlogFooter>
        <LinkContainer>
          <FooterLinks />
          <div>
            <a>
              <img src="/images/slatam-logo.svg" alt="Slatam Logo" />
            </a>
          </div>
          <CopyrightText>
            © 2020, Slatam Group. All rights reserved
          </CopyrightText>
        </LinkContainer>
        <div />
      </StyledBlogFooter>
    </>
  )
}

export default BlogFooter
