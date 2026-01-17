const DPI_BASE = 326;
const DPI_VIRTUAL = 600;
const ESCALA = DPI_VIRTUAL / DPI_BASE;

const ESTABILIDADE = 0.84;
const PESO = 0.80;
const FREIO = 0.72;
const DEADZONE = 0.08;

const base = {
  geral: 190,
  vermelho: 180,
  mira2x: 175,
  mira4x: 170,
  awm: 145
};

function calc(v) {
  v *= ESCALA;
  v *= ESTABILIDADE;
  v *= PESO;
  v *= FREIO;
  v *= (1 - DEADZONE);
  return Math.round(v);
}

document.getElementById("geral").innerText = calc(base.geral);
document.getElementById("vermelho").innerText = calc(base.vermelho);
document.getElementById("mira2x").innerText = calc(base.mira2x);
document.getElementById("mira4x").innerText = calc(base.mira4x);
document.getElementById("awm").innerText = calc(base.awm);
