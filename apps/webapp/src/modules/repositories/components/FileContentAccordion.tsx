import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import NoDataAvailable from "./NoDataAvailable";

interface FileContentAccordionProps {
  content?: string | null;
}

export default function FileContentAccordion({ content }: FileContentAccordionProps) {
  if (!content) {
    return (
      <>
        <Typography variant="body2" component="span">
          YAML File contents:
        </Typography>
        <NoDataAvailable />
      </>
    )
  }

  return (
    <Accordion sx={{ mt: 1 }}>
      <AccordionSummary
        expandIcon={<ArrowDownwardIcon />}
        aria-controls="file-content"
        id="file-header"
      >
        <Typography component="span">YAML File contents</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          {content}
        </Typography>
      </AccordionDetails>
    </Accordion>
  )
}
