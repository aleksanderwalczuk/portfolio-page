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
        title
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
  return (
    <div className="md:px-16 pt-12 md:pt-20 h-full flex flex-col justify-between">
      <article className="prose overflow-y-auto">
        <section className=" mt-4 px-4 max-w-6xl mx-auto">
          {data.allPosts.map(({id, coverImage, content}) => (
            <div className="" key={id}>
              {/* <h2 className="text-2xl mb-4 font-semibold">{heading}</h2> */}
              <figure className="mx-auto mt-4 mb-0">
                <img src={coverImage.url} alt={coverImage.alt} className="mb-0" />
                <figcaption>{coverImage.title }</figcaption>
              </figure>
              <StructuredText data={content} />
            </div>
          ))}
        </section>
      </article>
      <Footer messageHovered={null} />
    </div>
  );
}
