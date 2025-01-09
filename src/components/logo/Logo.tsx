import { forwardRef } from 'react'
import NextLink from 'next/link'
import { Box, BoxProps } from '@mui/material'

export interface LogoProps extends BoxProps {
  disabledLink?: boolean
}

const Logo = forwardRef<HTMLDivElement, LogoProps>(
  ({ disabledLink = false, sx, ...other }, ref) => {
    const logo = (
      <Box
        ref={ref}
        component="img"
        src={`/assets/images/logo.png`}
        sx={{
          height: 56,
          ...(disabledLink ? {} : { cursor: 'pointer' }),
          objectFit: 'contain',
          alignSelf: 'flex-start',
          ...sx,
        }}
        {...other}
      />
    )

    if (disabledLink) {
      return <>{logo}</>
    }

    return (
      <NextLink href="/" passHref style={{ display: 'contents' }}>
        {logo}
      </NextLink>
    )
  },
)

export default Logo
