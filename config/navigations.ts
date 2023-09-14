import DEFlag from '@components/common/theme/icons/flag/de'
import JPFlag from '@components/common/theme/icons/flag/jp'
import UKFlag from '@components/common/theme/icons/flag/uk'
import USFlag from '@components/common/theme/icons/flag/us'

const navigations = [
  {
    icon: USFlag,
    title: 'Amazon US',
    href: '/deals/us',
    menuComponent: 'MegaMenu1',
    menuData: {},
  },
  {
    icon: DEFlag,
    title: 'Amazon Germany',
    href: '/deals/de',
    menuComponent: 'MegaMenu1',
    menuData: {},
  },
  {
    icon: JPFlag,
    title: 'Amazon Japan',
    href: '/deals/jp',
    menuComponent: 'MegaMenu1',
    menuData: {},
  },
  {
    icon: UKFlag,
    title: 'Amazon UK',
    href: '/deals/uk',
    menuComponent: 'MegaMenu1',
    menuData: {},
  },
]

export default navigations
