module.exports = {
    plugins: {
        'postcss-pxtorem': {
            // 能够把所有元素的px单位转化为rem
            // rootValue表示转换px的基准值
            // 编码时，一个元素的宽度是75px，则换成rem之后为2rem
            rootValue: 37.5,
            propList: ['*']
        }
    }
}