export default function BlogSection() {
  return (
    <section className="section">
      <h2 className="text-3xl font-bold">Blog</h2>
      <p className="mt-4">
        Sharing insights on software, cloud, and cybersecurity.
      </p>
      <div className="grid md:grid-cols-2 gap-6 mt-6">
        <div className="project-card">5 Tips for Securing Your Backend</div>
        <div className="project-card">Building Scalable Web Apps</div>
      </div>
      <div class="blog-posts">
        <article>
          <h3>Understanding the Basics of Cloud Security</h3>
          <p>
            A brief overview of why cloud security matters more than ever...
          </p>
          <a href="#">Read More</a>
        </article>
        <article>
          <h3>Building Scalable Web Apps with Node.js</h3>
          <p>Explore the fundamentals of scalable backend architecture...</p>
          <a href="#">Read More</a>
        </article>
      </div>
    </section>
  );
}
