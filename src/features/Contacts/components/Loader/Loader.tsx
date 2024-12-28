import { Box, Skeleton } from "@mui/material";

export const Loader = () => {
  return (
    <Box sx={{ p: 1 }}>
      <Skeleton height={60} width={200} />
      <Skeleton height={60} />
      <Skeleton height={40} width={40} />
      <Skeleton height={60} />
      <Skeleton height={60} />
      <Skeleton height={40} width={40} />
      <Skeleton height={60} />
      <Skeleton height={60} />
    </Box>
  );
};
