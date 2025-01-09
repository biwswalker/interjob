// next
import NextLink from 'next/link'
import dynamic from 'next/dynamic'
// @mui
import { Box } from '@mui/material'
//
import { BreadcrumbsLinkProps } from './types'

// ----------------------------------------------------------------------
// NOTED: IF WANT USING SSR FEATURE YOU MUST CREATE THIS COMPONENT MANUAL INSIDE PROJECT
const Link = dynamic(() => import('@mui/material/Link'), { ssr: false })

type Props = {
  link: BreadcrumbsLinkProps
  activeLast?: boolean
  disabled: boolean
}

export default function BreadcrumbsLink({ link, activeLast, disabled }: Props) {
  const { name, href, icon } = link

  const styles = {
    display: 'inline-flex',
    alignItems: 'center',
    color: 'text.primary',
    ...(disabled &&
      !activeLast && {
        cursor: 'default',
        pointerEvents: 'none',
        color: 'text.disabled',
      }),
  }

  const renderContent = (
    <>
      {icon && (
        <Box
          component="span"
          sx={{
            mr: 1,
            display: 'inherit',
            '& svg': { width: 20, height: 20 },
          }}
        >
          {icon}
        </Box>
      )}

      {name}
    </>
  )

  if (href) {
    return (
      <NextLink href={href} passHref>
        <Box sx={{ ...styles, '&:hover': { textDecoration: 'underline' } }}>{renderContent}</Box>
      </NextLink>
    )
  }

  return <Box sx={styles}> {renderContent} </Box>
}
