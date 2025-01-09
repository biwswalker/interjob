import { m } from 'framer-motion'
import { forwardRef } from 'react'
import NextLink from 'next/link'
import { Link, LinkProps, CardActionArea } from '@mui/material'
import { NavItemDesktopProps, NavItemProps } from '../types'
import { ListItem } from './styles'
import Iconify from '@components/iconify'
import Image from '@components/image'

export const NavItem = forwardRef<HTMLDivElement, NavItemDesktopProps>(
  ({ item, open, isOffset, active, subItem, isExternalLink, ...other }, ref) => {
    const { title, path, children, noScroll } = item

    const renderContent = (
      <ListItem ref={ref} disableRipple isOffset={isOffset} subItem={subItem} active={active} open={open} {...other}>
        {title}

        {!!children && (
          <Iconify
            width={16}
            icon={open ? 'eva:arrow-ios-upward-fill' : 'eva:arrow-ios-downward-fill'}
            sx={{ ml: 1 }}
          />
        )}
      </ListItem>
    )

    if (isExternalLink) {
      return (
        <Link href={path} target="_blank" rel="noopener" underline="none">
          {renderContent}
        </Link>
      )
    }

    if (children) {
      return renderContent
    }

    return (
      <NextLink href={path} passHref scroll={!noScroll}>
        {renderContent}
      </NextLink>
    )
  },
)

interface NavItemDashboardProps extends LinkProps {
  item: NavItemProps
}

export function NavItemDashboard({ item, sx, ...other }: NavItemDashboardProps) {
  return (
    <NextLink href={item.path} passHref>
      <Link {...other}>
        <CardActionArea
          sx={{
            py: 5,
            px: 10,
            borderRadius: 1,
            color: 'text.disabled',
            bgcolor: 'background.neutral',
            ...sx,
          }}
        >
          <m.div
            whileTap="tap"
            whileHover="hover"
            variants={{
              hover: { scale: 1.02 },
              tap: { scale: 0.98 },
            }}
          >
            <Image alt="illustration_dashboard" src="/assets/illustrations/illustration_dashboard.png" />
          </m.div>
        </CardActionArea>
      </Link>
    </NextLink>
  )
}
