import { useInfiniteQuery } from "@tanstack/react-query";
import { useCallback, useMemo, useState } from "react";
import _ from "lodash";
import { api } from "@/services/api";
import { IPeopleListResponse } from "../types/people-list-types";

type Params<F> = {
  key: string[];

  limit?: number;
  filters?: F;
};
/**
 * hook that uses react query to load an infinite list of characters
 * * it uses functions based on the final scroll to go to the next page
 * * When calling a function, it will return several states and function to manipulate the HTTP state of the component it will use
 * @param param0
 * @returns
 */
export const useInfiniteScroll = <T = IPeopleListResponse, F = object>({
  key,
}: Params<F>) => {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const queryFn = async ({ pageParam = 1 }) => {
    const { data } = await api.get<IPeopleListResponse>(
      `people/?page=${pageParam}`,
    );

    return {
      data: data.results,
      next: data.next,
      nextPage: pageParam + 1,
    };
  };
  const { data, hasNextPage, fetchNextPage, isFetchingNextPage, refetch } =
    useInfiniteQuery({
      queryKey: key,
      queryFn,
      initialPageParam: 1,
      getNextPageParam: (lastPage, __, lastPageParam) => {
        if (lastPage.next === null) {
          return undefined;
        }
        return lastPageParam + 1;
      },
      getPreviousPageParam: (_, __, firstPageParam) => {
        if (firstPageParam === 1) {
          return undefined;
        }
        return firstPageParam - 1;
      },
    });

  const loadNext = useCallback(() => {
    hasNextPage && fetchNextPage();
  }, [fetchNextPage, hasNextPage]);

  const onRefresh = useCallback(() => {
    if (!isRefreshing) {
      setIsRefreshing(true);
      refetch()
        .then(() => setIsRefreshing(false))
        .catch(() => setIsRefreshing(false));
    }
  }, [isRefreshing, refetch]);

  const flattenData = useMemo(() => {
    return data?.pages.flatMap((page) => page.data) || [];
  }, [data?.pages]);

  return {
    data: flattenData,
    onEndReached: loadNext,
    isRefreshing,
    onRefresh,
    isFetchingNextPage,
  };
};
