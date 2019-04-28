import mockjs from 'mockjs';
import auth from './auth'; //  此处引入api

const Random = mockjs.Random; //  注明要使用mockjs替换的模块

const apiArr = [auth];

let apiPathArr = [];

for (let i = 0; i < apiArr.length; i += 1) {
  const apiPathJson = apiArr[i].path;
  const item = Object.entries(apiPathJson);
  apiPathArr = [...apiPathArr, ...item];
}

const init = () => {
  for (let i = 0; i < apiPathArr.length; i += 1) {
    const item = apiPathArr[i];
    const path = new RegExp(`.*(${item[1]})`);
    mockjs.mock(path, {
      status: 200,
      code: 0,
      respCode: '0',
      message: null,
      data: {
        'functions|10': [
          {
            id: '@id',
            name: '@cword',
            'value|10': [{ id: '@id', name: '@name' }],
          },
        ],
        'functions1|10': [
          {
            id: '@id',
            name: '@cword',
            'value|10': [{ id: '@id', name: '@name' }],
          },
        ],
        'functions2|10': [
          {
            id: '@id',
            name: '@cword',
            'value|10': [{ id: '@id', name: '@name' }],
          },
        ],
        'functions3|10': [
          {
            id: '@id',
            name: '@cword',
            'value|10': [{ id: '@id', name: '@name' }],
          },
        ],
        'functions4|10': [
          {
            id: '@id',
            name: '@cword',
            'value|10': [{ id: '@id', name: '@name' }],
          },
        ],
        roleId: 0,
        'num1|100-100000': 100000,
        'num2|100-100000': 100000,
        'num3|100-100000': 100000,
        'num4|100-100000': 100000,
        createTime: '@datetime',
        boolean: '@boolean',
        natural: '@natural',
        integer: '@integer',
        float: '@float',
        character: '@character',
        string: '@string',
        range: '@range',
        date: '@date',
        time: '@time',
        datetime: '@datetime',
        paragraph: '@paragraph',
        sentence: '@sentence',
        word: '@word',
        title: '@title',
        cparagraph: '@cparagraph',
        csentence: '@csentence',
        cword: '@cword',
        ctitle: '@ctitle',
        first: '@first',
        last: '@last',
        name: '@name',
        cfirst: '@cfirst',
        clast: '@clast',
        cname: '@cname',
        url: '@url',
        domain: '@domain',
        email: '@email',
        userName: '@cname',
        userPassword: '@ip',
        tld: '@tld',
        area: '@area',
        region: '@region',
        capitalize: '@capitalize',
        upper: '@upper',
        lower: '@lower',
        pick: '@pick',
        shuffle: '@shuffle',
        id: '@id',
        image: Random.image('60x60', '#fb0a2a'),
        'content|30': [
          {
            image: Random.image('60x60', '#fb0a2a'),
            'percent|0-100': 100, // 百分比
            email: '@email',
            boolean: '@boolean',
            natural: '@natural',
            integer: '@integer',
            float: '@float',
            character: '@character',
            string: '@string',
            range: '@range',
            date: '@date',
            time: '@time',
            datetime: '@datetime',
            paragraph: '@paragraph',
            sentence: '@sentence',
            word: '@word',
            title: '@title',
            cparagraph: '@cparagraph',
            csentence: '@csentence',
            cword: '@cword',
            ctitle: '@ctitle',
            first: '@first',
            last: '@last',
            name: '@name',
            cfirst: '@cfirst',
            clast: '@clast',
            userName: '@cname',
            url: '@url',
            domain: '@domain',
            userPassword: '@ip',
            delFlag: '@boolean',
            tld: '@tld',
            area: '@area',
            region: '@region',
            capitalize: '@capitalize',
            upper: '@upper',
            lower: '@lower',
            pick: '@pick',
            shuffle: '@shuffle',
            id: '@id',
          },
        ],
        'content1|10': [
          {
            image: Random.image('60x60', '#fb0a2a'),
            'percent|0-100': 100, // 百分比
            email: '@email',
            boolean: '@boolean',
            natural: '@natural',
            integer: '@integer',
            float: '@float',
            character: '@character',
            string: '@string',
            range: '@range',
            date: '@date',
            time: '@time',
            datetime: '@datetime',
            paragraph: '@paragraph',
            sentence: '@sentence',
            word: '@word',
            title: '@title',
            cparagraph: '@cparagraph',
            csentence: '@csentence',
            cword: '@cword',
            ctitle: '@ctitle',
            first: '@first',
            last: '@last',
            name: '@name',
            cfirst: '@cfirst',
            clast: '@clast',
            userName: '@cname',
            url: '@url',
            domain: '@domain',
            userPassword: '@ip',
            delFlag: '@boolean',
            tld: '@tld',
            area: '@area',
            region: '@region',
            capitalize: '@capitalize',
            upper: '@upper',
            lower: '@lower',
            pick: '@pick',
            shuffle: '@shuffle',
            id: '@id',
          },
        ],
        'content2|10': [
          {
            image: Random.image('60x60', '#fb0a2a'),
            'percent|0-100': 100, // 百分比
            email: '@email',
            boolean: '@boolean',
            natural: '@natural',
            integer: '@integer',
            float: '@float',
            character: '@character',
            string: '@string',
            range: '@range',
            date: '@date',
            time: '@time',
            datetime: '@datetime',
            paragraph: '@paragraph',
            sentence: '@sentence',
            word: '@word',
            title: '@title',
            cparagraph: '@cparagraph',
            csentence: '@csentence',
            cword: '@cword',
            ctitle: '@ctitle',
            first: '@first',
            last: '@last',
            name: '@name',
            cfirst: '@cfirst',
            clast: '@clast',
            userName: '@cname',
            url: '@url',
            domain: '@domain',
            userPassword: '@ip',
            delFlag: '@boolean',
            tld: '@tld',
            area: '@area',
            region: '@region',
            capitalize: '@capitalize',
            upper: '@upper',
            lower: '@lower',
            pick: '@pick',
            shuffle: '@shuffle',
            id: '@id',
          },
        ],
      },
    });
  }
};

export default init;
