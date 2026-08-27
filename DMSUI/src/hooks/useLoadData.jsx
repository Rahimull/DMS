import { useState, useEffect } from "react";
import useDebounce from "./useDebounce";
import { notify } from "@/utils/notify";

const useLoadData = (
  apiService,
  { pageSize = 10, filters = {}, refreshKey = 0 } = {},
) => {
  const [data, setData] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize,
  });

  const [sorting, setSorting] = useState([]);

  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 200);



  // وقتی که سرچ تغییر کرد برگرد صفحه اول
 
 useEffect(() => {
  const controller = new AbortController();

  async function fetchData() {
    try {
      setLoading(true);

      const res = await apiService.getPaged(
        {
          pagination,
          sorting: {
            sortBy: sorting[0]?.id ?? "",
            isDescending: sorting[0]?.desc ?? false,
          },
          search: {
            searchTerm: debouncedSearch,
          },
          filters,
        },
        {
          signal: controller.signal,
        }
      );

      const result = res.data.data;

      console.log("Resposne data: ", res)

      setData(result.data ?? []);
      setTotalCount(result.totalCount ?? 0);

    } catch (err) {
       console.log("API Response: ",err.response)
       console.log("API Response: ", err)

      if (err.name !== "CanceledError") {
        console.error(err);
       
      }

    } finally {

      if (!controller.signal.aborted) {
        setLoading(false);
      }

    }
  }

  fetchData();

  return () => {
    controller.abort();
  };

}, [
  apiService,
  pagination.pageIndex,
  pagination.pageSize,
  sorting,
  debouncedSearch,
  filters,
  refreshKey
]);
 
  useEffect(() => {
    setPagination((p) => ({
      ...p,
      pageIndex: 0,
    }));
         
  }, [debouncedSearch]);

  return {
    data,
    totalCount,
    pagination,
    setPagination,
    sorting,
    setSorting,
    search,
    setSearch,
    loading,
    setLoading,
    error,
  };
};

export default useLoadData;
