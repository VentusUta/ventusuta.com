import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import MarkdownIt from 'markdown-it';
import sanitizeHtml from 'sanitize-html';
import { SITE_DESCRIPTION, SITE_TITLE } from '../consts';
import { getPublishedPosts } from '../lib/posts';

const parser = new MarkdownIt();

export async function GET(context: APIContext) {
	const posts = await getPublishedPosts();

	return rss({
		title: `${SITE_TITLE}_网志`,
		description: SITE_DESCRIPTION,
		site: context.site!,
		items: posts.map((post) => ({
			title: post.data.title,
			pubDate: post.data.pubDate,
			description: post.data.description,
			link: `/blog/${post.id}/`,
			categories: post.data.tags,
			content: sanitizeHtml(parser.render(post.body ?? ''), {
				allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img']),
			}),
		})),
		customData: '<language>zh-CN</language>',
	});
}
