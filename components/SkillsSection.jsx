export default function SkillsSection() {
  return (
    <section className="section">
      <h2 className="text-3xl font-bold">Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-6">
        <div className="project-card">Backend Development</div>
        <div className="project-card">Cloud Computing</div>
        <div className="project-card">Cybersecurity</div>
      </div>
    </section>
  );
}
