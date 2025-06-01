import { Alert } from "@mui/material";

export default function GeneralError() {
  return (
    <Alert severity="error" variant="filled">
      An error occurred. Try reloading the page.
    </Alert>
  )
}
