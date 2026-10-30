export const categories = ['All work', 'Full-stack', 'Data & finance', 'Games', 'AI & automation'];

const normalize = value => value.normalize('NFKD').replace(/\p{Diacritic}/gu, '').toLowerCase().trim();

export function readProjectState(search) {
  const params = new URLSearchParams(search);
  const category = params.get('category');
  return {
    category: categories.includes(category) ? category : 'All work',
    query: (params.get('q') || '').slice(0, 160)
  };
}

export function matchesProject(project, { category, query }) {
  const inCategory = category === 'All work' || project.categories.includes(category);
  const text = normalize(project.search);
  const words = normalize(query).split(/\s+/).filter(Boolean);
  return inCategory && words.every(word => text.includes(word));
}
