import { useQuery } from "graphql-hooks";
import { StructuredText } from "react-datocms";
import Loader from "../components/Loader";

export default function Blog() {
  const HOMEPAGE_QUERY = `{
    allPosts(first: 10) {
      _publishedAt
      id
      heading
      content {
        value
      }
    }
  }`;
  const { loading, error, data } = useQuery(HOMEPAGE_QUERY, {
    variables: {
      limit: 10,
    },
  });

  if (loading) return <Loader />;
  if (error) return error;
  return (
    <main className="md:px-16 md:pt-20 h-full">
      <div className="section mt-4">
        <div className="">
          {data.allPosts.map((post) => (
            <div className="" key={post.id}>
              <h2 className="text-2xl mb-4 font-semibold">{post.heading}</h2>
              <StructuredText data={post.content} />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
