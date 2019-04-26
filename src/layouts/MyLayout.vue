<template>
  <q-layout
    view="lHh lpr lFf"
    class="shadow-2 rounded-borders"
  >
    <q-header
      elevated
      class="bg-black"
    >
      <q-toolbar>
        <q-toolbar-title>
          Energy Reading Monitor
        </q-toolbar-title>

        <div>v1.0.0</div>
      </q-toolbar>
    </q-header>

    <q-footer
      bordered
      elevated
      class="bg-white text-primary"
    >
      <q-tabs
        v-model="tab"
        class="bg-grey-1"
        dense
        align="justify"
      >
        <q-route-tab
          class="text-orange"
          to="/"
          exact
          name="home"
          icon="home"
          label="New Reading"
        />
        <q-route-tab
          class="text-cyan"
          to="history"
          exact
          name="history"
          icon="history"
          label="History"
        />
        <q-route-tab
          class="text-red"
          to="settings"
          name="settings"
          icon="settings"
          label="Settings"
        />
        <q-route-tab
          class="text-purple"
          to="summary"
          name="summary"
          icon="receipt"
          label="Summary"
        />
      </q-tabs>
    </q-footer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'MyLayout',
  data() {
    return {
      tab: null,
    };
  },
  created() {
    this.$store.dispatch('app/loadDataAction');
  },
};
</script>
