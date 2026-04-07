// Main calculation and update function
// Note: assumes `bsaValue`, `inputs`, and `updateTextareas()` are accessible
// -------------------------
// MAIN FUNCTION
// -------------------------
function updateTextareas() {
  const cardiacValues = [];
  const rightValues = [];
  const atriumValues = [];
  const aorticValues = [];
  const aortaValues = [];
  const mitralValues = [];
  const tricuspidValues = [];
  const pulmonaryValues = [];
  //create a rule for each input available
  let IVS = 0;
  let LVEDd = 0;
  let PWd = 0;
  let LVEDV = 0;
  let LVESV = 0;
  let lvefvisual = null;
  let sept = 0;
  let lat = 0;
  let lvotVTI = 0;
  let avVTI = 0;
  let lvotd = 0;
  let ascao = 0;
  let aorticroot = 0;
  let evel = 0;
  let avel = 0;
  let MVmeanPG = 0;
  let rap = 0;
  let trpeakPG = 0;
  let prpeakPG = 0;
  let trvel = 0;
  let rvotvti = 0;
  let prvel = 0;
  let PRpeakvel = 0;
  let rvotd = 0;
  let PVpeakvel = 0;

  let avPeakVel, avMeanVel, avPeakPG, avMeanPG;

  const bsa = bsaValue;

  inputs.forEach((input) => {
    const value = input.value.trim();
    if (!value) return;

    const section = input.dataset.section;
    const label = input.dataset.label;
    const display = input.dataset.display || label;

    // -------------------------
    // LEFT VENTRICLE
    // -------------------------
    if (section === "leftventricle") {
      if (label === "IVS") IVS = parseFloat(value);
      if (label === "LVEDd") LVEDd = parseFloat(value);
      if (label === "PWd") PWd = parseFloat(value);
      if (label === "LVEDV") LVEDV = parseFloat(value);
      if (label === "LVESV") LVESV = parseFloat(value);
      if (label === "lvefvisual") lvefvisual = value;
      if (label === "sept") sept = parseFloat(value);
      if (label === "lat") lat = parseFloat(value);
    }

    // -------------------------
    // Atrium
    // -------------------------
    if (section === "atrium") {
      if (label === "rap") rap = parseFloat(value);
      if (label === "trpeakPG") trpeakPG = parseFloat(value);
      if (label === "prpeakPG") prpeakPG = parseFloat(value);
    }

    // -------------------------
    // AORTA
    // -------------------------
    if (section === "aorta") {
      if (label === "ascao") {
        ascao = parseFloat(value);
        aortaValues.push(`${display} ${value} cm`);

        const ascIndexedInput = document.querySelector(
          'input[data-label="ascaoindexed"]',
        );

        if (ascao && bsa) {
          const ascIndexed = (ascao / bsa).toFixed(2);
          if (ascIndexedInput) ascIndexedInput.value = ascIndexed;
          aortaValues.push(`Indexed ${ascIndexed} cm/m²`);
        } else {
          if (ascIndexedInput) ascIndexedInput.value = "";
        }
      }

      if (label === "aorticroot") {
        aorticroot = parseFloat(value);
        aortaValues.push(`${display} ${value} cm`);

        const aorticrootIndexedInput = document.querySelector(
          'input[data-label="aorticrootindexed"]',
        );

        if (aorticroot && bsa) {
          const aorticrootIndexed = (aorticroot / bsa).toFixed(2);
          if (aorticrootIndexedInput)
            aorticrootIndexedInput.value = aorticrootIndexed;
          aortaValues.push(`Indexed ${aorticrootIndexed} cm/m²`);
        } else {
          if (aorticrootIndexedInput) aorticrootIndexedInput.value = "";
        }
      }
    }

    // -------------------------
    // AORTIC VALVE
    // -------------------------
    if (section === "aortic") {
      if (label === "LVOT VTI") lvotVTI = parseFloat(value);
      if (label === "AV VTI") avVTI = parseFloat(value);
      if (label === "LVOTd") lvotd = parseFloat(value);

      if (label === "AV peak vel") avPeakVel = value;
      if (label === "AV mean vel") avMeanVel = value;
      if (label === "AV peak PG") avPeakPG = value;
      if (label === "AV mean PG") avMeanPG = value;

      const excludedLabels = [
        "DSI",
        "AVA",
        "AV peak vel",
        "AV mean vel",
        "AV peak PG",
        "AV mean PG",
      ];

      if (!excludedLabels.includes(label)) {
        aorticValues.push(`${label} ${value} cm`);
      }
    }

    // -------------------------
    // Mitral
    // -------------------------
    if (section === "mitral") {
      if (label === "evel") evel = parseFloat(value);
      if (label === "avel") avel = parseFloat(value);
      if (label === "MVmeanPG") MVmeanPG = parseFloat(value);
    }

    // -------------------------
    // Tricuspid
    // -------------------------
    if (section === "tricuspid") {
      if (label === "trvel") trvel = parseFloat(value);
    }
    // -------------------------
    // Pulmonary
    // -------------------------
    if (section === "pulmonary") {
      if (label === "PVpeakvel") PVpeakvel = parseFloat(value);
      if (label === "PRpeakvel") PRpeakvel = parseFloat(value);
      if (label === "rvotd") rvotd = parseFloat(value);
      if (label === "rvotvti") rvotvti = parseFloat(value);
    }
  });
  // -------------------------
  // Left Ventricle Calculations
  // -------------------------
  const LVEDVindexedInput = document.querySelector(
    'input[data-label="LVEDVindexed"]',
  );
  const lvefsimpsonInput = document.querySelector(
    'input[data-label="lvefsimpson"]',
  );
  const septeeInput = document.querySelector('input[data-label="septee"]');
  const lateeInput = document.querySelector('input[data-label="latee"]');
  const avgeeInput = document.querySelector('input[data-label="avgee"]');

  if (IVS) cardiacValues.push(`IVS ${IVS} cm`);
  if (LVEDd) cardiacValues.push(`LVEDd ${LVEDd} cm`);
  if (PWd) cardiacValues.push(`PWd ${PWd} cm`);
  if (LVEDV) cardiacValues.push(`LVEDV ${LVEDV} ml`);
  if (LVESV) cardiacValues.push(`LVESV ${LVESV} ml`);
  if (LVEDV && bsa) {
    const LVEDVindexed = (LVEDV / bsa).toFixed(0);
    if (LVEDVindexedInput) LVEDVindexedInput.value = LVEDVindexed;
    cardiacValues.push(`Indexed LVEDV ${LVEDVindexed} ml/m²`);
  } else {
    if (LVEDVindexedInput) LVEDVindexedInput.value = "";
  }
  if (LVEDV && LVESV) {
    const lvefsimpsonValue = ((LVESV / LVEDV) * 100).toFixed(0);
    if (lvefsimpsonInput) lvefsimpsonInput.value = lvefsimpsonValue;
    cardiacValues.push(`LVEF by Simpson's biplane ${lvefsimpsonValue}`);
  } else {
    if (lvefsimpsonInput) lvefsimpsonInput.value = "";
  }
  if (lvefvisual)
    cardiacValues.push(`LVEF by visual estimation ${lvefvisual}%`);
  if (sept) cardiacValues.push(`Sept e' ${sept} m/s`);

  // Septal E/e'
  if (evel && sept) {
    const septee = (evel / sept).toFixed(1);
    if (septeeInput) septeeInput.value = septee;
  } else {
    if (septeeInput) septeeInput.value = "";
  }

  // Lateral E/e'
  if (evel && lat) {
    const latee = (evel / lat).toFixed(1);
    if (lateeInput) lateeInput.value = latee;
  } else {
    if (lateeInput) lateeInput.value = "";
  }

  // Average E/e'
  if (evel && sept && lat) {
    const avg = evel / ((sept + lat) / 2);
    const avgee = avg.toFixed(1);
    if (avgeeInput) avgeeInput.value = avgee;
    cardiacValues.push(`E/e' ${avgee}`);
  } else {
    if (avgeeInput) avgeeInput.value = "";
  }
  // -------------------------
  // Atrium Calculations
  // -------------------------
  const rvspInput = document.querySelector('input[data-label="rvsp"]');
  if (rap && trpeakPG) {
    const rvspValue = (rap + trpeakPG).toFixed(0);
    if (rvspInput) rvspInput.value = rvspValue;
    atriumValues.push(`Estimated RVSP ${rvspValue} mmHg`);
  } else {
    if (rvspInput) rvspInput.value = "";
  }
  const mpapInput = document.querySelector('input[data-label="mpap"]');
  if (rap && prpeakPG) {
    const mpapValue = (rap + prpeakPG).toFixed(0);
    if (mpapInput) mpapInput.value = mpapValue;
    atriumValues.push(`Estimated mPAP ${mpapValue} mmHg`);
  } else {
    if (mpapInput) mpapInput.value = "";
  }
  if (rap) atriumValues.push(`(Assuming RAP ${rap} mmHg)`);

  // -------------------------
  // Merge AV Values
  // -------------------------
  if (avPeakVel && avMeanVel) {
    aorticValues.push(`AV peak/mean Vel ${avPeakVel}/${avMeanVel} m/s`);
  } else {
    if (avPeakVel) aorticValues.push(`AV peak vel ${avPeakVel} m/s`);
    if (avMeanVel) aorticValues.push(`AV mean vel ${avMeanVel} m/s`);
  }

  if (avPeakPG && avMeanPG) {
    aorticValues.push(`AV peak/mean PG ${avPeakPG}/${avMeanPG} mmHg`);
  } else {
    if (avPeakPG) aorticValues.push(`AV peak PG ${avPeakPG} mmHg`);
    if (avMeanPG) aorticValues.push(`AV mean PG ${avMeanPG} mmHg`);
  }

  // -------------------------
  // DSI
  // -------------------------
  const dsiInput = document.querySelector('input[data-label="DSI"]');
  if (lvotVTI && avVTI) {
    const dsiValue = (lvotVTI / avVTI).toFixed(2);
    if (dsiInput) dsiInput.value = dsiValue;
    aorticValues.push(`DSI ${dsiValue}`);
  } else {
    if (dsiInput) dsiInput.value = "";
  }

  // -------------------------
  // AVA
  // -------------------------
  const avaInput = document.querySelector('input[data-label="AVA"]');
  if (lvotd && lvotVTI && avVTI) {
    const lvotArea = Math.PI * Math.pow(lvotd / 2, 2);
    const avaValue = ((lvotArea * lvotVTI) / avVTI).toFixed(2);
    if (avaInput) avaInput.value = avaValue;
    aorticValues.push(`AVA ${avaValue} cm²`);
  } else {
    if (avaInput) avaInput.value = "";
  }

  // -------------------------
  // Mitral E/A
  // -------------------------
  const earatioInput = document.querySelector('input[data-label="earatio"]');
  if (evel) mitralValues.push(`E vel. ${evel} m/s`);
  if (avel) mitralValues.push(`A vel. ${avel} m/s`);
  if (evel && avel) {
    const earatioValue = (evel / avel).toFixed(1);
    if (earatioInput) earatioInput.value = earatioValue;
    mitralValues.push(`E/A ${earatioValue}`);
  } else {
    if (earatioInput) earatioInput.value = "";
  }
  if (MVmeanPG) mitralValues.push(`MV meanPG ${MVmeanPG} mmHg`);

  // -------------------------
  // Tricuspid
  // -------------------------

  if (trvel) tricuspidValues.push(`TR vel. ${trvel} m/s`);
  // -------------------------
  // Pulmonary
  // -------------------------
  if (PVpeakvel) pulmonaryValues.push(`PV vel. ${PVpeakvel} m/s`);
  if (PRpeakvel) pulmonaryValues.push(`PR vel. ${PRpeakvel} m/s`);
  if (rvotvti) pulmonaryValues.push(`RVOT VTI ${rvotvti} cm`);
  if (rvotvti) pulmonaryValues.push(`RVOTd ${rvotd} cm`);

  // -------------------------
  // Qp/Qs Calculation
  // -------------------------
  const qpqInput = document.querySelector('input[data-label="qpqs"]');

  if (rvotd && rvotvti && lvotd && lvotVTI) {
    const rvotArea = Math.PI * Math.pow(rvotd / 2, 2);
    const lvotArea = Math.PI * Math.pow(lvotd / 2, 2);
    const qpqsValue = ((rvotArea * rvotvti) / (lvotArea * lvotVTI)).toFixed(2);

    if (qpqInput) qpqInput.value = qpqsValue;
    pulmonaryValues.push(`Qp/Qs ${qpqsValue}`); // <-- push to Pulmonary section
  } else {
    if (qpqInput) qpqInput.value = "";
  }

  // Update output textareas
  document.getElementById("lv-measurement").value = cardiacValues.join(", ");
  document.getElementById("rv-measurement").value = rightValues.join(", ");
  document.getElementById("atrium-measurement").value = atriumValues.join(", ");
  document.getElementById("aortic-measurement").value = aorticValues.join(", ");
  document.getElementById("aorta-measurement").value = aortaValues.join(", ");
  document.getElementById("mitral-measurement").value = mitralValues.join(", ");
  document.getElementById("tricuspid-measurement").value =
    tricuspidValues.join(", ");
  document.getElementById("pulmonary-measurement").value =
    pulmonaryValues.join(", ");
}
