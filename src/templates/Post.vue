<!-- 因为要根据集合做预渲染，会得到节点，节点也叫模板。所以应该放在templates -->
<template>
	<Layout>
		<!-- Page Header -->
		<header
			class="masthead"
			:style="{
				backgroundImage: `url(http://localhost:1337${$page.post.cover.url})`,
			}"
		>
			<div class="overlay"></div>
			<div class="container">
				<div class="row">
					<div class="col-lg-8 col-md-10 mx-auto">
						<div class="post-heading">
							<h1>{{ $page.post.title }}</h1>
							<!-- <h2 class="subheading">Problems look mighty small from 150 miles up</h2> -->
							<span class="meta"
								>Posted by
								<a href="#">Start Bootstrap</a>
								on August 24, 2022</span
							>
						</div>
					</div>
				</div>
			</div>
		</header>

		<!-- Post Content -->
		<article>
			<div class="container">
				<div class="row">
					<div
						class="col-lg-8 col-md-10 mx-auto"
						v-html="mdToHtml($page.post.content)"
					></div>
				</div>
			</div>
		</article>
	</Layout>
</template>

<!-- GraphQL中id就是id的类型就是ID!-->
<page-query>
query($id: ID!){
  post: strapiPost(id: $id){
    id
    title
    content
    cover{
      url
    }
    tags{
      id
      title
    }
  }
}
</page-query>

<script>
import MarkdownIt from 'markdown-it'
const md = new MarkdownIt()

export default {
	name: "PostPage",

	data() {
		return {};
	},

	mounted() {},

	methods: {
    mdToHtml(markdown){
      return md.render(markdown)
    }
  },
};
</script>
