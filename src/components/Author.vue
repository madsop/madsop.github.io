<template>
	<div class="author">

		<g-image alt="Mads Opheim" class="author__image" src="~/assets/images/author.jpg" width="180" height="180" blur="5" />

		<h1 v-if="showTitle" class="author__site-title">
			{{ $static.metadata.siteName }}
		</h1>

		<p class="author__intro">
			I'm a tech lead, developer and test enthusiast.<br />
			I'm at my best when I can make people awesome.
		</p>

		<Profiles />

	</div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import { Vue } from 'vue-property-decorator';

export default {
	props: ['showTitle']
}

</script>

<style lang="scss">

.author {
	margin: 0 auto;
	max-width: 500px;
	text-align: center;
	padding: 0 0 calc(var(--space) / 2) 0;

	&__image {
		border-radius: 100%;
		width: 90px;
		height: 90px;
		margin-bottom: 1em;
	}

	&__intro {
		opacity: .8;
	}

	&__site-title {
		font-size: 1.5em;
	}
}
</style>
