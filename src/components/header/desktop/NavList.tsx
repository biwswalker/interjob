import { useState, useEffect, forwardRef } from "react";
import { Stack, Fade } from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import useActiveLink from "@hooks/useActiveLink";
import { NavItemProps } from "../types";
import { NavItem, NavItemDashboard } from "./NavItem";
import { StyledSubheader, StyledPopover } from "./styles";
import { usePathname } from "next/navigation";
import { includes } from "lodash";

type NavListProps = {
  item: NavItemProps;
  isOffset: boolean;
  forceActive?: string;
};

export default function NavList({ item, isOffset, forceActive }: NavListProps) {
  const pathname = usePathname();

  const [openPopover, setOpenPopover] = useState<HTMLElement | null>(null);

  const { path, children } = item;

  const { active, isExternalLink } = useActiveLink(path, false);
  const isForceActive = includes(path, forceActive);

  useEffect(() => {
    if (openPopover) {
      handleClosePopover();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const handleOpenPopover = (event: React.MouseEvent<HTMLElement>) => {
    setOpenPopover(event.currentTarget);
  };

  const handleClosePopover = () => {
    setOpenPopover(null);
  };

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    if (children) {
      handleOpenPopover(event);
    }
  };

  return (
    <>
      <NavItem
        item={item}
        isOffset={isOffset}
        active={forceActive ? isForceActive : active}
        open={Boolean(openPopover)}
        isExternalLink={isExternalLink}
        onClick={handleClick}
      />

      {!!children && (
        <StyledPopover
          open={Boolean(openPopover)}
          anchorEl={openPopover}
          onClose={handleClosePopover}
          anchorReference="anchorPosition"
          anchorPosition={{ top: 0, left: 0 }}
          TransitionComponent={TransitionPopover}
        >
          {children.map((list) => (
            <NavSubList
              key={list.subheader}
              subheader={list.subheader}
              items={list.items}
              isDashboard={false}
              onClose={handleClosePopover}
            />
          ))}
        </StyledPopover>
      )}
    </>
  );
}

type NavSubListProps = {
  isDashboard: boolean;
  subheader: string;
  items: NavItemProps[];
  onClose: VoidFunction;
};

function NavSubList({
  items,
  isDashboard,
  subheader,
  onClose,
}: NavSubListProps) {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <Stack
      spacing={2.5}
      gridColumn={isDashboard ? "span 6" : "span 2"}
      alignItems="flex-start"
    >
      <StyledSubheader disableSticky>{subheader}</StyledSubheader>

      {items.map((item) =>
        isDashboard ? (
          <NavItemDashboard key={item.title} item={item} onClick={onClose} />
        ) : (
          <NavItem
            subItem
            key={item.title}
            item={item}
            active={isActive(item.path)}
            onClick={onClose}
          />
        )
      )}
    </Stack>
  );
}

const TransitionPopover = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Fade ref={ref} {...props} />;
});
