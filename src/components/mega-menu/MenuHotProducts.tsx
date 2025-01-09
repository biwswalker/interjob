// next
import NextLink from 'next/link'
import dynamic from 'next/dynamic'
// @mui
import { Typography, Box } from '@mui/material'
// @types
import { MenuHotProductsProps } from './types'

// ----------------------------------------------------------------------
// NOTED: IF WANT USING SSR FEATURE YOU MUST CREATE THIS COMPONENT MANUAL INSIDE PROJECT
const Link = dynamic(() => import('@mui/material/Link'), { ssr: false })

export default function MenuHotProducts({ tags, ...other }: MenuHotProductsProps) {
  return (
    <Box {...other}>
      <Typography variant="caption" fontWeight="fontWeightBold">
        Hot Products:
      </Typography>
      &nbsp;
      {tags.map((tag, index) => (
        <NextLink key={tag.name} href={tag.path} passHref>
          <Link
            underline="none"
            variant="caption"
            sx={{
              color: 'text.secondary',
              transition: (theme) => theme.transitions.create('all'),
              '&:hover': { color: 'primary.main' },
            }}
          >
            {index === 0 ? tag.name : `, ${tag.name} `}
          </Link>
        </NextLink>
      ))}
    </Box>
  )
}
