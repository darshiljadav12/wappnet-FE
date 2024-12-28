import { useEffect, useRef, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import Typography from "@mui/material/Typography";

import S from "./styled";
import { ContactList, Loader } from "./components";
import { TextEnum } from "./enums";
import { useFetchContacts } from "../../api";

export const Contacts = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [query, setQuery] = useState("");

  const scrollContainerRef = useRef<HTMLElement>(null);

  const { data, isPending, isFetchingNextPage, fetchNextPage, hasNextPage } =
    useFetchContacts({
      params: {
        searchQuery,
        limit: 10,
      },
    });

  // TODO: We should avoid useEffect
  useEffect(() => {
    const debounceTimeout = setTimeout(() => {
      setSearchQuery(query);
    }, 1000);

    return () => clearTimeout(debounceTimeout);
  }, [query, setSearchQuery]);

  if (isPending || !data) {
    return <Loader />;
  }

  // TODO: Move to transfom of query to transform data
  const contacts = data?.pages?.flatMap((page) => page.contacts) || [];
  const totalContacts = data?.pages[0].totalContacts;

  return (
    <S.Container ref={scrollContainerRef}>
      {/* TODO: Add side nav */}

      <Typography variant="h4" gutterBottom>
        {TextEnum.TITLE} ({totalContacts})
      </Typography>

      <S.SearchInput
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
        placeholder={TextEnum.SEARCH_PLACEHOLDER}
        startAdornment={
          <InputAdornment position="end">
            <SearchIcon />
          </InputAdornment>
        }
      />

      <ContactList contacts={contacts} />
    </S.Container>
  );
};
