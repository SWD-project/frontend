"use client"
import React, { ReactNode, useCallback, useState } from 'react'
import Sticky from '../theme/sticky';
import Header from './header';
import SearchInputWithCategory from '../theme/search-box/search-input-with-category';

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