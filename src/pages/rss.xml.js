import rss from '@astrojs/rss';
import MarkdownIt from 'markdown-it';
import footnote from 'markdown-it-footnote';
import sanitizeHtml from 'sanitize-html';
import { SITE_DESCRIPTION, SITE_LANG} from '../consts';
import { getPostLang, getPublishedPosts } from '../lib/posts';

const parser = new MarkdownIt({ html: true }).use(footnote);

export async function GET(context) {
	const posts = await getPublishedPosts();

	return rss({
		title: `温图丝·乌塔的网络日志`,
		description: SITE_DESCRIPTION,
		site: context.site,
		items: posts.map((post) => ({
			title: post.data.title,
			pubDate: post.data.pubDate,
			description: post.data.description ?? undefined,
			link: `/blog/${post.id}/`,
			categories: post.data.tags,
			customData: `<language>${getPostLang(post)}</language>`,
			content: sanitizeHtml(parser.render(post.body ?? ''), {
				allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img']),
				allowedAttributes: {
					...sanitizeHtml.defaults.allowedAttributes,
					a: sanitizeHtml.defaults.allowedAttributes.a.concat(['id']),
					li: ['id'],
				}
			}),
		})),
		customData: `<language>${SITE_LANG}</language>`,
	});
}
