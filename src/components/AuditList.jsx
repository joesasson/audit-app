import { Link, Navigate } from 'react-router-dom';
import { getAuditIds, getAudit } from '../audits';

export default function AuditList() {
  const ids = getAuditIds();
  const defaultId = ids[0];

  if (ids.length === 1) {
    return <Navigate to={`/${defaultId}`} replace />;
  }

  return (
    <div className="page">
      <header className="header">
        <h1>Audits</h1>
      </header>
      <ul style={{ listStyle: 'none' }}>
        {ids.map((id) => {
          const audit = getAudit(id);
          return (
            <li key={id} style={{ marginBottom: 12 }}>
              <Link to={`/${id}`} style={{ fontSize: 1.1, fontWeight: 600 }}>
                {audit.client.name} — {audit.client.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
