<template>
  <Layout class="not-found">
        <div id="wrapper" class="content-box">
            <h1>Oops, something strange happened</h1>
            <p>If you're looking for an overview of my talks, you can find them <a href="/talks">here</a>.</p>

            <p><a href="/about">Read more about me.</a></p>
            <g-link class="home-link" to="/">Home</g-link>
            <span class="page-query-value">
            {{ $page }}
            </span>
        </div>
  </Layout>
</template>