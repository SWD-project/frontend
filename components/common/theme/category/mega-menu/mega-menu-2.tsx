"use client"
import Card from '@components/common/theme/card'
import CategoryMenuItem from '../category-menu-item'
import MegaMenu3 from './mega-menu-3'
import StyledMegaMenu from './styled-mega-menu'

// =======================================================================
type Data = { icon: string; href: string; title: string; menuData?: any }
export type MegaMenu2Props = { data: Data[] }
// =======================================================================

const MegaMenu2 = ({ data }: MegaMenu2Props) => {
  return (
    <StyledMegaMenu>
      <Card elevation={2} sx={{ ml: '1rem', py: '0.5rem' }}>
        {data?.map((item) => (
          <CategoryMenuItem
            href={item.href}
            icon={item.icon}
            key={item.title}
            title={item.title}
            caret={!!item.menuData}
          >
            {item.menuData && (
              <MegaMenu3 minWidth="560px" data={item.menuData} />
            )}
          </CategoryMenuItem>
        ))}
      </Card>
    </StyledMegaMenu>
  )
}

export default MegaMenu2
