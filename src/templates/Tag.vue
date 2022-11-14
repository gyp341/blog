<template>
  <Layout>
		<!-- Page Header -->
		<header class="masthead" style="background-image: url('/img/home-bg.jpg')">
			<div class="overlay"></div>
			<div class="container">
				<div class="row">
					<div class="col-lg-8 col-md-10 mx-auto">
						<div class="site-heading">
							<h1># {{ $page.tag.title }}</h1>
						</div>
					</div>
				</div>
			</div>
		</header>

		<!-- Main Content -->
		<div class="container">
			<div class="row">
				<div class="col-lg-8 col-md-10 mx-auto">
					<div
						class="post-preview"
						v-for="post in $pages.tag.edges"
						:key="post.id"
					>
						<g-link :to="'/post/' + post.id">
							<h2 class="post-title">
								{{ post.title }}
							</h2>
						</g-link>
						<!-- <p class="post-meta">
							Posted by
							<a href="#">{{
								edge.node.created_by.firstname + edge.node.created_by.lastname
							}}</a>
							on {{ edge.node.created_at }}
						</p>
						<span v-for="tag in edge.node.tags" :key="tag.id">
							<g-link :to="'/tag/' + tag.id">{{ tag.title }}</g-link>
							&nbsp;&nbsp;
						</span>
						<hr /> -->
					</div>
				</div>
			</div>
		</div>
		<hr />
	</Layout>
</template>

<page-query>
  query($id: ID!){
    tag: strapiTag(id: $id){
      id
      title
      posts{
        id
        title
      }
    }
  }
  </page-query>


<script>
export default {
  name: 'TagPage',

  data() {
    return {
      
    };
  },

  mounted() {
    
  },

  methods: {
    
  },
};
</script>