export const sanitizeUrl = (url) => {
  if (!url || typeof url !== 'string') return '_self';
  const sanitized = url.trim();
  if (sanitized.startsWith('http://') || sanitized.startsWith('https://')) {
    return sanitized;
  }
  return '_self';
};

export const externalRel = 'noopener noreferrer';