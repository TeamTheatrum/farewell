import { type HistoryData } from '@/app/common'

import settlement from './settlement.png'
import edj from './edj.png'
import deepi from './deepi.png'
import noti from './noti.jpeg'
import riff from './riff.png'
import admin_live from './admin_live.png'
import admin_store from './admin_store.png'
import search from './search.jpeg'
import store from './store.png'

export const histories: HistoryData[] = [
  {
    name: '정산 시스템',
    year: 2022,
    month: 2,
    image: settlement,
  },

  {
    name: '리프',
    year: 2022,
    month: 5,
    image: riff,
  },

  {
    name: '검색',
    year: 2022,
    month: 6,
    image: search,
  },

  {
    name: '알림',
    year: 2022,
    month: 11,
    image: noti,
  },

  {
    name: '음대전',
    year: 2023,
    month: 3,
    image: edj,
  },

  {
    name: '공연 관리 기능',
    year: 2023,
    month: 6,
    image: admin_live,
  },

  {
    name: '스토어',
    year: 2023,
    month: 8,
    image: store,
  },

  {
    name: '스토어 관리 기능',
    year: 2023,
    month: 10,
    image: admin_store,
  },

  {
    name: '디피',
    year: 2023,
    month: 11,
    image: deepi,
  },
]
