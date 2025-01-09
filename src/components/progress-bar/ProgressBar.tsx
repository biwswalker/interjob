'use client'

import { useEffect, Suspense } from 'react'
import NProgress from 'nprogress'
import { useParams, useSearchParams } from 'next/navigation'
import StyledProgressBar from './styles'

function Progress() {
  const params = useParams()
  const searchParams = useSearchParams()

  useEffect(() => {
    NProgress.configure({ showSpinner: false })

    const handleStart = () => {
      NProgress.start()
    }
    const handleStop = () => {
      NProgress.done()
    }

    handleStop()

    return () => {
      handleStart()
    }
  }, [params, searchParams])

  return (
    <Suspense fallback={null}>
      <StyledProgressBar />
    </Suspense>
  )
}

export default function progressBar() {
  return (
    <Suspense>
      <Progress />
    </Suspense>
  )
}
