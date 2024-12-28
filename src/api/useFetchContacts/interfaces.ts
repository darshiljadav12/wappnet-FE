import { InfiniteData, UseInfiniteQueryOptions, } from "@tanstack/react-query";

export interface Contact {
  _id: string;
  avatar: string;
  name: string;
  number: string;
}

export interface FetchContactsResponseData {
  contacts: Contact[];
  totalContacts: number,
}

export interface Params {
  searchQuery: string;
  limit: number
}

// TODO: EXTEND THIS TYPE TO USE TRANSFORMED DATA 
export type useFetchContactsQueryOptions = Omit<
  UseInfiniteQueryOptions<unknown, unknown, InfiniteData<FetchContactsResponseData>>,
  "queryKey" | 'getNextPageParam' | 'initialPageParam'
> & {
  params?: Params;
};
