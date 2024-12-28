import { Box, css, OutlinedInput, styled } from "@mui/material";

const SearchInput = styled(OutlinedInput)(css`
  width: 100%;
  border-radius: 100px;
`);

const Container = styled(Box)(css`
  padding: 10px 20px;
  overflow-y: auto;
`);

export default { SearchInput, Container };
