import { useMediaQuery } from 'react-responsive'

const useResponsive = () => {
    const isWidescreen = useMediaQuery({
        query: '(min-width: 1280)'
    })

    const isHandheld = useMediaQuery({
        query: '(max-width: 1080)'
    })

    const isMobile = useMediaQuery({
        query: '(max-width: 425)'
    })

    return {isWidescreen, isHandheld, isMobile}
}

export default useResponsive