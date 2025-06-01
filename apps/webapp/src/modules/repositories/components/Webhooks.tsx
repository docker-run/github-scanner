import { List, ListItem, ListItemText, Typography } from "@mui/material";
import { Webhook } from "gql/graphql"
import NoDataAvailable from "./NoDataAvailable";

interface WebhooksProps {
  hooks: Webhook[];
}

export default function Webhooks({ hooks }: WebhooksProps) {
  return (
    <>
      <Typography variant="body2" component="span">
        Active WebHooks:
      </Typography>
      {hooks.length > 0 ?
        <List>
          {hooks.map(hook => {
            return (
              <ListItem key={hook.id}>
                <ListItemText primary={`Content type: ${hook.config.contentType}`} secondary={`Events: ${hook.events}`} />
              </ListItem>
            )
          })}
        </List>
        : <NoDataAvailable />
      }
    </>
  )
}
