<template>
<q-page>
<div class="">
  <h5>Account Summary</h5>
  <q-card class="q-ma-md">
    <q-list>
      <q-item>
          <q-item-section avatar>
            <q-icon color="primary" name="fas fa-burn" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Standing Charge for Gas:</q-item-label>
            <q-item-label caption>
              £ {{((settings.sChargeG * 365) / 100).toFixed(2)}} per Year
              </q-item-label>
          </q-item-section>
        </q-item>
        <q-item>
          <q-item-section avatar>
            <q-icon color="red" name="fas fa-bolt" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Standing Charge for Electric:</q-item-label>
            <q-item-label caption>
              £ {{((settings.sChargeE * 365) / 100).toFixed(2)}} per Year
              </q-item-label>
          </q-item-section>
        </q-item>
        <q-item>
          <q-item-section avatar>
            <q-icon color="blue" name="fas fa-burn" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Unit Rate for Gas:</q-item-label>
            <q-item-label caption>
              £ {{settings.unitRateG}} pence per kWh
              </q-item-label>
          </q-item-section>
        </q-item>
        <q-item>
          <q-item-section avatar>
            <q-icon color="red" name="fas fa-bolt" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Unit Rate for Electric:</q-item-label>
            <q-item-label caption>
              £ {{settings.unitRateE}} pence per kWh
              </q-item-label>
          </q-item-section>
        </q-item>
    </q-list>
  </q-card>

  </div>
</q-page>


</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Summary',
  computed: {
    ...mapGetters({
      settings: 'app/getSettings',
    }),
  },
};
</script>
