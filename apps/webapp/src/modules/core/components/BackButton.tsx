import { Button } from "@mui/material";
import { useNavigate } from "react-router";
import ArrowBack from "@mui/icons-material/ArrowBack";

interface BackButtonProps {
  title?: string;
}

export default function BackButton({ title }: BackButtonProps) {
  const navigate = useNavigate();

  const handleBackButtonClick = () => {
    navigate(-1)
  }

  return (
    <Button
      startIcon={<ArrowBack />}
      onClick={handleBackButtonClick}
    >
      {title || "Back"}
    </Button>
  )
}
