/*
 * @Author: your name
 * @Date: 2020-10-01 23:31:48
 * @LastEditTime: 2020-11-21 18:25:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Editcoacea
 * @FilePath: /yd-vue3-admin/src/directive/highcharts/index.ts
 */
import { Plugin, App } from 'vue';
import vueHighcharts from './vue3-highcharts';

const install = (app: App) => {
  app.component(vueHighcharts.name, vueHighcharts);
};

vueHighcharts.install = install;

export default (vueHighcharts as unknown) as Plugin;
