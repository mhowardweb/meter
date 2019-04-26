<template>
  <q-page class="q-pa-md">
    <div>
      <div class="q-gutter-y-md">
        <q-card>
          <q-tabs
            v-model="tab"
            dense
            class="text-grey"
            active-color="primary"
            indicator-color="primary"
            align="justify"
            narrow-indicator
          >
            <q-tab
              name="electric"
              label="Electric Settings"
            />
            <q-tab
              name="gas"
              label="Gas Settings"
            />
          </q-tabs>

          <q-separator />

          <q-tab-panels
            v-model="tab"
            animated
          >
            <q-tab-panel name="electric">
              <div class="text-h6">Electric Settings</div>
              <q-form class="q-gutter-md">
                <q-input
                clearable
                  filled
                  type="float"
                  v-model="unitRateE"
                  label="Unit Rate"
                  suffix="p/kWh"
                  lazy-rules
                  :rules="[ val => val !== null || 'Please type something']"
                />

                <q-input
                clearable
                  filled
                  type="float"
                  v-model="sChargeE"
                  label="Standing Charge"
                  suffix="p/day"
                  lazy-rules
                  :rules="[ val => val !== null || 'Please type something']"
                />

                <q-input
                clearable
                  filled
                  type="float"
                  v-model="discountE"
                  label="Discount"
                  prefix="£"
                  suffix="/year"
                  lazy-rules
                  :rules="[ val => val !== null || 'Please type something']"
                />

                <q-input
                clearable
                  filled
                  type="date"
                  v-model="tariffEndE"
                  label="Tariff End Date"
                  lazy-rules
                  :rules="[ val => val !== null || 'Please type something']"
                />
                </q-form>
            </q-tab-panel>

            <q-tab-panel name="gas">
              <div class="text-h6">Gas Settings</div>
              <q-form class="q-gutter-md">
                <q-input
                clearable
                  filled
                  type="float"
                  v-model="unitRateG"
                  label="Unit Rate"
                  suffix="p/kWh"
                  lazy-rules
                  :rules="[ val => val !== null || 'Please type something']"
                />

                <q-input
                clearable
                  filled
                  type="float"
                  v-model="sChargeG"
                  label="Standing Charge"
                  suffix="p/day"
                  lazy-rules
                  :rules="[ val => val !== null || 'Please type something']"
                />

                <q-input
                clearable
                  filled
                  type="float"
                  v-model="discountG"
                  label="Discount"
                  prefix="£"
                  suffix="/year"
                  lazy-rules
                  :rules="[ val => val !== null || 'Please type something']"
                />

                <q-input
                clearable
                  filled
                  type="date"
                  v-model="tariffEndG"
                  label="Tariff End Date"
                  lazy-rules
                  :rules="[ val => val !== null || 'Please type something']"
                />
                </q-form>
            </q-tab-panel>
          </q-tab-panels>
        </q-card>
        <q-card class="q-pa-md">
          <q-card-section>
            <div class="text-h6">General Settings</div>
          </q-card-section>
          <q-separator />
          <q-input
                  filled
                  clearable
                  type="text"
                  v-model="tariffName"
                  label="Tariff Name"
                  lazy-rules
                  :rules="[ val => val !== null || 'Please type something']"
                />
          <q-input
                  filled
                  clearable
                  type="text"
                  v-model="productType"
                  label="Product Type"
                  lazy-rules
                  :rules="[ val => val !== null || 'Please type something']"
                />
                <q-input
                  filled
                  clearable
                  type="text"
                  v-model="paymentMethod"
                  label="Payment Method"
                  lazy-rules
                  :rules="[ val => val !== null || 'Please type something']"
                />
        <q-input
                  filled
                  clearable
                  type="float"
                  v-model="earlyExitFee"
                  label="Early Exit Fee"
                  prefix="£"
                  suffix="/fuel"
                  lazy-rules
                  :rules="[ val => val !== null || 'Please type something']"
                />
        <q-input
                  filled
                  clearable
                  type="date"
                  v-model="priceGuarantee"
                  label="Price Guaranteed Until"
                  lazy-rules
                  :rules="[ val => val !== null || 'Please type something']"
                />
        </q-card>
      </div>
    </div>
    <q-btn
    color="red"
    icon="delete"
    label="delete all data"
    @click="confirm"
    class="full-width q-mt-md"
     />
  </q-page>
</template>


<style>
</style>

<script>
export default {
  name: 'Settings',
  data() {
    return {
      tab: 'electric',
    };
  },
  methods: {
    confirm() {
      this.$q.dialog({
        title: 'Confirm',
        message: 'Are you sure you wish to DELETE all data ?',
        ok: {
          push: true,
        },
        cancel: {
          color: 'negative',
        },
        persistent: true,
      }).onOk(() => {
        this.$q.localStorage.clear();
      })
        .onDismiss(() => {

        });
    },
  },
  computed: {
    unitRateE: {
      get() {
        return this.$store.state.app.meter.settings.unitRateE;
      },
      set(value) {
        this.$store.commit('app/updateUnitRateE', value);
      },
    },
    unitRateG: {
      get() {
        return this.$store.state.app.meter.settings.unitRateG;
      },
      set(value) {
        this.$store.commit('app/updateUnitRateG', value);
      },
    },
    sChargeG: {
      get() {
        return this.$store.state.app.meter.settings.sChargeG;
      },
      set(value) {
        this.$store.commit('app/updateSChargeG', value);
      },
    },
    sChargeE: {
      get() {
        return this.$store.state.app.meter.settings.sChargeE;
      },
      set(value) {
        this.$store.commit('app/updateSChargeE', value);
      },
    },
    discountG: {
      get() {
        return this.$store.state.app.meter.settings.discountG;
      },
      set(value) {
        this.$store.commit('app/updateDiscountG', value);
      },
    },
    discountE: {
      get() {
        return this.$store.state.app.meter.settings.discountE;
      },
      set(value) {
        this.$store.commit('app/updateDiscountE', value);
      },
    },
    tariffEndG: {
      get() {
        return this.$store.state.app.meter.settings.tariffEndG;
      },
      set(value) {
        this.$store.commit('app/updateTariffEndG', value);
      },
    },
    tariffEndE: {
      get() {
        return this.$store.state.app.meter.settings.tariffEndE;
      },
      set(value) {
        this.$store.commit('app/updateTariffEndE', value);
      },
    },
    productType: {
      get() {
        return this.$store.state.app.meter.settings.productType;
      },
      set(value) {
        this.$store.commit('app/updateProductType', value);
      },
    },
    paymentMethod: {
      get() {
        return this.$store.state.app.meter.settings.paymentMethod;
      },
      set(value) {
        this.$store.commit('app/updatePaymentMethod', value);
      },
    },
    priceGuarantee: {
      get() {
        return this.$store.state.app.meter.settings.priceGuarantee;
      },
      set(value) {
        this.$store.commit('app/updatePriceGuarantee', value);
      },
    },
    earlyExitFee: {
      get() {
        return this.$store.state.app.meter.settings.earlyExitFee;
      },
      set(value) {
        this.$store.commit('app/updateEarlyExitFee', value);
      },
    },
    tariffName: {
      get() {
        return this.$store.state.app.meter.settings.tariffName;
      },
      set(value) {
        this.$store.commit('app/updateTariffName', value);
      },
    },
  },
};

</script>
