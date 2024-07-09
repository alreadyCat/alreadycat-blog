import { ref } from "vue";

const map = new Map<string, Symbol>();
const valMap = new Map<Symbol, Ref<any>>();
export default <T>(symbolStr: string) => {
  if (!map.has(symbolStr)) {
    map.set(symbolStr, Symbol(symbolStr));
  }

  const symbol = map.get(symbolStr)!;
  const provideData = (d: T) => {
    valMap.set(symbol, ref(d));
    provide(symbol, valMap.get(symbol)!);
  };

  const injectData = () => {
    return inject<Ref<T>>(symbol as Symbol);
  };

  const updateData = (d: T) => {
    valMap.get(symbol)!.value = d;
  };
  return {
    provideData,
    injectData,
    updateProvideData:updateData,
  };
};
