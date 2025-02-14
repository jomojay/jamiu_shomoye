export default function ProjectsSection() {
  return (
    <section className="section">
      <h2 className="text-3xl font-bold">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6 mt-6">
        <div className="project-card">
          <a href="https://github.com/jomojay/AirBnB_clone_v3.git">
            AirBnB Clone
          </a>
        </div>
        <div className="project-card">PLAN2LIVE - Health App</div>
        <div className="project-card">Book-Locker</div>
      </div>
    </section>
  );
}
