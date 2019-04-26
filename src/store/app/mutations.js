import { LocalStorage } from 'quasar';

export function saveReading(state, data) {
  state.meter.readings.push(data);
  LocalStorage.set('app', state);
}

export function saveSettings(state, data) {
  state.meter.settings = data;
  LocalStorage.set('app', state);
}

export function loadData(state) {
  if (LocalStorage.has('app')) {
    const data = LocalStorage.getItem('app');
    state.meter = data.meter;
  }
}

export function updateUnitRateE(state, data) {
  state.meter.settings.unitRateE = data;
  LocalStorage.set('app', state);
}

export function updateUnitRateG(state, data) {
  state.meter.settings.unitRateG = data;
  LocalStorage.set('app', state);
}

export function updateSChargeE(state, data) {
  state.meter.settings.sChargeE = data;
  LocalStorage.set('app', state);
}

export function updateSChargeG(state, data) {
  state.meter.settings.sChargeG = data;
  LocalStorage.set('app', state);
}

export function updateDiscountG(state, data) {
  state.meter.settings.discountG = data;
  LocalStorage.set('app', state);
}

export function updateDiscountE(state, data) {
  state.meter.settings.discountE = data;
  LocalStorage.set('app', state);
}

export function updateTariffEndG(state, data) {
  state.meter.settings.tariffEndG = data;
  LocalStorage.set('app', state);
}

export function updateTariffEndE(state, data) {
  state.meter.settings.tariffEndE = data;
  LocalStorage.set('app', state);
}

export function updateProductType(state, data) {
  state.meter.settings.productType = data;
  LocalStorage.set('app', state);
}

export function updatePaymentMethod(state, data) {
  state.meter.settings.paymentMethod = data;
  LocalStorage.set('app', state);
}

export function updateEarlyExitFee(state, data) {
  state.meter.settings.earlyExitFee = data;
  LocalStorage.set('app', state);
}

export function updatePriceGuarantee(state, data) {
  state.meter.settings.priceGuarantee = data;
  LocalStorage.set('app', state);
}

export function updateTariffName(state, data) {
  state.meter.settings.tariffName = data;
  LocalStorage.set('app', state);
}
