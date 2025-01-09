// @mui
import { useTheme } from '@mui/material/styles'
//
import { StyledBadgeStatus } from './styles'
import { BadgeStatusProps, BadgeStatusValue, BadgeSizeValue } from './types'
// ----------------------------------------------------------------------

export default function BadgeStatus({ size = 'medium', status = 'offline', sx }: BadgeStatusProps) {
  const theme = useTheme()

  const ownerState: {
    size: BadgeSizeValue
    status: BadgeStatusValue
  } = { size, status }

  return <StyledBadgeStatus ownerState={ownerState} sx={sx} theme={theme} />
}
