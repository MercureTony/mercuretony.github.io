interface Translations {
  bitcoinFacts: {
    title: string;
    description: string;
  };
}

const en: Translations = {
  bitcoinFacts: {
    title: "Bitcoin Investment Facts",
    description: "Did you know that $<span class='font-mono'>{amount}</span> invested in Bitcoin in {year} ($<span class='font-mono'>{historicalPrice}/BTC</span>) would be worth $<span class='font-mono'>{currentValue}</span> today?"
  }
};

export default en;
