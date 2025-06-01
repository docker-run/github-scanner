import { Box, Card, CardContent, Skeleton, Stack } from "@mui/material";

interface RepositoryContentPlaceholderProps {
  withDetails?: boolean;
}

export default function RepositoryContentPlaceholder({ withDetails = false }: RepositoryContentPlaceholderProps) {
  return (
    <Card>
      <CardContent>
        <Skeleton variant="rectangular" height={21} width="45%" />
        <Box mt={1}>
          <Skeleton variant="rectangular" height={18} width="25%" />
        </Box>
        <Box my={2}>
          <Skeleton variant="rectangular" height={18} width="25%" />
        </Box>
        {!withDetails &&
          <Box mt={4}>
            <Skeleton variant="rectangular" height={15} width={100} />
          </Box>
        }
        {withDetails &&
          <>
            <Skeleton variant="rectangular" height={1} width="100%" />
            <Stack mt={1} direction="row" gap={1} alignItems="center">
              <Skeleton variant="rectangular" height={16} width={60} />
              <Skeleton variant="rounded" height={26} width={60} />
            </Stack>
            <Stack mt={1} direction="row" gap={1} alignItems="center">
              <Skeleton variant="rectangular" height={16} width={200} />
              <Skeleton variant="rounded" height={26} width={60} />
            </Stack>
            <Stack my={1} direction="row" gap={1} alignItems="center">
              <Skeleton variant="rectangular" height={16} width={160} />
              <Skeleton variant="rounded" height={26} width={60} />
            </Stack>
            <Skeleton variant="rounded" height={48} width="100%" />
          </>
        }
      </CardContent>
    </Card>
  )
}
