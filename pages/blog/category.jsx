import Head from "next/head";
import Layout from "../../components/Layout";
import SectionTitle from "../../components/SectionTitle";
import { Container, Row, Col } from "react-bootstrap";
import BlogCard from "../../components/BlogCard";
import Link from "next/link";
import { useRouter } from "next/router";

import { createClient } from "../../prismicio";

export default function Blog({ settings, blogs }) {
  const router = useRouter();
  const selectedCategory = router.asPath.split("=")[1];
  const filtered = blogs.filter((e) => {
    return e.data.category == selectedCategory;
  });
  return (
    <>
      <Head>
        <title>Portfolio | Blog</title>
      </Head>
      <Layout settings={settings}>
        <section className="container py-5">
          <SectionTitle
            title="Explore My"
            span="Blog"
            className="text-center"
          ></SectionTitle>
          <div
            className="col-11 col-lg-10 col-xl-9 my-5 mx-auto "
            data-aos="fade-up"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="800"
            data-aos-delay="100"
          >
            <h4 className="h3 mb-4">Category: {selectedCategory}</h4>
            <p>
              Found {filtered.length}{" "}
              {filtered.length > 1 ? "results" : "result"}
            </p>
          </div>
          <Container className="mt-5 px-xl-5">
            <Row className="row-cols-1 row-cols-lg-2 px-xl-5 mx-xl-5">
              {filtered.reverse().map((blog, index) => (
                <Col
                  md={10}
                  lg={6}
                  className="mb-5"
                  key={index}
                  data-aos="fade-up"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="800"
                  data-aos-delay="200"
                >
                  <BlogCard
                    title={blog.data.title}
                    slug={blog.uid}
                    published={blog.last_publication_date}
                    image={blog.data.cover_image.url}
                    category={blog.data.category}
                    duration={blog.data.read_duration}
                  />
                </Col>
              ))}
            </Row>
          </Container>
          <div
            className="mt-5 d-flex justify-content-center"
            data-aos="fade-up"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="800"
            data-aos-delay="200"
          >
            <Link href="/blog" className="btn-arrow px-2">
              Show all posts
            </Link>
          </div>
        </section>
      </Layout>
    </>
  );
}

export const getStaticProps = async ({ previewData }) => {
  const client = createClient({ previewData });
  const settings = await client.getSingle("settings");
  const blogs = await client.getAllByType("blog");

  return {
    props: {
      settings,
      blogs,
    },
  };
};
