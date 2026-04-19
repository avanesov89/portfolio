const ABSOLUTE_URL_PATTERN = /^(?:[a-z]+:)?\/\//i;

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export function withBasePath(path: string) {
  if (!path || path === "/") {
    return basePath || "/";
  }

  if (
    ABSOLUTE_URL_PATTERN.test(path) ||
    path.startsWith("#") ||
    path.startsWith("mailto:") ||
    path.startsWith("tel:")
  ) {
    return path;
  }

  return `${basePath}${path.startsWith("/") ? path : `/${path}`}`;
}
