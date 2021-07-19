import React from "react";
import useSWR from "swr";

type User = {
  name: string;
};

const index = () => {
  const { data, isValidating } = useSWR<User>("/user");

  if (isValidating) {
    return <h1>Loading...</h1>;
  }

  return <div>{data.name}</div>;
};

export default index;
