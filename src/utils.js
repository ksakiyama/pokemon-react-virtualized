const typedict = {
  japanese: {
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
  },
  chinese: {
    grass: "草",
    fire: "火",
    water: "水",
    flying: "空",
    bug: "虫",
    normal: "普",
    poison: "毒",
    electric: "电",
    ground: "土",
    fairy: "妖",
    fighting: "武",
    psychic: "神",
    rock: "石",
    dark: "恶",
    steel: "钢",
    dragon: "龙",
    ghost: "鬼",
    ice: "冰",
    none: "タイプ不明"
  }
};

export function translateFromEnglish(englishType, language) {
  if (language === "english") {
    return englishType.join(" ");
  }
  const translatedType = englishType.map(
    type => typedict[language][type.toLowerCase()]
  );
  return translatedType.join(" ");
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

// https://stackoverflow.com/questions/43418812/check-whether-a-string-contains-japanese-chinese-characters
export function isChineseString(str) {
  return str.match(
    /^[\u3040-\u30ff\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff\uff66-\uff9f]+$/
  )
    ? true
    : false;
}
