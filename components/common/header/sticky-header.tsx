"use client"
import React, { ReactNode, useCallback, useState } from 'react'
import Header from './header';
import SearchInputWithCategory from '@components/common/theme/search-box/search-input-with-category';
import Sticky from '@components/common/theme/sticky';

const StickyHeader = ({children} : {
    children: ReactNode
}) => {
    const [isFixed, setIsFixed] = useState(false);
    const toggleIsFixed = useCallback((fixed: boolean) => setIsFixed(fixed), []);
    return (
        <Sticky fixedOn={0} onSticky={toggleIsFixed} scrollDistance={300}>
            <Header isFixed={isFixed} searchInput={<SearchInputWithCategory />}>
                {children}
            </Header>
        </Sticky>
    )
}

export default StickyHeader