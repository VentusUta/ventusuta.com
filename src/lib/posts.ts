import { getCollection, type CollectionEntry } from 'astro:content';

export type BlogPost = CollectionEntry<'blog'>;

export async function getPublishedPosts(): Promise<BlogPost[]> {
	const posts = await getCollection('blog', ({ data }) => {
		return import.meta.env.PROD ? data.draft !== true : true;
	});

	return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

export function formatDate(date: Date): string {
	return date.toLocaleDateString('zh-CN', {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	});
}

export function formatMonthDay(date: Date): string {
	const month = String(date.getUTCMonth() + 1).padStart(2, '0');
	const day = String(date.getUTCDate()).padStart(2, '0');
	return `${month}-${day}`;
}

export function groupPostsByYear(posts: BlogPost[]): { year: number; posts: BlogPost[] }[] {
	const groups = new Map<number, BlogPost[]>();

	for (const post of posts) {
		const year = post.data.pubDate.getUTCFullYear();
		const list = groups.get(year);
		if (list) list.push(post);
		else groups.set(year, [post]);
	}

	return [...groups.entries()].map(([year, posts]) => ({ year, posts }));
}

export function getAllTags(posts: BlogPost[]): { tag: string; count: number }[] {
	const counts = new Map<string, number>();

	for (const post of posts) {
		for (const tag of post.data.tags) {
			counts.set(tag, (counts.get(tag) ?? 0) + 1);
		}
	}

	return [...counts.entries()]
		.map(([tag, count]) => ({ tag, count }))
		.sort((a, b) => a.tag.localeCompare(b.tag, 'zh-CN'));
}
