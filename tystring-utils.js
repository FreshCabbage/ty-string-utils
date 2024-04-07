// 字符串处理工具集
const StringUtils = {
    /**
     * 去除字符串两端的空格
     * @param {string} str - 要处理的字符串
     * @returns {string} 去除两端空格后的字符串
     */
    trim: function(str) {
      return str.replace(/^\s+|\s+$/g, '');
    },
  
    /**
     * 判断字符串是否为空
     * @param {string} str - 要判断的字符串
     * @returns {boolean} 如果字符串为空或只包含空格,返回true;否则返回false
     */
    isEmpty: function(str) {
      return str === null || str.trim().length === 0;
    },
  
    /**
     * 将字符串转换为驼峰式命名
     * @param {string} str - 要转换的字符串
     * @returns {string} 转换后的驼峰式命名字符串
     */
    toCamelCase: function(str) {
      return str.replace(/[-_](\w)/g, function(match, letter) {
        return letter.toUpperCase();
      });
    },
  
    /**
     * 将字符串转换为帕斯卡式命名
     * @param {string} str - 要转换的字符串
     * @returns {string} 转换后的帕斯卡式命名字符串
     */
    toPascalCase: function(str) {
      return str.replace(/(^|[-_])(\w)/g, function(match, separator, letter) {
        return letter.toUpperCase();
      });
    },
  
    /**
     * 将字符串转换为烤串式命名
     * @param {string} str - 要转换的字符串
     * @returns {string} 转换后的烤串式命名字符串
     */
    toKebabCase: function(str) {
      return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
    },
  
    /**
     * 将字符串转换为蛇形命名
     * @param {string} str - 要转换的字符串
     * @returns {string} 转换后的蛇形命名字符串
     */
    toSnakeCase: function(str) {
      return str.replace(/([a-z])([A-Z])/g, '$1_$2').toLowerCase();
    },
  
    /**
     * 将字符串重复指定次数
     * @param {string} str - 要重复的字符串
     * @param {number} count - 重复的次数
     * @returns {string} 重复后的字符串
     */
    repeat: function(str, count) {
      return new Array(count + 1).join(str);
    },
  
    /**
     * 将字符串按指定分隔符分割为数组
     * @param {string} str - 要分割的字符串
     * @param {string} separator - 分隔符
     * @returns {string[]} 分割后的字符串数组
     */
    split: function(str, separator) {
      return str.split(separator);
    },
  
    /**
     * 将字符串数组按指定分隔符合并为一个字符串
     * @param {string[]} arr - 要合并的字符串数组
     * @param {string} separator - 分隔符
     * @returns {string} 合并后的字符串
     */
    join: function(arr, separator) {
      return arr.join(separator);
    }
  };
  
  // 导出工具集
  module.exports = StringUtils;