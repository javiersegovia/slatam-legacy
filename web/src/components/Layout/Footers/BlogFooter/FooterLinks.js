import React from 'react'
import Link from 'next/link'
import { StyledFooterLinks, LinkColumnTitle, StyledLink } from './styled'

const columns = [
  {
    title: 'Company',
    titleHref: '/',
    items: [
      {
        description: 'Home',
        href: '/',
      },
      {
        description: 'About',
        href: '/',
      },
      {
        description: 'Partners',
        href: '/',
      },
      {
        description: 'Blog',
        href: '/blog',
      },
    ],
  },
  {
    title: 'Poduct',
    titleHref: '/',
    items: [
      {
        description: 'Pricing',
        href: '/',
      },
    ],
  },
  {
    title: 'Education',
    titleHref: '/',
    items: [
      {
        description: 'Documentation',
        href: '/',
      },
      {
        description: 'Knowledge',
        href: '/',
      },
      {
        description: 'Guides',
        href: '/',
      },
      {
        description: 'API References',
        href: '/',
      },
    ],
  },
  {
    title: 'Legal',
    titleHref: '/',
    items: [
      {
        description: 'Documentation',
        href: '/',
      },
      {
        description: 'Knowledge',
        href: '/',
      },
      {
        description: 'Guides',
        href: '/',
      },
      {
        description: 'API References',
        href: '/',
      },
    ],
  },
]

const FooterLinks = () => {
  return (
    <StyledFooterLinks>
      {columns.map(cont => (
        <div>
          <LinkColumnTitle>
            <Link href={cont.titleHref}>
              <a>{cont.title}</a>
            </Link>
          </LinkColumnTitle>
          {cont.items.map(item => (
            <StyledLink>
              <Link href={item.href}>
                <a>{item.description}</a>
              </Link>
            </StyledLink>
          ))}
        </div>
      ))}
    </StyledFooterLinks>
  )
}

export default FooterLinks
