import { useEffect, useState } from "react";

const useLoadOptions = (apiService) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;

    const loadData = async () => {
      try {
        setLoading(true);
        setError(null);

        const res = await apiService.getAll();

        const result =
          res?.data?.data ??
          res?.data ??
          [];

        if (mounted) {
          setData(
            Array.isArray(result)
              ? result
              : []
          );
        }

      } catch (err) {

        if (mounted) {
          console.error(
            "Error loading options:",
            err
          );

          setError(err);
          setData([]);
        }

      } finally {

        if (mounted) {
          setLoading(false);
        }

      }
    };

    loadData();

    return () => {
      mounted = false;
    };

  }, [apiService]);

  return {
    data,
    loading,
    error,
  };
};

export default useLoadOptions;