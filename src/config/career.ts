// career
export type CareerItemType = {
  company: string
  title: string
  image?: string
  logo: string
  start: string
  end: string
}

export const careerList: Array<CareerItemType> = [
  {
    company: 'Shenzhen Super Age Software Co., Ltd.',
    title: 'Software Engineer',
    logo: 'office',
    start: '2024',
    end: 'Present'
  },
  {
    company: 'Shenzhen Nautiidea Digital Technology Co., LTD',
    title: 'Software Engineer',
    logo: 'office',
    start: '2022',
    end: '2024'
  },
  {
    company: 'Suzhou Fangxing Information Technology Co., Ltd.',
    title: 'Software Engineer',
    logo: 'office',
    start: '2021',
    end: '2022'
  }
]
