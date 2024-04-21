import { redirect } from "next/navigation";

interface PageProps {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
}

const Page = ({ searchParams }: PageProps) => {
  // extracting the query from the url
  const query = searchParams.query;
  
  // gaurd claus, or the logic check
  // if is is an array , or the it is undefined , redirect to home page 
  if (Array.isArray(query) || !query) {
    return redirect("/");
  }

  // query logic 
  

  return <div>page</div>;
};

export default Page;
