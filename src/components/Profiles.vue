<template>
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
</template>

<style lang="scss">
    .icon {
        height: 24px;
        width: 24px;
    }

    .author {
        &__links {
            margin-top: -.5em;
            a {
                margin: 0 .5em;
            }
        }
    }
</style>
