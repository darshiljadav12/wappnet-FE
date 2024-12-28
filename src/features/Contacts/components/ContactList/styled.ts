import {
  Box,
  css,
  OutlinedInput,
  styled,
} from "@mui/material";

const ContactContainer = styled(Box)(css`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 10px;
  padding: 4px;
`);

const SearchInput = styled(OutlinedInput)(css`
  // TODO: ADD INPUT STYLE along with breakpoints
  width: 100%;
  border-radius: 100px;
`);

export default { SearchInput, ContactContainer, };
