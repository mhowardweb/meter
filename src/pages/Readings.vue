<template>
  <q-page class="q-pa-md">
    <q-card
      flat
      bordered
    >
      <q-card-section>
        <div class="text-h6 text-center">Enter your Meter Readings</div>
      </q-card-section>
      <q-separator />
      <q-card-section>

        <q-form
          @submit="onSubmit"
          @reset="onReset"
          class="q-gutter-md"
          ref="readingForm"
        >
          <q-input
            filled
            type="number"
            v-model="reading.electric"
            label="Electric Reading"
            lazy-rules
            :rules="[ val => val && val.length > 4 || 'Please type something']"
          />

          <q-input
            filled
            type="number"
            v-model="reading.gas"
            label="Gas Reading"
            lazy-rules
            :rules="[
          val => val !== null && val !== '' || 'Please type something'

        ]"
          />

          <q-input
            filled
            type="date"
            v-model="reading.date"
            label="Date"
          />

          <q-input
            filled
            type="time"
            v-model="reading.time"
            label="Time"
          />

          <div>
            <q-btn
              label="Submit"
              type="submit"
              color="green"
            />
            <q-btn
              label="Reset"
              type="reset"
              color="red"
              flat
              class="q-ml-sm"
            />
          </div>
        </q-form>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<style>
</style>

<script>
import { date } from 'quasar';

export default {
  name: 'Readings',
  data() {
    return {
      reading: {
        electric: null,
        gas: null,
        date: date.formatDate(Date.now(), 'YYYY-MM-DD'),
        time: date.formatDate(Date.now(), 'HH:mm'),
      },
    };
  },

  methods: {
    onSubmit() {
      this.reading.date = date.formatDate(this.reading.date, 'DD-MM-YYYY');
      this.$store.dispatch('app/saveReadingAction', this.reading);
      this.$q.notify({
        color: 'green-4',
        textColor: 'white',
        icon: 'save',
        message: 'Reading has been Saved',
      });
      this.$router.push({ path: 'history' });
    },

    onReset() {
      this.reading = {
        electric: null,
        gas: null,
        date: date.formatDate(Date.now(), 'YYYY-MM-DD'),
        time: date.formatDate(Date.now(), 'HH:mm'),
      };
    },
  },
};
</script>
