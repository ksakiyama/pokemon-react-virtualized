const typedict = {
  grass: "くさ",
  fire: "ほのお",
  water: "みず",
  flying: "ひこう",
  bug: "むし",
  normal: "ノーマル",
  poison: "どく",
  electric: "でんき",
  ground: "じめん",
  fairy: "フェアリー",
  fighting: "かくとう",
  psychic: "エスパー",
  rock: "いわ",
  dark: "あく",
  steel: "はがね",
  dragon: "ドラゴン",
  ghost: "ゴースト",
  ice: "こおり",
  none: "タイプ不明"
};

export function toJapaneseType(englishType) {
  const japaneseType = englishType.map(type => typedict[type.toLowerCase()]);
  return japaneseType.join(" ");
}

export function kanaToHira(str) {
  return str.replace(/[\u30a1-\u30f6]/g, function(match) {
    var chr = match.charCodeAt(0) - 0x60;
    return String.fromCharCode(chr);
  });
}

export function hiraToKana(str) {
  return str.replace(/[\u3041-\u3096]/g, function(match) {
    var chr = match.charCodeAt(0) + 0x60;
    return String.fromCharCode(chr);
  });
}

export function isJapaneseString(str) {
  return str.match(/^[\u30a0-\u30ff\u3040-\u309f\u3005-\u3006\u30e0-\u9fcf]+$/)
    ? true
    : false;
}
