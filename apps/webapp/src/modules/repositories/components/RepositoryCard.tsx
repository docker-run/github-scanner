import styled from '@emotion/styled';
import { Card, CardContent, Button, Typography, CardActions } from '@mui/material';
import type { PropsWithChildren } from 'react';
import { Link as RouterLink } from "react-router";

const StyledCard = styled(Card)(({ theme }) => ({
  marginBottom: theme.spacing(3)
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  marginBottom: theme.spacing(1.5)
}));

interface BaseCardProps {
  title: string;
  description: string;
  subtitle: string;
  goTo?: string;
}

export default function RepositoryCard({ title, description, subtitle, goTo, children }: PropsWithChildren<BaseCardProps>) {
  return (
    <StyledCard>
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <StyledTypography>Size: {subtitle}</StyledTypography>
        <Typography sx={{ fontWeight: "bold" }} variant="body2">
          Author: {description}
        </Typography>
        {children}
      </CardContent>
      {goTo &&
        <CardActions>
          <Button to={goTo} size="small" component={RouterLink}>Learn More</Button>
        </CardActions>
      }
    </StyledCard>
  );
}
