<template>
	<Layout>
		<!-- Page Header -->
		<header class="masthead" :style="{
      backgroundImage: `url(http://localhost:1337${general.cover.url})`,
    }">
			<div class="overlay"></div>
			<div class="container">
				<div class="row">
					<div class="col-lg-8 col-md-10 mx-auto">
						<div class="site-heading">
							<h1>{{ general.title }}</h1>
							<!-- <span class="subheading">A Blog Theme by Start Bootstrap</span> -->
							<span class="subheading">{{ general.subtitle }}</span>
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
						v-for="edge in $pages.posts.edges"
						:key="edge.node.id"
					>
						<g-link :to="'/post/' + edge.node.id">
							<h2 class="post-title">
								{{ edge.node.title }}
							</h2>
							<!-- <h3 class="post-subtitle">
                Problems look mighty small from 150 miles up
              </h3> -->
						</g-link>
						<p class="post-meta">
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
						<hr />
					</div>
					<Pager :info="$page.posts.pageInfo"></Pager>
				</div>
			</div>
		</div>

		<hr />
	</Layout>
</template>

<page-query>
query ($page: int) {
  posts: allStrapiPost (perPage:2, page:$page) @paginate {
    pageInfo{
      totalPages
      currentPage
    }
    edges{
      node{
        id
        title
        created_by{
          id 
          firstname
          lastname
        }
        tags{
          id
          title
        }
        created_at
      }
    }
  }

  allStrapiGeneral{
    edges{
      node{
        id
        title
        subtitle
        cover{
          url
        }
      }
    }
  }
}
</page-query>

<script>
import { Pager } from "gridsome";
export default {
	name: "HomePage",
	metaInfo: {
		title: "Hello, world!",
		meta: [{ name: "author", content: "Kwan" }],
	},
	components: {
		Pager,
	},
	computed: {
		general() {
			return this.$page.general.edges[0].node;
		},
	},
};
</script>

<style></style>
