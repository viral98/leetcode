function minWindow(s: string, t: string): string {
  const needed = new Map<string, number>();
  const extra = new Map<string, number>();
  for (let i = 0; i < t.length; i++) increaseEntry(needed, t.charAt(i));

  let minWindow = '';
  let curWindow = '';

  const updateMinWindow = () => {
    if (needed.size === 0) {
      if (minWindow === '' || curWindow.length < minWindow.length) {
        minWindow = curWindow;
      }
    }
  };

  for (let i = 0; i < s.length; i++) {
    const char = s.charAt(i);
    if (curWindow === '' && !needed.has(char)) {
      continue;
    }
    if (needed.has(char)) {
      curWindow += char;
      decreaseEntry(needed, char);
      updateMinWindow();
      continue;
    }
    // is extra
    if (curWindow.charAt(0) === char) {
      curWindow = curWindow.substring(1) + char;
      while (extra.has(curWindow.charAt(0))) {
        decreaseEntry(extra, curWindow.charAt(0));
        curWindow = curWindow.substring(1);
      }
      updateMinWindow();
      continue;
    }
    curWindow += char;
    increaseEntry(extra, char);
    updateMinWindow();
  }

  return minWindow;
};

const increaseEntry = (map: Map<string, number>, char: string) => {
  map.set(char, (map.get(char) ?? 0) + 1);
};

const decreaseEntry = (map: Map<string, number>, char: string) => {
  if (!map.has(char)) return;
  map.set(char, map.get(char)! - 1);
  if (map.get(char) === 0) map.delete(char);
};