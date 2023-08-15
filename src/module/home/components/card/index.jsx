import clsx from "clsx"
import { useCallback, useMemo, useState } from "react"

const isGoodAir = (data) => {
  return data >= 0 && data <= 50
}

const isModerateAir = (data) => {
  return data >= 51 && data <= 100
}

const isUnhealhtyForQroupAir = (data) => {
  return data >= 101 && data <= 150
}

const isUnhealhtyAir = (data) => {
  return data >= 151 && data <= 200
}

export function Card({ pollutan }) {
  const [dataAqius] = useState(pollutan.current.pollution.aqius)

  const getQualityAir = useCallback(() => {
    if (isGoodAir(dataAqius)) {
      return {
        title: 'Good',
        image: 'ic-face-green.svg'
      }
    } else if (isModerateAir(dataAqius)) {
      return {
        title: 'Moderate',
        image: 'ic-face-yellow.svg'
      }
    } else if (isUnhealhtyForQroupAir(dataAqius)) {
      return {
        title: 'Unhealthy for sensitive groups',
        image: 'ic-face-orange.svg'
      }
    } else if (isUnhealhtyAir(dataAqius)) {
      return {
        title: 'Unhealthy',
        image: 'ic-face-red.svg'
      }
    }
  }, [pollutan])

  const qualityAirData = useMemo(() => {
    return getQualityAir()
  }, [getQualityAir])

  return (
    <div className="max-w-2xl mx-auto">
      <div className="shadow-md border border-gray-200 rounded-lg w-[300px] md:w-[350px] bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10">
        <div className={clsx({
          'bg-[#A8E05F]': isGoodAir(dataAqius),
          'bg-[#FACF39]': isModerateAir(dataAqius),
          'bg-[#F99049]': isUnhealhtyForQroupAir(dataAqius),
          'bg-[#F65E5F]': isUnhealhtyAir(dataAqius),
        })}>
          <img className="rounded-t-lg mx-auto w-[200px] pt-2" src={qualityAirData.image} alt={qualityAirData.title} />
          <h2 className="text-[50px] text-white tracking-tight">{dataAqius}</h2>
          <p className="pb-2 text-white tracking-tight">US AQI</p>
        </div>
        <div className="pb-5 px-5 pt-2">
          <h6 className={clsx('font-bold text-2xl tracking-tight mb-4', {
            'text-[#A8E05F]': isGoodAir(dataAqius),
            'text-[#FACF39]': isModerateAir(dataAqius),
            'text-[#F99049]': isUnhealhtyForQroupAir(dataAqius),
            'text-[#F65E5F]': isUnhealhtyAir(dataAqius),
          })}>{qualityAirData.title}</h6>
          <h6 className="text-gray-400 text-lg tracking-tight">📍 {pollutan.city}</h6>
          <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">{pollutan.state} {pollutan.country}</h5>
          <div className="flex justify-between mt-3">
            <p>🌡️ {pollutan.current.weather.tp}°C</p>
            <p>💨 {pollutan.current.weather.ws} km/h</p>
            <p>💧 {pollutan.current.weather.hu}%</p>
          </div>
        </div>
      </div>
    </div>
  )
}