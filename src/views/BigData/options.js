const geoCoordMap = {
  海南藏族自治州: [100.619542, 36.280353],
  海东市: [102.10327, 36.502916],
  黄南藏族自治州: [102.019988, 35.517744],
  西宁市: [101.778916, 36.623178],
  果洛藏族自治州: [100.242143, 34.4736],
  海北藏族自治州: [100.901059, 36.959435],
  玉树藏族自治州: [97.008522, 33.004049],
  海西蒙古族藏族自治州: [97.370785, 37.374663],
};

const convertData = (data) => {
  const ret = [];
  for (let i = 0; i < data.length; i += 1) {
    const item = data[i];
    if (item.value) {
      ret.push({
        ...item,
        value: [...geoCoordMap[item.name], item.value],
      });
    }
  }
  return ret;
};

const getMax = (data) => {
  let ret = 0;
  for (let i = 0; i < data.length; i += 1) {
    const item = data[i];
    if (item.value && item.value > ret) {
      ret = item.value;
    }
  }
  return ret;
};

const mapOption = {
  title: {
    show: false,
  },
  tooltip: {
    show: true,
    formatter: (params) => `${params.name}：${params.value}`,
  },
  visualMap: {
    show: true,
    min: 0,
    max: 200,
    left: 'left',
    top: 'bottom',
    text: ['高', '低'], // 文本，默认为数值文本
    realtime: false,
    calculable: true,
    inRange: {
      color: ['#00467F', '#A5CC82'], // 蓝绿
    },
  },
  series: [
    {
      type: 'map',
      map: '青海市',
      selectedMode: 'single',
      itemStyle: {
        normal: {
          areaColor: '#031525',
          borderColor: '#3B5077',
          label: {
            show: true,
          },
        },
        emphasis: {
          areaColor: '#2B91B7',
          label: {
            show: true,
          },
        },
      },
      roam: true,
    },
  ],
};

const setMapOption = (data) => {
  const series = [];

  for (let i = 0; i < mapOption.series.length; i += 1) {
    const item = mapOption.series[i];

    series.push({
      ...item,
      data,
    });
  }

  const ret = {
    ...mapOption,
    series,
  };
  console.log(ret);
  return ret;
};

export default {
  setMapOption,
};
