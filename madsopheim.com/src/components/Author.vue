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

		<p class="author__links">
			<a href="mailto:mads.opheim+web@gmail.com">
				<img class="icon" src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/gmail.svg" alt="E-mail">
			</a>
			<a href="//twitter.com/madsopheim">
				<img class="icon" src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/twitter.svg" alt="Twitter"/>
			</a>
			<a href="//github.com/madsop/">
				<img class="icon" src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/github.svg" alt="GitHub"/>
			</a>
			<a href="//linkedin.com/in/madsopheim/">
				<img class="icon" src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/linkedin.svg" alt="LinkedIn"/>
			</a>
		</p>

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
export default {
	props: ['showTitle']
}

</script>

<style lang="scss">

.icon {
	height: 24px;
	width: 24px;
}

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

	&__links {
		margin-top: -.5em;
		a {
			margin: 0 .5em;
		}
	}
}
</style>
