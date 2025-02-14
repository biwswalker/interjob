import { styled } from '@mui/material'
import { MaterialDesignContent } from 'notistack'

// ----------------------------------------------------------------------

const StyledNotistack = styled(MaterialDesignContent)(({ theme }) => {
  const isLight = theme.palette.mode === 'light'

  return {
    '&.notistack-MuiContent': {
      width: '100%',
      padding: theme.spacing(1),
      margin: theme.spacing(0.25, 0),
      boxShadow: theme.customShadows.z8,
      borderRadius: theme.shape.borderRadius,
      color: isLight ? theme.palette.common.white : theme.palette.grey[800],
      backgroundColor: isLight ? theme.palette.grey[900] : theme.palette.common.white,
      '&.notistack-MuiContent-default, &.notistack-MuiContent-success, &.notistack-MuiContent-error, &.notistack-MuiContent-warning, &.notistack-MuiContent-info':
        {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.background.paper,
        },
      [theme.breakpoints.up('md')]: {
        minWidth: 240,
      },
      '.MuiBox-root': {
        padding: '0 !important',
        fontWeight: theme.typography.fontWeightMedium,
      },
      '.MuiButtonBase-root': {
        marginRight: 12,
        color: theme.palette.action.active,

        '& svg': {
          width: 20,
          height: 20,
        },
      },
    },
  }
})

export default StyledNotistack
