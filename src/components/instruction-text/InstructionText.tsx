import Iconify, { IconifyProps } from '@components/iconify'
import MenuPopover, { MenuPopoverArrowValue, MenuPopoverProps } from '@components/menu-popover'
import { Box, IconButton, SxProps, Tooltip, Typography } from '@mui/material'
import { PropsWithChildren, useState } from 'react'

interface InstructionTextProps extends PropsWithChildren {
  icon?: IconifyProps
  tooltipText?: string
  boxSx?: SxProps
  arrow?: MenuPopoverArrowValue
}

export default function InstructionText({
  icon = 'gg:info',
  tooltipText = 'ข้อมูลเพิ่มเติม',
  children,
  boxSx = {},
  arrow = 'bottom-center',
}: InstructionTextProps) {
  const [popoverOpen, setPopoverOpen] = useState<HTMLElement | null>(null)

  const handleOpenPopover = (event: React.MouseEvent<HTMLElement>) => {
    setPopoverOpen(event.currentTarget)
  }

  const handleClosePopover = () => {
    setPopoverOpen(null)
  }

  return (
    <>
      <Tooltip title={tooltipText}>
        <IconButton size="medium" onClick={handleOpenPopover}>
          <Iconify icon={icon} color="text.disabled" />
        </IconButton>
      </Tooltip>
      <MenuPopover open={popoverOpen} onClose={handleClosePopover} arrow={arrow}>
        <Box sx={{ p: 2, maxWidth: 'unset', ...boxSx }}>{children}</Box>
      </MenuPopover>
    </>
  )
}
