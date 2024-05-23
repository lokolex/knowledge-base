export const generateBreadCrumbs = (path: string) => {
  const asPathNestedRoutes = path.split('/').filter((v) => v.length > 0);
  const crumblist = asPathNestedRoutes.map((subpath, idx) => {
    // We can get the partial nested route for the crumb
    // by joining together the path parts up to this point.
    const href = '/' + asPathNestedRoutes.slice(0, idx + 1).join('/');
    // The title will just be the route string for now
    const text = subpath.toUpperCase();
    return { href, text };
  });
  return [{ href: '/', text: 'HOME' }, ...crumblist];
};
