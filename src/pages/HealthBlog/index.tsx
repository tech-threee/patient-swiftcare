import { blogsData } from "../../_mockData/blogData";
import BlogCard from "../../widgets/Cards/BlogCard";

const HealthBlog = () => {
  return (
    <main className="mt-10 space-y-0">
      <div className="container">
        <div className="space-y-8">
          <div>
            <h1 className="text-[26px] leading-[46px] text-headingColor font-[800] md:text-[40px] md:leading-[70px] overflow-hidden">
              HEALTH BLOG
            </h1>
          </div>
          <div className="flex flex-wrap gap-5">
            {blogsData.map((blogData, index) => (
              <BlogCard blogData={blogData} index={index} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};
export default HealthBlog;
