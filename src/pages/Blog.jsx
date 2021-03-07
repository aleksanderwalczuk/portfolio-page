import { useQuery } from "graphql-hooks";
import { StructuredText } from "react-datocms";
import Footer from "../components/Footer";
import Loader from "../components/Loader";

export default function Blog() {
  const HOMEPAGE_QUERY = `{
    allPosts(first: 10) {
      _publishedAt
      id
      heading
      coverImage {
        alt
        url
        responsiveImage(sizes: "") {
          alt
          base64
          bgColor
          title
          webpSrcSet
        }
        format
      }
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
  console.log(data);
  return (
    <div className="md:px-16 pt-12 md:pt-20 h-full flex flex-col justify-between">
      <main className="">
        <section className=" mt-4 px-4 max-w-6xl mx-auto">
          {data.allPosts.map((post) => (
            <div className="" key={post.id}>
              <h2 className="text-2xl mb-4 font-semibold">{post.heading}</h2>
              <div className="mx-auto my-4">
                <img src={post.coverImage.url} alt={post.coverImage.alt} />
              </div>
              <StructuredText data={post.content} />
            </div>
          ))}
        </section>
      </main>
      <Footer messageHovered={null} />
    </div>
  );
}
