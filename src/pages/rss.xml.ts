import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import MarkdownIt from 'markdown-it';
import sanitizeHtml from 'sanitize-html';
import { SITE_DESCRIPTION, SITE_LANG, SITE_TITLE } from '../consts';
import { getPostLang, getPublishedPosts } from '../lib/posts';

const parser = new MarkdownIt({ html: true });

export async function GET(context: APIContext) {
	const posts = await getPublishedPosts();

	return rss({
		title: `温图丝·乌塔的网络日志`,
		description: SITE_DESCRIPTION,
		site: context.site!,
		items: posts.map((post) => ({
			title: post.data.title,
			pubDate: post.data.pubDate,
			description: post.data.description ?? undefined,
			link: `/blog/${post.id}/`,
			categories: post.data.tags,
			customData: `<language>${getPostLang(post)}</language>`,
			content: sanitizeHtml(parser.render(post.body ?? ''), {
				allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img']),
			}),
		})),
		customData: `<language>${SITE_LANG}</language>`,
	});
}
