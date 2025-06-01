import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import type { PropsWithChildren } from "react";
import BackButton from "./BackButton";

export const StyledDiv = styled.div`
  width: 100%;
  max-width: 600px;
`

interface PageContentProps { title?: string, withBackButton?: boolean }

export default function PageContent({ children, title, withBackButton }: PropsWithChildren<PageContentProps>) {
  return (
    <StyledDiv>
      <Box py={2}>
        {title && <Typography variant="h1">{title}</Typography>}
        {withBackButton && <BackButton title="Repositories" />}
      </Box>
      {children}
    </StyledDiv>
  )
}
