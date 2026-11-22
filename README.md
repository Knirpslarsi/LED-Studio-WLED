# WLED für LED Studio

Plugin für [LED Studio](https://github.com/Knirpslarsi/LED-Studio): steuert [WLED](https://kno.wled.ge/)-Geräte im
Netzwerk wie jedes andere Gerät. Im Layout platziert laufen Effekte, Musik, Shows und Spiel-Animationen auch auf
deinen WLED-Streifen – zusammen mit allem, was über OpenRGB läuft.

## Installieren

LED Studio **1.7.0 oder neuer** → **Plugins → Plugins entdecken → WLED → Installieren**
(oder unter „Plugin installieren“ `Knirpslarsi/LED-Studio-WLED` eintragen).

## Einrichten

1. Links erscheint die Seite **WLED**. Dort **Im Netzwerk suchen** oder die IP-Adresse des Geräts eingeben.
2. **Hinzufügen** – Name und LED-Zahl kommen aus WLED.
3. Unter **Layout** erscheint das Gerät als „WLED …“ in der Geräteliste: **Zum Layout hinzufügen** und an die
   richtige Stelle ziehen.

LED Studio sendet die Farben per **DDP** (UDP-Port 4048), das WLED von sich aus versteht. Ohne Signal kehrt WLED nach
kurzer Zeit zu seinem eigenen Effekt zurück. WLED funktioniert auch ohne OpenRGB.

Tipp: Gib dem WLED-Gerät im Router eine feste IP. Ändert sie sich doch, findet **Im Netzwerk suchen** es wieder
(erkannt an der MAC-Adresse), das Layout bleibt erhalten.

## Inhalt

| Datei | Inhalt |
|---|---|
| `plugin.json` | schaltet die WLED-Anbindung in LED Studio frei (`"builtin": "wled"`) |
| `effects/streifen_komet.js` | Effekt „Streifen-Komet“ für LED-Streifen |
