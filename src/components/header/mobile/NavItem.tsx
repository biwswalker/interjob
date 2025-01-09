import NextLink from 'next/link'
import { Link, ListItemText, ListItemIcon } from '@mui/material'
import { NavItemMobileProps } from '../types'
import { ListItem } from './styles'
import Iconify from '@components/iconify'

export default function NavItem({ item, open, active, isExternalLink, ...other }: NavItemMobileProps) {
  const { title, path, icon, children } = item

  const renderContent = (
    <ListItem active={active} {...other}>
      <ListItemIcon> {icon} </ListItemIcon>

      <ListItemText disableTypography primary={title} />

      {!!children && (
        <Iconify width={16} icon={open ? 'eva:arrow-ios-downward-fill' : 'eva:arrow-ios-forward-fill'} sx={{ ml: 1 }} />
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
    <NextLink href={path} passHref>
      {renderContent}
    </NextLink>
  )
}
