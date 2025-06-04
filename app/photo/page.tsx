"use client"
import { useSearchParams } from "next/navigation"

const PhotoPage = () => {
  const searchParams = useSearchParams()

  return <div>{searchParams.get("id")}</div>
}

export default PhotoPage