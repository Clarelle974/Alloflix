import { useLoaderData } from "react-router-dom";

export default function MovieDetails() {
  const details = useLoaderData();
  console.info(details);

  return (
    <>
      <h1>Page du film</h1>
    </>
  );
}
