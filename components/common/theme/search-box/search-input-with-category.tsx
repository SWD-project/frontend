'use client'
import Link from 'next/link'
import React, { ChangeEvent, useEffect, useRef, useState, useTransition } from 'react'

import KeyboardArrowDownOutlined from '@mui/icons-material/KeyboardArrowDownOutlined'
import Box from '@mui/material/Box'
import TouchRipple from '@mui/material/ButtonBase'
import MenuItem from '@mui/material/MenuItem'
import TextField from '@mui/material/TextField'
import { styled, useTheme } from '@mui/material/styles'

// import useBotSuggestion from '@framework/search/use-bot-suggestion'

import AppMenu from '@components/common/theme/app-menu'

import CircularProgress from '@mui/material/CircularProgress'
import { useRouter } from 'next/navigation'
import { SearchOutlinedIcon, SearchResultCard } from './styled'
import FlexBox from '../flex-box/flex-box'

const DropDownHandler = styled(FlexBox)(({ theme }) => ({
  whiteSpace: 'pre',
  borderTopRightRadius: 300,
  borderBottomRightRadius: 300,
  borderLeft: `1px solid ${theme.palette.text.disabled}`,
  [theme.breakpoints.down('xs')]: { display: 'none' }
}))

let timeout: ReturnType<typeof setTimeout>
export default function SearchInputWithCategory() {
  const router = useRouter()
  const parentRef = useRef()
  const { breakpoints } = useTheme()
  // eslint-disable-next-line no-unused-vars
  const [_, startTransition] = useTransition()
  // const botSuggestion = useBotSuggestion()

  const [category, setCategory] = useState('us')
  const [keyword, setKeyword] = useState('')
  const [suggestionList, setSuggestionList] = useState<string[]>([])
  const [categoryTitle, setCategoryTitle] = useState('Amazon US')
  const [loadingSuggestSearch, setLoadingSuggestSearch] = useState(false)

  // HANDLE CHANGE THE CATEGORY
  const handleCategoryChange = (cat: { title: string; value: string }) => () => {
    setCategory(cat.value)
    setCategoryTitle(cat.title)
  }

  // FETCH PRODUCTS VIA API
  // const getProducts = async (searchText: string, category?: string) => {
  //   // const data = await api.searchProducts(searchText, category)
  //   // setResultList(data)
  // }

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    startTransition(() => {
      const value = e.target?.value
      setKeyword(value)

      if (!value) setSuggestionList([])
      else {
        if (timeout) {
          setLoadingSuggestSearch(false)
          clearTimeout(timeout)
        }
        timeout = setTimeout(async () => {
          const res = await fetch('/api/suggestion', {
            method: 'POST',
            body: JSON.stringify({
              keyword: value
            }),
            cache: 'no-store'
          })
          const { data } = await res.json()
          setSuggestionList(data)
        }, 300)
      }
      // else if (value && category !== '*') getProducts(value, category)
    })
  }

  const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    e.preventDefault()

    if (e.key === 'Enter' && keyword !== '') {
      setSuggestionList([])
      setLoadingSuggestSearch(true)
      const fixedKeyword = keyword
      router.push(`/search/${category}/${fixedKeyword}`)
    }
  }

  const handleDocumentClick = () => setSuggestionList([])

  useEffect(() => {
    window.addEventListener('click', handleDocumentClick)
    return () => window.removeEventListener('click', handleDocumentClick)
  }, [])

  // CATEGORY MENU DROPDOWN
  const categoryDropdown = (
    <AppMenu
      direction='left'
      sx={{ zIndex: breakpoints.down('md') ? 99999 : 1502 }}
      handler={
        <DropDownHandler
          px={3}
          gap={0.5}
          height='100%'
          color='grey.700'
          bgcolor='grey.100 !important'
          alignItems='center'
          component={TouchRipple}
        >
          {categoryTitle}
          <KeyboardArrowDownOutlined fontSize='small' color='inherit' />
        </DropDownHandler>
      }
    >
      {categories.map(item => (
        <MenuItem key={item.value} onClick={handleCategoryChange(item)}>
          {item.title}
        </MenuItem>
      ))}
    </AppMenu>
  )

  return (
    <Box position='relative' flex='1 1 0' maxWidth='670px' mx='auto' {...{ ref: parentRef }}>
      <TextField
        fullWidth
        variant='outlined'
        placeholder='Searching for...'
        onChange={handleSearch}
        onKeyUp={handleKeyUp}
        InputProps={{
          sx: {
            height: 44,
            paddingRight: 0,
            borderRadius: 300,
            color: 'grey.700',
            overflow: 'hidden',
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: 'primary.main'
            }
          },
          endAdornment: categoryDropdown,
          startAdornment: <SearchOutlinedIcon fontSize='small' />
        }}
      />

      {suggestionList.length > 0 && (
        <SearchResultCard sx={{ zIndex: 999 }} elevation={2}>
          {suggestionList.map(item => (
            <Link
              href={`/search/${category}/${item}`}
              key={item}
              passHref
              onClick={() => setLoadingSuggestSearch(true)}
              prefetch={false}
            >
              <MenuItem key={item}>{item}</MenuItem>
            </Link>
          ))}
        </SearchResultCard>
      )}

      {!loadingSuggestSearch && keyword && timeout && !(suggestionList.length > 0) && (
        <SearchResultCard sx={{ zIndex: 999, display: 'flex', justifyContent: 'center' }} elevation={2}>
          <CircularProgress></CircularProgress>
        </SearchResultCard>
      )}
    </Box>
  )
}

const categories = [
  { title: 'Amazon US', value: 'us' },
  { title: 'Amazon Germany', value: 'de' },
  { title: 'Amazon UK', value: 'uk' },
  { title: 'Amazon Japan', value: 'jp' }
]
