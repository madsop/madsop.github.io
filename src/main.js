// Import main css
import '~/assets/style/index.scss'

// Import default layout so we don't need to import it to every page
import DefaultLayout from '~/layouts/Default.vue'
import Talks from '~/pages/talks.vue'
import Profiles from '@/components/Profiles.vue'

// The Client API can be used here. Learn more: gridsome.org/docs/client-api
export default function (Vue, { router, head, isClient }) {
  
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  Vue.component("Profiles", Profiles);

  router.addRoutes([
    {
      path: '/_pages/talks',
      name: 'oldTalksPage',
      component: Talks
    }
  ])
};
