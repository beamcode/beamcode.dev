import "@/styles/3dcube.css"

export default function Page({}) {
  return (
    <div className="scene mx-auto my-20">
      <div className="cube">
        <div className="face front"></div>
        <div className="face back"></div>
        <div className="face left"></div>
        <div className="face right"></div>
        <div className="face top"></div>
        <div className="face bottom"></div>
      </div>
    </div>
  )
}
