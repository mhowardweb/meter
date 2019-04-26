<template>
  <q-page>
    <div class="q-pa-md">
      <q-table
        title="Reading History"
        :data="history.readings"
        :columns="columns"
        row-key="electric"

      />

    </div>
  </q-page>
</template>

<style>
</style>

<script>
export default {
  name: 'History',
  data() {
    return {
      selected: [],
      columns: [
        {
          name: 'electric',
          label: 'Electric',
          field: 'electric',
          sortable: true,
        },
        {
          name: 'gas',
          label: 'Gas',
          field: 'gas',
          sortable: true,
        },
        {
          name: 'date',
          label: 'Date',
          field: 'date',
          sortable: true,
        },
        { name: 'time', label: 'Time', field: 'time' },
      ],
    };
  },
  computed: {
    history() {
      const hist = this.$q.localStorage.getItem('app');
      return hist.meter;
    },
  },
};
</script>
