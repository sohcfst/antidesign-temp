import { styled } from '~/styles/stitches.config';

import { violet, mauve, blackA } from '@radix-ui/colors';
import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area';

const SCROLLBAR_SIZE = 10;

const StyledScrollArea = styled(ScrollAreaPrimitive.Root, {
  width: 1000,
  height: 1000,
  borderRadius: 8,
  overflow: 'hidden',
  boxShadow: `0 2px 10px ${blackA.blackA7}`,
  display: 'flex',
  justifyContent: 'center',
  // boxs: '120px 80px 40px 20px #0ff',
});

const StyledViewport = styled(ScrollAreaPrimitive.Viewport, {
  width: '100%',
  height: '100%',
  justifySelf: 'center',
  borderRadius: 'inherit',
});

const StyledScrollbar = styled(ScrollAreaPrimitive.Scrollbar, {
  display: 'flex',
  // ensures no selection
  userSelect: 'none',
  // disable browser handling of all panning and zooming gestures on touch devices
  touchAction: 'none',
  padding: 2,
  background: blackA.blackA6,
  transition: 'background 160ms ease-out',
  '&:hover': { background: blackA.blackA8 },
  '&[data-orientation="vertical"]': { width: SCROLLBAR_SIZE },
  '&[data-orientation="horizontal"]': {
    flexDirection: 'column',
    height: SCROLLBAR_SIZE,
  },
});

const StyledThumb = styled(ScrollAreaPrimitive.Thumb, {
  flex: 1,
  background: mauve.mauve10,
  borderRadius: SCROLLBAR_SIZE,
  // increase target size for touch devices https://www.w3.org/WAI/WCAG21/Understanding/target-size.html
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100%',
    height: '100%',
    minWidth: 44,
    minHeight: 44,
  },
});

const StyledCorner = styled(ScrollAreaPrimitive.Corner, {
  background: blackA.blackA8,
});

// Exports
const ScrollArea = StyledScrollArea;
const ScrollAreaViewport = StyledViewport;
const ScrollAreaScrollbar = StyledScrollbar;
const ScrollAreaThumb = StyledThumb;
const ScrollAreaCorner = StyledCorner;

// Your app...

const Tag = styled('div', {
  color: mauve.mauve12,
  fontSize: 13,
  lineHeight: '18px',
  marginTop: 10,
  borderTop: `1px solid ${mauve.mauve6}`,
  paddingTop: 10,
});

const TAGS = Array.from({ length: 50 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`
);

const LAKE_MERRIT =
  'https://avfdzphxkehjacxeupkt.supabase.in/storage/v1/object/sign/images/char.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvY2hhci5qcGciLCJpYXQiOjE2NDA0NTkxODcsImV4cCI6MTk1NTgxOTE4N30.Z4hWTTO1EoWPatxzmN4VhlSC5leeek71k_WXjA_GSWo';

const HEAVEN =
  'https://avfdzphxkehjacxeupkt.supabase.in/storage/v1/object/sign/images/heaven?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvaGVhdmVuIiwiaWF0IjoxNjQwNDU5MTkwLCJleHAiOjE5NTU4MTkxOTB9.Xmf6kuxATdtx2E91JVWrlUrRjOot22likVflDBm3MEg';

const GG_BRIDGE =
  'https://avfdzphxkehjacxeupkt.supabase.in/storage/v1/object/sign/images/gg-bridge-peaking?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvZ2ctYnJpZGdlLXBlYWtpbmciLCJpYXQiOjE2NDA0NTkxOTEsImV4cCI6MTk1NTgxOTE5MX0.RZS-I76QuukqefaLhKs6lv2_Q9fH_LvAg25CT_ua_08';

const urls = [GG_BRIDGE, HEAVEN, LAKE_MERRIT];

// is there an easy way to figure out what element we're inspecting? that's something i like about styled components

const Flex = styled('div', {
  display: 'flex',

  // without passing any values the api expose, then the element will
  // only use the the base styles we set at the top
  variants: {
    // the prop / api that we expose
    flexDirection: {
      // the options that we have and the style that will apply when we pass this value
      // into the the prop / api
      column: {
        flexDirection: 'column',
      },
      row: {
        flexDirection: 'row',
      },
    },
    // etc
    alignItems: {
      center: {
        alignItems: 'center',
      },
      start: {
        alignItems: 'start',
      },
      // etc
    },
  },
});
const Img = styled('img');
const Memory = () => {};

const MemoryScroller = () => {
  return (
    <Flex
      css={{
        paddingTop: 100,
      }}
      flexDirection="column"
      alignItems="center"
    >
      <ScrollArea>
        <ScrollAreaViewport>
          <Flex flexDirection="column" alignItems="center">
            <Img src={GG_BRIDGE} width={400} />
            <Img src={LAKE_MERRIT} width={400} />
            <Img src={HEAVEN} width={400} />
            <Img src={GG_BRIDGE} width={400} />
            <Img src={LAKE_MERRIT} width={400} />
            <Img src={HEAVEN} width={400} />
            <Img src={GG_BRIDGE} width={400} />
            <Img src={LAKE_MERRIT} width={400} />
            <Img src={HEAVEN} width={400} />
            <Img src={GG_BRIDGE} width={400} />
            <Img src={LAKE_MERRIT} width={400} />
            <Img src={HEAVEN} width={400} />
            <Img src={GG_BRIDGE} width={400} />
            <Img src={LAKE_MERRIT} width={400} />
            <Img src={HEAVEN} width={400} />
          </Flex>
        </ScrollAreaViewport>
        <ScrollAreaScrollbar orientation="vertical">
          <ScrollAreaThumb />
        </ScrollAreaScrollbar>
        <ScrollAreaScrollbar orientation="horizontal">
          <ScrollAreaThumb />
        </ScrollAreaScrollbar>
        <ScrollAreaCorner />
      </ScrollArea>
    </Flex>
  );
};

export default MemoryScroller;