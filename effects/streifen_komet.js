// Streifen-Komet: ein heller Kopf mit langem, farbig verlaufendem Schweif läuft über einen LED-Streifen hin und her.
// Gemacht für WLED-Streifen, läuft aber auf jedem Bauteil.

var INFO = {
  title: "Streifen-Komet",
  params: [
    {name: "speed", label: "Tempo (Läufe pro Sekunde)", def: 0.4, min: 0.05, max: 3, step: 0.05},
    {name: "tail", label: "Schweiflänge (Anteil)", def: 0.35, min: 0.05, max: 1, step: 0.01},
    {name: "head", label: "Kopffarbe", def: "#FFFFFF"},
    {name: "color", label: "Schweiffarbe", def: "#00B0FF"},
    {name: "bounce", label: "Hin und zurück", def: true}
  ]
};

function hex(c, i) {
  return parseInt(c.substr(1 + 2 * i, 2), 16);
}

function render(led, t, p) {
  // Lage auf dem Bauteil: 0 am Anfang, 1 am Ende.
  var pos = led.m > 1 ? led.k / (led.m - 1) : 0;
  var phase = (t * p.speed) % 1;
  var forward = true;
  var head = phase;
  if (p.bounce) {
    phase = (t * p.speed) % 2;
    forward = phase < 1;
    head = forward ? phase : 2 - phase;
  }
  var behind = forward ? head - pos : pos - head;
  if (behind < 0) return [0, 0, 0];
  var v = Math.exp(-behind / Math.max(0.01, p.tail) * 3);
  var w = Math.max(0, 1 - behind * 40); // heller Kopf
  var r = hex(p.color, 0) * v + (hex(p.head, 0) - hex(p.color, 0) * v) * w;
  var g = hex(p.color, 1) * v + (hex(p.head, 1) - hex(p.color, 1) * v) * w;
  var b = hex(p.color, 2) * v + (hex(p.head, 2) - hex(p.color, 2) * v) * w;
  return [r, g, b];
}
