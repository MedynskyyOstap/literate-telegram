<template>
  <div class="q-pa-md">
    <q-layout view="hHh lpR fFf" container style="height: 400px" class="shadow-2 rounded-borders">
      <q-header elevated>
        <q-toolbar>

          <q-toolbar-title class="absolute-center">
            Notion Todo
          </q-toolbar-title>

        </q-toolbar>
      </q-header>

      <q-footer elevated>
        <q-toolbar style="justify-content: center">
          <q-tabs align="center">
            <q-route-tab 
              v-for="nav in linksData"
              :key="nav.title"
              :to="nav.link" 
              :icon="nav.icon" 
              :label="nav.title" 
            />
          </q-tabs>
        </q-toolbar>
      </q-footer>

      <q-drawer
        v-model="leftDrawerOpen"
        :breakpoint="767"
        :width="250"
        show-if-above
        bordered
        content-class="bg-primary"
      >
        <q-list dark>
          <q-item-label
            header
            class="text-grey-4"
          >
            Navigation
          </q-item-label>
          <EssentialLink
            v-for="link in essentialLinks"
            :key="link.title"
            v-bind="link"
            class="text-grey-4"
          />
        </q-list>
      </q-drawer>

      <q-page-container>
        <router-view />
      </q-page-container>
    </q-layout>
  </div>
</template>

<script lang="ts">
import EssentialLink from 'components/EssentialLink.vue'
import { defineComponent, ref } from '@vue/composition-api';

export default defineComponent({
  name: 'Layout',
  components: { EssentialLink },
  setup() {
    const linksData = [
  {
    title: 'Todo',
    // caption: 'quasar.dev',
    icon: 'list',
    link: '/'
  },
  {
    title: 'Settings',
    // caption: 'github.com/quasarframework',
    icon: 'settings',
    link: '/settings'
  },
  // {
  //   title: 'Discord Chat Channel',
  //   caption: 'chat.quasar.dev',
  //   icon: 'chat',
  //   link: 'https://chat.quasar.dev'
  // },
  // {
  //   title: 'Forum',
  //   caption: 'forum.quasar.dev',
  //   icon: 'record_voice_over',
  //   link: 'https://forum.quasar.dev'
  // },
  // {
  //   title: 'Twitter',
  //   caption: '@quasarframework',
  //   icon: 'rss_feed',
  //   link: 'https://twitter.quasar.dev'
  // },
  // {
  //   title: 'Facebook',
  //   caption: '@QuasarFramework',
  //   icon: 'public',
  //   link: 'https://facebook.quasar.dev'
  // },
  // {
  //   title: 'Quasar Awesome',
  //   caption: 'Community Quasar projects',
  //   icon: 'favorite',
  //   link: 'https://awesome.quasar.dev'
  // }
];
    const leftDrawerOpen = ref(false);
    const essentialLinks = ref(linksData);

    return {leftDrawerOpen, essentialLinks, linksData}
  }
});
</script>
<style scoped lang="scss">
  @media screen and (min-width: 768px) {
    .q-footer {
      display: none;
    }
  }
  .q-drawer {
    .q-router-link--exact-active {
      color: white !important;
    }
  }
</style>
