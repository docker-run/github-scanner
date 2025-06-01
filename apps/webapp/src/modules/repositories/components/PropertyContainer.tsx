import { Chip, Stack, Typography } from "@mui/material";

interface PropertyContainerProps {
  name: string;
  value: string;
}

export default function PropertyContainer({ name, value }: PropertyContainerProps) {
  return (
    <Stack direction="row" alignItems="center" gap={1}>
      <Typography variant="body2">{name}:</Typography>
      <Chip label={value} />
    </Stack>
  )
}
