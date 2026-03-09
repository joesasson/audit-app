import { useParams, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { getAudit } from '../audits';

export default function Breakdown() {
  const { auditId } = useParams();
  const audit = getAudit(auditId);

  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (hash) {
      const el = document.getElementById(hash);
      el?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [auditId]);

  if (!audit) {
    return <div className="page">Audit not found</div>;
  }

  const { client, breakdownTitle, breakdown } = audit;

  return (
    <div className="page breakdown-page">
      <header className="header">
        <div className="header-logo">
          <img src={client.logo} alt={client.name} />
        </div>
        <div>
          <h1>{client.name} — {breakdownTitle}</h1>
          <Link className="back" to={`/${auditId}`}>
            ← Back to Checklist
          </Link>
        </div>
      </header>

      {breakdown?.toc?.length > 0 && (
        <nav className="toc">
          <h2>Jump to section</h2>
          <ul>
            {breakdown.toc.map(({ id, label }) => (
              <li key={id}>
                <a href={`#${id}`}>{label}</a>
              </li>
            ))}
          </ul>
        </nav>
      )}

      {breakdown?.groups?.map((group) => (
        <div key={group.title} className="section-group">
          <h2>{group.title}</h2>
          {group.items?.map((item) => (
            <article key={item.id} id={item.id} className="breakdown-item">
              <h3>{item.title}</h3>
              {item.paragraphs?.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
              {item.fix && (
                <div className="fix">
                  <strong>Fix:</strong> {item.fix}
                </div>
              )}
            </article>
          ))}
        </div>
      ))}
    </div>
  );
}
