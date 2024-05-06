import { useQuery } from "@tanstack/react-query";
import SingleItem from "./SingleItem";
import customFetch from "./utils";

const Items = ({ items }) => {
  const { isLoading, data, error, isError } = useQuery({
    queryKey: [items],
    queryFn: async () => {
      const { data } = await customFetch.get("/none");
      return data;
    },
  });

  if (isLoading) {
    return <p>"Loading..."</p>;
  }

  if (error) {
    return <p>{error.response.data}</p>;
  }
  return (
    <div className="items">
      {data.taskList.map((item) => {
        return <SingleItem key={item.id} item={item} />;
      })}
    </div>
  );
};
export default Items;
