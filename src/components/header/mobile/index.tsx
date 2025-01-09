import { useState, useEffect } from "react";
import { List, Drawer, IconButton, Stack, Button, Box } from "@mui/material";
import { NavProps } from "../types";
import NavList from "./NavList";
import Iconify from "@components/iconify";
import Scrollbar from "@components/scrollbar";
import Logo from "@components/logo";
import { NAV } from "@constants/layout";
import { usePathname, useRouter } from "next/navigation";
import { ROOTS_INTEREST } from "@constants/routes";

export default function NavMobile({ data }: NavProps) {
  const pathname = usePathname();

  const { push } = useRouter();

  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      handleClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <IconButton
        onClick={handleOpen}
        sx={{
          ml: 1,
          color: "text.primary",
        }}
      >
        <Iconify icon="eva:menu-2-fill" />
      </IconButton>

      <Drawer
        open={open}
        onClose={handleClose}
        PaperProps={{
          sx: {
            pb: 5,
            width: NAV.W_BASE,
          },
        }}
      >
        <Scrollbar>
          <Logo sx={{ mx: 2.5, mt: 3, mb: 2, height: 88 }} />

          <List component="nav" disablePadding>
            {data.map((link) => (
              <NavList key={link.title} item={link} />
            ))}
          </List>
        </Scrollbar>
        <Box sx={{ flexGrow: 1 }} />
        <Stack sx={{ px: 2.5 }}>
          <Button
            size="large"
            variant="contained"
            sx={{ borderRadius: 3 }}
            startIcon={<Iconify icon="lets-icons:chat-fill" />}
            onClick={() => {
              push(ROOTS_INTEREST);
              handleClose()
            }}
          >
            รับคำปรึกษาฟรี
          </Button>
        </Stack>
      </Drawer>
    </>
  );
}
