import { useEffect, useRef, useState, type ChangeEvent } from 'react'
import Video from '../../assets/video.mp4'


export const Tema08UseRef = () => {

  const videoRef = useRef<HTMLVideoElement>(null)
  const [volumen, setVolumen] = useState<number>(0)
  const [currentTime, setCurrentTime] = useState<number>(0)
  const [intervalId, setIntervalId] = useState<number>(0)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.volume = volumen / 100
    }
  }, [videoRef])

  const play = () => {
    // console.log(videoRef)
    videoRef.current?.play()
    const intervalId = setInterval(() => {
      cambiarCurrentTime(videoRef.current?.currentTime)
    }, 10)
    setIntervalId(intervalId)
  }

  const pause = () => {
    // console.log(videoRef)
    videoRef.current?.pause()
    limpiarInterval()
  }

  const cambiarVolumen = (event: ChangeEvent) => {
    const inputValue = Number((event.target as HTMLInputElement).value)

    if (videoRef.current) {
      videoRef.current.volume = inputValue / 100
    }

    setVolumen(inputValue)
  }

  const cambiarCurrentTime = (time: number | undefined) => {
    console.log('CAMBIAR CURRENT TIME')
    setCurrentTime(time ?? 0)
    // si time = undefined|null|0|''
    // time ? 'SI' : 'NO' -> NO
    
    // si time = undefined|null
    // time ?? 'NO' -> NO
    // si time = 0|''
    // time ?? 'NO' -> time
  }
  
  const limpiarInterval = () => {
    clearInterval(intervalId)
  }

  
  return (
    <div>
      <h3>Tema 08: useRef</h3>

      <video src={Video} width="200" ref={videoRef} onEnded={limpiarInterval} />

      <div>
        <button onClick={play}>Play</button>
        <button onClick={pause}>Pause</button>
        <input type="range" min={0} max={100} value={volumen} onChange={cambiarVolumen} />
        
        
        <label htmlFor="currentTime">
          <progress value={currentTime} max={videoRef.current?.duration}>
          </progress>
          {currentTime} / {videoRef.current?.duration}
        </label>


      </div>

    </div>
  )
}