import { useQuery } from "@tanstack/react-query";

const About = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["users/profile"], // Path matches API endpoint
  });

  console.log(data);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return <div>Profile</div>;
};

export default About;
