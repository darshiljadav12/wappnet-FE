import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";

import { FetchContactsResponseData, Params, useFetchContactsQueryOptions } from "./interfaces";

const fetchContacts = async (page: number,params?: Params) => {
  // TODO: We can create a separate service to manage axios
  // TODO: Use ENV variables
  const response = await axios.get("http://localhost:3001/api/contacts", {
    params: {
      page, 
      ...params
    },
  });
  return response.data.data;
};

export const useFetchContacts = ({
  params,
  ...options
}: useFetchContactsQueryOptions) => {
 const query = useInfiniteQuery({
    queryKey: ["contacts", params],
    queryFn: ({ pageParam = 1 }) => fetchContacts(pageParam as number, params),
    getNextPageParam: (lastPage, allPages) => {
      const contacts = (lastPage as FetchContactsResponseData).contacts;
      return contacts.length < 10 ? undefined : allPages.length + 1;
    },
    initialPageParam: 1,
    ...options,
  });

  return query;
};
