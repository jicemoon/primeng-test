/**
 * 生成单个随机字符串
 * @param num 要生成的字符串总长度, 默认为一个30-60之间的随机数
 * @param hasSpace 是否包含空格, 默认为true, 表示包含
 * @param hasNumber 是否包含空格, 默认为true, 表示包含
 */
export function randomWord(num: Number = 0, hasSpace: boolean = true, hasNumber: boolean = true) {
  if (!num) {
    num = Math.floor(30 + Math.random() * 30);
  }
  let char = '', i;
  for (i = 0; i < num; i++) {
    let charCode;
    const rand = Math.random();
    if (hasSpace && i > 0 && rand > 0.8) {
      char += ' ';
    } else {
      if (i === 0) {
        charCode = rand < 0.5 ? 97 : 65;
        charCode += Math.floor(Math.random() * 26);
      } else {
        const lt = rand <= 0.25;
        charCode = hasNumber && lt ? 48 : (rand < 0.5 ? 97 : 65);
        charCode += Math.floor(Math.random() * (lt ? 10 : 26));
      }
      char += String.fromCharCode(charCode);
    }
  }
  return char;
}
/**
 * 循环调用callback函数num次, 返回callback的返回数据所组成的数组
 * @param num 生成数据个数
 * @param callback 循环回调
 */
export function numberMap(num: number, callback: (i: number) => any): any[] {
  if (num < 1) {
    throw new Error('第一个参数必须为大于1的数字');
  }
  const rtn = [];
  for (let i = 0; i < num; i++) {
    rtn.push(callback(i));
  }
  return rtn;
}
/**
 * 获取一个大于等于min, 并且小于max的随机数
 * @param min 最小值(可能包括此值)
 * @param max 最大值(不包括此值)
 * @param isInt 是否只取整数
 */
export function getRandom(min, max, isInt = true) {
  let start = min, end = max;
  if (start > end) {
    [end, start] = [start, end];
  }
  let rtn = min + Math.random() * (max - min);
  if (isInt) {
    rtn = Math.floor(rtn);
  }
  return rtn;
}
/**
 * 生成多个随机字符串
 * @param count 生成随机字符串的个数
 * @param charNumber 每个随机字符串的长度[或范围]
 * @param hasSpace 是否包含空格, 默认为true, 表示包含
 * @param hasNumber 是否包含空格, 默认为true, 表示包含
 */
export function randomWords(count: number, charNumber: number | number[] = 8, hasSpace: boolean = false, hasNumber: boolean = true): string[] {
  if (!Array.isArray(charNumber)) {
    charNumber = [charNumber, charNumber];
  }
  const start = charNumber[0], end = charNumber[1];
  return numberMap(count, (i) => {
    const num = getRandom(start, end);
    return randomWord(num, hasSpace, hasNumber);
  });
}
