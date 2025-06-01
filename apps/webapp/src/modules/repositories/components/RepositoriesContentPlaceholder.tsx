import { Stack } from "@mui/material";
import RepositoryContentPlaceholder from "./RepositoryContentPlaceholder";

export default function RepositoriesContentPlaceholder() {
  return (
    <Stack gap={3}>
      <RepositoryContentPlaceholder />
      <RepositoryContentPlaceholder />
      <RepositoryContentPlaceholder />
    </Stack>
  )
}
