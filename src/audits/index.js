import ekids from './ekids';

export const audits = { ekids };
export { ekids };

export function getAudit(id) {
  return audits[id] ?? null;
}

export function getAuditIds() {
  return Object.keys(audits);
}
