import { useInfiniteQuery } from "@tanstack/react-query";
import { useCallback, useMemo, useState } from "react";
import _ from "lodash";
import axios from "axios";
import { api } from "@/services/api";

type Params<F> = {
  key: string[];

  limit?: number;
  filters?: F;
};

export const useInfiniteScroll = <T = unknown, F = object>({
  key,
}: Params<F>) => {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const queryFn = async ({ pageParam = 1 }) => {
    const { data: dataQuery } = await api.get<T[]>(`people/?page=${pageParam}`);

    return {
      data: dataQuery.results,
      next: dataQuery.next,
      nextPage: pageParam + 1,
    };
  };
  const { data, hasNextPage, fetchNextPage, isFetchingNextPage, refetch } =
    useInfiniteQuery({
      queryKey: key,
      queryFn,
      initialPageParam: 1,
      getNextPageParam: (lastPage, __, lastPageParam) => {
        if (lastPage.data.next === null) {
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
