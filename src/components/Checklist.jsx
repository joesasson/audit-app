import { useParams, Link } from 'react-router-dom';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { getAudit, getAuditIds } from '../audits';

export default function Checklist() {
  const { auditId } = useParams();
  const audit = getAudit(auditId);

  const [checked, setChecked] = useLocalStorage(`audit-${auditId}-checked`, {});

  const toggle = (id) => {
    setChecked((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  if (!audit) {
    return (
      <div className="page">
        <p>Audit not found.</p>
        <Link to="/">View all audits</Link>
      </div>
    );
  }

  const { client, priorityGroups, breakdownTitle } = audit;

  return (
    <div className="page">
      <header className="header">
        <div className="header-logo">
          <img src={client.logo} alt={client.name} />
        </div>
        <div>
          <span className="brand">{client.brand}</span>
          <h1>
          {client.title.split(' ')[0]}
          {client.title.includes(' ') && (
            <>
              <br />
              {client.title.split(' ').slice(1).join(' ')}
            </>
          )}
        </h1>
        </div>
      </header>

      {priorityGroups.map((group) => (
        <div key={group.id} className="priority-group">
          <div className="priority-label">
            <span className={`badge ${group.badgeClass}`}>{group.badge}</span>
            {group.label}
          </div>
          <div className="grid">
            {group.sections.map((section) => (
              <div key={section.id} className={`section ${section.theme}`}>
                <div className="section-title">{section.title}</div>
                {section.image && (
                  <img className="section-img" src={section.image} alt="" />
                )}
                <div className="items">
                  {section.items.map((item) => (
                    <label key={item.id} className="item">
                      <input
                        type="checkbox"
                        checked={!!checked[item.id]}
                        onChange={() => toggle(item.id)}
                      />
                      <span>
                        <Link
                          to={`/${auditId}/breakdown#${item.id}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                        >
                          {item.label}
                        </Link>
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      <footer className="footer">
        <Link to={`/${auditId}/breakdown`} target="_blank" rel="noopener noreferrer">
          Detailed breakdown
        </Link>
        <span>·</span>
        <span>{client.roadmap}</span>
        <span>·</span>
        <span>{client.subtitle}</span>
        {getAuditIds().length > 1 && (
          <>
            <span>·</span>
            <Link to="/">Switch audit</Link>
          </>
        )}
      </footer>
    </div>
  );
}
